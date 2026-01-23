"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <div className={!isAdminRoute ? "pt-[env(safe-area-inset-top)]" : ""}>
        {children}
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
}
