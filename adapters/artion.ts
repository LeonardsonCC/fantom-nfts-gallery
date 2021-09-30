import axios from "axios";
import { FetchTokensResponse } from "../interfaces/AdaptersResponse";

const fetchTokens = (address: string) => {
  return new Promise<FetchTokensResponse>((resolve, reject) => {
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
        resolve(data.data);
      })
      .catch((err) => reject(err));
  });
};

export { fetchTokens };
