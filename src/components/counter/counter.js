"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { CountUp } from "countup.js";

const Counter = () => {
  const yearsRef = useRef(null);
  const studentsRef = useRef(null);
  const hoursRef = useRef(null);
  const companiesRef = useRef(null);
  const sectionRef = useRef(null); // Referência para a seção

  const [isVisible, setIsVisible] = useState(false);

  const startCounters = useCallback(() => {
    if (yearsRef.current) {
      const yearsCounter = new CountUp(yearsRef.current, 9, { duration: 2.5 });
      yearsCounter.start();
    }
    if (studentsRef.current) {
      const studentsCounter = new CountUp(studentsRef.current, 1000, {
        duration: 2.5,
      });
      studentsCounter.start();
    }
    if (hoursRef.current) {
      const hoursCounter = new CountUp(hoursRef.current, 2500, {
        duration: 2.5,
      });
      hoursCounter.start();
    }
    if (companiesRef.current) {
      const companiesCounter = new CountUp(companiesRef.current, 100, {
        duration: 2.5,
      });
      companiesCounter.start();
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Para de observar após a primeira vez
          }
        });
      },
      {
        root: null, // viewport como root
        threshold: 0.7, // 50% da seção visível
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      startCounters();
    }
  }, [isVisible, startCounters]);

  return (
    <div className="bg-backRed mt-18 py-15" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-lg text-gray-800 font-semibold">
            Growth Metrics
          </span>
          <h2 className="text-white font-bold text-4xl uppercase text-center mt-2 mb-4">
            Nossa história em números
          </h2>
        </div>

        <div className="flex flex-col items-center md:flex-row justify-around gap-8 md:gap-0">
          <div className="text-center md:text-left">
            <h3 className="text-5xl font-bold text-gray-800 flex items-center justify-center md:justify-start">
              <span ref={yearsRef}>0</span>
              <span className=" ml-2 text-2xl font-bold text-gray-800">
                {" "}
                anos +
              </span>
            </h3>
            <span className="text-lg text-gray-100">Ensinando Inglês</span>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-5xl font-bold text-gray-800 flex items-center justify-center md:justify-start">
              <span ref={studentsRef}>0</span>
              <span className="ml-2 text-2xl font-bold text-gray-800"> +</span>
            </h3>
            <span className="text-lg text-gray-100">Alunos Mentorados</span>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-5xl font-bold text-gray-800 flex items-center justify-center md:justify-start">
              <span ref={hoursRef}>0</span>
              <span className="ml-2 text-2xl font-bold text-gray-800"> +</span>
            </h3>
            <span className="text-lg text-gray-100">Horas de Aula</span>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-5xl font-bold text-gray-800 flex items-center justify-center md:justify-start">
              <span ref={companiesRef}>0</span>
              <span className="ml-2 text-2xl font-bold text-gray-800"> +</span>
            </h3>
            <span className="text-lg text-gray-100">Empresas atendidas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
