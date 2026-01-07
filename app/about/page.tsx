// components/About/About.tsx
export default function About() {
  return (
    <section className="section">
      <div className="container-max grid gap-12 md:grid-cols-2 items-center">

        {/* Text */}
        <div>
          <p className="text-sm tracking-widest uppercase text-accent mb-4">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            We Shape Spaces With Purpose & Precision
          </h2>

          <p className="text-muted leading-relaxed mb-6">
            We are an architectural and construction studio focused on creating
            functional, timeless spaces that balance aesthetics, engineering,
            and sustainability. Every project is approached with clarity,
            discipline, and attention to detail.
          </p>

          <p className="text-muted leading-relaxed">
            From concept to execution, our work reflects thoughtful design,
            modern materials, and structural integrity—crafted to stand the
            test of time.
          </p>
        </div>

        {/* Visual / Feature Card */}
        <div className="glass rounded-lg p-8 clip-polygon-glass">
          <ul className="space-y-6">
            <li>
              <h4 className="font-medium mb-1">Design Excellence</h4>
              <p className="text-sm text-muted">
                Clean lines, smart layouts, and architectural balance.
              </p>
            </li>

            <li>
              <h4 className="font-medium mb-1">Structural Integrity</h4>
              <p className="text-sm text-muted">
                Engineered for durability, safety, and performance.
              </p>
            </li>

            <li>
              <h4 className="font-medium mb-1">Modern Materials</h4>
              <p className="text-sm text-muted">
                Glass, steel, and concrete blended with innovation.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
