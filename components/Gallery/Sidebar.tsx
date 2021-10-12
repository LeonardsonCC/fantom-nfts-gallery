import { useRouter } from "next/router";
import { useState } from "react";
import Collection from "../../interfaces/Collection";
import Link from "../Link";
import WalletInfo from "./WalletInfo";

interface IProps {
  address: string;
  collections?: Collection[];
}

export default function Sidebar({ address, collections }: IProps) {
  const router = useRouter();

  const [contractFilter, setContractFilter] = useState<string | null>(null);

  const collectionClickHandler = (contract?: string) => {
    const currentUrl = new URL(window.location.href);
    if (contract !== undefined) {
      currentUrl.searchParams.set("collection", contract);
      setContractFilter(contract);
    } else {
      currentUrl.searchParams.delete("collection");
      setContractFilter(null);
    }
    router.push(currentUrl);
  };

  return (
    <>
      <div
        className="bg-blue-200 w-1/5 h-screen px-6 hidden lg:block"
        style={{ minWidth: 277 }}
      >
        <WalletInfo address={address} />
        <div className="flex flex-col mt-5 overflow-y-auto overflow-x-hidden">
          <h3 className="text-xl font-bold">Collections</h3>
          <button
            type="button"
            className={`text-md text-left py-1 transition-transform transition-shadow duration-200 transform hover:scale-105 hover:static origin-left ${
              contractFilter === null ? "font-bold" : null
            }`}
            onClick={() => collectionClickHandler()}
          >
            <span>All collections</span>
          </button>
          {collections.map((collection) => (
            <button
              key={collection.contract}
              type="button"
              className={`text-md text-left py-1 transition-transform transition-shadow duration-200 transform hover:scale-105 hover:static origin-left ${
                contractFilter === collection.contract ? "font-bold" : null
              }`}
              onClick={() => collectionClickHandler(collection.contract)}
            >
              <span>{collection.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
