import Image from "next/image";

const testimonials = [
  {
    name: "Hellen Rebelo",
    role: "Segurança do trabalho - Capco",
    image: "/team/hellen-rabelo.jpg",
    text: [
      "Aprender inglês foi um divisor de águas na minha trajetória profissional. Inicialmente, vi o idioma como um diferencial, mas logo percebi que ele era essencial para novas oportunidades. Com o inglês, melhorei a comunicação com supervisores e colegas internacionais, acessei conteúdos e cursos que ampliaram meus conhecimentos e me destaquei no mercado. Além disso, participei de reuniões, eventos e projetos globais, o que me deu mais confiança e abriu portas para promoções e desafios maiores. Hoje, vejo o inglês como uma ferramenta poderosa que transformou minha carreira. Se eu pudesse dar um conselho: invista no seu inglês! O retorno é certo e as oportunidades são infinitas.",
    ],
  },
  {
    name: "Tamiris Ramos Antonio",
    role: "Piloto de ROV - Subsea 7",
    image: "/team/tamires-ramos.jpg",
    text: "Aprender inglês sempre foi um desafio para mim. Passei por outros cursos sem sucesso,  acreditando ser impossível aprender outro idioma, até que encontrei o professor Rafael Carloto. Com ele, tudo mudou! As aulas são tão leves e envolventes que o tempo voa, e quando vejo, já acabou – e eu queria mais! Ele tem uma didática incrível, explica tudo de um jeito claro e ainda consegue deixar o aprendizado divertido. Além de inteligente, é uma pessoa agradável e bem-humorada, o que faz toda a diferença. Finalmente estou aprendendo inglês e, pela primeira vez, curtindo o processo! Indico para todos, sem dúvidas.",
  },
  {
    name: "Raquel Oliveira",
    role: "Business Partner - Ambev",
    image: "/team/raquel-oliveira.jpg",
    text: "Aulas muito bem explicadas, de uma forma simples e descontraída, explicando desde a origem das palavras até a cultura desse idioma! Esse método de aprendizagem é totalmente disruptivo e gera muito engajamento!",
  },
  {
    name: "Hugo Freitas",
    role: "Gerente jurídico - Oceânica Engenharia e Consultoria SA",
    image: "/team/hugooceanica.jpg",
    text: "O ambiente empresarial, principalmente o marítimo e o da indústria de óleo e gás, nos exige um grau maior de dinamismo e uma assertividade também no conhecimento de Inglês. A SmartxEnglish foi uma grande aliada no meu desenvolvimento enquanto profissional. Registro aqui minha gratidão e carinho a toda a equipe! Sucesso!",
  },
  {
    name: "Daniel Cardoso",
    role: "Gestor de Projetos - Beltis tecnologia",
    image: "/team/cardosobf1.jpg",
    text: "Estou extremamente satisfeito com a experiência que tenho com Rafael. Sua paciência e calma tornam as aulas muito agradáveis, sua abordagem flexível ao plano de estudos é realmente surpreendente. Um profissional excepcional que recomendo totalmente!",
  },
  {
    name: "Cris Coelho",
    role: "Marketing manager - Oceânica engenharia e consultoria SA",
    image: "/team/criscoelho.jpg",
    text: "Rafael is the best teacher  I have ever had. He explains English with a unique and exclusive method that shows me what's the real English. Now I can understand English because of him. Thanks, Rafael!",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="section testimonial bg-gray-100 pt-12 pb-15"
    >
      <div className="container max-w-7xl mx-auto px-5 md:px-0">
        <div className="md:text-center mb-8">
          <span className="text-lg text-gray-800 font-semibold">
            Student Reviews
          </span>
          <h2 className="textRed font-bold text-4xl uppercase mt-2 mb-10">
            Veja o que nossos alunos disseram...
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg p-6 relative md:px-15 ${
                index === 0 ? "" : ""
              }`}
            >
              <div className="absolute top-0 left-0 textRed text-4xl md:py-4 md:px-10 py-2 px-5">
                “
              </div>
              {/* Se o texto for um array, exibe vários parágrafos */}
              {Array.isArray(testimonial.text) ? (
                testimonial.text.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 italic mb-4 text-lg">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-gray-700 italic mb-4 text-lg">
                  {testimonial.text}
                </p>
              )}
              <div className="flex items-center">
                <div className="w-16 h-16 relative mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h5 className="text-lg font-semibold">{testimonial.name}</h5>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
