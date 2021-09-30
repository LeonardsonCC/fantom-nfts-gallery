import { useEffect, useState } from "react";
import { Token } from "../interfaces/AdaptersResponse";
import { fetchTokens as fetchArtionTokens } from "../adapters/artion";
import { fetchTokens as fetchPaintSwapTokens } from "../adapters/paintSwap";

function useFetchNfts(address: string) {
  if (address === undefined) return [];
  const [tokens, setTokens] = useState<Token[]>([]);
  useEffect(() => {
    settle(fetchWalletNfts())
      .then((responses) => {
        let allTokens = [];
        responses.forEach((response) => {
          if (response.state === "fullfilled") {
            allTokens = [...allTokens, ...response.value.tokens];
          }
        });
        allTokens = removeRepeated(allTokens);
        setTokens(allTokens);
      })
      .catch((err) => console.log(err));
  }, [address]);

  const fetchWalletNfts = () => {
    return [fetchArtionTokens(address), fetchPaintSwapTokens(address)];
  };

  return tokens;
}

const settle = (
  arr
): Promise<{ state: "fullfilled" | "failed"; value: any }[]> => {
  return Promise.all(
    arr.map((promise) => {
      return promise.then(
        (value) => ({ state: "fullfilled", value }),
        (value) => ({ state: "rejected", value })
      );
    })
  );
};

const removeRepeated = (tokens: Token[]): Token[] => {
  return tokens.reduce((acc, token) => {
    const index = acc.findIndex(
      (item) => String(item.tokenID) === String(token.tokenID)
    );
    if (index >= 0) {
      return acc;
    }
    return [...acc, token];
  }, []);
};

export default useFetchNfts;
