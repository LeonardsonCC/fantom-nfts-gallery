import { useRef } from "react";
import useOutsideAlerter from "../../hooks/useOutsiderAlerter";
import { Token } from "../../interfaces/AdaptersResponse";
import NftLinks from "./NftLinks";

interface IProps {
  nft: Token;
  onDismiss: () => void;
}

export default function Details({ nft, onDismiss }: IProps) {
  const popupRef = useRef(null);

  useOutsideAlerter(popupRef, () => {
    onDismiss();
  });

  return (
    <div className="flex items-center justify-center z-50 absolute top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black bg-opacity-40">
      <div ref={popupRef} className="w-2/3 grid grid-cols-2 overflow-y-auto">
        <div className="mt-5">
          <img
            src={nft.imageURL}
            className="object-cover rounded-2xl shadow-md"
          />
        </div>
        <div className="mt-5 ml-5 px-5 py-4 rounded-xl bg-white">
          <h2 className="text-2xl font-bold">{nft.name}</h2>
          <NftLinks nft={nft} />
        </div>
      </div>
    </div>
  );
}
