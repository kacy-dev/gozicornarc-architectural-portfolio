"use client";
import { motion } from "framer-motion";
import { LayoutGrid, Briefcase, Users, ListTodo, Settings, LogOut } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", icon: LayoutGrid, href: "/admin/dashboard" },
    { name: "Projects", icon: Briefcase, href: "/admin/projects" },
    { name: "Clients", icon: Users, href: "/admin/clients" },
    { name: "Tasks", icon: ListTodo, href: "/admin/tasks" },
  ];

  return (
    <motion.aside
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 bg-white border-r min-h-screen px-6 py-8 hidden md:flex flex-col"
    >
      <h1 className="text-2xl font-bold text-brand mb-10">Gozicornarc</h1>

      <nav className="space-y-3">
        {links.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 transition"
          >
            <item.icon size={20} className="text-brand" />
            <span className="font-medium text-gray-700">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto space-y-3">
        <Link className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50" href="/admin/settings">
          <Settings size={20} className="text-brand" />
          Settings
        </Link>
        <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 text-left">
          <LogOut size={20} className="text-brand" />
          Logout
        </button>
      </div>
    </motion.aside>
  );
}
