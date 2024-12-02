import Custom from "@/components/Custom";
import Extension from "@/components/Extension";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionTwo from "@/components/SectionTwo";
import Sponser from "@/components/Sponser";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <SectionTwo />
      <Extension />
      <Custom />
      <Work />
      <Sponser />
      <Footer />
    </main>
  );
}
