"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

import {
  faInstagram,
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    const phoneNumber = "5521974924628"; // Coloque o número do WhatsApp aqui
    const text = `Nome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-red-500 text-white pt-15" id="contatos">
      <div className="container max-w-7xl mx-auto px-6 md:flex md:justify-between gap-12">
        {/* Formulário */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Contact Form</h2>
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full bg-transparent border-white border p-3 mb-4 text-white placeholder-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Endereço de email"
            className="w-full bg-transparent border-white border p-3 mb-4 text-white placeholder-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Digite sua mensagem"
            className="w-full bg-transparent border-white border p-3 mb-4 text-white placeholder-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={sendToWhatsApp} className="btn btn-mainn ">
            ENVIAR
          </button>
        </div>

        {/* Informações de Contato */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <p className="uppercase text-gray-800 text-sm">
            We are Professionals
          </p>
          <h3 className="text-4xl font-bold mt-2">
            Entre em contato conosco para mais detalhes
          </h3>
          <p className="mt-4 flex items-center text-gray-800">
            <FontAwesomeIcon icon={faInstagram} className="mr-2" /> Instagram:
            @smartxenglish
          </p>
          <p className="mt-2 flex items-center text-gray-800">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email:
            smartxenglish@hotmail.com
          </p>
          <p className="mt-2 flex items-center text-gray-800">
            <FontAwesomeIcon icon={faMobileAlt} className="mr-2" /> Telefones:
            (21) 97492-4628 | (21) 96764-4652
          </p>
          <div className="flex mt-4 space-x-4 text-xl">
            <a
              href="https://www.instagram.com/smartxenglish"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-carloto-b9437b98/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-backBlue mx-auto mt-15 py-7 flex items-center justify-center">
        <img src="/smartxenglishNav.svg" style={{ maxWidth: 200 }} />
      </div>

      <div id="scroll-to-top" className="scroll-to-top">
        <span className="icon fa fa-angle-up"></span>
      </div>
    </section>
  );
}
