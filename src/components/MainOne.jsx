import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import TravelDetails from "./TravelDetails";

const MainOne = () => {
  return (
    <div className="flex justify-center ">
      <div className="h-auto w-[88vw] flex justify-evenly  bg-zinc-800 bg-opacity-70 rounded-3xl pt-9 pb-7">
        <h1 className="text-[4rem] text-white w-[40vw]">
          We Will Find The Best <span className="text-yellow-500">Parking</span> Lots for You
        </h1>
        <TravelDetails />
      </div>
    </div>
  );
};

export default MainOne;
