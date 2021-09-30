import { useState } from "react";
import { Token } from "../../interfaces/AdaptersResponse";
import Details from "./Details";

interface IProps {
  tokens: Token[];
}

export default function Gallery({ tokens }: IProps) {
  const [nftDetails, setNftDetails] = useState<Token | null>(null);

  return (
    <div className="w-full lg:w-4/5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-x-3 gap-y-3 px-5 py-5 overflow-y-scroll h-screen">
      {tokens.map((token) => {
        return (
          <div
            key={`${token.tokenID}_${token.contractAddress}`}
            className="flex flex-col cursor-pointer h-72"
            onClick={() => setNftDetails(token)}
          >
            <img
              src={token.imageURL}
              className="object-cover h-64 w-64 rounded-2xl shadow-md hover:shadow-lg transition-transform transition-shadow duration-200 transform hover:scale-105  z-10 hover:z-40"
            />
            <span className="mt-3 ml-2">{token.name}</span>
          </div>
        );
      })}
      {nftDetails !== null ? (
        <Details nft={nftDetails} onDismiss={() => setNftDetails(null)} />
      ) : null}
    </div>
  );
}
