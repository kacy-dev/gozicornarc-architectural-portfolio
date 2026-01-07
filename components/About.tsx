
"use client";
import React from "react";

export default function About() {
  return (
    // <section className="section relative z-0">
      <div className="overflow-hidden px-4 lg:px-40 sm:px-6 md:px-10 py-8 md:py-12 lg:pt-30 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Text Content Section */}
          <div className="space-y-6">
            <div>
              <p className=" relative left-10 text-sm font-poppins font-bold mb-3">A Few Words</p>
              <p className="w-20 sm:w-24 h-1 bg-orange-400 mb-4"></p>
              <h1 className=" relative left-10 text-2xl sm:text-2xl lg:text-2xl font-extrabold font-michroma">
                About Us
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-10">
              <div>
                <h4 className="font-medium mb-2 font-poppins text-sm sm:text-base">
                  Design Excellence
                </h4>
                <p className="text-sm text-muted">
                  Clean lines, smart layouts, and architectural balance.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 font-poppins text-sm sm:text-base">
                  Structural Integrity
                </h4>
                <p className="text-sm text-muted sm:text-right">
                  Engineered for durability, safety, and performance.
                </p>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            
            {/* First Image Block */}
            <div className="flex flex-col space-y-4">
              <div className="relative w-full  mx-auto sm:mx-0">
                <img
                  src="/img/gozie-one.JPG"
                  alt="About Gozicornarc"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <p className="font-poppins text-xs sm:text-sm font-bold text-left shadow-[0_10px_10px_-2px_rgba(0,0,0,0.40)] p-3 rounded">
                Arc Chigozie Solomon is the visionary CEO of GozicornArc Contractors Ltd, leading innovative construction projects across Nigeria.
              </p>
            </div>

            {/* Second Image Block */}
            <div className="flex flex-col space-y-4 sm:flex-col-reverse lg:flex-col">
              <p className="font-poppins text-xs sm:text-sm font-bold text-left sm:text-right shadow-[0_10px_10px_-2px_rgba(0,0,0,0.40)] p-3 rounded order-2 sm:order-1">
                With a passion for quality, integrity, and excellence, he drives the company to deliver exceptional results in every project.
              </p>
              <div className="relative w-full mx-auto sm:mx-0 order-1 sm:order-2">
                <img
                  src="/img/arc.jpg"
                  alt="About Gozicornarc"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    // </section>
  );
}