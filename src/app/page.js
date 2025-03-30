import { Hero } from "@/components/hero";
import About from "./about/page";
import { Gallery } from "@/components/gallery/gallery";
import NossosCursos from "@/components/cards/cards-cursos";
import { Cta } from "@/components/cta/cta";
import Testimonials from "@/components/testimonials/testimonials";
import Counter from "@/components/counter/counter";
import DownloadSection from "@/components/cta/downloads";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <About />
      <Gallery />
      <Counter />
      <NossosCursos />
      <Cta />
      <DownloadSection />
      <Testimonials />
    </div>
  );
}
