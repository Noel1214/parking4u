import React from "react";

const NavBar = () => {
  return (
    <div className="h-[8rem] w-[100vw] border-b-2 border-zinc-800 flex items-center justify-between px-[5rem] py-[2rem] bg-black bg-opacity-25">
      {/* logo */}
      <div className="flex gap-4 items-center">
        <div className="h-[5.3rem] w-[5.7rem] mt-3 bg-white flex items-center justify-center rounded-full overflow-hidden p-2">
          <img className="h-[5.3rem] w-auto" src="/logo2.avif" alt="Logo" />
        </div>
        <h1 className="text-white font-bold text-2xl">ParkMate</h1>
      </div>
      <div className="flex gap-7">
        {/* NavBar */}
        <nav className="flex items-center">
          <ul className="flex gap-16 font-semibold text-white">
            <li className="hover:scale-125 p-2 hover:border-b-2 transition-all duration-200 ease-in-out">
              Home
            </li>
            <li className="hover:scale-125 p-2 hover:border-b-2 transition-all duration-200 ease-in-out">
              About Us
            </li>
            <li className="hover:scale-125 p-2 hover:border-b-2 transition-all duration-200 ease-in-out">
              Faq's
            </li>
            <li className="hover:scale-125 p-2 hover:border-b-2 transition-all duration-200 ease-in-out">
              Contact Us
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
