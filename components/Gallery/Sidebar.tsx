import Collection from "../../interfaces/Collection";
import Link from "../Link";
import WalletInfo from "./WalletInfo";

interface IProps {
  address: string;
  collections?: Collection[];
}

export default function Sidebar({ address, collections }: IProps) {
  return (
    <>
      <div
        className="bg-blue-200 w-1/5 h-screen px-6 hidden lg:block"
        style={{ minWidth: 277 }}
      >
        <WalletInfo address={address} />
        <div className="flex flex-col mt-5 overflow-y-auto">
          <h3 className="text-xl font-bold">Collections</h3>
          {collections.map((collection) => (
            <Link href={""}>
              <span>{collection.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
