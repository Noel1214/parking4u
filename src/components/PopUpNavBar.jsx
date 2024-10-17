import React from "react";
import { IoMdClose } from "react-icons/io";

const PopUpNavBar = () => {
  return (
    <div className="">
      <div className="h-[100vh] w-[100vw] bg-black bg-opacity-75 absolute">
        <IoMdClose
          className="text-white absolute left-[87vw] top-[2.5vh]"
          size={35}
        />
        <nav className=" flex justify-start">
          <ul className="flex flex-col gap-[1.3rem] mt-[5rem] ml-[3rem] text-white text-xl font-semibold">
            <li>Home</li>
            <li>About Us</li>
            <li>Faq's</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PopUpNavBar;
