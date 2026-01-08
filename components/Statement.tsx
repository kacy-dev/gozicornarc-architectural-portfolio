
export default function Statement() {
  return (
    <section
      className="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center
                 bg-fixed bg-cover"
      style={{
        backgroundImage: "https://res.cloudinary.com/dgmem5lsz/image/upload/v1767871849/IMG_0715_1_p6m0ny.jpg",
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

