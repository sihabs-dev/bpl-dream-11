import React from "react";
import SelectedPlayerCard from "./selectedPlayerCard";

const Selected = ({ selectedPlayer, setSelectedPlayer, setCoin }) => {
  return (
    <>
      {selectedPlayer.length == 0 ? (
        <div className="text-center p-10 bg-red-100 border-2 border-red-200 rounded-xl my-7 container mx-auto">
          <h2 className="text-5xl font-bold py-5">No Player Selected yet!</h2>
        </div>
      ) : (
        <div className="container mx-auto my-10 space-y-7">
          {selectedPlayer.map((player) => (
            <SelectedPlayerCard
              key={player.id}
              player={player}
              selectedPlayer={selectedPlayer}
              setSelectedPlayer={setSelectedPlayer}
              setCoin={setCoin}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Selected;
