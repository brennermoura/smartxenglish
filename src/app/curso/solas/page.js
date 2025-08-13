import React from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import ContactSection from "@/app/contact/page";

export default function Solas() {
  return (
    <>
      <Header />
      <div className="container max-w-7xl mx-auto py-10 text-gray-800 px-5 md:px-0 mt-20">
        <h1 className="text-3xl font-bold mb-4">
          SOLAS: Segurança Marítima Internacional
        </h1>
        <p className="mb-4">
          O <strong>SOLAS</strong> (International Convention for the Safety of
          Life at Sea) é um tratado marítimo internacional fundamental que
          estabelece padrões mínimos de segurança para a construção, equipamento
          e operação de navios mercantes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">O que é o SOLAS?</h2>
        <p className="mb-4">
          Criado em resposta ao desastre do Titanic em 1912, o SOLAS teve sua
          primeira versão adotada em 1914. A versão atual, conhecida como SOLAS
          1974, entrou em vigor em 1980 e continua sendo atualizada para
          refletir avanços tecnológicos e novas preocupações de segurança.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Estrutura e Componentes
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Capítulo I:</strong> Inspeções e certificação de navios.
          </li>
          <li>
            <strong>Capítulo II:</strong> Construção de navios, incluindo
            proteção contra incêndios.
          </li>
          <li>
            <strong>Capítulo III:</strong> Equipamentos de salvamento, como
            botes e coletes salva-vidas.
          </li>
          <li>
            <strong>Capítulo XI:</strong> Medidas para segurança marítima,
            incluindo o Código ISPS.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Importância do SOLAS
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Segurança de vidas:</strong> Redução de riscos em
            emergências marítimas.
          </li>
          <li>
            <strong>Padronização internacional:</strong> Regulamentação uniforme
            entre países.
          </li>
          <li>
            <strong>Proteção ambiental:</strong> Prevenção de vazamentos de óleo
            e poluição marinha.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Como Utilizar o SOLAS?
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Certificação:</strong> Inspeções regulares e emissão de
            certificados de segurança.
          </li>
          <li>
            <strong>Treinamento da tripulação:</strong> Preparação para
            emergências e uso de equipamentos.
          </li>
          <li>
            <strong>Manutenção de equipamentos:</strong> Inspeção contínua de
            sistemas críticos.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Exemplos Práticos</h2>
        <p className="mb-2">
          🚢 Um navio petroleiro deve seguir os padrões de construção do SOLAS
          para minimizar riscos de incêndio.
        </p>
        <p className="mb-4">
          ⚓ Em um porto, a inspeção de um navio estrangeiro pode verificar a
          conformidade com o SOLAS.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusão</h2>
        <p>
          O SOLAS é um pilar essencial para a segurança marítima, garantindo
          operações seguras, redução de acidentes e proteção ambiental. Ao
          seguir suas diretrizes, a indústria marítima se torna mais eficiente e
          segura.
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
