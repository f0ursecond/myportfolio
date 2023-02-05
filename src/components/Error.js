import React from "react";

import Zoom from "react-reveal/Zoom";

function Error() {
  return (
    <div className="w-full h-screen text-center">
      <div className="w-full max-w-[1024px] h-full mx-auto flex justify-center items-center">
        <Zoom>
          <div>
            <div className="">
              <h1 className="font-semibold text-4xl font-poppins text-[#eebbc3]">
                404 | SORRY PAGE NOT FOUND
              </h1>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Error;
