"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { User, Settings, LogOut } from "lucide-react";
import Link from "next/link";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="w-11 h-11 rounded-full bg-brand text-white flex items-center justify-center font-bold cursor-pointer"
      >
        A
      </div>

      {open && (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute right-0 mt-3 w-52 bg-white shadow-xl rounded-xl overflow-hidden z-50"
        >
          <Link href="/admin/profile" className="flex items-center gap-3 p-3 hover:bg-orange-50">
            <User size={16} className="text-brand" /> View Profile
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 p-3 hover:bg-orange-50">
            <Settings size={16} className="text-brand" /> Settings
          </Link>
          <button className="flex w-full items-center gap-3 p-3 hover:bg-orange-50">
            <LogOut size={16} className="text-brand" /> Logout
          </button>
        </motion.div>
      )}
    </div>
  );
}
