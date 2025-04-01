import React from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import ContactSection from "@/app/contact/page";

export default function HSSE() {
  return (
    <>
      <Header />
      <div className="container max-w-7xl mx-auto py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">
          HSSE - Saúde, Segurança, Segurança Física e Meio Ambiente
        </h1>
        <p className="mb-4">
          O <strong>HSSE</strong> (Health, Safety, Security, and Environment) é
          um framework que integra a gestão da saúde, segurança, segurança
          física e meio ambiente em uma organização. Ele é amplamente adotado em
          setores como energia, construção e manufatura.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">O que é o HSSE?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Saúde (Health):</strong> Implementação de programas de
            prevenção de doenças ocupacionais e exames médicos regulares.
          </li>
          <li>
            <strong>Segurança (Safety):</strong> Medidas para evitar acidentes,
            como uso de EPIs e protocolos de emergência.
          </li>
          <li>
            <strong>Segurança Física (Security):</strong> Proteção de ativos e
            operações contra ameaças internas e externas.
          </li>
          <li>
            <strong>Meio Ambiente (Environment):</strong> Práticas sustentáveis
            para minimizar impactos ambientais.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Importância do HSSE
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Proteção de funcionários:</strong> Redução de riscos de
            acidentes e doenças ocupacionais.
          </li>
          <li>
            <strong>Cumprimento regulatório:</strong> Conformidade com leis e
            normas internacionais.
          </li>
          <li>
            <strong>Preservação ambiental:</strong> Minimização do impacto
            ambiental das operações.
          </li>
          <li>
            <strong>Segurança de ativos:</strong> Proteção de infraestrutura e
            equipamentos contra ameaças.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Como utilizar o HSSE na prática
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Desenvolvimento de políticas:</strong> Diretrizes claras
            para saúde, segurança e meio ambiente.
          </li>
          <li>
            <strong>Treinamento e conscientização:</strong> Capacitação contínua
            dos funcionários.
          </li>
          <li>
            <strong>Avaliação de riscos:</strong> Identificação e mitigação de
            perigos no ambiente de trabalho.
          </li>
          <li>
            <strong>Monitoramento contínuo:</strong> Auditorias regulares para
            melhoria contínua.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Exemplos de uso</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Indústria petrolífera:</strong> Programas HSSE para reduzir
            acidentes e impactos ambientais.
          </li>
          <li>
            <strong>Terminais portuários:</strong> Práticas HSSE para segurança
            operacional e proteção de ativos.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusão</h2>
        <p>
          O HSSE é essencial para garantir segurança, saúde e sustentabilidade
          em qualquer organização. Ao implementar um sistema HSSE eficaz, as
          empresas podem minimizar riscos, melhorar a conformidade regulatória e
          promover uma cultura de segurança.
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
      <ContactSection />
    </>
  );
}
