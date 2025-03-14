'use client';

import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import { useState } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      image: "/img/disc1.png"
    },
    {
      image: "/img/disc2.png"
    },
    {
      image: "/img/disc3.png"
    },
    {
      image: "/img/disc4.png"
    },
    {
      image: "/img/disc5.png"
    },
    {
      image: "/img/disc6.png"
    },
    {
      image: "/img/disc7.png"
    },
    // Add more testimonials here
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen">
       <section className="py-20">
       <div className="container mx-auto px-6">
       <Hero />
       </div>
       </section>
      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            O que você irá aprender?
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Desenvolvimento de aplicativos utilizando a linguagem de programação kotlin
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lógica de programação",
                description: "Aprenda lógica de programação do zero, mesmo que não saiba nada! Comece do ZERO!",
                icon: "💻",
                list: [
                  "Variáveis e Tipos de Dados.",
                  "Estruturas Condicionais.",
                  "Laços de Repetição.",
                  "Funções e Modularização.",
                  "Estruturas de Dados.",
                  "Algoritmos e Lógica Computacional."
                ]
              },
              {
                title: "Desenvolvimento Android",
                description: "Domine o desenvolvimento Android com Kotlin, aplicando MVVM para organização do código e Jetpack Compose.",
                icon: "📱",
                list: [
                  "Arquitetura MVVM.",
                  "Jetpack Compose.",
                  "Gerenciamento de Estado.",
                  "Consumo de APIs.",
                  "Banco de Dados Local.",
                  "Ciclo de Vida e Navegação."
                ]
              },
              {
                title: "Desenvolvimento iOS",
                description: "Aprenda a desenvolver aplicativos iOS do zero com Kotlin Multiplatform (KMP).",
                icon: "🍎",
                list: [
                  "Compartilhamento de Código.",
                  "Ktor para Networking.",
                  "SQLDelight.",
                  "Kotlin Coroutines.",
                  "SwiftUI e Jetpack Compose.",
                  "Expect/Actual."
                ]
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="text-4xl">{course.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 mb-4">{course.description}</p>
                {course.list && (
                  <ul className="text-gray-400 list-disc pl-5 mb-4">
                    {course.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Projetos de Alunos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/img/aluno1.png"
              },
              {
                image: "/img/aluno2.png"
              },
              {
                image: "/img/aluno3.png"
              },
              // Add more projects here
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all"
              >
                <img src={project.image} className="w-full h-auto rounded-lg mb-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Testimonials Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Membros
          </h2>
          <p className="text-center text-white mb-12 font-bold">
            Você não estará sozinho! Aprenda junto com uma comunidade com mais de 1.500 pessoas de diferentes áreas, países e idades, todas com o mesmo objetivo:<br />
            dominar a programação e transformar suas vidas. 🚀
          </p>
          <div className="flex flex-col md:flex-row items-center mx-4 relative">
            <img src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image} className="w-1/2 md:w-1/4 h-auto object-contain opacity-50" alt="Previous Testimonial" />
            <img src={testimonials[currentIndex].image} className="w-full md:w-3/4 h-auto object-contain mx-2" alt="Current Testimonial" />
            <img src={testimonials[(currentIndex + 1) % testimonials.length].image} className="w-1/2 md:w-1/4 h-auto object-contain opacity-50" alt="Next Testimonial" />
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={prevTestimonial} className="text-white mx-4">&lt;</button>
            <button onClick={nextTestimonial} className="text-white mx-4">&gt;</button>
          </div>
        </div>
      </section>
    </main>
  );
}
