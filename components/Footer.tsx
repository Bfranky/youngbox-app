import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--charcoal)", borderTop: "1px solid rgba(217,43,43,0.12)" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="bebas text-4xl tracking-wider mb-1" style={{ color: "var(--red)" }}>
              YungBosx
            </div>
            <div className="oswald text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--muted)" }}>
              Shawarma Restaurant
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Owerri&apos;s hottest shawarma spot. Open 24 hours, 7 days a week.
              Fresh rolls, bold flavours, always ready.
            </p>
            <div
              className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold"
              style={{
                background: "rgba(217,43,43,0.1)",
                border: "1px solid rgba(217,43,43,0.25)",
                color: "var(--red)",
              }}
            >
              <span className="blink w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--red)" }} />
              Open 24 Hours
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="oswald text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "var(--orange)" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Menu", "About", "Order", "Find Us"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="oswald text-sm tracking-wide font-medium transition-colors hover:text-[var(--orange)]"
                    style={{ color: "var(--muted)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu highlights */}
          <div>
            <h4 className="oswald text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "var(--orange)" }}>
              Menu Highlights
            </h4>
            <ul className="space-y-3">
              {[
                "🌯 Chicken Shawarma",
                "🥩 Beef Shawarma",
                "🔥 Suya Shawarma",
                "🍟 Crispy Fries",
                "🍗 Peppered Wings",
                "🥤 Cold Drinks",
              ].map((item) => (
                <li key={item} className="text-sm" style={{ color: "var(--muted)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="oswald text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "var(--orange)" }}>
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+2348143990167"
                className="flex items-start gap-3 text-sm transition-colors hover:text-[var(--orange)] group"
                style={{ color: "var(--muted)" }}
              >
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:text-[var(--orange)] transition-colors" />
                0814 399 0167
              </a>
              <div className="flex items-start gap-3 text-sm" style={{ color: "var(--muted)" }}>
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--red)" }} />
                Km 4, Federal Poly Road, Owerri 460109, Imo State
              </div>
              <div className="flex items-start gap-3 text-sm" style={{ color: "var(--muted)" }}>
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--amber)" }} />
                Open 24 Hours Daily
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/2348143990167?text=Hi!%20I%27d%20like%20to%20order%20from%20YungBosx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center py-2.5 rounded-lg text-xs font-bold tracking-[0.1em] uppercase transition-all hover:scale-105"
                style={{ background: "#25D366", color: "#fff" }}
              >
                WhatsApp
              </a>
              <a
                href="tel:+2348143990167"
                className="flex-1 flex items-center justify-center py-2.5 rounded-lg text-xs font-bold tracking-[0.1em] uppercase transition-all hover:scale-105"
                style={{ background: "var(--red)", color: "#fff" }}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(136,136,136,0.6)" }}>
            © {year} YungBosx Shawarma Restaurant. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(136,136,136,0.6)" }}>
            Federal Poly Road · Owerri · Imo State · Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
