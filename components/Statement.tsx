// export default function Statement() {
//   return (
//     <section
//       className="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center
//                  bg-fixed bg-center bg-cover object-cover"
//       style={{
//         backgroundImage: "url('/img/gozie-two.JPG')",
//         objectFit: "cover",
//       }}
//     >
//       {/* Optional subtle overlay for contrast */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* Statement */}
//       <h2
//         className="relative z-10 text-white text-[10vw] lg:text-[8vw]
//                    font-extrabold tracking-tight uppercase
//                    font-michroma select-none"
//       >
//         Gozicornarc
//       </h2>
//     </section>
//   );
// }



export default function Statement() {
  return (
    <section
      className="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center
                 bg-fixed bg-cover"
      style={{
        backgroundImage: "url('/img/gozie-two.JPG')",
        backgroundPosition: "center 10%",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <h2
        className="relative z-10 text-white text-[7vw] lg:text-[8vw]
                   font-extrabold tracking-tight uppercase
                   font-michroma select-none"
      >
        Gozicornarc
      </h2>
    </section>
  );
}

