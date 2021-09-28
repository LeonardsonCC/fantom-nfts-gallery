import { useState } from "react";

export default function CopyToClipboard({ text }) {
  const [label, setLabel] = useState("Copy");

  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText(text).then(function () {
      setLabel("Copied");
      setTimeout(() => setLabel("Copy"), 3000);
    });
  };

  return (
    <button type="button" onClick={copyToClipboardHandler}>
      {label}
    </button>
  );
}
