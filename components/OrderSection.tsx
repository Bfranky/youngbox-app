"use client";
import { useEffect, useRef } from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: "📱",
    title: "Choose How to Order",
    desc: "Call us, WhatsApp your order, or come straight to the spot.",
    color: "var(--red)",
  },
  {
    num: "02",
    icon: "🌯",
    title: "Pick Your Shawarma",
    desc: "Chicken, beef, mixed — large or regular. Add sides and drinks.",
    color: "var(--orange)",
  },
  {
    num: "03",
    icon: "🔥",
    title: "We Roll It Fresh",
    desc: "Made to order, wrapped hot and handed to you in minutes.",
    color: "var(--amber)",
  },
  {
    num: "04",
    icon: "😋",
    title: "Enjoy!",
    desc: "Dine-in, take away, kerbside pickup, or we deliver to your door.",
    color: "var(--red)",
  },
];

export default function OrderSection() {
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
    <section id="order" ref={ref} className="py-24 relative overflow-hidden" style={{ background: "var(--charcoal)" }}>
      {/* Diagonal bg decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: "repeating-linear-gradient(-45deg, var(--red) 0px, var(--red) 1px, transparent 1px, transparent 24px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10" style={{ background: "var(--red)" }} />
            <span className="oswald text-xs tracking-[0.4em] uppercase" style={{ color: "var(--orange)" }}>
              How to Order
            </span>
            <div className="h-px w-10" style={{ background: "var(--red)" }} />
          </div>
          <h2
            className="reveal bebas leading-none"
            style={{ fontSize: "clamp(2.8rem, 9vw, 6.5rem)", color: "var(--warm-white)", transitionDelay: "0.1s" }}
          >
            Simple as <span className="fire-text">1, 2, 3</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map(({ num, icon, title, desc, color }, i) => (
            <div
              key={num}
              className="reveal relative"
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              {/* Connector line (not last) */}
              {i < 3 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-px z-10"
                  style={{ background: "linear-gradient(90deg, rgba(217,43,43,0.4), transparent)", width: "calc(100% - 3rem)" }}
                />
              )}
              <div
                className="p-6 rounded-xl h-full"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span
                    className="bebas text-5xl leading-none opacity-20"
                    style={{ color }}
                  >
                    {num}
                  </span>
                  <span className="text-3xl mt-1">{icon}</span>
                </div>
                <h3
                  className="oswald font-semibold text-base tracking-wide mb-2"
                  style={{ color: "var(--warm-white)" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)", fontSize: "0.82rem" }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Big CTA block */}
        <div
          className="reveal rounded-2xl overflow-hidden"
          style={{ transitionDelay: "0.4s" }}
        >
          <div
            className="relative p-10 lg:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(217,43,43,0.15) 0%, rgba(242,100,25,0.08) 100%)",
              border: "1px solid rgba(217,43,43,0.2)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, var(--red), transparent)" }}
            />

            <h3
              className="bebas leading-none mb-4"
              style={{ fontSize: "clamp(2rem, 7vw, 5rem)", color: "var(--warm-white)" }}
            >
              Hungry Right Now?
            </h3>
            <p
              className="oswald text-base tracking-wide mb-8 max-w-lg mx-auto"
              style={{ color: "var(--muted)" }}
            >
              We&apos;re open 24 hours — call, WhatsApp, or just come down. Hot shawarma is minutes away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2348143990167?text=Hi!%20I%27d%20like%20to%20order%20from%20YungBosx%20Shawarma%20please"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl text-sm font-bold tracking-[0.08em] uppercase transition-all hover:scale-105"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  boxShadow: "0 8px 30px rgba(37,211,102,0.3)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Order
              </a>
              <a
                href="tel:+2348143990167"
                className="flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl text-sm font-bold tracking-[0.08em] uppercase transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, var(--red), var(--orange))",
                  color: "#fff",
                  boxShadow: "0 8px 30px rgba(217,43,43,0.35)",
                }}
              >
                <Phone className="w-4 h-4" />
                0814 399 0167
              </a>
              <a
                href="#location"
                className="flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl text-sm font-bold tracking-[0.08em] uppercase transition-all hover:scale-105"
                style={{
                  border: "2px solid rgba(242,100,25,0.3)",
                  color: "var(--orange)",
                  background: "rgba(242,100,25,0.05)",
                }}
              >
                <MapPin className="w-4 h-4" />
                Find Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
