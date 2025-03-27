import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="slider h-screen text-center">
      <div className="container mx-auto">
        {/* <h1 className="text-white text-4xl font-light text-center relative z-10">
          SmartXEnglish
        </h1> */}
        <div className="max-w-50 mx-auto">
          <img src="/rounded-logo-black.png" className="z-10 relative" />
        </div>
        <h2 className="md:px-15 text-gray-50 text-5xl relative z-10 mt-10 mb-4 uppercase">
          Teaching is our businness.
        </h2>
        <h2 className="md:px-15 text-gray-50 text-4xl relative z-10 mt-4 mb-10 ">
          Somos especialistas em offshore!
        </h2>
        <Link
          href="#sobre"
          className="z-10 text-white btn-main font-medium text-sm px-10 py-4 text-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 animated fadeInUp btn-round-full scrollSuave relative"
        >
          <span>Fale com a gente </span>
        </Link>
      </div>
    </div>
  );
}
