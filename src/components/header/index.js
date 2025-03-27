"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" px-4 py-5 bg-backBlue text-white border-b-2 border-red-400">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="max-w-40">
          <Image
            src="/smartxenglishNav.svg"
            alt="Descrição da logo"
            width={200}
            height={100}
            layout="responsive"
          />
        </div>

        {/* Menu para telas grandes */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-5 uppercase">
            <li>
              <Link href="/#sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/metodo">Método</Link>
            </li>
            <li>
              <Link href="/comentarios">Comentários</Link>
            </li>
            <li>
              <Link href="/contatos">Contatos</Link>
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
              <Link href="/#sobre" onClick={() => setIsOpen(false)}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/metodo" onClick={() => setIsOpen(false)}>
                Método
              </Link>
            </li>
            <li>
              <Link href="/comentarios" onClick={() => setIsOpen(false)}>
                Comentários
              </Link>
            </li>
            <li>
              <Link href="/contatos" onClick={() => setIsOpen(false)}>
                Contatos
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
