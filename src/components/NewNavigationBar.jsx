import React from "react";
import SmallScreenNavBar from "./SmallScreenNavBar";
import { IoMailOutline } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const NewNavigationBar = () => {
  return (
    <>
    <div className="visible lg:hidden">
        <SmallScreenNavBar />
    </div>
      <div className="">
        <div className="bg-black bg-opacity-25 hidden lg:flex justify-center gap-[28vw]">
          <div className="flex flex-col mt-5 mb-4">
            <div className="h-[4.8rem] w-[4.8rem] rounded-full overflow-hidden">
              <img className="h-auto w-auto " src="/logo2.avif" alt="Logo" />
            </div>
            <h1 className="text-white">ParkMate</h1>
          </div>
          <nav>
            <ul className="text-white text-lg flex gap-14 items-center h-full">
              <li className="hover:scale-125 hover:underline hover:underline-offset-[0.5rem] transition-all duration-300 ease-in-out">Home</li>
              <li className="hover:scale-125 hover:underline hover:underline-offset-[0.5rem] transition-all duration-300 ease-in-out">About</li>
              <li className="hover:scale-125 hover:underline hover:underline-offset-[0.5rem] transition-all duration-300 ease-in-out">Contact</li>
              <li className="hover:scale-125 hover:underline hover:underline-offset-[0.5rem] transition-all duration-300 ease-in-out">Faq's</li>
            </ul>
          </nav>
          <div>
            <div className="flex h-full items-center gap-5 -translate-x-[1rem] -translate-y-2 text-white">
              <div className="hover:scale-125 transition-all ease-in-out duration-300">
                <FaFacebook size={22} />
              </div>
              <div className="hover:scale-125 transition-all ease-in-out duration-300">
                <AiFillInstagram size={23} />
              </div>
              <div className="hover:scale-125 transition-all ease-in-out duration-300">
                <FaTwitter size={23} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewNavigationBar;