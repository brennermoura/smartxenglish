import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBookOpen,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

const IntroSection = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-center gap-4 mx-auto">
        {/* Inglês desde a origem */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-xl p-10 text-center">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-blue-600 w-[40px] h-[40px]"
            />
            <h4 className="mt-4 mb-3 text-xl font-semibold">
              Inglês desde a origem
            </h4>
            <p>
              Aprenda as palavras desde o grego até a sua utilização nos dias
              atuais.
            </p>
          </div>
        </div>

        {/* Método IELTS */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-xl p-10 text-center">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-blue-600 w-[40px] h-[40px]"
            />
            <h4 className="mt-4 mb-3 text-xl font-semibold">Método IELTS</h4>
            <p>Sistema de avaliação na língua inglesa internacional.</p>
          </div>
        </div>

        {/* Inglês Offshore */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-xl p-10 text-center">
            <FontAwesomeIcon
              icon={faAnchor}
              className="text-blue-600 w-[40px] h-[40px]"
            />
            <h4 className="mt-4 mb-3 text-xl font-semibold">Inglês Offshore</h4>
            <p>
              Para quem trabalha ou deseja trabalhar em navios ou plataformas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
