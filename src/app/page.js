"use client";
import { useEffect, useState } from "react";
import { Hero } from "@/components/hero";
import About from "./about/page";
import { Gallery } from "@/components/gallery/gallery";
import NossosCursos from "@/components/cards/cards-cursos";
import { Cta } from "@/components/cta/cta";
import Testimonials from "@/components/testimonials/testimonials";
import Counter from "@/components/counter/counter";
import DownloadSection from "@/components/cta/downloads";
import { Header } from "@/components/header";
import ContactSection from "./contact/page";
import SkeletonLoader from "@/components/skeleton/SkeletonLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento de 1.5s antes de exibir o conteúdo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50">
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Gallery />
          <Counter />
          <NossosCursos />
          <Cta />
          <DownloadSection />
          <Testimonials />
          <ContactSection />
        </>
      )}
    </div>
  );
}
