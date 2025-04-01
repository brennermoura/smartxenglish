// import Link from "next/link";
// import Image from "next/image";

// export function Hero() {
//   return (
//     <div className="slider h-screen text-center">
//       <div className="container mx-auto">
//         {/* <h1 className="text-white text-4xl font-light text-center relative z-10">
//           SmartXEnglish
//         </h1> */}
//         <div className="max-w-50 mx-auto">
//           <img src="/rounded-logo-black.png" className="z-10 relative" />
//         </div>
//         <h2 className="md:px-15 text-gray-50 text-5xl relative z-10 mt-10 mb-4 uppercase">
//           Teaching is our businness.
//         </h2>
//         <h2 className="md:px-15 text-gray-50 text-4xl relative z-10 mt-4 mb-10 ">
//           Somos especialistas em offshore!
//         </h2>
//         <Link
//           href="#sobre"
//           className="z-10 text-white btn-main font-medium text-sm px-10 py-4 text-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 animated fadeInUp btn-round-full scrollSuave relative"
//         >
//           <span>Fale com a gente </span>
//         </Link>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const [paddingTop, setPaddingTop] = useState("0");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        const headerHeight = header.offsetHeight;
        setPaddingTop(`${headerHeight}px`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ajusta ao carregar a página
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="slider h-screen text-center transition-all duration-300"
      style={{ paddingTop }}
    >
      <div className="container mx-auto">
        <div className="max-w-50 mx-auto">
          <Image
            src="/rounded-logo-black.png"
            alt="Logo"
            width={200}
            height={200}
            className="z-10 relative"
          />
        </div>
        <h2 className="md:px-15 text-gray-50 text-5xl relative z-10 mt-10 mb-4 uppercase">
          Teaching is our business.
        </h2>
        <h2 className="md:px-15 text-gray-50 text-4xl relative z-10 mt-4 mb-10">
          Somos especialistas em offshore!
        </h2>
        <Link
          href="#sobre"
          className="z-10 text-white btn-main font-medium text-sm px-10 py-4 text-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 animated fadeInUp btn-round-full scrollSuave relative"
        >
          <span>Fale com a gente</span>
        </Link>
      </div>
    </div>
  );
}
