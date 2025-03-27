import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBookOpen,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

const ApresentacaoEscola = () => {
  return (
    <div className="container mx-auto text-lg mb-15">
      <h2 className="textRed font-bold text-4xl uppercase text-center mt-16">
        O que fazemos
      </h2>

      <p className="mt-6 text-gray-700 text-center font-semibold">
        Venha se preparar para o mercado internacional com o
        <strong>inglês técnico essencial</strong> para sua carreira!
      </p>

      <p className="mt-4 text-gray-700 text-center">
        Nossa instituição é especializada no ensino de inglês voltado para as
        indústrias <strong>offshore, portuária e marítima</strong>,
        proporcionando aos alunos o conhecimento linguístico essencial para
        atuar com segurança e eficiência nessas áreas.
      </p>

      <h2 className="textRed font-bold text-4xl uppercase text-center mt-16 mb-10">
        Nossos Cursos
      </h2>

      <div className="flex justify-center mx-auto gap-6 ">
        <div className="w-full">
          <div className=" text-white shadow-lg rounded-xl p-10 h-full bg-backBlue">
            <h4 className="mt-4 mb-3 text-gray-100 font-semibold">
              1. Inglês Geral
            </h4>
            <ul className="list-disc list-inside">
              <li>
                <strong>BASIC:</strong> Fundamentos do idioma, vocabulário
                essencial e estruturação de frases.
              </li>
              <li>
                <strong>INTERMEDIATE:</strong> Conversação fluente, leitura
                técnica e expressões usuais na indústria.
              </li>
              <li>
                <strong>ADVANCED:</strong> Inglês específico para negociações,
                documentação e comunicação com equipes internacionais.
              </li>
            </ul>

            <h4 className="mt-6 mb-3 text-gray-100 font-semibold">
              2. Inglês Técnico
            </h4>
            <ul className="list-disc list-inside">
              <li>
                <strong>ISGOTT:</strong> Normas e procedimentos de segurança
                para transporte de petróleo.
              </li>
              <li>
                <strong>SOLAS:</strong> Regulamentos para segurança da vida no
                mar.
              </li>
              <li>
                <strong>NORMAM:</strong> Regras específicas da Marinha do Brasil
                para operações náuticas.
              </li>
              <li>
                <strong>MARITIME SECURITY:</strong> Treinamento em inglês para
                emergências, primeiros socorros e protocolos internacionais.
              </li>
              <li>
                <strong>INCOTERMS:</strong> Termos internacionais de comércio
                para operações logísticas e contratuais.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="mt-16 textRed font-bold text-4xl uppercase text-center">
        ✨ Por que estudar conosco?
      </h2>
      <div className="list-disc list-inside text-gray-700 text-center mt-6">
        <p>
          Cursos elaborados por especialistas do setor. Material didático
          atualizado com normas internacionais. Foco em comunicação eficaz e
          segurança operacional. Aulas dinâmicas e interativas.
        </p>
      </div>

      <h2 className="textRed font-bold text-4xl uppercase text-center mt-16">
        🎯 Diferenciais da Nossa Escola
      </h2>
      <ul className="list-disc list-inside text-gray-700 text-center mt-6">
        <li>
          <strong>Aulas presenciais e online</strong> com professores
          especializados.
          <strong className="ml-1">Certificação reconhecida</strong> pelo setor
          marítimo e offshore.
          <strong className="ml-1">Simulações realistas</strong> de comunicação
          a bordo e em portos.
          <strong className="ml-1">Parcerias com empresas do setor</strong> para
          melhor inserção no mercado.
        </li>
      </ul>
    </div>
  );
};

export default ApresentacaoEscola;

<div className=" mx-auto py-2">
  <div className="flex justify-center gap-4 mx-auto">
    {/* Inglês desde a origem */}
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white/80 shadow-lg rounded-xl p-10 text-center">
        <FontAwesomeIcon
          icon={faGlobe}
          className="textRed w-[40px] h-[40px] mx-auto"
        />
        <h4 className="mt-4 mb-3 text-xl font-semibold">
          Inglês desde a origem
        </h4>
        <p>
          Aprenda as palavras desde o grego até a sua utilização nos dias
          atuais.
        </p>
      </div>
    </div>

    {/* Método IELTS */}
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white/80 shadow-lg rounded-xl p-10 text-center">
        <FontAwesomeIcon
          icon={faBookOpen}
          className="textRed w-[40px] h-[40px] mx-auto"
        />
        <h4 className="mt-4 mb-3 text-xl font-semibold">Método IELTS</h4>
        <p>Sistema de avaliação na língua inglesa internacional.</p>
      </div>
    </div>

    {/* Inglês Offshore */}
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white/80 shadow-lg rounded-xl p-10 text-center">
        <FontAwesomeIcon
          icon={faAnchor}
          className="textRed w-[40px] h-[40px] mx-auto"
        />
        <h4 className="mt-4 mb-3 text-xl font-semibold">Inglês Offshore</h4>
        <p>Para quem trabalha ou deseja trabalhar em navios ou plataformas.</p>
      </div>
    </div>
  </div>
</div>;
