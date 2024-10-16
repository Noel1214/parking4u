import React from "react";
import TravelDetails from "./TravelDetails";

const MainOne = () => {
  return (
    <div className="flex justify-center">
      <div className="h-[38rem] w-[88vw] flex justify-evenly items-center  bg-black bg-opacity-50 rounded-3xl pt-9 pb-7">
        {/* height of TravaelDetails is controlling the height of div  */}
        <h1 className="text-[4.6rem] font-semibold text-white text-center w-[40vw]">
          We Will Find The Best <span className="text-yellow-500">Parking</span> Lots for You
        </h1>
        <TravelDetails />
      </div>
    </div>
  );
};

export default MainOne;
