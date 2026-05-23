"use client";
import { useState, useEffect, useRef } from "react";
import { Flame } from "lucide-react";

type Item = { name: string; desc: string; price: string; tag?: string; emoji: string; image: string };
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
        image: "https://images.unsplash.com/photo-1561651823-34fed0225408?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Beef Shawarma",
        desc: "Tender seasoned beef strips, tomatoes, lettuce, special YungBosx sauce",
        price: "₦2,000",
        tag: "Popular",
        emoji: "🥩",
        image: "https://images.unsplash.com/photo-1642683215881-8b43ad841285?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Mixed Shawarma",
        desc: "Half chicken, half beef — the best of both worlds in one epic wrap",
        price: "₦2,300",
        emoji: "🌯",
        image: "https://images.unsplash.com/photo-1662116765994-4e207908b981?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Large Chicken Shawarma",
        desc: "Extra-large portion, double the filling, double the satisfaction",
        price: "₦2,200",
        tag: "Extra Large",
        emoji: "🌯",
        image: "https://images.unsplash.com/photo-1637806930600-37fa811485a5?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Large Beef Shawarma",
        desc: "Loaded beef wrap with extra toppings and our signature hot sauce",
        price: "₦2,800",
        emoji: "🥩",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Suya Shawarma",
        desc: "Nigerian suya-spiced beef wrapped in flatbread — a local fusion classic",
        price: "₦2,500",
        tag: "🔥 Signature",
        emoji: "🔥",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
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
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Spicy Fries",
        desc: "Fries tossed in our house pepper blend — for the brave",
        price: "₦800",
        tag: "🌶️ Hot",
        emoji: "🍟",
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Coleslaw",
        desc: "Fresh creamy coleslaw, perfectly balanced",
        price: "₦500",
        emoji: "🥗",
        image: "https://images.unsplash.com/photo-1625938146369-adc83368bda7?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Grilled Plantain",
        desc: "Sweet ripe plantain, grilled to caramelized perfection",
        price: "₦600",
        emoji: "🍌",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Peppered Chicken Wings",
        desc: "6 crispy wings tossed in hot pepper sauce",
        price: "₦1,800",
        tag: "Fan Fave",
        emoji: "🍗",
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Egg Roll",
        desc: "Nigerian-style egg roll, crispy and golden outside, soft inside",
        price: "₦400",
        emoji: "🥚",
        image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&auto=format&fit=crop&q=80",
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
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Bottled Water",
        desc: "Ice-cold pure water",
        price: "₦150",
        emoji: "💧",
        image: "https://images.unsplash.com/photo-1608885898957-a599fb18ec3f?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Fresh Juice",
        desc: "Zobo, Tiger Nut, or Pineapple — made fresh daily",
        price: "₦500",
        tag: "Fresh",
        emoji: "🍹",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Energy Drink",
        desc: "Bullet, Fearless, or Power Horse — fuel your night",
        price: "₦600",
        emoji: "⚡",
        image: "https://images.unsplash.com/photo-1622543956221-a396e9b05d0f?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Chapman",
        desc: "Classic Nigerian Chapman — fruity, refreshing, ice cold",
        price: "₦700",
        tag: "Popular",
        emoji: "🍊",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Smoothy",
        desc: "Blended seasonal fruits — thick, fresh, delicious",
        price: "₦800",
        emoji: "🥤",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80",
      },
    ],
  },
};

export default function MenuSection() {
  const [active, setActive] = useState<"shawarma" | "sides" | "drinks">("shawarma");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
          }
        });
      },
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [active]);

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.items.map(({ name, desc, price, tag, emoji, image }, i) => (
            <div
              key={name}
              className="reveal menu-card relative rounded-xl overflow-hidden flex flex-col justify-between"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                transitionDelay: `${0.05 * i}s`,
              }}
            >
              {/* Image header */}
              <div className="relative h-48 w-full bg-neutral-900 overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                {tag && (
                  <span
                    className="absolute top-3 left-3 text-[9px] tracking-[0.25em] uppercase font-bold px-2.5 py-1 rounded-full shadow-lg"
                    style={{
                      background: tag.includes("🔥") ? "var(--red)" : "var(--orange)",
                      color: "#fff",
                    }}
                  >
                    {tag}
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-3 mb-2">
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
                </div>

                <div className="flex items-center justify-between mt-auto pt-2">
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
        <div className="reveal text-center mt-12" style={{ transitionDelay: "0.2s" }}>
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
