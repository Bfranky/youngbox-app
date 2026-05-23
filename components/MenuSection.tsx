"use client";
import { useState, useEffect, useRef } from "react";
import { Flame } from "lucide-react";

type Item = { name: string; desc: string; price: string; tag?: string; emoji: string };
type Category = { label: string; icon: string; items: Item[] };

const categories: Record<string, Category> = {
  shawarma: {
    label: "Shawarma",
    icon: "🌯",
    items: [
      {
        name: "Chicken Shawarma",
        desc: "Juicy marinated chicken, garlic sauce, crisp veggies, wrapped in soft flatbread",
        price: "₦1,500",
        tag: "Best Seller",
        emoji: "🌯",
      },
      {
        name: "Beef Shawarma",
        desc: "Tender seasoned beef strips, tomatoes, lettuce, special YungBosx sauce",
        price: "₦2,000",
        tag: "Popular",
        emoji: "🥩",
      },
      {
        name: "Mixed Shawarma",
        desc: "Half chicken, half beef — the best of both worlds in one epic wrap",
        price: "₦2,300",
        emoji: "🌯",
      },
      {
        name: "Large Chicken Shawarma",
        desc: "Extra-large portion, double the filling, double the satisfaction",
        price: "₦2,200",
        tag: "Extra Large",
        emoji: "🌯",
      },
      {
        name: "Large Beef Shawarma",
        desc: "Loaded beef wrap with extra toppings and our signature hot sauce",
        price: "₦2,800",
        emoji: "🥩",
      },
      {
        name: "Suya Shawarma",
        desc: "Nigerian suya-spiced beef wrapped in flatbread — a local fusion classic",
        price: "₦2,500",
        tag: "🔥 Signature",
        emoji: "🔥",
      },
    ],
  },
  sides: {
    label: "Sides",
    icon: "🍟",
    items: [
      {
        name: "Crispy Fries",
        desc: "Golden fried potatoes, seasoned to perfection",
        price: "₦700",
        emoji: "🍟",
      },
      {
        name: "Spicy Fries",
        desc: "Fries tossed in our house pepper blend — for the brave",
        price: "₦800",
        tag: "🌶️ Hot",
        emoji: "🍟",
      },
      {
        name: "Coleslaw",
        desc: "Fresh creamy coleslaw, perfectly balanced",
        price: "₦500",
        emoji: "🥗",
      },
      {
        name: "Grilled Plantain",
        desc: "Sweet ripe plantain, grilled to caramelized perfection",
        price: "₦600",
        emoji: "🍌",
      },
      {
        name: "Peppered Chicken Wings",
        desc: "6 crispy wings tossed in hot pepper sauce",
        price: "₦1,800",
        tag: "Fan Fave",
        emoji: "🍗",
      },
      {
        name: "Egg Roll",
        desc: "Nigerian-style egg roll, crispy and golden outside, soft inside",
        price: "₦400",
        emoji: "🥚",
      },
    ],
  },
  drinks: {
    label: "Drinks",
    icon: "🥤",
    items: [
      {
        name: "Chilled Soft Drinks",
        desc: "Coke, Fanta, Sprite, Malta — ice cold always",
        price: "₦300",
        emoji: "🥤",
      },
      {
        name: "Bottled Water",
        desc: "Ice-cold pure water",
        price: "₦150",
        emoji: "💧",
      },
      {
        name: "Fresh Juice",
        desc: "Zobo, Tiger Nut, or Pineapple — made fresh daily",
        price: "₦500",
        tag: "Fresh",
        emoji: "🍹",
      },
      {
        name: "Energy Drink",
        desc: "Bullet, Fearless, or Power Horse — fuel your night",
        price: "₦600",
        emoji: "⚡",
      },
      {
        name: "Chapman",
        desc: "Classic Nigerian Chapman — fruity, refreshing, ice cold",
        price: "₦700",
        tag: "Popular",
        emoji: "🍊",
      },
      {
        name: "Smoothy",
        desc: "Blended seasonal fruits — thick, fresh, delicious",
        price: "₦800",
        emoji: "🥤",
      },
    ],
  },
};

