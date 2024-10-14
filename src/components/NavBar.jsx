import React from "react";
import { FaPhone } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="h-[6rem] w-[100vw] flex items-center justify-between px-[9rem]">
      {/* logo */}
      <div className="">
        <img className="h-[4.3rem] w-auto" src="/logo.png" alt="Logo" />
      </div>
      <div className="flex gap-7">
        {/* NavBar */}
        <nav className="flex items-center">
          <ul className="flex gap-5 font-[3130]">
            <li className="hover:text-teal-700">Home</li>
            <li>About Us</li>
            <li>Faq's</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        {/* Contact Number and icon*/}
        <div className="flex ml-10 items-center gap-5">
          <div className="h-12 w-12 rounded-full bg-teal-600 flex items-center justify-center relative">
            <FaPhone className="text-white z-[2]" />
            <div id="phoneIcon" className="h-20 w-20 rounded-full bg-teal-600 absolute     z-[1]"></div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-teal-800">Phone Number</h3>
            <h3 className="font-bold">0333 567 8903</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
