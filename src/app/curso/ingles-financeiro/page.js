import React from "react";
import Link from "next/link";

export default function InglesFinanceiro() {
  return (
    <div className="container max-w-7xl mx-auto py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Inglês Financeiro</h1>
      <p className="mb-4">
        O <strong>Inglês Financeiro</strong> é uma ferramenta crucial no mercado
        de trabalho atual, especialmente em um cenário global cada vez mais
        interconectado. Ele desempenha um papel fundamental para profissionais
        que desejam expandir suas oportunidades e se destacar no setor
        financeiro.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Importância do Inglês Financeiro no Mercado de Trabalho
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Expansão das oportunidades:</strong> O inglês é a língua
          universal dos negócios, permitindo que profissionais se comuniquem
          efetivamente com clientes e parceiros internacionais.
        </li>
        <li>
          <strong>Melhores salários:</strong> Estudos indicam que profissionais
          fluentes em inglês podem ganhar até 70% mais do que aqueles sem essa
          habilidade.
        </li>
        <li>
          <strong>Acesso a informações:</strong> O inglês possibilita a consulta
          a relatórios, análises e notícias financeiras globais.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Como usar o Inglês Financeiro
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Comunicação eficaz:</strong> Utilizar termos financeiros em
          inglês para se comunicar claramente com investidores e parceiros
          internacionais.
        </li>
        <li>
          <strong>Análise de relatórios financeiros:</strong> Interpretar
          documentos e relatórios financeiros em inglês para tomar decisões bem
          informadas.
        </li>
        <li>
          <strong>Negociações internacionais:</strong> Participar de reuniões e
          negociações em inglês para expandir oportunidades de negócios globais.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Exemplos de uso</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Gerente de investimentos:</strong> Um profissional brasileiro
          usa o inglês para negociar com gestores de fundos internacionais,
          aumentando a exposição de sua empresa no mercado global.
        </li>
        <li>
          <strong>Analista financeiro:</strong> Um especialista interpreta
          relatórios trimestrais de empresas multinacionais em inglês para
          fornecer insights valiosos aos investidores.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusão</h2>
      <p>
        O Inglês Financeiro é fundamental para qualquer profissional que deseje
        prosperar no mercado financeiro global. Ao dominar essa habilidade, os
        profissionais podem acessar oportunidades internacionais, aumentar sua
        remuneração e se comunicar efetivamente com parceiros globais. Em um
        mundo cada vez mais conectado, o Inglês Financeiro não é apenas uma
        ferramenta útil – é uma necessidade para quem busca sucesso no setor
        financeiro.
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
  );
}
