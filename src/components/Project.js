import React from "react";
import Bounce from "react-reveal/Bounce";
import card from "./images/card-top.jpg";

function Project() {
  let projects = [
    {
      name: "Contact",
      link: "/contact",
      description: "Projek Aplikasi",
      image: card,
      tag: "Flutter App",
    },
    {
      name: "Project",
      link: "/project",
      description: "Projek Website",
      image: card,
      tag: "Website App",
    },
    {
      name: "Project",
      link: "/project",
      description: "Projek Website",
      image: card,
      tag: "Website App",
    },
    {
      name: "Project",
      link: "/project",
      description: "Projek Website",
      image: card,
      tag: "Website App",
    },
    {
      name: "Project",
      link: "/project",
      description: "Projek Website",
      image: card,
      tag: "Website App",
    },
  ];
  return (
    <div className=" h-auto mt-32 lg:mt-0">
      <div className="container  mx-auto w-full h-full p-2 flex justify-start items-center">
        <div className="p-2 mx-auto">
          <Bounce left>
            <div className=" w-full h-auto just flex items-center">
              <h1 className="font-semibold duration-100 p-2 text-2xl font-poppins tracking-widest text-[#eebbc3]">
                My <span className="text-white">Project</span>
              </h1>
            </div>
            <br></br>
            <div className="w-full h-auto mx-auto justify-center p-2 grid-cols-4 gap-4 flex flex-wrap">
              {projects.map((e) => (
                <div class="max-w-sm  p-2 rounded overflow-hidden shadow-lg  bg-white">
                  <img
                    class="w-full"
                    src={e.image}
                    alt="Sunset in the mountains"
                  ></img>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{e.name}</div>
                    <p class="text-gray-700 text-base">{e.description}</p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {e.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Bounce>

          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Project;
