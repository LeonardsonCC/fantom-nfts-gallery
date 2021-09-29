import { Token } from "../../interfaces/ArtionApiResponse";

interface IProps {
  nft: Token;
}

export default function NftLinks({ nft }: IProps) {
  return (
    <div className="flex flex-row justify-evenly my-5">
      <a
        href={`https://artion.io/explore/${nft.contractAddress}/${nft.tokenID}`}
        target="_blank"
        className="bg-blue-500 px-4 py-2 rounded-lg text-white"
      >
        Artion
      </a>
      <a
        href={`https://paintswap.finance/nfts/assets/${nft.contractAddress}/${nft.tokenID}`}
        target="_blank"
        className="bg-blue-500 px-4 py-2 rounded-lg text-white"
      >
        PaintSwap
      </a>
    </div>
  );
}
