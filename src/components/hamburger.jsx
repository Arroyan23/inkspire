import { useState } from "react";
import { motion } from "framer-motion";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <div onClick={toggleMenu} className="cursor-pointer z-50 absolute">
        <motion.div
          className="w-8 h-1 bg-white mb-1"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "center" }}
        />
        <motion.div
          className="w-8 h-1 bg-white mb-1"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-8 h-1 bg-white"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "center" }}
        />
      </div>

      {/* Full-screen Menu */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-purple-800 text-white flex items-center justify-center z-10"
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{
          clipPath: isOpen
            ? "circle(150% at 50% 50%)"
            : "circle(0% at 50% 50%)",
        }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        {isOpen && (
          <ul className="text-2xl space-y-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <a href="#fighting">Abilities</a>
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <a href="#services">Services</a>
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <a href="#special">Project</a>
            </li>
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;
