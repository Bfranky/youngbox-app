import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YungBosx Shawarma | Open 24 Hours — Owerri, Imo State",
  description: "The best shawarma in Owerri, open 24 hours! Dine-in, kerbside pickup & delivery. Km 4, Federal Poly Road, Owerri. Call 0814 399 0167.",
  keywords: "shawarma Owerri, best shawarma Imo State, 24 hour shawarma, YungBosx shawarma, fast food Owerri, delivery Owerri",
  openGraph: {
    title: "YungBosx Shawarma | Open 24 Hours — Owerri",
    description: "The best shawarma in Owerri, open 24 hours! Dine-in, kerbside pickup & delivery.",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "YungBosx Shawarma Restaurant",
  servesCuisine: ["Shawarma", "Fast Food", "Middle Eastern"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Km 4, Front of Winter Suite Hotel, Along Federal Poly Road",
    addressLocality: "Owerri",
    addressRegion: "Imo State",
    postalCode: "460109",
    addressCountry: "NG",
  },
  telephone: "+2348143990167",
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "₦",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;500;600;700&family=Nunito:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
