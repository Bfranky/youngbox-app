"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Order", href: "#order" },
  { label: "Find Us", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,8,8,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(217,43,43,0.2)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between" style={{ height: "70px" }}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div
              className="bebas text-3xl tracking-wider leading-none"
              style={{ color: "var(--red)" }}
            >
              YungBosx
            </div>
            <div
              className="hidden sm:flex flex-col leading-none"
            >
              <span className="text-[8px] tracking-[0.35em] uppercase" style={{ color: "var(--orange)" }}>
                Shawarma
              </span>
              <span className="text-[7px] tracking-[0.2em] uppercase" style={{ color: "var(--muted)" }}>
                Restaurant
              </span>
            </div>
          </a>

          {/* Open 24hrs badge */}
          <div
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold"
            style={{ background: "rgba(217,43,43,0.12)", border: "1px solid rgba(217,43,43,0.3)", color: "var(--red)" }}
          >
            <span className="blink w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--red)" }} />
            Open 24 Hours
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="oswald text-sm tracking-[0.1em] uppercase font-medium transition-colors hover:text-[var(--orange)]"
                style={{ color: "rgba(245,236,215,0.7)" }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+2348143990167"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs tracking-[0.1em] uppercase font-bold transition-all hover:scale-105"
              style={{ background: "var(--red)", color: "#fff" }}
            >
              <Phone className="w-3.5 h-3.5" />
              Order Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            style={{ color: "var(--warm-white)" }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ background: "rgba(8,8,8,0.99)", borderColor: "rgba(217,43,43,0.15)" }}
        >
          <div className="px-5 py-5 space-y-1">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="oswald block px-3 py-3.5 text-sm tracking-[0.15em] uppercase font-medium border-b transition-colors hover:text-[var(--orange)]"
                style={{ color: "rgba(245,236,215,0.8)", borderColor: "rgba(255,255,255,0.05)" }}
              >
                {label}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              <a
                href="tel:+2348143990167"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-lg text-xs font-bold tracking-[0.1em] uppercase"
                style={{ background: "var(--red)", color: "#fff" }}
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/2348143990167?text=Hi!%20I%27d%20like%20to%20order%20from%20YungBosx%20Shawarma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-lg text-xs font-bold tracking-[0.1em] uppercase"
                style={{ background: "#25D366", color: "#fff" }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
