// halaman untuk komponen kartu
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const CardServices = ({ fontIcon, heading, description }) => {
  return (
    <div className="flex items-center justify-center shadow-2xl shadow-black rounded-xl">
      <motion.div
        className="max-w-sm bg-gradient-to-t from-black/40 via-purple/60 to-purple-800 p-6 min-h-[30rem] rounded-xl"
        initial={{
          opacity: 0,
          y: "1rem",
        }}
        whileInView={{
          opacity: 1,
          y: "0",
        }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center mb-10">
          <FontAwesomeIcon
            icon={fontIcon}
            className="text-4xl bg-purpleLight p-3 rounded-xl shadow-lg shadow-purpleCustom"
            aria-label="Mobile Screen Icon"
          />
        </div>
        <h1 className="text-3xl font-semibold mb-3 text-center">{heading}</h1>
        <p className="text-md text-center text-sm  font-nunito font-bold">
          {description}
        </p>
      </motion.div>
    </div>
  );
};
