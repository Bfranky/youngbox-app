"use client";
import { useEffect, useState } from "react";
import { ChevronDown, Clock, Truck, UtensilsCrossed } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setLoaded(true);
    const update = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      setTime(`${h}:${m}`);
    };
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--black)" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1800&auto=format&fit=crop&q=80"
          alt="Shawarma"
          className="w-full h-full object-cover"
          style={{ opacity: 0.18 }}
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.3) 40%, rgba(8,8,8,0.85) 85%, rgba(8,8,8,1) 100%)",
          }}
        />
        {/* Red glow from bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{
            background: "linear-gradient(to top, rgba(217,43,43,0.08), transparent)",
          }}
        />
      </div>

      {/* Diagonal stripe decoration */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none hidden lg:block"
        style={{
          background: "repeating-linear-gradient(45deg, var(--red) 0px, var(--red) 2px, transparent 2px, transparent 20px)",
        }}
      />

      {/* Live time badge */}
      {time && (
        <div
          className="absolute top-24 right-6 lg:right-10 flex flex-col items-end"
          style={{ color: "var(--muted)" }}
        >
          <div
            className="bebas text-5xl leading-none"
            style={{ color: "var(--red)", textShadow: "0 0 30px rgba(217,43,43,0.5)" }}
          >
            {time}
          </div>
          <div className="text-[9px] tracking-[0.35em] uppercase mt-1">Owerri, NG</div>
          <div
            className="flex items-center gap-1.5 mt-2 text-[10px] tracking-[0.2em] uppercase font-bold"
            style={{ color: "var(--orange)" }}
          >
            <span className="blink w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--orange)" }} />
            We Never Close
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div
              className="h-px w-12"
              style={{ background: "var(--red)" }}
            />
            <span
              className="oswald text-xs tracking-[0.4em] uppercase font-medium"
              style={{ color: "var(--orange)" }}
            >
              Km 4 · Federal Poly Road · Owerri
            </span>
          </div>

          {/* Main title */}
          <div
            className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h1
              className="bebas leading-none mb-2"
              style={{
                fontSize: "clamp(4.5rem, 16vw, 12rem)",
                color: "var(--warm-white)",
                letterSpacing: "0.02em",
              }}
            >
              YungBosx
            </h1>
            <div className="flex items-end gap-4 flex-wrap">
              <h2
                className="bebas leading-none fire-text"
                style={{
                  fontSize: "clamp(3rem, 11vw, 8rem)",
                  letterSpacing: "0.05em",
                }}
              >
                Shawarma
              </h2>
              <span
                className="bebas leading-none mb-2"
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 4rem)",
                  color: "rgba(245,236,215,0.25)",
                  letterSpacing: "0.1em",
                }}
              >
                Restaurant
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p
            className={`oswald text-lg lg:text-xl tracking-[0.05em] mt-6 mb-10 max-w-lg transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.25s", color: "rgba(245,236,215,0.65)" }}
          >
            Owerri&apos;s hottest shawarma spot. Rolled fresh, served hot —{" "}
            <span style={{ color: "var(--amber)" }}>24 hours a day, 7 days a week.</span>
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <a
              href="https://wa.me/2348143990167?text=Hi!%20I%27d%20like%20to%20order%20from%20YungBosx%20Shawarma%20please"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold tracking-[0.08em] uppercase transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, var(--red), var(--orange))",
                color: "#fff",
                boxShadow: "0 8px 30px rgba(217,43,43,0.4)",
              }}
            >
              <span className="flame">🔥</span> Order on WhatsApp
            </a>
            <a
              href="tel:+2348143990167"
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold tracking-[0.08em] uppercase transition-all duration-200 hover:scale-105"
              style={{
                border: "2px solid rgba(242,100,25,0.4)",
                color: "var(--orange)",
                background: "rgba(242,100,25,0.05)",
              }}
            >
              📞 Call to Order
            </a>
          </div>

          {/* Features strip */}
          <div
            className={`flex flex-wrap gap-6 transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "0.55s" }}
          >
            {[
              { icon: <Clock className="w-4 h-4" />, label: "Open 24 Hours" },
              { icon: <UtensilsCrossed className="w-4 h-4" />, label: "Dine-In" },
              { icon: <Truck className="w-4 h-4" />, label: "Delivery" },
              { icon: <span className="text-sm">🚗</span>, label: "Kerbside Pickup" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-semibold"
                style={{ color: "rgba(245,236,215,0.5)" }}
              >
                <span style={{ color: "var(--red)" }}>{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#menu">
          <ChevronDown className="w-6 h-6" style={{ color: "rgba(217,43,43,0.6)" }} />
        </a>
      </div>
    </section>
  );
}
