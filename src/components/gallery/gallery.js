"use client";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react"; // Ícones para navegação

export function Gallery() {
  const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
  ];
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  // Fechar ao pressionar ESC e navegar com setas
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage(e);
      if (e.key === "ArrowRight") nextImage(e);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="textRed font-bold text-4xl uppercase text-center mt-16 mb-10">
        Se prepare para estar aqui
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-40 h-40 md:w-75 md:h-75 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover rounded-lg cursor-pointer filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110"
              src={`/images/${img}`}
              alt={`Imagem ${index + 1}`}
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox (Modal) */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={closeLightbox}
        >
          <div className="relative p-6 bg-gray-900 rounded-lg max-w-3xl mx-auto flex flex-col items-center">
            {/* Botão Fechar */}
            <button
              className="absolute top-3 right-3 text-white bg-gray-700/50 p-2 rounded-full hover:bg-gray-800/50"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>

            {/* Botão Anterior */}
            <button
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-700/50 p-2 rounded-full hover:bg-gray-800/50"
              onClick={prevImage}
            >
              <ChevronLeft size={32} />
            </button>

            {/* Imagem */}
            <img
              src={`/images/${images[lightboxIndex]}`}
              alt="Imagem ampliada"
              className="max-w-3xl max-h-[80vh] rounded-lg mt-8 mb-8"
            />

            {/* Botão Próximo */}
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-700/50 p-2 rounded-full hover:bg-gray-800/50"
              onClick={nextImage}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
