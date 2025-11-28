"use client"

import { useState } from "react"

const faqs = [
  {
    q: "Como funciona o sistema de classificação?",
    a: "Utilizamos metodologia com mais de 60 critérios. Cada casino é testado pessoalmente durante semanas. Avaliamos segurança (35%), jogos (25%), bónus (25%) e suporte (15%).",
  },
  {
    q: "Todos os casinos listados são legais?",
    a: "Sim, sem exceção. Apenas incluímos casinos com licença válida emitida pelo SRIJ. Verificamos regularmente o estatuto de cada licença.",
  },
  {
    q: "Qual o melhor método de pagamento?",
    a: "MB Way é popular pela rapidez. Carteiras digitais oferecem levantamentos em 24h. Cartões podem demorar 3-5 dias úteis.",
  },
  {
    q: "Os bónus valem a pena?",
    a: "Depende dos termos. Procure requisitos abaixo de x35, prazo superior a 30 dias, e analise sempre os jogos elegíveis.",
  },
  {
    q: "Quanto tempo demora a verificação?",
    a: "Normalmente 24-72 horas. Documentos: identificação válida, comprovativo de morada e confirmação do método de pagamento.",
  },
  {
    q: "Como identificar um casino seguro?",
    a: "Verifique licença SRIJ, certificado SSL, fornecedores reconhecidos e múltiplos métodos de pagamento seguros.",
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-6 bg-[#FAF8F5]">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.25em] uppercase text-[#B49B6B]">FAQ</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] mt-4">Perguntas Frequentes</h2>
        </div>

        {/* FAQ items */}
        <div className="divide-y divide-[#E5E0D8]">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 text-left"
              >
                <span className="text-[#1C1C1C] font-medium">{faq.q}</span>
                <span className={`text-[#B49B6B] text-xl transition-transform ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {open === i && <p className="text-[#666] text-sm leading-relaxed mt-4 pr-8">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
