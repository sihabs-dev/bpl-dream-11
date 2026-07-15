import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const Card = ({ player, coin, setCoin, setSelectedPlayer }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSlected = () => {
    if (coin > player.price) {
      setIsSelected(true);
      setCoin(coin - player.price);
      setSelectedPlayer((prev) => [...prev, player]);
    } else {
      toast.error("don't have enough coin!");
      return;
    }
    toast.success(`${player.name} is selected!`);
  };

  return (
    <div className="">
      <div className="card bg-base-100 shadow-sm h-[450px] border border-gray-300">
        <figure>
          <img className="max-h-full" src={player.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FaUser /> {player.name}
          </h2>
          <div className="flex justify-between">
            <p className="flex gap-1 items-center font-medium">
              <IoFlagSharp className="opacity-60" />{" "}
              <span>{player.country}</span>
            </p>
            <button className="btn">{player.type}</button>
          </div>
          <div className="divider"></div>
          <h4 className="font-bold text-xl">rating: {player.rating}</h4>
          <div className="flex justify-between">
            <p>{player.battingStyle}</p>
            <p className="text-gray-500 text-right">{player.bowlingStyle}</p>
          </div>
          <div className="card-actions justify-end items-center">
            <p className="text-[18px] font-medium">price: ${player.price}</p>
            <button
              className="btn"
              onClick={handleSlected}
              disabled={isSelected}
            >
              {isSelected ? "Selected" : "Choose player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
