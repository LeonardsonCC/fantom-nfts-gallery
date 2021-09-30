import FullScreen from "../components/FullScreen";
import Search from "../components/Search";
import ConnectToWallet from "../components/ConnectToWallet";

const IndexPage = () => {
  return (
    <FullScreen>
      <div>
        <h1 className="text-5xl mb-5">Fantom NFTs Gallery</h1>
        <Search />
        <ConnectToWallet />
      </div>
    </FullScreen>
  );
};

export default IndexPage;
