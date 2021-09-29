import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";

export default function Search() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery) {
      router.push(`/${searchQuery}`);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="search"
        type="text"
        placeholder="Search for a wallet"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  );
}
