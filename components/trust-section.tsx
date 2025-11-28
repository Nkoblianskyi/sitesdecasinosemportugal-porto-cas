"use client"

import { useEffect, useRef, useState } from "react"

export function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const securityIndicators = [
    {
      value: "SRIJ",
      label: "Licença Obrigatória",
      description: "Todos os casinos verificados",
    },
    {
      value: "SSL",
      label: "Encriptação 256-bit",
      description: "Proteção de dados garantida",
    },
    {
      value: "KYC",
      label: "Verificação de Identidade",
      description: "Processo seguro obrigatório",
    },
    {
      value: "RNG",
      label: "Jogos Certificados",
      description: "Resultados aleatórios auditados",
    },
  ]

  return (
    <section ref={sectionRef} className="py-4 md:py-12 bg-[#FAF8F5] border-y border-[#E8E4DC]">
      <div className="container mx-auto max-w-6xl px-3 md:px-6">
        <div className="hidden md:flex items-center gap-4 mb-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#B49B6B] font-medium">
            Indicadores de Segurança
          </span>
          <div className="flex-1 h-px bg-[#E8E4DC]" />
        </div>

        <div className="grid grid-cols-4 gap-2 md:gap-8">
          {securityIndicators.map((indicator, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="block text-sm md:text-3xl font-serif text-[#1C1C1C] tracking-wide">
                {indicator.value}
              </span>
              <span className="text-[6px] md:text-xs text-[#B49B6B] uppercase tracking-[0.1em] md:tracking-[0.15em] mt-0.5 md:mt-1 block font-medium leading-tight">
                {indicator.label}
              </span>
              <span className="hidden md:block text-xs text-[#999] mt-1">{indicator.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
