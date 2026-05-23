"use client";
import { useEffect, useRef } from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Location() {
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
    <section id="location" ref={ref} className="py-24" style={{ background: "var(--black)" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10" style={{ background: "var(--red)" }} />
            <span className="oswald text-xs tracking-[0.4em] uppercase" style={{ color: "var(--orange)" }}>
              Find Us
            </span>
            <div className="h-px w-10" style={{ background: "var(--red)" }} />
          </div>
          <h2
            className="reveal bebas leading-none"
            style={{ fontSize: "clamp(2.8rem, 9vw, 6.5rem)", color: "var(--warm-white)", transitionDelay: "0.1s" }}
          >
            Come <span className="fire-text">Hungry</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Info cards — 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: <MapPin className="w-5 h-5" />,
                label: "Address",
                value: "Km 4, Front of Winter Suite Hotel, Along Federal Poly Road, Owerri 460109, Imo State",
                link: "https://maps.google.com/?q=Federal+Poly+Road+Owerri+Imo+State",
                linkText: "📍 C4F3+WH Owerri",
                color: "var(--red)",
              },
              {
                icon: <Phone className="w-5 h-5" />,
                label: "Phone / WhatsApp",
                value: "0814 399 0167",
                link: "tel:+2348143990167",
                linkText: "Tap to call",
                color: "var(--orange)",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                label: "Opening Hours",
                value: "We never close — open 24 hours, 7 days a week, 365 days a year.",
                color: "var(--amber)",
              },
            ].map(({ icon, label, value, link, linkText, color }, i) => (
              <div
                key={label}
                className="reveal flex gap-4 p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transitionDelay: `${0.1 * i}s`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}22`, color }}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase mb-1" style={{ color: "var(--muted)" }}>
                    {label}
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: "var(--warm-white)" }}>{value}</div>
                  {link && (
                    <a
                      href={link}
                      target={link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs font-semibold hover:underline underline-offset-2 transition-colors"
                      style={{ color }}
                    >
                      {linkText}
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Open 24h big badge */}
            <div
              className="reveal rounded-xl p-5 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(217,43,43,0.15), rgba(242,100,25,0.08))",
                border: "1px solid rgba(217,43,43,0.2)",
                transitionDelay: "0.3s",
              }}
            >
              <div
                className="bebas text-5xl leading-none mb-1"
                style={{ color: "var(--red)", textShadow: "0 0 30px rgba(217,43,43,0.5)" }}
              >
                24/7
              </div>
              <div className="oswald text-xs tracking-[0.3em] uppercase" style={{ color: "var(--muted)" }}>
                Always Open · Never Closed
              </div>
            </div>

            <div className="reveal grid grid-cols-2 gap-3" style={{ transitionDelay: "0.35s" }}>
              <a
                href="https://maps.google.com/?q=Federal+Poly+Road+Owerri+Imo+State"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold tracking-[0.1em] uppercase transition-all hover:scale-105"
                style={{ background: "var(--red)", color: "#fff" }}
              >
                <Navigation className="w-3.5 h-3.5" /> Directions
              </a>
              <a
                href="https://wa.me/2348143990167?text=Hi!%20I%27d%20like%20to%20order%20from%20YungBosx%20Shawarma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold tracking-[0.1em] uppercase transition-all hover:scale-105"
                style={{ background: "#25D366", color: "#fff" }}
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map — 3 cols */}
          <div className="reveal lg:col-span-3" style={{ transitionDelay: "0.2s" }}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(217,43,43,0.15)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972!2d7.0274!3d5.4836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042c6f2a0dca8ef%3A0x0!2sFederal+Polytechnic+Road%2C+Owerri%2C+Imo+State!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                width="100%"
                height="420"
                style={{
                  border: 0,
                  filter: "invert(95%) hue-rotate(180deg) saturate(0.8) brightness(0.85)",
                  display: "block",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="YungBosx Shawarma Location"
              />
            </div>

            {/* Landmark tag */}
            <div
              className="mt-4 flex items-center gap-3 p-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span className="text-2xl">🏨</span>
              <div>
                <div className="text-sm font-semibold" style={{ color: "var(--warm-white)" }}>
                  Landmark: Winter Suite Hotel
                </div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>
                  We&apos;re right in front — Km 4, Federal Poly Road, Owerri
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
