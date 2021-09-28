import { Token } from "../../interfaces/ArtionApiResponse";

interface IProps {
  tokens: Token[];
}

export default function Gallery({ tokens }: IProps) {
  return (
    <div className="w-4/5 grid grid-cols-3 gap-x-3 gap-y-3 px-5 py-5 overflow-y-scroll h-screen">
      {tokens.map((token) => {
        return (
          <div
            key={`${token.tokenID}_${token.contractAddress}`}
            className="flex flex-col"
          >
            <img
              src={token.imageURL}
              className="object-cover h-64 w-full rounded-2xl shadow-md transform hover:scale-110  z-10 hover:z-40"
            />
            <span>{token.name}</span>
          </div>
        );
      })}
    </div>
  );
}
