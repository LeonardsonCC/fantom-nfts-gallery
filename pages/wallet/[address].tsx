import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Gallery/Sidebar";
import axios from "axios";
import Gallery from "../../components/Gallery/Gallery";
import { Token } from "../../interfaces/ArtionApiResponse";

export default function Wallet() {
  const router = useRouter();
  const { address } = router.query;

  const [tokens, setTokens] = useState<Token[]>([]);

  useEffect(() => {
    axios
      .post(
        "https://fetch-tokens.vercel.app/api",
        {
          address: address,
          count: 18,
          from: 0,
          sortby: "createdAt",
          type: "single",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setTokens(data.data.tokens);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-row overflow-y-hidden">
      <Sidebar address={address as string} />
      <Gallery tokens={tokens} />
    </div>
  );
}
