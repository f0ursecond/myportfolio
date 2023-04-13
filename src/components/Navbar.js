import React from "react";
import Fade from "react-reveal/Fade";
// import { Link } from "react-router-dom";
import { useState } from "react";
import menu from "./images/menu.svg";
import close from "./images/x.svg";

function Navbar() {
  let Links = [
    { name: "Contact", link: "/contact" },
    { name: "Project", link: "/project" },
    { name: "About Me", link: "/about" },
    { name: "Gihtub", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <Fade>
      <nav class="p-5   md:flex md:items-center md:justify-between">
        <div className="w-full lg:static fixed top-0 left-0">
          <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
            <div className="font-bold text-2xl cursor-pointer flex  items-center">
              <p className="text-white">Alif Zulfanur</p>
            </div>

            <div
              onClick={() => setOpen(!open)}
              className="lg:text-3xl text-lg absolute lg:right-8 lg:top-6 right-7 top-7 cursor-pointer md:hidden"
            >
              <img
                alt="inihamburger"
                className=" -translate-y-2"
                src={open ? close : menu}
              ></img>
            </div>

            <ul
              className={`md:flex md:items-center md:pb-0 pt-2 absolute md:static text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-10 " : "top-[-490px]"
              }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="md:ml-8 text-lg md:my-0 my-7 mr-0 lg:mr-3"
                >
                  <a
                    href={link.link}
                    className=" font-Inter text-white  duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Fade>
  );
}

export default Navbar;
