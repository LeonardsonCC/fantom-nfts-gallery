import Collection from "../../interfaces/Collection";
import Link from "../Link";
import WalletInfo from "./WalletInfo";

interface IProps {
  address: string;
  collections?: Collection[];
}

export default function Sidebar({ address, collections }: IProps) {
  return (
    <div className="bg-blue-200 w-1/5 h-screen px-6" style={{ minWidth: 277 }}>
      <Link href="/">Home</Link>

      <WalletInfo address={address} />
    </div>
  );
}
