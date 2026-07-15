import React from "react";
import SelectedPlayerCard from "./selectedPlayerCard";

const Selected = ({ selectedPlayer,setSelectedPlayer,setCoin }) => {
  return (
    <div className="container mx-auto my-10 space-y-7">
      {selectedPlayer.map((player) => (
        <SelectedPlayerCard key={player.id} player={player} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} setCoin={setCoin} />
      ))}
    </div>
  );
};

export default Selected;
