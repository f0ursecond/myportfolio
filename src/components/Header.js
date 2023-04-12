import React from "react";
import Typed from "react-typed";
import Zoom from "react-reveal/Zoom";

function Header() {
  return (
    <div className=" w-full  max-h-fit p-4   text-center ">
      <div className="container max-w-fit w-full mx-auto p-2 ">
        <div className=" mt-64">
          <Zoom>
            <div className="">
              <p className="uppercase lg:text-sm text-1xl tracking-widest text-[#b8c1ec] py-4 ">
                Let's build Something Together
              </p>
              <h1 className="text-base lg:text-4xl text-[25px] text-white font-poppins font-bold -tracking-tighter px-4">
                Hi,I'm <span className="text-[#eebbc3]">Alif Zulfanur</span>
              </h1>
              <div className="flex mt-4 text-center justify-center">
                <div className="mt-2 lg:mt-0">
                  <h1 className="text-[25px] text-base lg:text-4xl text-white font-poppins font-bold -tracking-tighter px-2">
                    I want to be{" "}
                    <span>
                      <Typed
                        className="text-base lg:text-4xl text-[25px] text-[#eebbc3] font-poppins font-bold -tracking-tighter "
                        strings={[
                          "Mobile Developer",
                          "Front-End Developer",
                          "Flutter Developer",
                          "Cyber Security",
                        ]}
                        typeSpeed={120}
                        loop
                      />
                    </span>
                  </h1>
                </div>
              </div>
              <div className="desc  p-2 h-62">
                <p className="py-4 text-[#b8c1ec] lg:w-[55%] w-auto  sm:max-w-[70%]  max-w-sm text-lg lg:text-xl m-auto font-Delius">
                  I'm currently as a student who interesting for a front-end web
                  developer, flutter, mobile dev, react native & anything about
                  technology. Specializing in flutter exceptional digital
                  experience. Curently, I’m focused on flutter / mobile app &
                  sometimes learning on front-end web applications while
                  learning back-end technologies.
                </p>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Header;
