import React from "react";
import Link from "next/link";

export default function ISGOTT() {
  return (
    <div className="container max-w-7xl mx-auto py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">
        ISGOTT - Guia Internacional de Segurança para Navios-Tanque e Terminais
      </h1>
      <p className="mb-4">
        O <strong>ISGOTT</strong> (International Safety Guide for Oil Tankers
        and Terminals) é o principal guia global para operações seguras em
        navios-tanque e terminais petrolíferos. Desenvolvido por entidades como
        a <strong>International Chamber of Shipping (ICS)</strong> e a{" "}
        <strong>Oil Companies International Marine Forum (OCIMF)</strong>, ele
        estabelece padrões técnicos e procedimentos críticos para mitigar
        riscos.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">O que é o ISGOTT?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Segurança operacional:</strong> Procedimentos para
          carga/descarga, controle de vapores e prevenção de incêndios.
        </li>
        <li>
          <strong>Proteção ambiental:</strong> Mitigação de vazamentos e gestão
          de resíduos.
        </li>
        <li>
          <strong>Conformidade legal:</strong> Alinhamento com regulamentações
          da IMO (International Maritime Organization) e legislações nacionais.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Estrutura e Diretrizes Principais
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Planejamento pré-operacional:</strong> Checklists, avaliação
          de riscos e reuniões pré-transferência.
        </li>
        <li>
          <strong>Protocolos de comunicação:</strong> Canais padronizados, como
          rádio VHF e sistemas digitais.
        </li>
        <li>
          <strong>Equipamentos e procedimentos críticos:</strong> Monitoramento
          contínuo de vapores inflamáveis e controle de eletricidade estática.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Importância do ISGOTT
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Segurança humana:</strong> Redução de acidentes como explosões
          e intoxicações por vapores tóxicos.
        </li>
        <li>
          <strong>Proteção ambiental:</strong> Prevenção de desastres ambientais
          e gestão eficiente de resíduos.
        </li>
        <li>
          <strong>Eficiência operacional:</strong> Padronização global evita
          atrasos e reduz tempo de atracação.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Como utilizar o ISGOTT na prática
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Preparação:</strong> Verificar checklists de riscos e realizar
          testes de pressão.
        </li>
        <li>
          <strong>Execução:</strong> Monitorar níveis de gás e limitar
          velocidade de bombeamento.
        </li>
        <li>
          <strong>Emergências:</strong> Acionar sistema ESD (Emergency Shutdown)
          em caso de vazamento ou incêndio.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusão</h2>
      <p>
        O ISGOTT é indispensável para operações seguras e sustentáveis no setor
        petrolífero. Empresas como a <strong>Petrobras</strong> e a{" "}
        <strong>Shell</strong> incorporaram suas diretrizes como parte central
        de seus sistemas de gestão de riscos. Para operadores, dominar esse guia
        é um compromisso com a excelência operacional.
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
