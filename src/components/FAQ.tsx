'use client';
import { useState } from 'react';

const faqs = [
  { question: "O que é a DevSpace?", answer: "DevSpace é uma comunidade com tudo o que você precisa para aprender programação do absoluto zero e ser contratado." },
  { question: "Para quem é?", answer: "Para iniciantes, estudantes e profissionais em transição de carreira." },
  { question: "O que você encontra na plataforma?", answer: "Cursos, mentorias ao vivo, e uma comunidade ativa." },
  { question: "Como funciona a assinatura?", answer: "Assinatura vitalícia as aulas gravadas." },
  { question: "Qual o valor?", answer: "Consulte nossos valores com o time de comercial via WhatsApp." },
  { question: "Tem certificado?", answer: "Sim, existe um processo de certificação onde simulamos um processo seletivo real." },
  { question: "E se eu não gostar?", answer: "Oferecemos garantia de reembolso em 7 dias." },
  { question: "Ainda estou com dúvidas...", answer: "Entre em contato pelo WhatsApp." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">Perguntas e respostas mais frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-2 text-white font-medium"
              >
                {index + 1}. {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-4 py-2 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 