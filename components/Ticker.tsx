export default function Ticker() {
  const items = [
    "🔥 Open 24 Hours",
    "🌯 Chicken Shawarma",
    "🥩 Beef Shawarma",
    "🚚 Delivery Available",
    "🚗 Kerbside Pickup",
    "🍟 Fries & Sides",
    "🥤 Cold Drinks",
    "📍 Federal Poly Road Owerri",
  ];
  const doubled = [...items, ...items];

  return (
    <div
      className="py-3 overflow-hidden"
      style={{ background: "linear-gradient(90deg, var(--red-deep), var(--red), var(--orange), var(--red), var(--red-deep))" }}
    >
      <div className="flex">
        <div className="ticker-track flex whitespace-nowrap flex-shrink-0">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="oswald flex items-center gap-4 px-6 text-xs tracking-[0.25em] uppercase font-semibold"
              style={{ color: "#fff" }}
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "rgba(255,255,255,0.4)" }} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
