


// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, PhoneCall, HomeIcon, Users, ToolCaseIcon, Notebook, } from "lucide-react"; // Optional: if you have lucide installed for icons

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isTop, setIsTop] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsTop(window.scrollY < 50);
//     };

//     if (window.innerWidth > 600) {
//       return () => window.removeEventListener("scroll", handleScroll);
//     }

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = [
//     { href: "/", label: "HOME", icon: <HomeIcon className="w-4 h-4" /> },
//     { href: "/about", label: "ABOUT", icon: <Users className="w-4 h-4" /> },
//     { href: "/blog", label: "BLOG", icon: <PhoneCall className="w-4 h-4" /> },
//     { href: "/service", label: "SERVICES", icon: <ToolCaseIcon className="w-4 h-4" /> },
//     { href: "/contact", label: "CONTACT", icon: <Notebook className="w-4 h-4" /> },
//   ];

//   return (
//     <>
//       {isTop && (
//         <nav className="fixed top-3 left-0 w-full  z-50 text-white py-3 px-3 lg:px-4 md:px-0 sm:px-0  mx-auto  rounded-full flex items-center justify-between lg:justify-between md:justify-between sm:justify-between">
//           <h1 className="text-xl font-bold font-anta">
//             {/* <Link href="/">Dorex</Link> */}
//           </h1>

//           {/* Desktop Menu */}
//           {/* <div className="hidden md:flex gap-8">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="text-sm font-normal font-anta"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div> */}

//           <div className="hidden md:flex relative">
//             {/* Polygon Glass Background */}
//             <div
//               className="
//       absolute inset-0
//       bg-white/10 backdrop-blur-xl
//       border border-white/20
//       clip-polygon-glass
//     "
//             />

//             {/* Nav Links */}
//             <div className="relative z-10 flex gap-8 px-10 py-4">
//               {menuItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="
//           text-sm font-normal font-anta
//           text-white
//           hover:text-white/80
//           transition
//         "
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>


//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Get a Quote Button */}

//         </nav>
//       )}

//       {!isTop && (
//         <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#14141e] via-[#14141e] to-[#14141e] backdrop-blur-3xl text-white px-6 py-3 flex justify-around items-center md:hidden z-50 border-t border-neutral-800 transition-all duration-300">
//           <Link href="/" className="flex flex-col items-center text-[10px]  text-[#e77e22]">
//             <HomeIcon className="text-gray-400 w-5  h-5 " />
//             HOME
//           </Link>
//           <Link href="/about" className="flex flex-col items-center text-[10px]  text-[#e77e22] ">
//             <Users className="text-gray-400 w-5  h-5" />
//             AboutUs
//           </Link>
//           <Link href="/blog" className="flex flex-col items-center text-[10px] text-[#e77e22]">
//             <Notebook className="text-gray-400 w-5  h-5" />
//             Services
//           </Link>
//           <Link href="/service" className="flex flex-col items-center text-[10px] text-[#e77e22]">
//             <ToolCaseIcon className="text-gray-400 w-5  h-5" />
//             Service
//           </Link>
//           <Link href="/contact" className="flex flex-col items-center text-[10px] text-[#e77e22]">
//             <PhoneCall className="text-gray-400 w-5  h-5" />
//             Contact
//           </Link>
//         </div>
//       )}

//       {/* Mobile Dropdown */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="md:hidden overflow-hidden bg-[#14141e] px-6 mt-10 py-4 space-y-4 text-white rounded-b-xl"
//           >
//             {menuItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className="flex text-[12px] justify-start gap-2 items-center py-2"
//               >
//                 {item.icon}
//                 {item.label}
//               </Link>
//             ))}
//             <Link href="/contact">
//               <button className="mt-4 w-full bg-[#FE861D] text-white text-xs px-4 py-2 rounded-full font-semibold">
//                 GET A QUOTE
//               </button>
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// "use client";
// import Link from "next/link";
// import { HomeIcon, Users, ToolCaseIcon, Notebook, PhoneCall } from "lucide-react";

// export default function Navbar() {
//   const menuItems = [
//     { href: "/", label: "HOME", icon: <HomeIcon className="w-5 h-5" /> },
//     { href: "/about", label: "ABOUT", icon: <Users className="w-5 h-5" /> },
//     { href: "/blog", label: "BLOG", icon: <Notebook className="w-5 h-5" /> },
//     { href: "/service", label: "SERVICES", icon: <ToolCaseIcon className="w-5 h-5" /> },
//     { href: "/contact", label: "CONTACT", icon: <PhoneCall className="w-5 h-5" /> },
//   ];

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <nav className="hidden md:flex fixed top-3 left-0 w-full z-[9999] text-white py-3 px-4 mx-auto rounded-full items-center justify-between">
//         <h1 className="text-xl font-bold font-anta"></h1>
//         <div className="relative flex gap-8 px-10 py-4">
//           {menuItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="text-sm font-normal font-anta text-white hover:text-white/80 transition"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       </nav>

//       {/* Mobile Tab Bar - Always visible */}
//       <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#14141e]/90 backdrop-blur-md text-white px-6 py-3 flex justify-around items-center z-[9999] border-t border-neutral-800">
//         {menuItems.map((item) => (
//           <Link
//             key={item.href}
//             href={item.href}
//             className="flex flex-col items-center text-[10px] text-[#e77e22]"
//           >
//             {item.icon}
//             <span>{item.label}</span>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  Users,
  ToolCaseIcon,
  Notebook,
  PhoneCall,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "HOME", icon: <HomeIcon className="w-5 h-5" /> },
    { href: "/about", label: "ABOUT", icon: <Users className="w-5 h-5" /> },
    { href: "/blog", label: "BLOG", icon: <Notebook className="w-5 h-5" /> },
    {
      href: "/service",
      label: "SERVICES",
      icon: <ToolCaseIcon className="w-5 h-5" />,
    },
    {
      href: "/contact",
      label: "CONTACT",
      icon: <PhoneCall className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* ================= Desktop Navbar ================= */}
      <nav className="hidden md:flex fixed top-3 left-0 w-full z-[9999] py-3 px-4 items-center justify-between">
        <h1 className="text-xl font-bold font-anta"></h1>

        <div
          
          className="relative flex gap-8 px-10 py-4 transition-all duration-300 bg-orange-400 clip-polygon-glass"
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative text-sm font-normal text-white font-anta transition-colors duration-300
               

                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-full after:bg-current
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300
                hover:after:scale-x-100
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* ================= Mobile Tab Bar ================= */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#14141e]/90 backdrop-blur-md text-white px-6 py-3 flex justify-around items-center z-[9999] border-t border-neutral-800">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center text-[10px] text-[#e77e22]"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
