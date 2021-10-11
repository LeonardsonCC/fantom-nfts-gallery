import CopyToClipboard from "../CopyToClipboard";
import { minifyWalletAddress } from "../../utils/wallet";
import { FaChevronCircleDown } from "react-icons/fa";
import { useRef, useState } from "react";
import useOutsideAlerter from "../../hooks/useOutsiderAlerter";

export default function WalletInfo({ address }) {
  const popupRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useOutsideAlerter(popupRef, () => {
    setIsDropdownOpen(false);
  });

  if (!address) return null;
  return (
    <div className="mt-5">
      <div className="flex flex-row justify-between">
        <h4 className="font-bold text-xl">{minifyWalletAddress(address)}</h4>
        <CopyToClipboard text={address} />
        <div ref={popupRef}>
          <button
            className="h-full "
            type="button"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            <FaChevronCircleDown size={16} />
          </button>
          <div className="relative">
            <div
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } absolute -left-2 mt-1 w-48 bg-white rounded-md overflow-hidden shadow-xl z-20`}
            >
              <div>
                <a
                  href={`https://ftmscan.com/address/${address}`}
                  target="_blank"
                  className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200"
                >
                  View on FTMScan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
