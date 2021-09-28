import { useRouter } from "next/router";
import Sidebar from "../../components/Gallery/Sidebar";

export default function Wallet() {
  const router = useRouter();
  const { address } = router.query;

  return (
    <div>
      <Sidebar address={address as string} />
    </div>
  );
}
