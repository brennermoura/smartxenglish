import Image from "next/image";

const testimonials = [
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
    text: "Rafael is the best teacher that I have ever had in my entire life. He explains English with a unique and exclusive method that shows me what real English is. Now I can understand English because of him. Thanks, Rafael!",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="section testimonial bg-gray-100 pt-12 pb-15"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-lg text-gray-800 font-semibold">
            Student Reviews
          </span>
          <h2 className="textRed font-bold text-4xl uppercase text-center mt-2 mb-10">
            Veja o que nossos alunos disseram...
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 relative"
            >
              <div className="absolute top-0 left-0 textRed text-4xl p-4">
                “
              </div>
              <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-16 h-16 relative mr-4">
                  <Image
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
