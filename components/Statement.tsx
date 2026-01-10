
export default function Statement() {


    const heroImage =
  "/img/gozie-two.JPG";
  // "https://res.cloudinary.com/dgmem5lsz/image/upload/f_auto,q_auto,w_2000/v1767871849/IMG_0715_1_p6m0ny.jpg";



  return (
    <section
      className="relative w-full h-[70vh] lg:h-[80vh] flex items-center justify-center
                 bg-fixed bg-cover"
      style={{
        backgroundImage: `url('${heroImage}')`,
        backgroundPosition: "center 8%",
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

