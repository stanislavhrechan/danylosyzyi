"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Steps from "./Steps";
import { useEffect, useRef, useState } from "react";

const images = [
  "/images/portfolio/2.jpg",
  "/images/portfolio/11.jpg",
  "/images/portfolio/4.jpg",
  "/images/portfolio/9.jpg",
  "/images/portfolio/5.jpg",
  "/images/portfolio/6.jpg",
  "/images/portfolio/7.jpg",
  "/images/portfolio/10.jpg",
  "/images/portfolio/11.jpg",
  "/images/portfolio/4.jpg",
  "/images/portfolio/8.jpg",
  "/images/portfolio/5.jpg",
  "/images/portfolio/6.jpg",
  "/images/portfolio/10.jpg",
  "/images/portfolio/9.jpg",
  "/images/portfolio/4.jpg",
];

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
  className?: string;
};

export default function ParallaxImage() {
  const gallery = useRef<HTMLDivElement | null>(null);

  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  // Desktop
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 2]
  );

  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 3.3]
  );

  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 1.25]
  );

  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 3]
  );

  const mobileY1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 0.4]
  );

  const mobileY2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * 0.6]
  );

  useEffect(() => {
    const resize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <section ref={gallery} className="relative h-[120vh] overflow-hidden bg-[#181818] md:h-[175vh]" > {/* ================= MOBILE ================= */} <div className="relative flex h-full gap-[3vw] overflow-hidden p-[3vw] md:hidden"> <Column images={[ images[0], images[1], images[2], images[3], ]} y={mobileY1} className="top-[-15%] w-1/2" /> <Column images={[ images[4], images[5], images[6], images[7], ]} y={mobileY2} className="top-[-30%] w-1/2" /> </div> {/* ================= DESKTOP ================= */} <div className="relative hidden h-full gap-[2vw] overflow-hidden p-[2vw] md:flex"> <Column images={[ images[0], images[1], images[2], images[3], ]} y={y1} className="top-[-45%] w-1/4" /> <Column images={[ images[4], images[5], images[6], images[7], ]} y={y2} className="top-[-95%] w-1/4" /> <Column images={[ images[8], images[9], images[10], images[11], ]} y={y3} className="top-[-45%] w-1/4" /> <Column images={[ images[12], images[13], images[14], images[15], ]} y={y4} className="top-[-75%] w-1/4" /> </div> </section>
      <Steps />
    </>
  );
}

function Column({
  images,
  y,
  className = "",
}: ColumnProps) {
  return (
    <motion.div
      style={{ y }}
      className={`
        relative
        flex
        h-full
        flex-col
        gap-[3vw]
        ${className}
      `}
    >
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className="
            relative
            aspect-[3/4]
            w-full
            overflow-hidden
            md:aspect-[3/4]
          "
        >
          <img
            src={src}
            alt=""
            draggable={false}
            className="
              pointer-events-none
              block
              h-full
              w-full
              object-cover
            "
          />
        </div>
      ))}
    </motion.div>
  );
}
