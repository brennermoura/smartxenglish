import React from "react";
import Link from "next/link";

export default function PhrasalVerbs() {
  return (
    <div className="container max-w-7xl mx-auto py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">
        Phrasal Verbs no Mercado de Trabalho
      </h1>
      <p className="mb-4">
        Os <strong>phrasal verbs</strong> são expressões verbais compostas por
        um verbo e uma partícula (preposição ou advérbio) que, juntos, adquirem
        um significado diferente do verbo original. No mercado de trabalho
        atual, dominar essas expressões é crucial para uma comunicação eficaz e
        natural em inglês.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Importância dos Phrasal Verbs
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Comunicação eficaz:</strong> Facilitam reuniões, e-mails e
          conversas informais.
        </li>
        <li>
          <strong>Fluência e confiança:</strong> Demonstram domínio da língua e
          profissionalismo.
        </li>
        <li>
          <strong>Acesso a oportunidades:</strong> Melhoram perspectivas em
          ambientes internacionais.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Como Usar os Phrasal Verbs
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Aprender e praticar:</strong> Estudar phrasal verbs comuns no
          ambiente de trabalho.
        </li>
        <li>
          <strong>Incorporar ao vocabulário:</strong> Usá-los ativamente em
          reuniões e e-mails.
        </li>
        <li>
          <strong>Revisar regularmente:</strong> Repetição é essencial para
          memorização.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Exemplos Práticos</h2>
      <p className="mb-2">
        🔹 "We need to <strong>come up with</strong> a new marketing strategy."
        (Precisamos criar uma nova estratégia de marketing).
      </p>
      <p className="mb-4">
        🔹 "I will <strong>fill in for</strong> John during his absence." (Vou
        substituir John durante sua ausência).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusão</h2>
      <p>
        Os phrasal verbs são uma ferramenta poderosa para qualquer profissional
        que deseje se comunicar de forma eficaz em inglês no mercado global.
        Para aumentar a fluência e acessar mais oportunidades, é essencial
        praticar e incorporar essas expressões ao dia a dia profissional.
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
