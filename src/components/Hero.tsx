'use client';

import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h1 className="text-6xl font-bold text-white mb-8 leading-snug">
            Aprenda a programar. <br /> Construa projetos. <br /> Seja
            <span className="bg-purple-700"> contratado(a).</span>
          </h1>
          <p className="text-white mb-8">Entre em contato para receber informações sobre as próximas turmas!.</p>
          <button
            type="button"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all flex items-center justify-center"
          >
            <FaWhatsapp size={24} className="mr-2" />
            Contato via WhatsApp
          </button>
        </div>
        <div>
          <Image
            src="/img/devspace.jpeg"
            alt="Code example"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      <div className="fixed bottom-4 right-4">
        <button
          type="button"
          className="bg-green-500 text-white p-4 rounded-lg shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
        >
          <FaWhatsapp size={32} />
        </button>
      </div>
    </section>
  );
} 