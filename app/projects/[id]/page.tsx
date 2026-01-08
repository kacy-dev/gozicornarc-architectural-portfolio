
"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";

const projects = [
  {
    id: "mountain-chapel",
    title: "Mountain Chapel",
    category: "Religious Architecture",
    location: "Colorado, USA",
    description:
      "A contemporary chapel grounded in form, silence, and context. Designed to respond subtly to landscape, light, and spiritual experience.",
    gallery: [
      { src: "/img/rear-1.JPG", tag: "Exterior" },
      { src: "/img/rear.jpg", tag: "Side View" },
      { src: "/img/rear.jpg", tag: "Rear View" },
      { src: "/img/rear.jpg", tag: "Rear Detail" },
      { src: "/img/rear.jpg", tag: "Interior" },
      { src: "/img/rear.jpg", tag: "Interior" },
    ],
  },

  {
    id: "fern-cabin",
    title: "Fern Cabin",
    category: "Residential Architecture",
    location: "Oregon, USA",
    description:
      "A calm residential retreat that dissolves the boundary between architecture and forest landscape.",
    gallery: [
      { src: "/img/rear.jpg", tag: "Exterior" },
      { src: "/img/rear.jpg", tag: "Side View" },
      { src: "/img/rear.jpg", tag: "Rear View" },
      { src: "/img/rear.jpg", tag: "Rear View" },
      { src: "/img/rear.jpg", tag: "Interior" },
      { src: "/img/rear.jpg", tag: "Interior" },
    ],
  },

  {
    id: "desert-house",
    title: "Desert House",
    category: "Residential Architecture",
    location: "Arizona, USA",
    description:
      "A minimal desert residence shaped by climate, shadows, and passive cooling strategies.",
    gallery: [
      { src: "/img/rear.jpg", tag: "Exterior" },
      { src: "/img/rear.jpg", tag: "Side View" },
      { src: "/img/rear.jpg", tag: "Rear View" },
      { src: "/img/rear.jpg", tag: "Rear View" },
      { src: "/img/rear.jpg", tag: "Interior" },
      { src: "/img/rear.jpg", tag: "Interior" },
    ],
  },

  {
    id: "eco-villa",
    title: "Eco Villa",
    category: "Sustainable Architecture",
    location: "Bali, Indonesia",
    description:
      "A sustainable villa focused on natural ventilation, material honesty, and ecological balance.",
    gallery: [
      { src: "/img/exterior.jpg", tag: "Exterior" },
      { src: "/img/side.jpg", tag: "Side View" },
      { src: "/img/rear.jpg", tag: "Rear View" },
      { src: "/img/rear-1.jpg", tag: "Rear Detail" },
      { src: "/img/interior.jpg", tag: "Interior" },
      { src: "/img/interior-1.jpg", tag: "Interior" },
    ],
  },

  {
    id: "urban-loft",
    title: "Urban Loft",
    category: "Commercial / Residential",
    location: "New York, USA",
    description:
      "A compact urban loft designed for flexibility, daylight penetration, and spatial efficiency.",
    gallery: [
      { src: "/img/exterior.jpg", tag: "Exterior" },
      { src: "/img/side.jpg", tag: "Side View" },
      { src: "/img/interior.jpg", tag: "Interior" },
      { src: "/img/interior-1.jpg", tag: "Interior" },
      { src: "/img/interior-2.jpg", tag: "Interior" },
    ],
  },

  {
    id: "coastal-resort",
    title: "Coastal Resort",
    category: "Hospitality Architecture",
    location: "Malibu, USA",
    description:
      "A resort development designed to frame ocean views while respecting the coastal ecosystem.",
    gallery: [
      { src: "/img/exterior.jpg", tag: "Exterior" },
      { src: "/img/rear.jpg", tag: "Rear View" },
      { src: "/img/rear-2.jpg", tag: "Rear View" },
      { src: "/img/side.jpg", tag: "Side View" },
      { src: "/img/interior.jpg", tag: "Interior" },
      { src: "/img/interior-1.jpg", tag: "Interior" },
    ],
  },

  {
    id: "tech-campus",
    title: "Tech Campus",
    category: "Commercial Architecture",
    location: "San Francisco, USA",
    description:
      "A future-ready technology campus promoting collaboration, openness, and environmental performance.",
    gallery: [
      { src: "/img/rear-3.jpg", tag: "Exterior" },
      { src: "/img/rear-3.jpg", tag: "Side View" },
      { src: "/img/rear-3.jpg", tag: "Rear View" },
      { src: "/img/rear-3.jpg", tag: "Rear Detail" },
      { src: "/img/rear-3.jpg", tag: "Interior" },
      { src: "/img/rear-3.jpg", tag: "Interior" },
    ],
  },

  {
    id: "cultural-center",
    title: "Cultural Center",
    category: "Public Architecture",
    location: "Copenhagen, Denmark",
    description:
      "A civic landmark celebrating culture through light, openness, and contemporary form.",
    gallery: [
      { src: "/img/exterior.jpg", tag: "Exterior" },
      { src: "/img/side.jpg", tag: "Side View" },
      { src: "/img/rear.jpg", tag: "Rear View" },
      { src: "/img/interior.jpg", tag: "Interior" },
      { src: "/img/interior-1.jpg", tag: "Interior" },
    ],
  },
];


export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  const [activeFilter, setActiveFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const filteredGallery =
    activeFilter === "All"
      ? project.gallery
      : project.gallery.filter((img) =>
          img.tag.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section className="bg-white px-4 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16">

        {/* STICKY INFO */}
        <aside className="lg:sticky lg:top-28 h-fit">
          <span className="text-xs tracking-widest uppercase font-poppins bg-orange-400/20 p-2 rounded-full">
            {project.category}
          </span>

          <h1 className="text-3xl font-extrabold font-michroma mt-4">
            {project.title}
          </h1>

          <p className="text-neutral-600 mt-3">{project.location}</p>

          <p className="mt-6 text-neutral-700 leading-relaxed">
            {project.description}
          </p>

          {/* FILTERS */}
          <div className="mt-10 flex gap-3 flex-wrap">
            {["All", "Exterior", "Interior"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs rounded-full border transition ${
                  activeFilter === filter
                    ? "bg-black text-white border-black"
                    : "border-neutral-300 text-neutral-700 hover:border-black"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </aside>

        {/* MASONRY GALLERY */}
        <div className="columns-1 md:columns-2 gap-2 space-y-2">
          {filteredGallery.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => setActiveImage(item)}
            >
              <Image
                src={item.src}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <Image
              src={activeImage.src}
              alt="Project Image"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain rounded-xl"
            />

            <span className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-full">
              {activeImage.tag}
            </span>

            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
