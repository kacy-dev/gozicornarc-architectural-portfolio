
"use client";
import React from "react";

export default function Service() {
    return (
        // <section className="section relative z-0">
        <div className="overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-8 md:py-12 ">
            <div className=" max-w-7xl mx-auto">

                {/* Text Content Section */}
                <div className="space-y-6">
                    <div className="text-center flex-col justify-center items-center mx-auto">
                        <p className=" text-sm font-poppins font-bold mb-3 uppercase">This is what we do</p>
                        <p className="w-24 text-center mx-auto sm:w-24 h-1 bg-orange-400 mb-4"></p>

                        <h1 className=" text-2xl sm:text-2xl lg:text-2xl font-extrabold font-michroma">
                            Services
                        </h1>
                    </div>
                </div>

                {/* Images Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-20">

                

                    {/* Second Image Block */}
                    <div className="flex flex-col sm:flex-col-reverse lg:flex-col">
                        <div className="relative w-full mx-auto sm:mx-0 order-2 sm:order-1">
                            <img
                                src="https://res.cloudinary.com/dgmem5lsz/image/upload/v1767871599/IMG_1379_rnotqc.png"
                                alt="About Gozicornarc"
                                className=" object-cover w-full h-[250]"
                            />
                        </div>
                        <div className=" relative flex text-left lg:text-center md:text-center gap-3 lg:flex-col justify-center items-center h-[200] lg:h-[250] md:h-[250] font-poppins text-xs sm:text-sm font-bold text-center shadow-[0_10px_10px_-2px_rgba(0,0,0,0.40)] p-3 rounded order-2 sm:order-1">
                           <h2 className="absolute top-0 bg-orange-400/40 left-0 font-bold p-2  text-center text-[15px] mb-3 font-poppins">Planning</h2> We translate ideas into clear architectural concepts, detailed layouts, and structured project strategies that guide every stage of development.
                        </div>
                        
                    </div>
                    <div className="flex flex-col sm:flex-col-reverse lg:flex-col">
                        <div className="relative flex text-left lg:text-center md:text-center gap-3 lg:flex-col justify-center items-center h-[200] lg:h-[250] md:h-[250] font-poppins text-xs sm:text-sm font-bold text-left sm:text-right shadow-[0_10px_10px_-2px_rgba(0,0,0,0.40)] p-3 rounded order-2 sm:order-1">
                           <h2 className="absolute top-0 bg-orange-400/40 left-0 font-bold p-2  text-center text-[15px] mb-3 font-poppins">Consultation</h2>  We provide expert guidance, feasibility analysis, and design advice to help clients make informed and confident project decisions.
                        <div className="relative w-full mx-auto sm:mx-0 order-1 sm:order-2">
                            <img
                                src="/img/gozie-consult.jpg"
                                alt="About Gozicornarc"
                                className="object-cover w-full h-[250]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col  sm:flex-col-reverse lg:flex-col">
                        <div className="relative w-full mx-auto sm:mx-0 order-2 sm:order-1">
                            <img
                                src="/img/build.JPG"
                                alt="About Gozicornarc"
                                className=" object-cover w-full h-[250]"
                            />
                        </div>
                        <div className=" relative flex text-left lg:text-center md:text-center gap-3 lg:flex-col justify-center items-center h-[200] lg:h-[250] md:h-[250] font-poppins text-xs sm:text-sm font-bold text-left sm:text-right shadow-[0_10px_10px_-2px_rgba(0,0,0,0.40)] p-3 rounded order-2 sm:order-1">
                           <h2 className="absolute top-0 bg-orange-400/40 left-0 font-bold p-2  text-center text-[15px] mb-3 font-poppins">Building</h2>  We bring designs to life through precise execution, quality craftsmanship, and strict attention to structural and material standards.
                    </div>

                </div>

            </div>
        </div>
        // </section>
    );
}