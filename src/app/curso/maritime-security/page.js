import React from "react";
import Link from "next/link";

export default function MaritimeSecurity() {
  return (
    <div className="container max-w-7xl mx-auto py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Maritime Security</h1>
      <p className="mb-4">
        A <strong>Maritime Security</strong> refere-se às medidas e estratégias
        implementadas para proteger embarcações, portos e infraestruturas
        marítimas contra ameaças.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        O que é Maritime Security?
      </h2>
      <p className="mb-4">
        A Maritime Security abrange atividades destinadas a proteger ativos
        marítimos, garantir a segurança das rotas comerciais e prevenir
        atividades ilícitas no mar. Isso inclui vigilância, inteligência,
        medidas de segurança portuária e patrulhas costeiras.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Importância da Maritime Security
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Proteção contra ameaças:</strong> Combate a pirataria,
          terrorismo, roubo e tráfico ilegal de mercadorias e pessoas.
        </li>
        <li>
          <strong>Segurança das rotas comerciais:</strong> Garante a liberdade
          de navegação e protege as principais rotas de comércio marítimo.
        </li>
        <li>
          <strong>Proteção ambiental:</strong> Prevenção da poluição marinha e
          proteção dos recursos naturais.
        </li>
        <li>
          <strong>Cooperação internacional:</strong> Promove a colaboração entre
          governos e organizações para enfrentar desafios marítimos.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Como usar a Maritime Security
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Vigilância e inteligência:</strong> Monitorar tráfego marítimo
          e compartilhar informações com agências de aplicação da lei.
        </li>
        <li>
          <strong>Medidas de segurança portuária:</strong> Controle de acesso,
          cercas perimetrais, triagens de segurança e monitoramento de
          movimentos de pessoal.
        </li>
        <li>
          <strong>Patrulhas costeiras:</strong> Monitoramento de fronteiras
          marítimas, operações de intercepção e inspeções para prevenir o
          tráfico ilegal.
        </li>
        <li>
          <strong>Treinamento e capacitação:</strong> Programas de treinamento
          para tripulações e funcionários portuários sobre procedimentos de
          segurança.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Exemplos de uso</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Exemplo 1:</strong> A União Europeia implementou operações
          navais, como a Atalanta na Somália, para combater a pirataria e
          garantir a segurança das rotas comerciais.
        </li>
        <li>
          <strong>Exemplo 2:</strong> Em portos, medidas de segurança incluem a
          instalação de sistemas de vigilância eletrônica e a realização de
          inspeções regulares para prevenir a entrada de terroristas ou
          mercadorias ilegais.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusão</h2>
      <p>
        A Maritime Security é essencial para proteger os interesses marítimos,
        garantir a segurança das rotas comerciais e prevenir atividades ilícitas
        no mar. Com medidas eficazes, as nações promovem o comércio seguro,
        protegem o meio ambiente e fortalecem a cooperação internacional.
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
