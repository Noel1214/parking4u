import React from "react";
import TravelDetails from "./TravelDetails";

const MainOne = () => {
  return (
    <div className="flex justify-center">
      <div className="h-auto lg:h-[35rem] w-[100vw] lg:w-[90vw] flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-12 bg-black bg-opacity-55 lg:rounded-3xl pt-16 pb-10 lg:pb-9">
        {/* height of TravaelDetails is controlling the height of div  */}
        <div className="lg:pt-0">
          <h1 className="text-[1.6rem] lg:text-[4.2rem] font-semibold text-white text-center scale-[1.6] lg:scale-100 w-[40vw] lg:w-[45vw]">
            We Will Find The Best{" "}
            <span className="text-yellow-500">Parking</span> Lots for You
          </h1>
        </div>
        <div className="">
          <TravelDetails />
        </div>
      </div>
    </div>
  );
};

export default MainOne;