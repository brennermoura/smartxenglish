"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const smoothScroll = (target) => {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 600; // Duração da rolagem em ms
    let startTime = null;

    function animationScroll(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startPosition + distance * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animationScroll);
      }
    }

    requestAnimationFrame(animationScroll);
  };

  const handleAnchorClick = useCallback(
    (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");

      if (href.startsWith("#")) {
        setIsOpen(false); // Fecha o menu antes da rolagem

        setTimeout(() => {
          // Dá um pequeno tempo para fechar antes da rolagem
          const targetElement = document.querySelector(href);
          if (targetElement) {
            smoothScroll(targetElement);
          }
        }, 200);
      } else {
        router.push(href);
      }
    },
    [router]
  );

  return (
    <header className="w-full px-4 py-5 bg-backBlue text-white border-b-2 border-red-400">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="max-w-40">
          <Image
            src="/smartxenglishNav.svg"
            alt="SmartX English Logo"
            width={200}
            height={100}
            priority
          />
        </div>

        {/* Menu para telas grandes */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-5 uppercase">
            <li>
              <Link
                href="#sobre"
                className="btn-navbar"
                onClick={handleAnchorClick}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#fotos"
                className="btn-navbar"
                onClick={handleAnchorClick}
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                href="#depoimentos"
                className="btn-navbar"
                onClick={handleAnchorClick}
              >
                Depoimentos
              </Link>
            </li>
            <li>
              <Link
                href="#contatos"
                className="btn-navbar"
                onClick={handleAnchorClick}
              >
                Contatos
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão do menu mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-16 left-0 w-full bg-backBlue text-white z-15"
        >
          <ul className="flex flex-col items-center gap-4 py-4 uppercase">
            <li>
              <Link
                href="#sobre"
                className="btn-navbar"
                onClick={handleAnchorClick}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#fotos"
                className="btn-navbar"
                onClick={handleAnchorClick}
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                href="#depoimentos"
                className="btn-navbar"
                onClick={handleAnchorClick}
              >
                Depoimentos
              </Link>
            </li>
            <li>
              <Link
                href="#contatos"
                className="btn-navbar"
                onClick={handleAnchorClick}
              >
                Contatos
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
