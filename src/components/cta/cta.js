import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

export function Cta() {
  return (
    <div className="cta h-screen bg-fixed flex items-center">
      <div className="container mx-auto relative z-10 flex justify-center">
        <div className="w-full lg:w-1/2 p-4">
          <div className="bg-white/75 shadow-lg rounded-xl p-10  h-full flex flex-col">
            <p className="text-lg textBlue font-bold">Talk to us right now</p>
            <h4 className="mt-4 mb-5 text-4xl font-semibold">
              Aprenda inglês do jeito certo! Seu futuro agradece.
            </h4>
            <p className="textBlue text-lg font-bold">Entre em contato</p>
            <h4 className="mt-4 text-4xl font-semibold flex items-baseline">
              <FontAwesomeIcon
                icon={faMobileScreen}
                className="textRed w-[20px] h-[20px] mr-2"
              />
              21 97492-4628
            </h4>
            <h4 className="mt-4 text-4xl font-semibold flex items-baseline">
              <FontAwesomeIcon
                icon={faMobileScreen}
                className="textRed w-[20px] h-[20px] mr-2"
              />
              21 96764-4652
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
