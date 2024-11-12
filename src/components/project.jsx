// halaman untuk project
import agentOne from "../img/1pro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import woocommerce from "../img/ecommerce.png";

export const ProjectView = () => {
  return (
    <>
      <div className="flex ">
        <div
          className="relative mt-5 group cursor-pointer"
          onClick={() => window.open("https://fipoxygen.site/")}
        >
          <img
            src={agentOne}
            alt=""
            className="w-[40rem] h-[30rem] transition-opacity duration-300 group-hover:opacity-50 "
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center bg-purple-950 justify-center opacity-0 group-hover:opacity-80  transition-opacity duration-300 object-cover">
            <div className="max-w-xs">
              <h1 className="text-3xl font-semibold">
                Landing Page with Smooth Animation
              </h1>
              <p className="mt-5">
                Experience a visually appealing landing page designed with
                smooth animations to enhance user engagement. This page is
                optimized for performance, ensuring animations are fluid and do
                not compromise loading speed. Perfect for showcasing products,
                services, or any content with a modern and dynamic touch.
              </p>
              <div className="flex items-center space-x-2 mt-5">
                <div className="flex items-center space-x-2">
                  <p className="underline">Visit Website</p>
                  <FontAwesomeIcon
                    icon="fa-solid fa-arrow-right"
                    className="animate-bounce"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-5 group cursor-pointer">
          <img
            src={woocommerce}
            alt=""
            className="w-[40rem] h-[30rem] transition-opacity duration-300 group-hover:opacity-50"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center hover:bg-purple-950 justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300">
            <div className="max-w-xs">
              <h1 className="text-3xl font-semibold">
                E Commerce With Cart and Authentication
              </h1>
              <p className="mt-5">
                A comprehensive e-commerce platform that enables users to browse
                products, add them to their cart, and securely complete their
                purchase. With built-in user authentication, customers can
                create accounts, log in, and track their order history, ensuring
                a personalized and secure shopping experience
              </p>
              {/* untuk bagian button */}
              <div className="flex items-center space-x-2 mt-5">
                <FontAwesomeIcon
                  icon="fa-brands fa-github"
                  className="text-4xl"
                />
                <div className="flex items-center space-x-2">
                  <p className="underline">Visit Github</p>
                  <FontAwesomeIcon
                    icon="fa-solid fa-arrow-right"
                    className="animate-bounce"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-5 group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1483817101829-339b08e8d83f?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[40rem] h-[30rem] transition-opacity duration-300 group-hover:opacity-50 "
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="absolute inset-0 flex items-center bg-purple-950 justify-center opacity-0 group-hover:opacity-80  transition-opacity duration-300"
            onClick={() =>
              window.open("https://github.com/Arroyan23/Fipoxygen-Update")
            }
          >
            <div className="max-w-xs">
              <h1 className="text-4xl font-semibold">
                CRUD With Mongodb, Express, ReactJS, NodeJs
              </h1>
              <p className="mt-5">
                A full-stack web application implementing CRUD (Create, Read,
                Update, Delete) operations using the MERN stack. This project
                demonstrates efficient data handling with MongoDB, robust
                server-side logic with Express and NodeJS, and an interactive
                user interface powered by ReactJS. Ideal for building scalable
                and dynamic web applications.
              </p>
              <div className="flex items-center space-x-2 mt-5">
                <FontAwesomeIcon
                  icon="fa-brands fa-github"
                  className="text-4xl"
                />
                <div className="flex items-center space-x-2">
                  <p className="underline">Visit Github</p>
                  <FontAwesomeIcon
                    icon="fa-solid fa-arrow-right"
                    className="animate-bounce"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
