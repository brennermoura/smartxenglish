import React from "react";
import Link from "next/link";

export default function INCOTERM() {
  return (
    <div className="container max-w-7xl mx-auto py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">
        INCOTERM - International Commercial Terms
      </h1>
      <p className="mb-4">
        O <strong>INCOTERM</strong> (International Commercial Terms) é um
        conjunto de normas padronizadas criadas pela Câmara Internacional do
        Comércio (ICC) para definir as responsabilidades e obrigações entre
        compradores e vendedores em transações internacionais de mercadorias.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">O que é o INCOTERM?</h2>
      <p className="mb-4">
        Os INCOTERMs são termos comerciais internacionais que estabelecem
        claramente as obrigações, custos e riscos envolvidos na entrega de
        mercadorias entre vendedores e compradores. Criados em 1936, foram
        atualizados várias vezes, sendo a versão mais recente os INCOTERMs 2020.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Estrutura e Componentes dos INCOTERMs
      </h2>
      <p className="mb-4">
        Atualmente, existem 11 INCOTERMs, divididos em duas categorias
        principais: transporte marítimo e transporte multimodal. Cada termo
        define responsabilidades específicas de custos e riscos.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>EXW (Ex Works):</strong> O comprador assume todos os custos e
          riscos desde a fábrica do vendedor.
        </li>
        <li>
          <strong>FOB (Free on Board):</strong> O vendedor entrega a mercadoria
          no porto de embarque, e o comprador assume os custos e riscos
          subsequentes.
        </li>
        <li>
          <strong>CIF (Cost, Insurance, Freight):</strong> O vendedor paga o
          frete e seguro até o porto de destino.
        </li>
        <li>
          <strong>DPU (Delivered Duty Paid):</strong> O vendedor entrega a
          mercadoria no local de destino, pagando todos os custos, incluindo
          impostos e taxas.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Importância dos INCOTERMs
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Clareza contratual:</strong> Definem claramente as
          responsabilidades e custos entre as partes, evitando mal-entendidos.
        </li>
        <li>
          <strong>Padronização internacional:</strong> Facilitam a comunicação e
          a negociação em transações globais.
        </li>
        <li>
          <strong>Redução de riscos:</strong> Esclarecem quem assume os riscos
          de perda ou dano durante o transporte.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Como usar os INCOTERMs
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Escolha do INCOTERM adequado:</strong> Selecionar o termo que
          melhor se adapta às necessidades específicas da transação.
        </li>
        <li>
          <strong>Inclusão no contrato:</strong> Incluir o INCOTERM escolhido
          como cláusula contratual para garantir clareza e segurança jurídica.
        </li>
        <li>
          <strong>Comunicação clara:</strong> Certificar-se de que todas as
          partes envolvidas entendam as obrigações e riscos associados ao
          INCOTERM escolhido.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Exemplos de uso</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Exemplo 1:</strong> Uma empresa brasileira exporta café para a
          Europa sob o termo FOB. O vendedor entrega a mercadoria no porto de
          Santos, e o comprador assume os custos e riscos subsequentes.
        </li>
        <li>
          <strong>Exemplo 2:</strong> Uma importadora chinesa compra eletrônicos
          sob o termo CIF. O vendedor paga o frete e seguro até o porto de
          destino, mas o comprador assume os riscos após a entrega no porto.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusão</h2>
      <p>
        Os INCOTERMs são fundamentais para o comércio internacional, pois
        simplificam a comunicação entre compradores e vendedores, reduzem riscos
        e garantem clareza contratual. Ao escolher e aplicar corretamente os
        INCOTERMs, as empresas podem evitar mal-entendidos e otimizar suas
        operações de exportação e importação.
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
