import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlayerCard = ({
  player,
  selectedPlayer,
  setSelectedPlayer,
  setCoin,
}) => {
  const handleDelete = (deletePlayer) => {
    const filterPlayer = selectedPlayer.filter(
      (AllPlayer) => AllPlayer.name != deletePlayer.name,
    );
    setSelectedPlayer(filterPlayer);
    setCoin((prev) => prev + deletePlayer.price);
  };

  return (
    <div className="flex justify-between items-center p-5 bg-gray-100 rounded-2xl border-2 border-gray-300">
      <div className="flex gap-5 items-center">
        <img className=" w-[100px]" src={player.image} alt={player.name} />
        <div>
          <h2 className="text-2xl font-semibold flex gap-2 items-center">
            <FaUser /> {player.name}
          </h2>
          <p>{player.type}</p>
        </div>
      </div>
      <div>
        <button className="btn bg-red-300" onClick={() => handleDelete(player)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
