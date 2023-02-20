import React from "react";

// import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Bounce from "react-reveal/Bounce";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

function Contact() {
  let sosmed = [
    {
      link: "https://github.com/f0ursecond",
      icon: <AiOutlineGithub />,
    },
    {
      link: "https://instagram.com/a.zulfanur_",
      icon: <AiOutlineInstagram />,
    },
    {
      link: "https://twitter.com/ZulfanurAlif",
      icon: <AiOutlineTwitter />,
    },
  ];

  return (
    <div className="w-full h-screen p-2  ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 items-center">
        <Bounce left>
          <h1 className="text-white text-center mt-24 font-poppins font-semibold -tracking-tighter">
            Contact <span className="text-[#eebbc3]">Me</span>
          </h1>
          <div className="px-4 h-1/2 py-4 ">
            <div className="w-full  p-4 text-center ">
              <table className="w-full ">
                <tr>
                  <td>
                    <input
                      className="w-1/2 p-2  rounded-lg appearance-none outline-none font-patrick"
                      placeholder="Name"
                      type="text"
                    ></input>
                  </td>
                </tr>
                <hr className="my-2 border border-transparent"></hr>
                <tr>
                  <td>
                    <input
                      className="w-1/2 p-2  rounded-lg font-patrick appearance-none outline-none"
                      placeholder="Email"
                      type="text"
                    ></input>
                  </td>
                </tr>
                <hr className="my-2 border border-transparent"></hr>
                <tr>
                  <td>
                    <input
                      className="w-1/2 p-2  rounded-lg font-patrick appearance-none outline-none"
                      placeholder="Message"
                      type="text"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="submit"
                      className="bg-[#eebbc3] w-1/2 -tracking-tighter hover:translate-y-1 duration-75 rounded-lg p-2 mt-6 font-patrick"
                    ></input>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="justify-center text-center w-full  p-6  rounded-lg">
            <div className="h-full w-1/2 inline-flex justify-between items-center p-4 rounded-lg">
              {sosmed.map((links) => (
                <a
                  href={links.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white justify-between hover:text-[#eebbc3] duration-200 h-auto"
                >
                  {links.icon} 
                </a>
              ))}
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
}

export default Contact;
