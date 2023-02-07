import React from "react";
import Bounce from "react-reveal/Bounce";
import card from "./images/card-top.jpg";

function Project() {
  return (
    <div className="w-full h-screen p-2">
      <div className="w-full h-full p-2 mx-auto flex justify-start items-center">
        
          <div className=" mx-auto">
            <div className="justify-start">
              <h1 className="font-semibold mt-4 text-2xl font-poppins text-[#eebbc3]">
                My Project :
              </h1>
            <br></br>
            <Bounce left>

           
              <div className="w-full h-auto mx-auto grid-cols-4 gap-4 flex flex-wrap">
                <div class="max-w-sm rounded overflow-hidden shadow-lg  bg-white">
                  <img
                    class="w-full"
                    src={card}
                    alt="Sunset in the mountains"
                  ></img>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                  </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg  bg-white">
                  <img
                    class="w-full"
                    src={card}
                    alt="Sunset in the mountains"
                  ></img>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                  </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg  bg-white">
                  <img
                    class="w-full"
                    src={card}
                    alt="Sunset in the mountains"
                  ></img>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                  </div>
                </div>
              </div>
              </Bounce>
              <br></br>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Project;
