
"use client";

import Image from "next/image";
import Link from "next/link";
import Statement from "@/components/Statement";
import BackButton from "@/components/BackButton";

const projects = [
    {
        id: "fern-cabin",
        title: "Fern Cabin",
        category: "Residential",
        location: "Lagos, Nigeria",
        image: "/img/gozie-design.JPG",
        span: "row-span-2",
        description:
            "A calm residential retreat designed to blend architecture seamlessly with its surrounding landscape.",
        gallery: ["/img/gozie-design.JPG", "/img/gozie-design.JPG"],
    },
    {
        id: "desert-house",
        title: "Desert House",
        category: "Residential",
        location: "Abuja, Nigeria",
        image: "/img/gozie-design.JPG",
        span: "row-span-1",
        description:
            "A minimal desert residence responding intelligently to climate, heat, and natural daylight.",
        gallery: ["/img/gozie-design.JPG", "/img/gozie-design.JPG"],
    },
    {
        id: "mountain-chapel",
        title: "Mountain Chapel",
        category: "Religious",
        location: "Enugu, Nigeria",
        image: "/img/gozie-design.JPG",
        span: "row-span-2",
        description:
            "A contemporary chapel grounded in form, silence, and its natural mountain context.",
        gallery: ["/img/gozie-design.JPG", "/img/gozie-design.JPG"],
    },
    {
        id: "eco-villa",
        title: "Eco Villa",
        category: "Residential",
        location: "Enugu, Nigeria",
        image: "/img/gozie-design.JPG",
        span: "row-span-1",
        description:
            "A sustainable villa concept focused on passive cooling, natural ventilation, and ecological balance.",
        gallery: ["/img/gozie-design.JPG", "/img/gozie-design.JPG"],
    },
    {
        id: "urban-loft",
        title: "Urban Loft",
        category: "Commercial",
        location: "Lagos, Nigeria",
        image: "/img/gozie-design.JPG",
        span: "row-span-2",
        description:
            "A compact urban loft designed for flexible living within a dense city fabric.",
        gallery: ["/img/gozie-design.JPG", "/img/gozie-design.JPG"],
    },
    {
        id: "coastal-resort",
        title: "Coastal Resort",
        category: "Hospitality",
        location: "Badagry, Nigeria",
        image: "/img/gozie-design.JPG",
        span: "row-span-2",
        description:
            "A resort masterplan designed to frame ocean views while respecting the coastal ecosystem.",
        gallery: ["/img/gozie-design.JPG", "/img/gozie-design.JPG"],
    },
    {
        id: "tech-campus",
        title: "Tech Campus",
        category: "Commercial",
        location: "Ibadan, Nigeria",
        image: "/img/gozie-design.JPG",
        span: "row-span-1",
        description:
            "A modern technology campus focused on collaboration, daylight, and future-ready workspaces.",
        gallery: ["/img/gozie-design.JPG", "/img/gozie-design.JPG"],
    },
    {
        id: "cultural-center",
        title: "Cultural Center",
        category: "Public",
        location: "Calabar, Nigeria",
        image: "/img/gozie-design.JPG",
        span: "row-span-1",
        description:
            "A civic cultural center celebrating local heritage through contemporary architectural expression.",
        gallery: ["/img/gozie-design.JPG", "/img/gozie-design.JPG"],
    },
];


export default function Projects() {
    return (
        <>
            <BackButton />

            <div
                className="relative w-full h-[60vh] lg:h-[80vh] flex flex-col justify-center
                 bg-fixed bg-cover"
                style={{
                    backgroundImage: "url('/img/gozie-consult.JPG')",
                    backgroundPosition: "center 60%",
                }}
            >
                <div className="absolute inset-0 bg-black/30" />

                <h2 className="text-left pl-15 lg:pl-30 lg:text-3xl font-extrabold font-poppins text-white relative">Completed Projects by</h2>


                <h2
                    className="relative z-10 text-white text-[7vw] lg:text-[8vw]
                   font-extrabold text-center tracking-tight uppercase
                   font-michroma select-none"
                >
                    Gozicornarc
                </h2>

                <h1 className="text-right pr-15 lg:pr-30 lg:text-3xl font-extrabold font-poppins text-white relative">Contractors Limited</h1>
            </div>

            <section className="relative w-full py-24 px-4 lg:px-24">
                <div className="max-w-7xl mx-auto">

                    {/* HEADER */}
                    <div className="mb-20 max-w-3xl">
                        <h2 className="text-2xl lg:text-5xl font-extrabold font-michroma mb-4">
                            Selected Projects
                        </h2>
                        <p className="w-20 sm:w-24 h-1 bg-orange-400 mb-4"></p>

                        <p className="text-neutral-700 text-sm lg:text-base leading-relaxed">
                            A curated selection of architectural works focused on clarity,
                            structure, and spatial intention.
                        </p>
                    </div>

                    {/* GRID */}
                    <div
                        className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
              auto-rows-[280px]
              gap-4
            "
                    >
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                                className={`
                                    relative group overflow-hidden bg-neutral-200
                                    ${project.span === "row-span-2" ? "row-span-1 sm:row-span-2" : "row-span-1"}
                                `}
                            >
                                {/* IMAGE */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* BADGE */}
                                <span
                                    className="
                    absolute top-4 left-4 z-10
                    bg-white/80 backdrop-blur-md
                    text-xs font-semibold uppercase
                    px-3 py-1 rounded-full
                  "
                                >
                                    {project.category}
                                </span>

                                {/* GLASS HOVER */}
                                <div
                                    className="
                    absolute inset-0
                    bg-white/25 backdrop-blur-xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    flex items-end
                  "
                                >
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-white/80">
                                            {project.location}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Statement />
        </>
    );
}

