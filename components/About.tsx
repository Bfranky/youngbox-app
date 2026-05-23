"use client";
import { useEffect, useRef } from "react";
import { Clock, Star, MapPin, Zap } from "lucide-react";

const perks = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Open 24/7",
    desc: "Late night craving? 3am hunger? We're always here. Our doors never close — ever.",
    color: "var(--red)",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Fresh Every Time",
    desc: "Every shawarma rolled to order. No pre-made, no shortcuts. Just fresh ingredients, every single time.",
    color: "var(--orange)",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Super Fast Service",
    desc: "Quick service whether you dine-in, do kerbside pickup, or order delivery. Your food, fast.",
    color: "var(--amber)",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Easy to Find",
    desc: "Right at Km 4, Federal Poly Road — in front of Winter Suite Hotel. You can't miss us.",
    color: "var(--red)",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24" style={{ background: "var(--dark)" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="reveal relative order-2 lg:order-1">
            {/* Big diagonal accent */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 opacity-20 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, var(--red), var(--orange))",
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
              }}
            />
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&auto=format&fit=crop&q=80"
                alt="Shawarma being prepared"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.1) 50%, transparent 100%)",
                }}
              />
              {/* Stat overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { val: "24/7", label: "Always Open" },
                    { val: "100%", label: "Fresh Daily" },
                    { val: "⭐", label: "Top Rated" },
                  ].map(({ val, label }) => (
                    <div key={label} className="text-center">
                      <div
                        className="bebas text-3xl leading-none mb-1"
                        style={{ color: "var(--amber)" }}
                      >
                        {val}
                      </div>
                      <div className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "rgba(245,236,215,0.6)" }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-4 px-5 py-4 rounded-xl"
              style={{
                background: "linear-gradient(135deg, var(--red), var(--red-deep))",
                boxShadow: "0 10px 40px rgba(217,43,43,0.4)",
              }}
            >
              <div className="bebas text-3xl leading-none text-white">3AM?</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/70 mt-0.5">We&apos;re Open!</div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <div className="reveal flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: "var(--red)" }} />
              <span className="oswald text-xs tracking-[0.4em] uppercase" style={{ color: "var(--orange)" }}>
                About YungBosx
              </span>
            </div>

            <h2
              className="reveal bebas leading-tight mb-6"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                color: "var(--warm-white)",
                transitionDelay: "0.1s",
              }}
            >
              Owerri&apos;s Favourite{" "}
              <span className="fire-text">Late-Night</span>{" "}
              Shawarma Spot
            </h2>

            <div
              className="reveal space-y-4 mb-10"
              style={{ transitionDelay: "0.2s" }}
            >
              <p className="text-base leading-relaxed" style={{ color: "rgba(245,236,215,0.65)" }}>
                YungBosx Shawarma was born from one simple idea: everyone deserves a great shawarma —
                no matter what time it is. We set up on Federal Poly Road, right in front of Winter Suite Hotel,
                where the energy is always high and the hunger is always real.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(245,236,215,0.65)" }}>
                We use only fresh ingredients, hand-roll every wrap to order, and season everything
                with our secret blend that keeps people coming back again and again. Whether it&apos;s
                a quick lunch, a late-night snack, or a post-party feast — YungBosx delivers.
              </p>
            </div>

            {/* Perks grid */}
            <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: "0.3s" }}>
              {perks.map(({ icon, title, desc, color }, i) => (
                <div
                  key={title}
                  className="p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    transitionDelay: `${0.35 + 0.08 * i}s`,
                  }}
                >
                  <div className="mb-2" style={{ color }}>{icon}</div>
                  <div
                    className="oswald font-semibold text-sm tracking-wide mb-1"
                    style={{ color: "var(--warm-white)" }}
                  >
                    {title}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)", fontSize: "0.75rem" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