export default function MenuSection() {
  const [active, setActive] = useState<"shawarma" | "sides" | "drinks">("shawarma");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const current = categories[active];

  return (
    <section id="menu" ref={ref} className="py-24" style={{ background: "var(--charcoal)" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10" style={{ background: "var(--red)" }} />
            <span className="oswald text-xs tracking-[0.4em] uppercase" style={{ color: "var(--orange)" }}>
              What We Serve
            </span>
            <div className="h-px w-10" style={{ background: "var(--red)" }} />
          </div>
          <h2
            className="reveal bebas leading-none"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)", color: "var(--warm-white)", transitionDelay: "0.1s" }}
          >
            Our <span className="fire-text">Menu</span>
          </h2>
          <p
            className="reveal oswald text-base tracking-wider mt-2 max-w-xl mx-auto"
            style={{ color: "var(--muted)", transitionDelay: "0.2s" }}
          >
            Everything made fresh to order — no matter what time you show up.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="reveal flex justify-center mb-10" style={{ transitionDelay: "0.25s" }}>
          <div
            className="inline-flex p-1 rounded-xl gap-1"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {(Object.keys(categories) as Array<"shawarma" | "sides" | "drinks">).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold tracking-[0.15em] uppercase transition-all duration-200"
                style={{
                  background: active === key
                    ? "linear-gradient(135deg, var(--red), var(--orange))"
                    : "transparent",
                  color: active === key ? "#fff" : "var(--muted)",
                  boxShadow: active === key ? "0 4px 16px rgba(217,43,43,0.35)" : "none",
                }}
              >
                <span>{categories[key].icon}</span>
                {categories[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Item cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {current.items.map(({ name, desc, price, tag, emoji }, i) => (
            <div
              key={name}
              className="reveal menu-card relative rounded-xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                transitionDelay: `${0.08 * i}s`,
              }}
            >
              {/* Warm-toned gradient top bar */}
              <div
                className="h-1"
                style={{
                  background: i % 3 === 0
                    ? "linear-gradient(90deg, var(--red), var(--orange))"
                    : i % 3 === 1
                    ? "linear-gradient(90deg, var(--orange), var(--amber))"
                    : "linear-gradient(90deg, var(--amber), var(--red))",
                }}
              />
              <div className="p-5">
                {/* Tag */}
                {tag && (
                  <span
                    className="inline-block mb-3 text-[9px] tracking-[0.25em] uppercase font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: tag.includes("🔥") ? "rgba(217,43,43,0.2)" : "rgba(242,100,25,0.15)",
                      color: tag.includes("🔥") ? "var(--red)" : "var(--orange)",
                      border: `1px solid ${tag.includes("🔥") ? "rgba(217,43,43,0.3)" : "rgba(242,100,25,0.25)"}`,
                    }}
                  >
                    {tag}
                  </span>
                )}

                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{emoji}</span>
                  <h3
                    className="oswald font-semibold text-lg leading-snug tracking-wide"
                    style={{ color: "var(--warm-white)" }}
                  >
                    {name}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)", fontSize: "0.82rem" }}>
                  {desc}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="bebas text-2xl tracking-wider"
                    style={{ color: "var(--orange)" }}
                  >
                    {price}
                  </span>
                  <a
                    href={`https://wa.me/2348143990167?text=Hi!%20I%27d%20like%20to%20order%20${encodeURIComponent(name)}%20from%20YungBosx%20Shawarma`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold tracking-[0.1em] uppercase transition-all hover:scale-105"
                    style={{
                      background: "rgba(217,43,43,0.15)",
                      color: "var(--red)",
                      border: "1px solid rgba(217,43,43,0.25)",
                    }}
                  >
                    <Flame className="w-3 h-3" /> Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View full menu CTA */}
        <div className="reveal text-center mt-12" style={{ transitionDelay: "0.5s" }}>
          <a
            href="https://wa.me/2348143990167?text=Hi!%20Can%20I%20see%20the%20full%20menu%20please%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl text-sm font-bold tracking-[0.1em] uppercase transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--red), var(--orange))",
              color: "#fff",
              boxShadow: "0 8px 30px rgba(217,43,43,0.3)",
            }}
          >
            <span className="flame">🔥</span> Get Full Menu on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
