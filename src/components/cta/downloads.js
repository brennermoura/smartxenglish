export default function DownloadSection() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 mb-4">
      <div className="text-center mt-15">
        <span className="text-lg text-gray-800 font-semibold">
          Materials Download
        </span>
        <h2 className="textRed font-bold text-4xl uppercase text-center mt-2 mb-8">
          Conheça nosso acervo
        </h2>
      </div>

      {/* Primeiro bloco */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <img
            src="/download-incoterm.jpg"
            alt="Download PDF 1"
            className="w-full h-[500px] object-cover object-center"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-8">
          <h2 className="text-3xl font-bold mb-4">
            Baixe nosso material exclusivo sobre INCOTERM
          </h2>
          <p className="text-gray-600 mb-6">
            Este conteúdo oferece a você o conhecimento essencial e atualizado
            para ingressar com segurança e confiança na área. Descubra as
            práticas mais relevantes e as informações cruciais para se destacar.
            Prepare-se para uma jornada de aprendizado que fará a diferença no
            seu caminho profissional.
          </p>
          <div>
            <a
              href="/downloads/incoterms-by-rafael-carloto.pdf" // Substitua pelo link real do PDF
              download
              className="bg-red-500 text-white px-6 py-3 w-full text-center rounded-full font-semibold shadow-md hover:bg-red-600 transition"
            >
              Baixar PDF
            </a>
          </div>
        </div>
      </div>

      {/* Segundo bloco (invertido) */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row-reverse items-center bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <img
            src="/download-visita-embarcacao.jpg" // Substitua pela URL da imagem real
            alt="Download PDF 2"
            className="w-full h-[500px] object-cover object-center"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-8">
          <h2 className="text-3xl font-bold mb-4">
            Aprenda ainda mais sobre Visitação a Embarcações
          </h2>
          <p className="text-gray-600 mb-6">
            Descubra as normas, práticas e cuidados essenciais para realizar uma
            visita segura e eficiente às embarcações. Conheça os procedimentos
            que garantem a segurança e o respeito ao ambiente. Prepare-se para
            aproveitar ao máximo essa experiência com as melhores orientações.
          </p>
          <div>
            <a
              href="/downloads/guia-de-cuidados-para-visitas-em-embarcacoes.pdf" // Substitua pelo link real do PDF
              download
              className="bg-red-500 text-white px-6 py-3 w-full text-center rounded-full font-semibold shadow-md hover:bg-red-600 transition"
            >
              Baixar PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
