import React from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import ContactSection from "@/app/contact/page";

export default function IELTS() {
  return (
    <>
      <Header />
      <div className="container max-w-7xl mx-auto py-10 text-gray-800 px-5 md:px-0 mt-20">
        <h1 className="text-3xl font-bold mb-4">
          IELTS: Exame de Proficiência em Inglês
        </h1>
        <p className="mb-4">
          O <strong>IELTS</strong> (International English Language Testing
          System) é um exame amplamente reconhecido para avaliar a proficiência
          em inglês, dividido em quatro seções:{" "}
          <strong>Listening, Reading, Writing</strong> e{" "}
          <strong>Speaking</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">O que é o IELTS?</h2>
        <p className="mb-4">
          Criado em 1989, o IELTS avalia a capacidade prática de usar o idioma
          em situações do dia a dia. Aceito por mais de 12.500 organizações em
          cerca de 140 países, é utilizado por universidades, empregadores e
          autoridades de imigração.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Formato do IELTS</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Listening (40 minutos):</strong> Compreensão de diferentes
            sotaques e estilos de fala.
          </li>
          <li>
            <strong>Reading (60 minutos):</strong> Interpretação de textos
            acadêmicos ou gerais.
          </li>
          <li>
            <strong>Writing (60 minutos):</strong> Análise de dados e redação
            argumentativa.
          </li>
          <li>
            <strong>Speaking (11-14 minutos):</strong> Entrevista face a face
            com examinador.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Tipos de IELTS</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Academic:</strong> Para estudantes que desejam ingressar em
            universidades internacionais.
          </li>
          <li>
            <strong>General Training:</strong> Para imigração e empregos não
            acadêmicos.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Importância do IELTS
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Estudos no exterior:</strong> Requisito de muitas
            universidades.
          </li>
          <li>
            <strong>Trabalho internacional:</strong> Exigência de diversas
            empresas globais.
          </li>
          <li>
            <strong>Imigração:</strong> Necessário para processos migratórios em
            países como Canadá, Reino Unido e Austrália.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Como usar o IELTS</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Preparação:</strong> Conhecer o formato do teste e praticar
            com materiais oficiais.
          </li>
          <li>
            <strong>Aprimorar vocabulário:</strong> Enriquecer o léxico em
            inglês com leituras e escuta ativa.
          </li>
          <li>
            <strong>Simulações:</strong> Resolver provas anteriores para
            familiarização com o estilo das questões.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Exemplos de Uso</h2>
        <p className="mb-2">
          🔹 Um estudante que deseja cursar mestrado no Reino Unido precisa de
          uma pontuação mínima de <strong>6.5</strong> no IELTS Academic.
        </p>
        <p className="mb-4">
          🔹 Um engenheiro aplicando para um visto de trabalho na Austrália deve
          obter a nota exigida pelo órgão regulador do setor.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusão</h2>
        <p>
          O IELTS é uma ferramenta essencial para quem deseja estudar, trabalhar
          ou imigrar para países de língua inglesa. Com preparação adequada, os
          candidatos podem alcançar as pontuações necessárias para atingir seus
          objetivos internacionais.
        </p>
        <div className="mt-5">
          <Link
            href="/#cursos"
            className="btn-main bg-red-500 text-white text-sm font-medium rounded-full px-6 py-2 transition duration-300 hover:bg-red-700"
          >
            Voltar aos cursos
          </Link>
        </div>
      </div>

      <ContactSection />
    </>
  );
}
