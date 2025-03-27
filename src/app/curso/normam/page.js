import React from "react";
import Link from "next/link";

export default function NORMAMPage() {
  return (
    <div className="container max-w-7xl mx-auto py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">
        NORMAM - Normas da Autoridade Marítima
      </h1>
      <p className="mb-4">
        O <strong>NORMAM</strong> (Normas da Autoridade Marítima) é um conjunto
        de regulamentações estabelecidas pela Marinha do Brasil para garantir a
        segurança, a eficiência e a conformidade legal nas operações marítimas e
        portuárias no Brasil.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">O que é o NORMAM?</h2>
      <p className="mb-4">
        As NORMAMs são diretrizes técnicas e operacionais emitidas pela
        Diretoria de Portos e Costas (DPC) da Marinha do Brasil. Elas abrangem
        uma ampla gama de temas, desde a segurança de embarcações até a gestão
        de portos e costas, sendo fundamentais para a regulamentação das
        atividades marítimas no Brasil.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Estrutura e Componentes do NORMAM
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>NORMAM 01:</strong> Cartão de Tripulação de Segurança (CTS)
          para embarcações.
        </li>
        <li>
          <strong>NORMAM 10:</strong> Procedimentos para pesquisa, exploração,
          remoção e demolição de objetos submersos.
        </li>
        <li>
          <strong>NORMAM 13:</strong> Regulamentação para aquaviários.
        </li>
        <li>
          <strong>NORMAM 17:</strong> Sinalização e navegação em áreas
          aquícolas.
        </li>
        <li>
          <strong>NORMAM 29:</strong> Transporte de cargas perigosas a granel.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Importância do NORMAM
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Segurança marítima:</strong> Estabelece padrões para a
          segurança de embarcações e operações portuárias.
        </li>
        <li>
          <strong>Conformidade legal:</strong> Garante que as atividades
          marítimas no Brasil estejam em conformidade com a legislação nacional
          e internacional.
        </li>
        <li>
          <strong>Proteção ambiental:</strong> Regulamenta práticas para
          minimizar o impacto ambiental das operações marítimas.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Como usar o NORMAM</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Conhecimento das normas:</strong> Familiarizar-se com as
          NORMAMs relevantes para a atividade específica.
        </li>
        <li>
          <strong>Cumprimento dos requisitos:</strong> Garantir que todas as
          embarcações e operações atendam aos padrões estabelecidos.
        </li>
        <li>
          <strong>Treinamento e capacitação:</strong> Capacitar tripulações e
          funcionários sobre procedimentos de segurança e regulamentações.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Exemplos de uso</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Exemplo 1:</strong> Uma empresa de navegação deve seguir a
          NORMAM 01 para obter o Cartão de Tripulação de Segurança (CTS),
          garantindo que sua embarcação esteja em conformidade com os padrões de
          segurança.
        </li>
        <li>
          <strong>Exemplo 2:</strong> Um porto deve aplicar a NORMAM 10 ao
          realizar operações de remoção de objetos submersos, seguindo os
          procedimentos adequados para evitar riscos ambientais e de segurança.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusão</h2>
      <p>
        O NORMAM é essencial para a segurança e eficiência das operações
        marítimas no Brasil, garantindo que as atividades sejam realizadas de
        forma responsável e em conformidade com a legislação. Ao seguir essas
        normas, as empresas e operadores podem minimizar riscos, proteger o meio
        ambiente e cumprir com as exigências legais.
      </p>

      <div className="mt-5">
        <Link
          href="/#cursos"
          className="btn-main bg-blue-500 text-white text-sm font-medium rounded-full px-6 py-2 transition duration-300 hover:bg-blue-700"
        >
          Voltar aos cursos
        </Link>
      </div>
    </div>
  );
}
