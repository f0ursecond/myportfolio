import React from "react";
import Zoom from "react-reveal/Zoom";

import {
  FaGitAlt,
  FaJs,
  FaAndroid,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { SiDart } from "react-icons/si";

function About() {
  return (
    <div className="w-full h-full ">
      <div className="w-full max-w-[1024px] h-full p-2 mx-auto flex justify-start items-center">
        <Zoom>
          <div className="">
            <div className="justify-start">
              <h1 className="font-semibold mt-4 text-2xl font-poppins text-[#eebbc3]">
                About Me :
              </h1>
              <h6 className="font-semibold text-2xl font-poppins text-[#eebbc3]  border-b-2 ">
                <span className="text-white">My Name is</span> Alif Zulfanur
                Said Ramadhan
              </h6>
              <br></br>

              <ul>
                <li className="list-disc text-white">
                  <p className="font-normal text-base font-poppins text-left  text-[#fffffe]">
                    <span className="font-bold text-2xl font-poppins -tracking-tighter text-[#eebbc3]">
                      Background :
                    </span>
                    <br></br>
                    <p className="text-white font-Delius text-lg">
                      Saya adalah seorang pelajar SMK di Semarang , Saya
                      mempunyai ketertarikan di bidang Komputer dan saya suka
                      mendalami Hardware & Software komputer juga . Saya saat
                      ini sedang fokus mempelajari Mobile Developer terutama
                      Flutter. Saya mempunyai ketertarikan sejak kecil dengan
                      dunia Komputer. Saya mulai mendalami komputer di kelas 8
                      SMP dengan modal browsing di youtube, saat itu saya di
                      sarankan oleh paman saya untuk mencoba membuat database
                      mysql, lalu saya mencobanya dan disitu adalah titik awal
                      saya mulai di dunia programming. Setelah itu saya mulai
                      menambah ilmu dengan belajar c++ di youtube Kelas Terbuka.
                      Dan setelah itu saya tidak menyentuh programming lagi
                      dikarenakan laptop saya rusak. Setelah berjalanya waktu
                      saya masuk smk dan orang tua mempunyai rezeki untuk
                      membelikan saya komputer dan laptop , mulai saat itu saya
                      langsung mencoba Mobile Development , karena untuk Web
                      Development sudah banyak teman teman saya yang minat
                      kesitu , makanya saya mencoba berbeda. Sampailah di titik
                      sekarang saya sudah menemukan bakat minat saya yaitu di
                      Mobile Development terutama menggunakan Framework Flutter.
                      <br></br>
                      <br></br>
                    </p>
                  </p>
                </li>
                <li className="list-disc text-white">
                  <p className="font-normal text-base font-poppins text-left  text-[#eebbc3]">
                    <span className="font-poppins font-bold text-2xl text[#fffffe] -tracking-tighter">
                      Language & Tools :{" "}
                    </span>
                    <br></br>
                  </p>
                  <div className="mx-auto lg:h-20 h-12 p-4">
                    <div className=" flex  justify-between ">
                      <FaJs className="lg:h-12 lg:w-12 h-6 w-6" />
                      <FaGitAlt className="lg:h-12 lg:w-12 h-6 w-6" />
                      <FaAndroid className="lg:h-12 lg:w-12 h-6 w-6" />
                      <SiDart className="lg:h-12 lg:w-12 h-6 w-6" />
                    </div>
                  </div>
                </li>
                <li className="list-disc text-white">
                  <p className="font-normal text-base font-poppins text-left  text-[#eebbc3]">
                    <span className="font-poppins font-bold text-2xl text[#fffffe] -tracking-tighter">
                      Social Media :{" "}
                    </span>
                    <br></br>
                  </p>
                  <div className="mx-auto lg:h-20 h-12 p-4">
                    <div className="flex  justify-between ">
                      <a target="blank" href="https://github.com/f0ursecond">
                        <FaGithub className="lg:h-12 lg:w-12 h-6 w-6" />
                      </a>
                      <a target="blank" href="https://www.linkedin.com/in/azulfanur/">
                        <FaLinkedin className="lg:h-12 lg:w-12 h-6 w-6" />
                      </a>
                      
                      <a target="blank" href="https://instagram.com/a.zulfanur_">
                        <FaInstagram className="lg:h-12 lg:w-12 h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default About;
