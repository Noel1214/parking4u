import React from "react";
import { TbMailFilled } from "react-icons/tb";
import { FiClock } from "react-icons/fi";

const Header = () => {
  return (
    <div className="h-[2.8rem] w-[100vw] bg-teal-200 flex items-center justify-center lg:justify-between px-[8rem] text-base">
      {/* information */}
      <div className="hidden gap-4 lg:flex lg:visible">
        <div className="flex gap-1 items-center">
          <TbMailFilled size={24} />
          <h3 className="text-teal-600 hover:text-black">
            info@parking4you.co.uk
          </h3>
        </div>
        <p>|</p>
        <div className="flex items-center gap-1">
          <FiClock size={23} />
          <h3>Mon - Fri 9:00 A.M - 5:00 P.M</h3>
        </div>
      </div>
      {/* Social Media */}
      <div className="flex gap-4 items-center">
        <h3>Follow On:</h3>
        <img className="h-7 w-7"  src="https://parking4you.co.uk/_next/static/media/facebook.d0b0206c.svg" alt="facebook" />
        <p>|</p>
        <img className="h-7 w-7" src="https://parking4you.co.uk/_next/static/media/twitter-x.17923052.svg" alt="twitter" />
        <p>|</p>
        <img className="h-7 w-7" src="https://parking4you.co.uk/_next/static/media/instagram.c6e35df4.svg" alt="" />
      </div>
    </div>
  );
};

export default Header;
