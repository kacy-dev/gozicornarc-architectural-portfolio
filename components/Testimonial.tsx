"use client";

import { useState, useRef, useEffect } from "react";

/* -------------------- DATA -------------------- */

const testimonials = [
  {
    name: "John A.",
    role: "Startup Founder",
    text: "Working with Kacy felt effortless. Everything was structured, clean, and scalable.",
  },
  {
    name: "Amaka O.",
    role: "Product Designer",
    text: "The attention to UX detail was top-tier. This was not just development, it was thinking.",
  },
  {
    name: "Daniel K.",
    role: "Business Owner",
    text: "Performance, responsiveness, and clarity. Exactly what I needed.",
  },
  {
    name: "Sarah M.",
    role: "Marketing Lead",
    text: "Our conversions improved immediately after launch. Smooth and professional.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Delivered Projects" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { staticText: "24/7", label: "Ongoing Support" },
];

/* -------------------- COUNTER -------------------- */

function AnimatedCounter({
  value,
  suffix = "",
  start,
}: {
  value: number;
  suffix?: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;

    startedRef.current = true;

    let current = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const animate = () => {
      current += increment;
      if (current < value) {
        setCount(Math.floor(current));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <div className="text-3xl font-bold text-orange-500 mb-2">
      {count}
      {suffix}
    </div>
  );
}

/* -------------------- COMPONENT -------------------- */

export default function Testimonial() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const yRef = useRef(0);
  const [paused, setPaused] = useState(false);

  const statsRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  /* FLOWING TESTIMONIALS */
  useEffect(() => {
    const animate = () => {
      if (!paused && containerRef.current) {
        yRef.current -= 0.4;

        if (Math.abs(yRef.current) >= containerRef.current.scrollHeight / 2) {
          yRef.current = 0;
        }

        containerRef.current.style.transform = `translateY(${Math.round(
          yRef.current
        )}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [paused]);

  /* COUNTER OBSERVER */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.6 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full bg-white py-20 lg:py-28 px-4 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* LEFT — FLOWING TESTIMONIALS */}
          <div className="relative h-[540px] lg:h-[500px] overflow-hidden rounded-[32px]">
            <div
              className="absolute inset-0"
              style={{
                maskImage:
                  "linear-gradient(to top, transparent 0%, black 18%, black 82%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, black 18%, black 82%, transparent 100%)",
              }}
            >
              <div
                ref={containerRef}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={() => setPaused(true)}
                onTouchEnd={() => setPaused(false)}
                className="flex flex-col gap-10 py-10 will-change-transform"
              >
                {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
                  <div
                    key={i}
                    className="relative w-[92%] lg:w-[86%] mx-auto rounded-2xl bg-white 
                               px-10 py-8
                               border border-neutral-200
                               shadow-[0_18px_45px_-18px_rgba(0,0,0,0.18)]"
                  >
                    <span className="absolute top-6 right-6 text-orange-400 text-[40px] leading-none">
                      ❝
                    </span>

                    <p className="text-neutral-700 text-[15px] leading-[1.75] mb-8 pr-10">
                      {item.text}
                    </p>

                    <div className="border-t border-neutral-100 pt-4">
                      <p className="text-sm font-semibold text-neutral-900">
                        {item.name}
                      </p>
                      <p className="text-xs tracking-wide text-neutral-500 uppercase">
                        {item.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — CONTEXT + COUNTERS */}
          <div ref={statsRef} className="hidden lg:flex flex-col">
            <span className="text-sm font-semibold font-poppins bg-orange-400/30 max-w-max p-1 tracking-widest text-orange-500 mb-4">
              CLIENT EXPERIENCE
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-2xl mb-8 font-extrabold font-michroma">
              Precision, clarity, and lasting partnerships.
            </h1>

            <p className="text-neutral-600 leading-relaxed mb-14 font-poppins text-sm">
              Our work is grounded in structure and intention. We collaborate with
              clients who value thoughtful execution, long-term performance, and
              refined digital architecture.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl bg-white px-5 py-6
                             border border-neutral-200
                             shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)]"
                >
                  {"staticText" in stat ? (
                    <div className="text-3xl font-bold text-orange-500 mb-2">
                      {stat.staticText}
                    </div>
                  ) : (
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      start={startCount}
                    />
                  )}

                  <div className="text-sm text-neutral-600 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
