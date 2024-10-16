import React from "react";

const BannerOne = () => {
  return (
    <div className="h-auto w-[100vw] flex flex-col items-center bg-black">
      <div className="h-[17rem] flex flex-col justify-center text-center  gap-4">
        <h1 className="font-bold text-white text-6xl">
          YOUR <span className="text-yellow-500">ONE</span> STOP <span className="text-yellow-500">SOLUTION</span>
        </h1>
        <h4 className="font-semibold text-white text-3xl">
          COMFORTABLE AND EFFICIENT PARKING
        </h4>
        <h4 className="font-semiboldbold text-white text-4xl">
          THE <span className="text-yellow-500">MODERN</span> WAY FOR CONVENIENT <span className="text-yellow-500">PARKING</span>
        </h4>
      </div>
    </div>
  );
};

export default BannerOne;
