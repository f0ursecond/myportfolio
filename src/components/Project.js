import React from "react";
import Bounce from "react-reveal/Bounce";
// import card from "./images/card-top.jpg";
import cursed from "./images/okee.png";
import quran from "./images/quran.png";
import koperasi from "./images/koperasi.png";
import firebase from "./images/firebase.png";
import cafe from "./images/cafe.png";
import crocodic from "./images/crocodic1.png";

function Project() {
  let projects = [
    {
      name: "The Cursed Night At School",
      link: "https://cursed-night.netlify.app/",
      description:
        "Project membuat website untuk tugas akhir sekolah yaitu project game. Disini saya sebagai frontend developer ",
      image: cursed,
      tag: "React JS & Tailwindcss",
    },
    {
      name: "Al Quran App",
      link: "https://github.com/f0ursecond/alquran",
      description:
        "Projek Aplikasi Android yaitu membuat AL Quran App, ini sebenarnya belom 100% jadi karena saya hanya mencoba untuk fetch API dari internet saja",
      image: quran,
      tag: "Dart & Flutter",
    },
    {
      name: "Login Page with Firebase",
      link: "https://github.com/f0ursecond/login-ui-firebase",
      description:
        "Projek Aplikasi Android membuat page login dengan memadukan authentication menggunakan Firebase",
      image: firebase,
      tag: "Dart & Flutter",
    },
    {
      name: "CRUD menggunakan PHP Native",
      link: "https://github.com/f0ursecond/cafe",
      description:
        "Projek Website sekolah membuat smart cafe, menggunakan php native dan Tailwind CSS",
      image: cafe,
      tag: "Tailwindcss & Php Native",
    },
    {
      name: "Crocodic Academy UI",
      link: "https://github.com/f0ursecond/crocodic_login",
      description:
        "Projek Aplikasi login sederhana, tugas kelas industri , menggunakan flutter",
      image: crocodic,
      tag: "Dart & Flutter",
    },
    {
      name: "Membuat UI Koperasi Rakyat",
      link: "https://github.com/f0ursecond/koperasi_rakyat",
      description:
        "Projek flutter UI sederhana, tanpa backend , dan hanya front end nya saja",
      image: koperasi,
      tag: "Dart & Flutter",
    },
  ];
  return (
    <div className=" h-auto mt-6 lg:mt-0">
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
                    <div class="font-bold text-xl mb-2">
                      <a
                        className="hover:text-sky-500"
                        href={e.link}
                        target="blank"
                      >
                        {e.name}
                      </a>
                    </div>
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
        </div>
      </div>
    </div>
  );
}

export default Project;
