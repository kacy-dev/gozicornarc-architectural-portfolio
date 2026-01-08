
"use client";
import React, { useState, useRef } from "react";
import { Plus } from "lucide-react";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import Statement from "@/components/Statement";

const APPROACH_DATA = [
  {
    title: "Planning & Strategy",
    description:
      "We begin every project with a comprehensive assessment of your needs, site conditions, and long-term vision. This ensures a clear roadmap from concept to completion.",
  },
  {
    title: "Design & Innovation",
    description:
      "Our design team creates functional, beautiful, and sustainable solutions, balancing aesthetics with practicality and cutting-edge architectural trends.",
  },
  {
    title: "Execution & Delivery",
    description:
      "With precision project management and quality control, we ensure every phase is executed on time, within budget, and to the highest standard.",
  },
  {
    title: "Post-Project Support",
    description:
      "We provide follow-up support, maintenance guidance, and ensure client satisfaction long after project completion.",
  },
];

const CEO_IMAGES = [
  "/img/gozie-plan.PNG",
  "/img/gozie-design.jpg",
  "/img/gozie-execute.jpg",
  "/img/gozie-support.jpg",
];

export default function AboutExtendedPremium() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>

      <div
        className="relative w-full h-[60vh] lg:h-[80vh] flex flex-col justify-center
                 bg-fixed bg-cover"
        style={{
          backgroundImage: "url('/img/gozie-consult.JPG')",
          backgroundPosition: "center 60%",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />

        <h2 className="text-left pl-15 lg:pl-30 lg:text-3xl font-extrabold font-poppins text-white relative">About</h2>


        <h2
          className="relative z-10 text-white text-[7vw] lg:text-[8vw]
                   font-extrabold text-center tracking-tight uppercase
                   font-michroma select-none"
        >
          Gozicornarc
        </h2>

        <h1 className="text-right pr-15 lg:pr-30 lg:text-3xl font-extrabold font-poppins text-white relative">Contractors Limited</h1>
      </div>

      <About />

      <section className="relative bg-neutral-50 overflow-hidden lg:pt-20 pt-8 md:pt-12">

        {/* -------------------- CEO Image Background for Approach -------------------- */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 pointer-events-none flex flex-wrap justify-center items-center gap-8 opacity-10"
        >
          {CEO_IMAGES.concat(CEO_IMAGES).map((src, i) => (
            <div
              key={i}
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-105"
              style={{
                transform: `rotate(${(-15 + i * 10) % 30}deg) translate(${i * 15}px, ${i * -10
                  }px)`,
              }}
            >
              <img
                src={src}
                alt={`CEO ${i}`}
                className="w-full h-full object-cover object-top rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* -------------------- Watermark Layer -------------------- */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 pointer-events-none select-none"
        >
          <div className="absolute inset-0 flex flex-wrap gap-x-20 gap-y-16 justify-center items-center opacity-[0.03] rotate-[-20deg]">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="text-[10rem] font-nosifer font-extrabold tracking-widest text-white whitespace-nowrap"
              >
                GOZICORNARC
              </span>
            ))}
          </div>
        </div>

        {/* -------------------- Header -------------------- */}
        <div className="relative z-10 max-w-3xl mx-auto text-center mb-16 px-4 sm:px-6 lg:px-0 ">
          <p className="text-sm font-bold text-orange-500 mb-2 font-poppins">
            Our Philosophy
          </p>
          <p className="w-24 text-center mx-auto sm:w-24 h-1 bg-orange-400 mb-4"></p>
          <h2 className="text-2xl lg:text-2xl sm:text-2xl font-extrabold font-michroma">
            Our Approach
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base">
            At GozicornArc, every step of the journey is deliberate. From strategy
            to execution, we combine creativity, precision, and innovation to
            deliver world-class architecture.
          </p>
        </div>

        {/* -------------------- Zig-Zag Approach Section -------------------- */}
        <div className="relative z-10 flex flex-col gap-12 pb-8 lg:pb-20 md:pb-12 lg:px-40 px-4 md:px-10 sm:px-5 mx-auto">
          {APPROACH_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 lg:gap-16`}
              >
                {/* Image Block */}
                <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-96">
                  <img
                    src={CEO_IMAGES[index]}
                    alt={`Approach ${item.title}`}
                    className="w-full h-full object-cover object-center rounded-xl shadow-lg"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded shadow-md text-sm sm:text-base">
                    Arc Chigozie Solomon
                  </div>
                </div>

                {/* Accordion Block */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="border border-neutral-200 rounded-lg shadow-sm overflow-hidden bg-white">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left text-sm sm:text-base font-medium text-neutral-800 hover:bg-neutral-50 transition"
                    >
                      {item.title}
                      <span
                        className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"
                          }`}
                      >
                        <Plus size={20} />
                      </span>
                    </button>

                    {/* Native Smooth Accordion */}
                    <div
                      // ref={(el) => (contentRefs.current[index] = el)}
                      ref={(el) => {
                        contentRefs.current[index] = el
                      }}
                      style={{
                        maxHeight: isOpen
                          ? contentRefs.current[index]?.scrollHeight
                          : 0,
                        transition: "max-height 0.35s ease-in-out",
                        overflow: "hidden",
                      }}
                      className="px-6 pb-6 text-neutral-600 text-sm font-poppins"
                    >
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <FAQ />

        {/* -------------------- Our Goals Timeline -------------------- */}
        <div className="relative z-10 max-w-6xl pb-20 pt-20 mx-auto px-4 sm:px-6 lg:px-20">
          <h3 className="text-2xl lg:text-2xl sm:text-4xl font-extrabold font-michroma text-center mb-3">
            Our Goals
          </h3>
          <p className="w-24 text-center mx-auto sm:w-24 h-1 bg-orange-400 mb-10"></p>

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-0">
            <div className="hidden md:block absolute top-10 bottom-10 left-1/2 w-1 bg-orange-400 transform -translate-x-1/2"></div>

            {[
              {
                title: "Innovative Design",
                desc: "Push architectural boundaries while staying functional and sustainable.",
              },
              {
                title: "Quality Execution",
                desc: "Ensure structural integrity, safety, and flawless implementation.",
              },
              {
                title: "Client Satisfaction",
                desc: "Build lasting relationships through transparency, reliability, and exceptional results.",
              },
            ].map((goal, i) => (
              <div
                key={i}
                className="relative bg-white rounded-lg shadow-md border border-neutral-200 p-6 text-center md:text-left md:w-1/3 "
              >
                <div className="absolute -top-4 left-1/2 md:left-4 transform -translate-x-1/2 md:translate-x-0 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <h4 className="font-bold text-lg mb-2 font-poppins">{goal.title}</h4>
                <p className="text-sm text-neutral-600 font-poppins ">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>



        <Testimonial />

        <Statement />
      </section>
    </>
  );
}
