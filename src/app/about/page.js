import Image from "next/image";

export default function About() {
  return (
    <div
      id="sobre"
      className="container max-w-full bg-backBlue flex flex-col items-center justify-center py-5"
    >
      <div className=" container flex flex-col items-center justify-center gap-10 w-full max-w-7xl mt-15 mx-auto">
        <h2 className="textRed font-extrabold text-4xl uppercase">
          Prepare For New Future
        </h2>

        <h3 className="md:px-15 text-3xl text-center text-gray-50">
          Nosso foco é a educação, com especialização no ensino do segmento
          operacional offshore em inglês. Comprometemo-nos a proporcionar
          experiências de aprendizagem envolventes e impactantes, preparando
          profissionais para os desafios do setor.
        </h3>

        <div className="max-w-50 mb-15">
          <Image
            src="/smartxenglish.svg"
            alt="Descrição da logo"
            width={1376}
            height={740}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
