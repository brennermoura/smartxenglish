"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments, // Phrasal verbs
  faShip, // ISGOTT
  faChartLine, // IELTS
  faLifeRing, // SOLAS
  faShieldAlt, // HSSE
  faAnchor, // NORMAM, INCOTERM, Maritime Security, Inglês Financeiro
  faExchangeAlt, // INCOTERM
  faMagnifyingGlassDollar, // Inglês Financeiro
  faAnchorCircleCheck, // NORMAM (legislação)
} from "@fortawesome/free-solid-svg-icons";

const cursos = [
  {
    icon: faComments,
    title: "Phrasal verbs",
    shortText:
      "São uma ferramenta poderosa para qualquer profissional que deseje se comunicar de forma eficaz em inglês no mercado global.",
    link: "/curso/phrasal-verbs",
  },
  {
    icon: faShip,
    title: "ISGOTT",
    shortText:
      "Guia global para operações seguras em navios-tanque e terminais petrolíferos, estabelece padrões técnicos e procedimentos críticos para mitigar riscos.",
    link: "/curso/isgott",
  },
  {
    icon: faChartLine,
    title: "IELTS",
    shortText:
      "Avalia a capacidade prática de usar o idioma em situações do dia a dia, é utilizado por universidades, empregadores e autoridades de imigração.",
    link: "/curso/ielts",
  },
  {
    icon: faLifeRing,
    title: "SOLAS",
    shortText:
      "É um pilar essencial para a segurança marítima, garantindo operações seguras, redução de acidentes e proteção ambiental.",
    link: "/curso/solas",
  },
  {
    icon: faShieldAlt,
    title: "HSSE",
    shortText:
      "Ao implementar um sistema HSSE eficaz, as empresas podem minimizar riscos, melhorar a conformidade regulatória e promover uma cultura de segurança.",
    link: "/curso/hsse",
  },
  {
    icon: faAnchorCircleCheck,
    title: "NORMAM",
    shortText:
      "Conjunto de regulamentações estabelecidas pela Marinha do Brasil para garantir a segurança, a eficiência e a conformidade legal nas operações marítimas e portuárias no Brasil.",
    link: "/curso/normam",
  },
  {
    icon: faExchangeAlt,
    title: "INCOTERM",
    shortText:
      "Os INCOTERMs simplificam a comunicação entre compradores e vendedores, reduzem riscos e garantem clareza contratual.",
    link: "/curso/incoterm",
  },
  {
    icon: faAnchor,
    title: "Maritime Security",
    shortText:
      "Medidas e estratégias implementadas para proteger embarcações, portos e infraestruturas marítimas contra ameaças.",
    link: "/curso/maritime-security",
  },
  {
    icon: faMagnifyingGlassDollar,
    title: "Inglês Financeiro",
    shortText:
      "Desempenha um papel fundamental para profissionais que desejam expandir suas oportunidades e se destacar no setor financeiro.",
    link: "/curso/ingles-financeiro",
  },
];

const NossosCursos = () => {
  return (
    <>
      <div
        id="cursos"
        className="container max-w-7xl mx-auto mb-16 pt-15 px-6 md:px-0"
      >
        <div className="md:text-center ">
          <span className="text-lg text-gray-800 font-semibold">
            Offshore English
          </span>
          <h2 className="textRed font-bold text-4xl uppercase mt-2 mb-8">
            Do básico ao avançado
          </h2>
        </div>

        <p className="md:px-15 md:text-center text-lg mb-12 text-gray-800">
          O Inglês é uma ferramenta essencial no mercado de trabalho atual,
          especialmente em um cenário global cada vez mais interconectado. É
          fundamental para qualquer profissional que deseja prosperar no mercado
          de trabalho global, acessar oportunidades internacionais, aumentar sua
          remuneração e se comunicar efetivamente com parceiros globais. Em um
          mundo cada vez mais conectado, o inglês não é apenas uma ferramenta
          útil – é uma necessidade para quem busca sucesso no setor corporativo.
          <span className="italic ml-1 text-gray-600">
            Veja abaixo todos os tópicos que ensinamos
          </span>
          .
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cursos.map((curso, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "bg-backBlue" : "bg-white"
              } shadow-lg rounded-lg p-6 text-center h-full flex flex-col`}
            >
              <FontAwesomeIcon
                icon={curso.icon}
                className="textRed mx-auto"
                style={{ width: "30px", height: "30px" }}
              />
              <h4
                className={`mt-4 mb-2 text-lg font-bold ${
                  index % 2 === 0 ? "text-white" : "textBlue"
                }`}
              >
                {curso.title}
              </h4>
              <p
                className={`${
                  index % 2 === 0 ? "text-gray-100" : "text-gray-900"
                }`}
              >
                {curso.shortText.length > 105
                  ? curso.shortText.substring(0, 105) + "..."
                  : curso.shortText}
              </p>
              <div className="mt-5">
                <a
                  href={curso.link}
                  className="btn-main bg-red-500 text-white text-sm font-medium rounded-full px-6 py-2 transition duration-300 hover:bg-red-700"
                >
                  Veja mais...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NossosCursos;
