// halaman untuk bagian homepage
import { useState } from "react";
import { CardServices } from "../components/card";
import { DetailExp } from "../components/detail";
import { Hero } from "../components/div";
import Marquee from "../components/Marquee";
import PageScroll from "../components/PageScroll";
import { Special } from "../components/spesial";
import image from "../img/971.jpg";
import { ImageCard } from "../components/image";
import cooperativeImg from "../img/selasaremove.png";
import mahoniImage from "../img/mahoni.png";
import { ProjectView } from "../components/project";

export const HomePage = () => {
  const [detail, setDetail] = useState("mongodb");
  // menggunakan lifting state untuk menggunakan detail card yang dibutuhkan
  return (
    <>
      <div className="">
        {/* Hero Section */}
        <div
          className="flex min-h-screen justify-center max-w-full mx-auto pt-20 pb-8 relative"
          style={{
            opacity: 1,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <svg
            className="absolute bottom-0 w-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#020617"
              d="M0,320L48,290C96,260,192,230,288,210C384,190,480,180,576,180C672,180,768,190,864,210C960,230,1056,260,1152,250C1248,240,1344,200,1392,160L1440,120L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
          <div className="grid place-items-center w-full rounded-2xl max-h-xl">
            <Hero />
          </div>
        </div>

        {/* Dekorasi lingkaran vignette */}
        <div className="absolute -top-36 left-1/3 w-80 h-80 bg-purple-800 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -top-36 z-10 left-[58rem] w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -top-36 z-10 left-[47rem] w-80 h-80 bg-sky-600 rounded-full blur-3xl opacity-50"></div>

        <div className="mt-10 max-w-5xl mx-auto mb-72">
          <PageScroll />
        </div>
        {/* halaman untuk kedua element berantem */}
        <div className="flex justify-between">
          <div className="flex-1 -mt-32 -mr-24 z-20">
            <ImageCard />
          </div>
          <div className="relative max-w-5xl mt-0 p-10 bg-purple-800 backdrop-blur-xl shadow-lg shadow-slate-900 rounded-bl-xl">
            <div className="relative z-10 text-center text-white pt-14">
              <h1 className="text-2xl font-bold mb-5">Our Abilities</h1>
              <Marquee />
            </div>
            <img
              src={cooperativeImg}
              alt=""
              className="absolute bottom-0 right-0 h-72 w-72 opacity-70"
            />
            <img
              src={mahoniImage}
              alt=""
              className="absolute -top-5 h-72 w-72 left-14 opacity-70"
            />
          </div>
        </div>

        {/* Halaman Layanan */}
        <div className="max-w-5xl mx-auto mt-72">
          <h1 className="text-3xl font-bold mb-8 text-center text-purple-500">
            Our Services
          </h1>
          {/* Kartu Layanan */}
          <div className="flex justify-center space-x-5">
            <CardServices
              fontIcon="fa-solid fa-mobile"
              heading="Responsive Web Design"
              description="A modern web design approach focused on creating web pages that adapt seamlessly to any device or screen size. This project ensures that content and functionality remain accessible and visually appealing across desktops, tablets, and smartphones. Utilizing flexible layouts, media queries, and scalable assets, it delivers a consistent user experience regardless of the viewing environment."
            />
            <CardServices
              fontIcon="fa-solid fa-user"
              heading="Authentication User Web App"
              description="A secure web application featuring comprehensive user authentication. This project incorporates modern authentication methods such as password-based logins, multi-factor authentication (MFA), and OAuth integration for third-party sign-ins. Designed with user privacy and data protection in mind, ensuring a safe and seamless login experience."
            />
            <CardServices
              fontIcon="fa-solid fa-database"
              heading="Web App with database integration"
              description="A dynamic web application designed with seamless database integration for efficient data storage and retrieval. This project ensures real-time data synchronization, providing users with a responsive and interactive experience. Ideal for applications that require robust data management and user-centric features."
            />
          </div>
        </div>

        {/* halaman spesialisasi */}
        <div className=" mt-60 ">
          <h1 className="text-3xl font-bold mb-8 text-center text-purple-500">
            Our Project
          </h1>
          <div className="">
            <ProjectView />
          </div>
        </div>

        {/* halaman team dan kemampuannya */}

        <div className="bg-purple-950 ">
          <div className="mx-auto w-full max-w-screen-xl mt-40">
            <div className="flex gap-8 px-4 py-6 lg:py-8 justify-evenly">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Brand Center
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Lorem
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      Lorem
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Lorem
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Lorem
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      lorem
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Lorem
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      Lorem.
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Lorem ipsum dolor sit.
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Lorem, ipsum.
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      lorem
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Lorem
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      Lorem
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Lorem
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Lorem
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      lorem
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
