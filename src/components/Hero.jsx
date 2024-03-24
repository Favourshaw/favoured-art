import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const frameY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <div
      ref={ref}
      className="top-0 w-full h-screen overflow-hidden relative grid place-items-center"
    >
      {" "}
      <div className="absolute z-50 w-full h-full top-0 left-0 bg-gradient-to-b from-[transparent] via-[transparent] to-[#737468e8]"></div>
      <div
        className="absolute inset-0 z-30"
        style={{
          backgroundImage: `url(src/assets/home/moon-bg.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></div>
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(src/assets/home/frame2.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: frameY,
        }}
      ></motion.div>
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-center text-[white] text-7xl md:text-9xl relative z-10 font-rubik"
      >
        FAVOURED ARTS
      </motion.h1>
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(src/assets/home/iosplanet.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: frameY,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(src/assets/home/earth.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(src/assets/home/paint2.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: frameY,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(src/assets/home/newplanet.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      ></motion.div>
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(src/assets/home/stars.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></div>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(src/assets/home/galaxy.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      ></motion.div>
    </div>
  );
};

export default Hero;
