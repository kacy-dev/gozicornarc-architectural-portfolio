"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroImages } from "@/components/heroImages";
import { ArrowBigRight } from "lucide-react";

const SLIDE_INTERVAL = 6000;
const FADE_DURATION = "duration-[2000ms]";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  /**
   * Preload images to avoid decode delays
   */
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  /**
   * Rotation logic
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] lg:h-screen md:h-screen w-full overflow-hidden">
      {/* ================= Fallback Image (Always Visible) ================= */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImages[0]})` }}
      />

      {/* ================= Animated Slides ================= */}
      {heroImages.map((img, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={img}
            aria-hidden="true"
            className={`
              absolute inset-0 bg-cover bg-center
              transition-opacity ${FADE_DURATION} ease-in-out
              ${isActive ? "opacity-100 z-10" : "opacity-0 z-[1]"}
            `}
            style={{ backgroundImage: `url(${img})`, objectFit: "cover" }}
          />
        );
      })}

      {/* ================= Overlay ================= */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-20" />

      {/* ================= Content ================= */}
      <div className="relative z-30 mx-auto h-full flex items-center px-4">
        <div className=" justify-center items-center text-white relative">

          <div>
            <p className="text-sm md:text-lg lg:text-xl uppercase mb-4 tracking-widest font-semibold font-anta">
              Gozicornarc Contractors Ltd
            </p>
            <div className=" ">
              <p className="w-24 h-1 bg-orange-400 font-anta mb-2"></p>
              <span className="font-anta">Architect with difference</span>
            </div>
          </div>


          <h1 className="text-[42px]  text-center md:text-[100px] lg:text-[175px] font-extrabold leading-tight mb-8 font-michroma">
            Gozicornarc
          </h1>

          <Link href={"/about"} className=" flex justify-between items-center w-full relative right-0 -bottom-40 md:flex-end lg:max-w-[400] md:max-w-[300] px-5 h-10 bg-white fit-content -z-0 ">
            <span className="text-black font-poppins text-sm ">
              Read More
            </span>
            <ArrowBigRight className="w-10 h-5 text-black"   />
          </Link>
        </div>
      </div>
    </section>
  );
}
