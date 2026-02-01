import Navbar from "@/components/Navbar";
import Hero from "@/components/home-page/Hero";
import ToolGrid from "@/components/home-page/ToolGrid";
import WhyUs from "@/components/home-page/WhyUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <ToolGrid />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}
