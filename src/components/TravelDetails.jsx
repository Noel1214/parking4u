import React from "react";

const TravelDetails = () => {
  return (
    <div className="h-[32rem] w-[27rem] border-[0.5px] border-zinc-500 bg-black bg-opacity-55 rounded-3xl scale-90 lg:scale-[0.85] lg:hover:scale-90 overflow-hidden transition-all duration-300 ease-in-out">
      <div className="h-[4rem] bg-zinc-400 flex justify-center items-center bg-opacity-30">
        <h1 className="font-semibold text-3xl text-white">GET A QUOTE</h1>
      </div>
      <form className="flex flex-col gap-3 mt-11 items-center">
        {/* From Location  */}
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-semibold text-sm">Traveling From</h1>
          <input
            type="text"
            className="h-10 w-[25rem] p-2 outline-none rounded-md"
          />
        </div>
        {/* Drop Off Date Time  */}
        <div className="flex gap-2 w-[25rem] justify-between">
          <div>
            <h1 className="text-white font-semibold text-sm">Drop Off Date</h1>
            <input
              type="date"
              className="h-10 w-[12rem] p-2 outline-none rounded-md"
            />
          </div>
          <div>
            <h1 className="text-white font-semibold text-sm">Time</h1>
            <input
              type="time"
              value="03:30"
              className="h-10 w-[12rem] p-2 outline-none rounded-md"
            />
          </div>
        </div>
        {/* Pick UP Date Time  */}
        <div className="flex gap-2 w-[25rem] justify-between">
          <div>
            <h1 className="text-white font-semibold text-sm">Pick Up Date</h1>
            <input
              type="date"
              className="h-10 w-[12rem] p-2 outline-none rounded-md"
            />
          </div>
          <div>
            <h1 className="text-white font-semibold text-sm">Time</h1>
            <input
              type="time"
              value="13:30"
              className="h-10 w-[12rem] p-2 outline-none rounded-md"
            />
          </div>
        </div>
        {/* Promo Code  */}
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-semibold text-sm">Promo Code</h1>
          <input
            type="text"
            className="h-10 w-[25rem] p-2 outline-none rounded-md"
          />
        </div>
        {/* Submit Details  */}
        <div className="">
          <button className="h-10 w-[25rem] rounded-md text-white font-semibold text-sm bg-zinc-400 mt-6 bg-opacity-35 hover:bg-opacity-65 transition-all ease-in-out duration-200">
            {" "}
            Find Parking
          </button>
        </div>
      </form>
    </div>
  );
};

export default TravelDetails;
