import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const PageScroll = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });
  const mainControls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );

  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );

  return (
    <main>
      {/* TEXT SCROLL ANIMATION */}
      <section ref={textRef} className="mb-10 flex flex-col gap-10">
        <motion.h1
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="text-center text-5xl tracking-wide text-shade-100"
        >
          About Us
        </motion.h1>

        <motion.p
          style={{ translateX: paragraphOneValue }}
          className="mx-auto text-xl font-thin text-shade-100"
        >
          We are a creative team dedicated to providing innovative and
          accessible digital solutions. Since our inception, we have focused on
          helping businesses from various sectors leverage the latest technology
          to improve efficiency and enhance user experience. We believe that
          technology is not just about code and design, but about making a
          positive, tangible impact in everyday life. Our team brings diverse
          expertise in software development, UI/UX design, and tech consulting,
          ensuring that we are equipped to meet the needs of any project.
        </motion.p>
        <motion.p
          style={{ translateX: paragraphTwoValue }}
          className="mx-auto text-xl font-thin text-shade-100"
        >
          We are committed to delivering products and services that are not only
          functional but also intuitive and user-friendly. What sets us apart is
          our client-centered approach, always ensuring that the solutions we
          provide are tailored to align with their goals. We believe that every
          business, big or small, deserves the best technology solutions to help
          them succeed. That’s why we’re ready to partner with you to bring your
          digital vision to life in the most efficient and cost-effective way.
        </motion.p>
      </section>
    </main>
  );
};

export default PageScroll;
