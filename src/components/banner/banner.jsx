import React from "react";
import BannerImg from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="container mx-auto rounded-2xl mt-5 bg-linear-to-tr from-purple-500/70 via-blue-500/70 to-pink-500/70">
      <div
        style={{ backgroundImage: `url(${BannerImg})` }}
        className="min-h-[75vh]  bg-center bg-no-repeat"
      ></div>
    </div>
  );
};

export default Banner;
