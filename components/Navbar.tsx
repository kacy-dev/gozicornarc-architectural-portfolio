"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, Users, ToolCaseIcon, PhoneCall } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
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
    { href: "/projects", label: "PROJECTS", icon: <ToolCaseIcon className="w-5 h-5" /> },
    { href: "/contact", label: "CONTACT", icon: <PhoneCall className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* ================= Desktop Navbar ================= */}
      <nav className="hidden md:flex fixed top-3 left-0 w-full z-[9999] py-3 px-4 items-center justify-between">
        <h1 className="text-xl font-bold font-anta"></h1>

        <div className="relative flex gap-8 px-10 py-4 transition-all duration-300 bg-orange-400 clip-polygon-glass">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-normal text-white font-anta transition-colors duration-300
                  after:absolute after:left-0 after:top-0 after:h-1 after:w-full after:bg-orange-400
                  after:origin-left after:transition-transform after:duration-300
                  ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
                  hover:after:scale-x-100
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ================= Mobile Tab Bar ================= */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#14141e]/90 backdrop-blur-md text-white px-6 py-3 flex justify-around items-center z-[9999] border-t border-neutral-800">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center text-[10px] text-white relative"
            >
              {item.icon}
              <span className="text-[9px] mt-1">{item.label}</span>
              {/* orange indicator on top of icon */}
              {isActive && (
                <span className="absolute -top-3 w-6 h-1 bg-orange-400 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
