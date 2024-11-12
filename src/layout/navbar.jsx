import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import inkSpace from "../img/watsap.png";
import { motion, useAnimation } from "framer-motion";
import HamburgerMenu from "../components/hamburger";

export const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolling) {
      controls.start({ backgroundColor: "#190019", opacity: 0.7 });
    } else {
      controls.start({ backgroundColor: "transparent", opacity: 0.8 });
    }
  }, [scrolling, controls]);

  return (
    <>
      <motion.div
        className="text-white flex justify-between px-32 py-3 items-center pr-44 transition-all duration-300 z-50"
        animate={controls}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundSize: "200% 100%",
        }}
      >
        <div className="flex items-center space-x-6">
          <div className="h-12 w-12 flex items-center justify-center relative">
            <img
              src={inkSpace}
              alt=""
              className="absolute transform scale-[2] top-3 w-full h-full object-cover"
            />
          </div>

          <h1 className="font-semibold text-xl font-nunito tracking-[0.6rem]">
            INKSPIRE
          </h1>
        </div>
        {/* tengah */}
        <div className="flex space-x-4">
          <HamburgerMenu />
        </div>
      </motion.div>
      <Outlet />
    </>
  );
};
