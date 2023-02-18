import React from "react";

// import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Bounce from "react-reveal/Bounce";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

function Contact() {
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
                      className="bg-white hover:bg-cyan-400 duration-75 rounded-lg p-2 mt-6 font-patrick"
                    ></input>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="">
            <div className="h-full w-auto flex justify-evenly  p-4 rounded-lg">
              <div className="h-10 w-10 bg-[#232946] rounded-md">
                <AiOutlineInstagram className="text-white h-10 w-10  "></AiOutlineInstagram>
              </div>
              <div className="h-10 w-10 bg-[#232946] rounded-md">
                <AiOutlineGithub className="text-white h-10 w-10  "></AiOutlineGithub>
              </div>
              <div className="h-10 w-10 bg-[#232946] rounded-md">
                <AiOutlineTwitter className="text-white h-10 w-10  "></AiOutlineTwitter>
              </div>
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
}

export default Contact;
