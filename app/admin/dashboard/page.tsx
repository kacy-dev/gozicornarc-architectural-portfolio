

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronRight,
//   ChevronLeft,
//   FolderKanban,
//   MessageSquare,
//   Settings,
//   Plus,
//   Pencil,
//   Layers,
//   Mail,
//   Archive,
//   Home,
//   Phone,
//   Image,
//   X,
//   User,
//   BarChart3,
//   LayoutDashboard,
//   Eye,
//   Star,
// } from "lucide-react";

// /* -------------------- MAIN -------------------- */

// export default function ArchitectDashboard() {
//   const [navOpen, setNavOpen] = useState(true);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [activeModal, setActiveModal] = useState<string | null>(null);

//   const toggleMenu = (menu: string) => {
//     setActiveMenu((prev) => (prev === menu ? null : menu));
//   };

//   return (
//     <div className="min-h-screen bg-[#f9fafb] overflow-hidden">
//       {/* CARET */}
//       <button
//         onClick={() => setNavOpen(!navOpen)}
//         className="fixed right-4 top-4 z-50 bg-white shadow-lg rounded-full p-2"
//       >
//         {navOpen ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
//       </button>

//       {/* MAIN CONTENT */}
//       <main className="p-8">
//         <h1 className="text-xl font-semibold text-gray-800">
//           Architect Workspace
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { title: "Delivered", value: 24, icon: BarChart3 },
//             { title: "Uploaded", value: 12, icon: FolderKanban },
//             { title: "Messages", value: 8, icon: MessageSquare },
//             { title: "Sections", value: 6, icon: LayoutDashboard },
//           ].map((card, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
//             >
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="text-sm text-gray-500">{card.title}</p>
//                   <p className="text-3xl font-bold text-gray-800">
//                     {card.value}
//                   </p>
//                 </div>
//                 <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
//                   <card.icon size={20} />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* PROJECT CARDS */}
//         <h2 className="mt-10 mb-4 font-semibold text-gray-700">
//           Recent Projects
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[1, 2, 3].map((p) => (
//             <motion.div
//               key={p}
//               whileHover={{ y: -6 }}
//               className="bg-white rounded-xl shadow-md overflow-hidden"
//             >
//               <div className="h-36 bg-gradient-to-br from-orange-100 to-orange-200" />
//               <div className="p-4 space-y-2">
//                 <h3 className="font-medium">Modern Apartment Design</h3>
//                 <p className="text-xs text-gray-500">
//                   Architectural visualization project
//                 </p>
//                 <div className="flex justify-between items-center pt-2">
//                   <div className="flex gap-2 text-orange-500">
//                     <Eye size={16} />
//                     <Star size={16} />
//                   </div>
//                   <button className="text-xs text-orange-600 hover:underline">
//                     View
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </main>

//       {/* SIDEBAR */}
//       <AnimatePresence>
//         {navOpen && (
//           <motion.aside
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//             className="fixed right-4 top-1/2 -translate-y-1/2 
//             bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl 
//             px-2 py-3 w-[70px] z-40"
//           >
//             <SidebarIcon
//               icon={FolderKanban}
//               active={activeMenu === "projects"}
//               onClick={() => toggleMenu("projects")}
//             />
//             <SidebarIcon
//               icon={MessageSquare}
//               active={activeMenu === "messages"}
//               onClick={() => toggleMenu("messages")}
//             />
//             <SidebarIcon
//               icon={Settings}
//               active={activeMenu === "settings"}
//               onClick={() => toggleMenu("settings")}
//             />

//             <div className="border-t pt-3 mt-3 flex justify-center">
//               <User className="text-orange-500" />
//             </div>

//             {/* SUB PANEL – fixed size, zero layout jump */}
//             <div className="absolute right-[85px] top-1/2 -translate-y-1/2 w-56 h-44">
//               <AnimatePresence mode="wait">
//                 {activeMenu && (
//                   <motion.div
//                     key={activeMenu}
//                     layoutId="subpanel"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute inset-0 bg-white rounded-xl p-3 shadow-xl space-y-1"
//                   >
//                     {activeMenu === "projects" && (
//                       <>
//                         <SubBarItem
//                           icon={Plus}
//                           label="Add Project"
//                           onClick={() => setActiveModal("Add Project")}
//                         />
//                         <SubBarItem
//                           icon={Pencil}
//                           label="Edit Projects"
//                           onClick={() => setActiveModal("Edit Projects")}
//                         />
//                         <SubBarItem
//                           icon={Layers}
//                           label="Categories"
//                           onClick={() => setActiveModal("Categories")}
//                         />
//                       </>
//                     )}

//                     {activeMenu === "messages" && (
//                       <>
//                         <SubBarItem
//                           icon={Mail}
//                           label="Inbox"
//                           onClick={() => setActiveModal("Inbox")}
//                         />
//                         <SubBarItem
//                           icon={Archive}
//                           label="Archived"
//                           onClick={() => setActiveModal("Archived")}
//                         />
//                       </>
//                     )}

//                     {activeMenu === "settings" && (
//                       <>
//                         <SubBarItem
//                           icon={Home}
//                           label="Home Page"
//                           onClick={() => setActiveModal("Home")}
//                         />
//                         <SubBarItem
//                           icon={Phone}
//                           label="Contact Page"
//                           onClick={() => setActiveModal("Contact")}
//                         />
//                         <SubBarItem
//                           icon={Image}
//                           label="Images"
//                           onClick={() => setActiveModal("Images")}
//                         />
//                       </>
//                     )}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.aside>
//         )}
//       </AnimatePresence>

//       {/* MODAL */}
//       <AnimatePresence>
//         {activeModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 30 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 30 }}
//               className="bg-white rounded-2xl w-[90%] max-w-md p-6 shadow-2xl"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="font-semibold text-lg">{activeModal}</h2>
//                 <button onClick={() => setActiveModal(null)}>
//                   <X />
//                 </button>
//               </div>
//               <p className="text-sm text-gray-500">
//                 Replace this with real production forms.
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// /* -------------------- COMPONENTS -------------------- */

// function SidebarIcon({ icon: Icon, active, onClick }: any) {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.12 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={onClick}
//       className={`p-3 rounded-xl transition ${
//         active
//           ? "bg-orange-100 text-orange-600"
//           : "text-slate-600 hover:bg-orange-50 hover:text-orange-500"
//       }`}
//     >
//       <Icon size={20} />
//     </motion.button>
//   );
// }

// function SubBarItem({ icon: Icon, label, onClick }: any) {
//   return (
//     <button
//       onClick={onClick}
//       className="flex items-center gap-2 w-full px-3 py-2 text-xs rounded-lg
//       text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition"
//     >
//       <Icon size={14} />
//       {label}
//     </button>
//   );
// }


// "use client";

// import { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FolderKanban,
//   MessageSquare,
//   Settings,
//   Plus,
//   Pencil,
//   Layers,
//   Mail,
//   Archive,
//   Home,
//   Phone,
//   Image,
//   X,
//   User,
//   BarChart3,
//   LayoutDashboard,
//   Eye,
//   Star,
//   Search,
//   Bell,
//   Menu,
//   Filter,
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";

// /* -------------------- MOCK DATA -------------------- */

// const PROJECTS = Array.from({ length: 25 }).map((_, i) => ({
//   id: i + 1,
//   title: `Modern Apartment Design ${i + 1}`,
//   type: i % 2 === 0 ? "Residential" : "Commercial",
//   description: "Architectural visualization project",
// }));

// /* -------------------- MAIN -------------------- */

// export default function ArchitectDashboard() {
//   const [navOpen, setNavOpen] = useState(true);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [activeModal, setActiveModal] = useState<string | null>(null);

//   // search + filter
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState<"all" | "Residential" | "Commercial">(
//     "all"
//   );

//   // pagination
//   const [page, setPage] = useState(1);
//   const perPage = 6;

//   const toggleMenu = (menu: string) => {
//     setActiveMenu((prev) => (prev === menu ? null : menu));
//   };

//   /* -------------------- SEARCH + FILTER + PAGINATION -------------------- */

//   const filteredProjects = useMemo(() => {
//     const q = search.toLowerCase().trim();
//     return PROJECTS.filter((p) => {
//       const matchSearch =
//         p.title.toLowerCase().includes(q) ||
//         p.description.toLowerCase().includes(q);
//       const matchFilter = filter === "all" ? true : p.type === filter;
//       return matchSearch && matchFilter;
//     });
//   }, [search, filter]);

//   const totalPages = Math.ceil(filteredProjects.length / perPage);

//   const paginatedProjects = useMemo(() => {
//     const start = (page - 1) * perPage;
//     return filteredProjects.slice(start, start + perPage);
//   }, [filteredProjects, page]);

//   return (
//     <div className="min-h-screen bg-[#f9fafb]">
//       {/* ================== FIXED TOP BAR ================== */}
//       <header
//         className="fixed top-0 left-0 right-0 z-40 
//         bg-white/80 backdrop-blur-xl border-b border-gray-100"
//       >
//         <div className="px-6 py-3 flex items-center justify-between">
//           {/* LEFT: LOGO */}
//           <div className="flex items-center gap-2">
//             <div className="h-8 w-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold">
//               A
//             </div>
//             <span className="font-semibold text-gray-800 hidden sm:block">
//               ArchitectPro
//             </span>
//           </div>

//           {/* CENTER: SEARCH */}
//           <div className="relative w-[45%] max-w-md hidden md:block">
//             <Search
//               size={16}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//             />
//             <input
//               value={search}
//               onChange={(e) => {
//                 setSearch(e.target.value);
//                 setPage(1);
//               }}
//               placeholder="Search projects, titles or descriptions..."
//               className="w-full pl-9 pr-4 py-2 rounded-xl bg-gray-50 border border-gray-200 
//               focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
//             />
//           </div>

//           {/* RIGHT: MENU + NOTIFICATION + PROFILE */}
//           <div className="flex items-center gap-3">
//             {/* FILTER DROPDOWN (MOBILE FRIENDLY) */}
//             <div className="relative">
//               <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//               <select
//                 value={filter}
//                 onChange={(e) => {
//                   setFilter(e.target.value as any);
//                   setPage(1);
//                 }}
//                 className="pl-8 pr-3 py-2 rounded-xl border bg-white text-sm"
//               >
//                 <option value="all">All</option>
//                 <option value="Residential">Residential</option>
//                 <option value="Commercial">Commercial</option>
//               </select>
//             </div>

//             <button className="relative p-2 rounded-xl hover:bg-gray-100">
//               <Bell size={18} />
//               <span className="absolute top-1 right-1 h-2 w-2 bg-orange-500 rounded-full" />
//             </button>

//             {/* MENU ICON RETURNED TO RIGHT */}
//             <button
//               onClick={() => setNavOpen(!navOpen)}
//               className="p-2 rounded-xl bg-white shadow border hover:bg-gray-50"
//             >
//               <Menu size={18} />
//             </button>

//             <div className="h-9 w-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
//               <User size={18} />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* OFFSET CONTENT FOR FIXED HEADER */}
//       <main className="pt-24 p-8">
//         <h1 className="text-xl font-semibold text-gray-800">
//           Architect Workspace
//         </h1>

//         {/* ================== STATS ================== */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//           {[
//             { title: "Delivered", value: 24, icon: BarChart3 },
//             { title: "Uploaded", value: 12, icon: FolderKanban },
//             { title: "Messages", value: 8, icon: MessageSquare },
//             { title: "Sections", value: 6, icon: LayoutDashboard },
//           ].map((card, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
//             >
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="text-sm text-gray-500">{card.title}</p>
//                   <p className="text-3xl font-bold text-gray-800">
//                     {card.value}
//                   </p>
//                 </div>
//                 <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
//                   <card.icon size={20} />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* ================== PROJECTS ================== */}
//         <div className="flex justify-between items-center mt-12 mb-4">
//           <h2 className="font-semibold text-gray-700">Recent Projects</h2>
//           <p className="text-sm text-gray-500">
//             {filteredProjects.length} projects found
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {paginatedProjects.map((p) => (
//             <motion.div
//               key={p.id}
//               whileHover={{ y: -6 }}
//               className="bg-white rounded-xl shadow-md overflow-hidden"
//             >
//               <div className="h-36 bg-gradient-to-br from-orange-100 to-orange-200" />
//               <div className="p-4 space-y-2">
//                 <h3 className="font-medium">{p.title}</h3>
//                 <p className="text-xs text-gray-500">{p.description}</p>
//                 <div className="flex justify-between items-center pt-2">
//                   <div className="flex gap-2 text-orange-500">
//                     <Eye size={16} />
//                     <Star size={16} />
//                   </div>
//                   <span className="text-xs px-2 py-1 rounded-md bg-orange-50 text-orange-600">
//                     {p.type}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* ================== PAGINATION ================== */}
//         <div className="flex justify-center items-center gap-3 mt-8">
//           <button
//             disabled={page === 1}
//             onClick={() => setPage((p) => p - 1)}
//             className="p-2 rounded-lg border disabled:opacity-40"
//           >
//             <ArrowLeft size={16} />
//           </button>

//           <p className="text-sm text-gray-600">
//             Page {page} of {totalPages}
//           </p>

//           <button
//             disabled={page === totalPages}
//             onClick={() => setPage((p) => p + 1)}
//             className="p-2 rounded-lg border disabled:opacity-40"
//           >
//             <ArrowRight size={16} />
//           </button>
//         </div>
//       </main>

//       {/* ================== SIDEBAR + SUB PANELS (FIXED) ================== */}
//       <AnimatePresence>
//         {navOpen && (
//           <motion.aside
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//             className="fixed right-4 top-1/2 -translate-y-1/2 
//             bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl 
//             px-2 py-3 w-[70px] z-40"
//           >
//             <SidebarIcon
//               icon={FolderKanban}
//               active={activeMenu === "projects"}
//               onClick={() => toggleMenu("projects")}
//             />
//             <SidebarIcon
//               icon={MessageSquare}
//               active={activeMenu === "messages"}
//               onClick={() => toggleMenu("messages")}
//             />
//             <SidebarIcon
//               icon={Settings}
//               active={activeMenu === "settings"}
//               onClick={() => toggleMenu("settings")}
//             />

//             <div className="border-t pt-3 mt-3 flex justify-center">
//               <User className="text-orange-500" />
//             </div>

//             {/* SUB PANEL (THIS IS WHAT WAS MISSING FOR YOUR TABS) */}
//             <div className="absolute right-[85px] top-1/2 -translate-y-1/2 w-56 h-44">
//               <AnimatePresence mode="wait">
//                 {activeMenu && (
//                   <motion.div
//                     key={activeMenu}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="absolute inset-0 bg-white rounded-xl p-3 shadow-xl space-y-1"
//                   >
//                     {activeMenu === "projects" && (
//                       <>
//                         <SubBarItem icon={Plus} hint="Add" label="Add Project" />
//                         <SubBarItem
//                           icon={Pencil}
//                           hint="Edit"
//                           label="Edit Projects"
//                         />
//                         <SubBarItem
//                           icon={Layers}
//                           hint="Group"
//                           label="Categories"
//                         />
//                       </>
//                     )}

//                     {activeMenu === "messages" && (
//                       <>
//                         <SubBarItem icon={Mail} hint="Mail" label="Inbox" />
//                         <SubBarItem
//                           icon={Archive}
//                           hint="Store"
//                           label="Archived"
//                         />
//                       </>
//                     )}

//                     {activeMenu === "settings" && (
//                       <>
//                         <SubBarItem icon={Home} hint="Home" label="Home Page" />
//                         <SubBarItem
//                           icon={Phone}
//                           hint="Call"
//                           label="Contact Page"
//                         />
//                         <SubBarItem icon={Image} hint="Img" label="Images" />
//                       </>
//                     )}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.aside>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// /* -------------------- COMPONENTS -------------------- */

// function SidebarIcon({ icon: Icon, active, onClick }: any) {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.12 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={onClick}
//       className={`p-3 rounded-xl transition ${
//         active
//           ? "bg-orange-100 text-orange-600"
//           : "text-slate-600 hover:bg-orange-50 hover:text-orange-500"
//       }`}
//     >
//       <Icon size={20} />
//     </motion.button>
//   );
// }

// function SubBarItem({ icon: Icon, label, hint }: any) {
//   return (
//     <button
//       className="flex items-center justify-between w-full px-3 py-2 text-xs rounded-lg
//       text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition"
//     >
//       <div className="flex items-center gap-2">
//         <Icon size={14} />
//         {label}
//       </div>
//       <span className="text-[10px] text-gray-400">{hint}</span>
//     </button>
//   );
// }





"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  FolderKanban,
  MessageSquare,
  Settings,
  Plus,
  Pencil,
  Layers,
  Mail,
  Archive,
  Home,
  Phone,
  Image,
  X,
  User,
  BarChart3,
  LayoutDashboard,
  Eye,
  Star,
  Search as SearchIcon,
  Bell,
  Grid,
  Menu,
} from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  views: number;
  stars: number;
}

// Sample projects
const projectsData: Project[] = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Project ${i + 1}`,
  description: "Architectural visualization project",
  views: Math.floor(Math.random() * 100),
  stars: Math.floor(Math.random() * 5) + 1,
}));

export default function ArchitectDashboard() {
  const [navOpen, setNavOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const toggleMenu = (menu: string) => setActiveMenu((prev) => (prev === menu ? null : menu));

  // Filtered & paginated projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const displayedProjects = useMemo(() => {
    const start = (currentPage - 1) * projectsPerPage;
    return filteredProjects.slice(start, start + projectsPerPage);
  }, [currentPage, filteredProjects]);

  return (
    <div className="min-h-screen bg-orange-100 overflow-hidden relative">
      <button
            onClick={() => setNavOpen(!navOpen)}
            className="fixed bottom-30 z-10 right-8 text-white p-2 rounded-full bg-orange-400  transition"
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
      {/* TOP BAR */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold text-orange-600 flex items-center gap-2">
            <Grid size={24} /> GOZICORNARC
          </div>
          <div className="relative w-full hidden lg:flex">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
          </button>
          <div className="flex items-center gap-2">
            <User className="text-orange-500" />
            <span className="hidden sm:inline text-gray-700 font-medium">Architect</span>
          </div>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className=" text-white p-2 rounded-full bg-orange-400  transition"
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
         
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-20 pr-4 pl-4">
        {/* STATS */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Delivered", value: 24, icon: BarChart3 },
            { title: "Uploaded", value: 12, icon: FolderKanban },
            { title: "Messages", value: 8, icon: MessageSquare },
            { title: "Sections", value: 6, icon: LayoutDashboard },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{card.title}</p>
                  <p className="text-3xl font-bold text-gray-800">{card.value}</p>
                </div>
                <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                  <card.icon size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* PROJECT CARDS */}
        {/* <div className="mt-10 flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-700">Recent Projects</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Page {currentPage} / {totalPages}</span>
          </div>
        </div> */}


        {/* MODERN STATS SECTION */}
        {/* <div className="mt-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Dashboard Stats</h2>
          <div className="flex gap-6 overflow-x-auto pb-2">
            {[
              { title: "Delivered", value: 24, icon: BarChart3, bg: "from-orange-100 to-orange-200" },
              { title: "Uploaded", value: 12, icon: FolderKanban, bg: "from-blue-100 to-blue-200" },
              { title: "Messages", value: 8, icon: MessageSquare, bg: "from-green-100 to-green-200" },
              { title: "Sections", value: 6, icon: LayoutDashboard, bg: "from-purple-100 to-purple-200" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[180px] flex-1 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl p-5 shadow-md hover:shadow-xl transition relative"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-gray-500">{card.title}</p>
                    <p className="text-2xl font-bold text-gray-800">{card.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl text-white bg-gradient-to-br ${card.bg}`}>
                    <card.icon size={22} />
                  </div>
                </div>
              
                <div className="h-8 mt-3">
                  <div className={`h-1 rounded-full w-full bg-gradient-to-r ${card.bg}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}



        <div className="relative w-full rounded-3xl overflow-hidden mb-10 shadow-xl">
          {/* Background Image / Gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-200 to-yellow-100"
            style={{
              backgroundImage: "url('/img/gozie-consult.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "overlay",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur bg-gradient-to-r from-orange-400 via-orange-200 to-yellow-100" />

          {/* Banner Content */}
          <div className="relative z-10 p-6 sm:p-10 flex flex-col lg:flex-row justify-between items-start gap-6">
            {/* Text Section */}
            <div className="text-white max-w-full">
              <h3 className="font-bold text-orange-400">Welcome</h3>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                 Arch Gozicornarc
              </h1>
              <p className="text-sm sm:text-base text-white/90">
                Monitor your projects, check stats, and explore recent works
              </p>
            </div>

            {/* Stats Preview Cards inside banner */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {[
                { title: "Delivered", value: 24, icon: BarChart3 },
                { title: "Uploaded", value: 12, icon: FolderKanban },
                { title: "Messages", value: 8, icon: MessageSquare },
                { title: "Sections", value: 6, icon: LayoutDashboard },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-md hover:shadow-xl transition flex justify-between items-center"
                >
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">{card.title}</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{card.value}</p>
                  </div>
                  <div className="p-2 bg-orange-100 text-orange-600 rounded-xl">
                    <card.icon size={18} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


        {/* MODERN PROJECT CARDS */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Recent Projects</h2>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              Page {currentPage} / {totalPages}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProjects.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition relative group"
              >
                {/* Project Image / Preview */}
                <div className="h-36 relative bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-orange-600 font-bold">
                  Preview
                  {/* Status badge */}
                  <span className="absolute top-2 right-2 text-xs bg-white/80 text-gray-800 px-2 py-0.5 rounded-full shadow-sm">
                    {p.stars > 3 ? "Completed" : "Pending"}
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-gray-800">{p.name}</h3>
                  <p className="text-xs text-gray-500">{p.description}</p>

                  <div className="flex justify-between items-center pt-2">
                    <div className="flex gap-2 text-orange-500">
                      <Eye size={16} />
                      <Star size={16} />
                    </div>
                    <button className="text-xs text-orange-600 hover:underline">
                      View
                    </button>
                  </div>
                </div>

                {/* Hover overlay for actions */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
                  <button className="bg-white px-3 py-1 rounded-lg shadow hover:bg-orange-50 text-orange-600 font-medium text-sm">
                    Edit
                  </button>
                  <button className="bg-white px-3 py-1 rounded-lg shadow hover:bg-red-50 text-red-500 font-medium text-sm">
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedProjects.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-36 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-orange-600 font-bold">
                Preview
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-medium">{p.name}</h3>
                <p className="text-xs text-gray-500">{p.description}</p>
                <div className="flex justify-between items-center pt-2">
                  <div className="flex gap-2 text-orange-500">
                    <Eye size={16} />
                    <Star size={16} />
                  </div>
                  <button className="text-xs text-orange-600 hover:underline">
                    View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-3 mt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 bg-orange-100 rounded hover:bg-orange-200 transition"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded transition ${currentPage === i + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 bg-orange-100 rounded hover:bg-orange-200 transition"
          >
            Next
          </button>
        </div>
      </main>

      {/* SIDEBAR */}
      <AnimatePresence>
        {navOpen && (
          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed right-4 top-1/2 -translate-y-1/2 
            bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl 
            px-2 py-3 w-[70px] z-40"
          >
            <SidebarIcon
              icon={FolderKanban}
              active={activeMenu === "projects"}
              onClick={() => toggleMenu("projects")}
            />
            <SidebarIcon
              icon={MessageSquare}
              active={activeMenu === "messages"}
              onClick={() => toggleMenu("messages")}
            />
            <SidebarIcon
              icon={Settings}
              active={activeMenu === "settings"}
              onClick={() => toggleMenu("settings")}
            />

            <div className="border-t pt-3 mt-3 flex justify-center">
              <User className="text-orange-500" />
            </div>

            {/* SUB PANEL */}
            <div className="absolute right-[85px] top-1/2 -translate-y-1/2 w-56 h-44">
              <AnimatePresence mode="wait">
                {activeMenu && (
                  <motion.div
                    key={activeMenu}
                    layoutId="subpanel"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-white rounded-xl p-3 shadow-xl space-y-1"
                  >
                    {activeMenu === "projects" && (
                      <>
                        <SubBarItem
                          icon={Plus}
                          label="Add Project"
                          onClick={() => setActiveModal("Add Project")}
                          
                        />
                        <SubBarItem
                          icon={Pencil}
                          label="Edit Projects"
                          onClick={() => setActiveModal("Edit Projects")}
                        />
                        <SubBarItem
                          icon={Layers}
                          label="Categories"
                          onClick={() => setActiveModal("Categories")}
                        />
                      </>
                    )}
                    {activeMenu === "messages" && (
                      <>
                        <SubBarItem
                          icon={Mail}
                          label="Inbox"
                          onClick={() => setActiveModal("Inbox")}
                        />
                        <SubBarItem
                          icon={Archive}
                          label="Archived"
                          onClick={() => setActiveModal("Archived")}
                        />
                      </>
                    )}
                    {activeMenu === "settings" && (
                      <>
                        <SubBarItem
                          icon={Home}
                          label="Home Page"
                          onClick={() => setActiveModal("Home")}
                        />
                        <SubBarItem
                          icon={Phone}
                          label="Contact Page"
                          onClick={() => setActiveModal("Contact")}
                        />
                        <SubBarItem
                          icon={Image}
                          label="Images"
                          onClick={() => setActiveModal("Images")}
                        />
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* MODAL */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-white rounded-2xl w-[90%] p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">{activeModal}</h2>
                <button className="flex flex-col text-[10px] items-center cursor-pointer" onClick={() => setActiveModal(null)}>
                  <X />
                  Close
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Replace this with real production forms.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------- COMPONENTS -------------------- */

function SidebarIcon({ icon: Icon, active, onClick }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`p-3 rounded-xl transition ${active
        ? "bg-orange-100 text-orange-600"
        : "text-slate-600 hover:bg-orange-50 hover:text-orange-500"
        }`}
    >
      <Icon size={20} />
    </motion.button>
  );
}

function SubBarItem({ icon: Icon, label, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 w-full px-3 py-2 text-xs rounded-lg
      text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition"
    >
      <Icon size={14} />
      {label}
    </button>
  );
}
