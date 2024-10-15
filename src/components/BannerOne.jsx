import React from "react";

const BannerOne = () => {
  return (
    <div className="h-auto w-[100vw] flex flex-col items-center bg-black">
      <div className="h-[17rem] flex flex-col justify-center text-center  gap-4">
        <h1 className="font-bold text-white text-6xl">
          YOUR ONE STOP SOLUTION
        </h1>
        <h4 className="font-semibold text-white text-3xl">
          COMFORTABLE AND EFFICIENT PARKING
        </h4>
        <h4 className="font-semiboldbold text-white text-4xl">
          THE MODERN WAY FOR CONVENIENT PARKING
        </h4>
      </div>
    </div>
  );
};

export default BannerOne;
