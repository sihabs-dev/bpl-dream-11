import React, { use } from "react";
import Card from "./card";

const PlayerMap = ({ playersPromise, coin, setCoin, setSelectedPlayer }) => {
  const playersData = use(playersPromise);
  return (
    <div>
      <div className="container mx-auto mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {playersData.map((player) => (
          <Card
            key={player.id}
            player={player}
            coin={coin}
            setCoin={setCoin}
            setSelectedPlayer={setSelectedPlayer}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerMap;
