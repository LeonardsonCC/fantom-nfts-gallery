import axios from "axios";
import { FetchTokensResponse, Token } from "../interfaces/AdaptersResponse";

interface PaintSwapResponse {
  address: string;
  nft: {
    tokenId: string;
    uri: string;
  };
}
interface RandomServerResponse {
  image: string;
  name: string;
}

const fetchTokens = (address: string) => {
  return new Promise<FetchTokensResponse>((resolve, reject) => {
    axios
      .get<{ nfts: PaintSwapResponse[] }>(
        `https://api.paintswap.finance/userNFTs/${address}`,
        {
          params: {
            allowNSFW: true,
            numToFetch: 10,
            numToSkip: 0,
          },
        }
      )
      .then(({ data: { nfts } }) => {
        const tokens: Token[] = [];
        Promise.all<Token>(
          nfts.map(async (nft): Promise<Token> => {
            try {
              const { data } = await axios.get<RandomServerResponse>(
                nft.nft.uri
              );
              return {
                contractAddress: nft.address,
                tokenID: Number(nft.nft.tokenId),
                tokenURI: nft.nft.uri,
                imageURL: data.image,
                name: data.name,
              };
            } catch (err) {
              console.error("Failed to get image");
            }
            return {
              contractAddress: nft.address,
              tokenID: Number(nft.nft.tokenId),
              tokenURI: nft.nft.uri,
            };
          })
        ).then((nfts) => {
          nfts = nfts.filter((item) => item.imageURL !== undefined);
          resolve({ tokens: nfts });
        });
      })
      .catch((err) => reject(err));
  });
};

export { fetchTokens };
