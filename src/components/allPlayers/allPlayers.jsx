import { Suspense, useState } from "react";
import Card from "./card";
import Selected from "../selectedPlayer/selected";
import PlayerMap from "./playerMap";

const playersPromise = fetch("/players.json").then((res) => res.json()); 
const AllPlayers = ({ coin, setCoin }) => {
  const [data, setData] = useState("Available");
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  return (
    <>
      <div className="container mx-auto flex justify-between mt-8 items-center">
        <h2 className="text-4xl font-bold">
          {data == "Available"
            ? "Available"
            : `Selected(${selectedPlayer.length}/10)`}
        </h2>
        <div>
          <button
            onClick={() => setData("Available")}
            className={`btn rounded-r-none ${data == "Available" && "bg-[#E7FE29]"}`}
          >
            Available
          </button>
          <button
            onClick={() => setData("Selected")}
            className={`btn rounded-l-none ${data == "Selected" && "bg-[#E7FE29]"}`}
          >
            Selected({selectedPlayer.length})
          </button>
        </div>
      </div>
      {data == "Available" ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl block w-17.5 mx-auto mt-9"></span>
          }
        >
          <PlayerMap
            playersPromise={playersPromise}
            setSelectedPlayer={setSelectedPlayer}
            coin={coin}
            setCoin={setCoin}
          />
        </Suspense>
      ) : (
        <Selected
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          setCoin={setCoin}
        />
      )}
    </>
  );
};

export default AllPlayers;
