import { useState } from "react";
import Card from "./card";
import Selected from "../selectedPlayer/selected";
import PlayerMap from "./playerMap";

const playersPromise = fetch("/players.json").then((res) => res.json());
const AllPlayers = () => {
 
  const [data, setData] = useState("Available");

  return (
    <>
      <div className="container mx-auto flex justify-between mt-8 items-center">
        <h2 className="text-4xl font-bold">
          {data == "Available" ? "Availabel" : "Selected(0)"}
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
            Selected(0)
          </button>
        </div>
      </div>
      {data == "Available" ? (
        <PlayerMap playersPromise={playersPromise} />
      ) : (
        <Selected />
      )}
    </>
  );
};

export default AllPlayers;
