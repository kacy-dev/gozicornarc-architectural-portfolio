// // components/Footer.tsx
// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white text-center p-6 mt-10">
//       &copy; {new Date().getFullYear()} Architect Portfolio. All rights reserved.
//     </footer>
//   );
// }


// "use client";

// import { Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-neutral-950 text-neutral-200">

//       {/* BACKGROUND WATERMARK */}
//       <div
//         aria-hidden
//         className="absolute inset-0 opacity-[0.035] pointer-events-none"
//       >
//         <div className="absolute inset-0 bg-[length:420px_240px] bg-repeat bg-center
//                         bg-[url('data:image/svg+xml;utf8,
//                         <svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22>
//                           <text x=%220%22 y=%22120%22 font-size=%2280%22
//                             fill=%22white%22 font-family=%22Arial, sans-serif%22
//                             letter-spacing=%226%22>GOZICORNARC</text>
//                         </svg>')]"
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">

//           {/* LOGO / BRAND */}
//           <div>
//             <div className="w-12 h-12 rounded-lg bg-white/10 mb-6 flex items-center justify-center">
//               <span className="text-sm font-bold tracking-widest text-white">
//                 LOGO
//               </span>
//             </div>

//             <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
//               Thoughtful digital architecture focused on precision, longevity,
//               and scalable execution.
//             </p>
//           </div>

//           {/* NEWSLETTER */}
//           <div>
//             <h4 className="text-sm font-semibold tracking-widest uppercase mb-4">
//               Subscribe to Newsletter
//             </h4>

//             <form className="flex flex-col sm:flex-row gap-3 max-w-md">
//               <div className="relative flex-1">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
//                 <input
//                   type="email"
//                   placeholder="Your email address"
//                   className="w-full rounded-xl bg-white/5 border border-white/10
//                              pl-10 pr-4 py-3 text-sm text-white placeholder:text-neutral-500
//                              focus:outline-none focus:border-orange-500/60"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold
//                            text-white hover:bg-orange-600 transition"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>

//           {/* SOCIALS */}
//           <div>
//             <h4 className="text-sm font-semibold tracking-widest uppercase mb-4">
//               Connect
//             </h4>

//             <div className="flex items-center gap-5">
//               {[
//                 { icon: Twitter, href: "#" },
//                 { icon: Instagram, href: "#" },
//                 { icon: Linkedin, href: "#" },
//                 { icon: Github, href: "#" },
//               ].map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <a
//                     key={i}
//                     href={item.href}
//                     className="p-3 rounded-full bg-white/5 border border-white/10
//                                hover:border-orange-500/50 hover:bg-orange-500/10
//                                transition"
//                   >
//                     <Icon className="w-5 h-5" />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* DIVIDER */}
//         <div className="mt-20 border-t border-white/10 pt-8 text-xs text-neutral-500 flex flex-col sm:flex-row justify-between gap-4">
//           <span>© {new Date().getFullYear()} Gozicornarc. All rights reserved.</span>
//           <span>Built with precision & intent.</span>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";

import { Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-neutral-200">

      {/* WATERMARK TEXT LAYER */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none select-none"
      >
        <div className="absolute inset-0 flex flex-wrap gap-x-20 gap-y-10 
                        opacity-[0.035] rotate-[-20deg]">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="text-[10rem] font-nosifer font-extrabold tracking-widest 
                         text-white whitespace-nowrap"
            >
              GOZICORNARC
            </span>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

          {/* LOGO */}
          <div>
            <div className=" h-10 rounded-lg bg-white/10 mb-6 flex items-center justify-center">
              <span className="text-sm font-bold tracking-widest text-white uppercase font-nosifer">
                Gozicornarc
              </span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed font-poppins ">
              Thoughtful digital architecture focused on precision, longevity,
              and scalable execution.
            </p>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-4">
              Subscribe to Newsletter
            </h4>

            {/* <form className="flex flex-col sm:flex-row gap-3 max-w-md">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-xl bg-white/5 border border-white/10
                             pl-10 pr-4 py-3 text-sm text-white placeholder:text-neutral-500
                             focus:outline-none focus:border-orange-500/60"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold
                           text-white hover:bg-orange-600 transition"
              >
                Subscribe
              </button>
            </form> */}


          </div>

          {/* SOCIALS */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-4 bg-orange-400/20 max-w-max p-2">
              Connect
            </h4>

            <div className="flex gap-5">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 rounded-full bg-white/5 border border-white/10
                             hover:border-orange-500/50 hover:bg-orange-500/10 transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER BASE */}
        <div className="mt-20 border-t border-white/10 pt-8 text-xs text-neutral-500 flex justify-between">
          <span>© {new Date().getFullYear()} Gozicornarc</span>
          <div>
            <span>Built with precision & intent</span>
            <p>Developer: Victor Kelechi Utobo</p>
            <p>WhatsApp: +234 808 782 4982</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
