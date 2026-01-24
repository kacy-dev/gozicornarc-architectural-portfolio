// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '@/hooks/useAuth';
// import Link from 'next/link';

// export default function AdminLayout({ children }) {
//   const { isAuthenticated, isLoading } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isLoading && !isAuthenticated) {
//       router.push('/login');
//     }
//   }, [isAuthenticated, isLoading, router]);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Checking authentication...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!isAuthenticated) return null;

//   return (
//     <div className="min-h-screen flex bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r min-w-screen flex flex-row shadow-lg  absolute bottom-0">
//         <div className="p-6 text-2xl font-bold text-orange-400 border-b">Gozicornarc</div>
//         <nav className="flex flex-row p-4 space-y-2">
//           <Link href="/admin/dashboard" className="block px-4 py-2 rounded hover:bg-orange-50">Dashboard</Link>
//           <Link href="/admin/users" className="block px-4 py-2 rounded hover:bg-orange-50">Users</Link>
//           <Link href="/admin/projects" className="block px-4 py-2 rounded hover:bg-orange-50">Projects</Link>
//           <Link href="/admin/clients" className="block px-4 py-2 rounded hover:bg-orange-50">Clients</Link>
//         </nav>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-8">
//         {children}
//       </main>
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export default function AdminLayout({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [showTab, setShowTab] = useState(true);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  // Better Loader
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <motion.div
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
          className="text-center"
        >
          <div className="w-14 h-14 rounded-full bg-orange-400 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Authenticating...</p>
        </motion.div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Main Content */}
      <main className="">{children}</main>

      {/* Toggle Button */}
      {/* <button
        onClick={() => setShowTab((prev) => !prev)}
        className="fixed bottom-20 right-4 z-50 bg-orange-400 text-white p-2 rounded-full shadow-lg"
      >
        {showTab ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
      </button> */}

      {/* Bottom Tab Bar */}
      {/* <AnimatePresence>
        {showTab && (
          <motion.aside
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 120 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-40"
          >
            <nav className="flex justify-around items-center py-3">
              <TabLink href="/admin/dashboard" icon={<LayoutDashboard />} label="Dashboard" />
              <TabLink href="/admin/users" icon={<Users />} label="Users" />
              <TabLink href="/admin/projects" icon={<FolderKanban />} label="Projects" />
              <TabLink href="/admin/clients" icon={<Briefcase />} label="Clients" />
            </nav>
          </motion.aside>
        )}
      </AnimatePresence> */}
    </div>
  );
}

// function TabLink({ href, icon, label }) {
//   return (
//     <Link
//       href={href}
//       className="flex flex-col items-center text-gray-500 hover:text-orange-400 transition text-sm"
//     >
//       <div className="w-6 h-6 mb-1">{icon}</div>
//       {label}
//     </Link>
//   );
// }
