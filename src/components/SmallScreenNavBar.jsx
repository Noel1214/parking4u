import React from "react";
import { IoMenu } from "react-icons/io5";

const SmallScreenNavBar = () => {
  return (
    <div className="flex items-center justify-between bg-black bg-opacity-25 border-b-[1px] border-t-2 p-2 border-zinc-800">
      <div className="flex gap-3 items-center scale-[0.9]">
        <div className="h-[4.3rem] w-[4.7rem] mt-3 mb-2 bg-white flex items-center justify-center rounded-full overflow-hidden p-2">
          <img className="h-[4.3rem] w-auto" src="/logo2.avif" alt="Logo" />
        </div>
        <h1 className="text-white font-bold text-xl">ParkMate</h1>
      </div>
      <div className="px-5">
        <IoMenu className="text-zinc-200" size={35} />
      </div>
    </div>
  );
};

export default SmallScreenNavBar;
