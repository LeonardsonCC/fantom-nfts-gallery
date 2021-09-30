import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { minifyWalletAddress } from "../utils/wallet";
import { injected } from "../utils/web3/connector";
import { useRouter } from "next/router";

export default function ConnectToWallet() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const router = useRouter();

  useEffect(() => {});

  async function connect() {
    try {
      await activate(injected);
    } catch (err) {
      console.log(err);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (err) {
      console.log(err);
    }
  }

  const goToYourWallet = (account: string) => {
    if (account) {
      router.push(`/${account}`);
    }
  };

  return (
    <div className="mt-5">
      {!active ? (
        <>
          <button
            className="px-5 py-2 bg-blue-500 rounded-lg text-white w-full"
            onClick={connect}
          >
            Connect to your MetaMask
          </button>
        </>
      ) : (
        <>
          <button
            className="px-5 py-2 bg-blue-500 rounded-lg text-white w-full mb-3"
            onClick={() => goToYourWallet(account)}
          >
            See wallet {minifyWalletAddress(account)}
          </button>

          <button
            className="px-5 py-2 bg-blue-500 rounded-lg text-white w-full"
            onClick={disconnect}
          >
            Disconnect
          </button>
        </>
      )}
    </div>
  );
}
