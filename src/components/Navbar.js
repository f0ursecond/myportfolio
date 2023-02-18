import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container pt-2 px-1 mx-auto py-1 w-full ">
      <div className="p-2 flex justify-between items-center  ">
        <Fade top>
          <h1 className="text-white justify-between font-poppins text-base lg:text-lg font-bold -tracking-tighter">
            <Link to="/">Alif <span className="text-[#eebbc3]">Zulfanur</span></Link>
          </h1>
          <ul className="flex">
            <li className="hover:text-rose-400 mx-2 font-Delius cursor-pointer text-white  text-base lg:text-xl">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-rose-400 mx-2 font-Delius  cursor-pointer text-white  text-base lg:text-xl">
              <Link to="/project">Projects</Link>
            </li>
            <li className="hover:text-rose-400 mx-2 font-Delius cursor-pointer text-white  text-base lg:text-xl">
              Github
            </li>
            
            <li className="hover:text-rose-400 mx-2 font-Delius cursor-pointer text-white  text-base lg:text-xl">
              <Link to="/about">About Me</Link>
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  );
}

export default Navbar;
