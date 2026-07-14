import { use } from "react";
import Card from "./card";

const AllPlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);

  return (
    <div className="container mx-auto mt-7 grid grid-cols-1 lg:grid-cols-3 gap-7">
      {playersData.map((player) => (
        <Card key={player.id} player={player} />
      ))}
    </div>
  );
};

export default AllPlayers;
