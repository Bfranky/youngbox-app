import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import OrderSection from "@/components/OrderSection";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingUI from "@/components/FloatingUI";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <MenuSection />
        <About />
        <OrderSection />
        <Location />
      </main>
      <Footer />
      <FloatingUI />
    </>
  );
}
