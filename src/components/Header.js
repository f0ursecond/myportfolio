import React from "react";
import Typed from "react-typed";
import Zoom from "react-reveal/Zoom";

function Header() {
  return (
    <div className="w-full h-screen p-2 text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <Zoom>
          <div>
            <p className="uppercase text-sm tracking-widest text-[#b8c1ec] py-4">
              Let's build Something Together
            </p>
           
            <h1 className="text-base lg:text-4xl text-white font-poppins font-bold -tracking-tighter px-4">
              Hi,I'm <span className="text-[#eebbc3]">Alif Zulfanur</span>
            </h1>
            <div className="flex text-center justify-center">
              <h1 className="text-base lg:text-4xl text-white font-poppins font-bold -tracking-tighter px-2">
                I want to be
              </h1>
              <Typed
                className="text-base lg:text-4xl text-[#eebbc3] font-poppins font-bold -tracking-tighter "
                strings={[
                  "Mobile Developer",
                  "Front-End Developer",
                  "Flutter Developer",
                  "Cyber Security",
                ]}
                typeSpeed={120}
                loop
              />
            </div>

            <p className="py-4 text-[#b8c1ec] sm:max-w-[70%] text-lg lg:text-xl m-auto font-Delius">
              I'm currently as a student who interesting for a front-end web
              developer,flutter,mobile dev,cyber security & anything about
              technology. Specializing in flutter exceptional digital
              experience. Curently, I’m focused on flutter / mobile app &
              sometimes learning on front-end web applications while learning
              back-end technologies.
            </p>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Header;
