import { useRouter } from "next/router";
import Sidebar from "../components/Gallery/Sidebar";
import Gallery from "../components/Gallery/Gallery";
import useFetchNfts from "../hooks/useFetchNfts";

export default function Wallet() {
  const router = useRouter();
  const { address } = router.query;

  const [tokens, collections] = useFetchNfts(address as string);
  console.log(collections);

  if (!tokens) return null;
  return (
    <div className="flex flex-row overflow-y-hidden">
      <Sidebar address={address as string} collections={collections} />
      <Gallery tokens={tokens} />
    </div>
  );
}
