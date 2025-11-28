export function AboutUsSection() {
  return (
    <section id="sobre" className="py-20 px-6 bg-[#FAF8F5]">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#B49B6B]">Sobre Nós</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] mt-4 mb-6">
            Especialistas em Análise de Casinos
          </h2>
          <p className="text-[#666] leading-relaxed">
            Desde 2014, fornecemos análises independentes e imparciais dos casinos online licenciados em Portugal. A
            nossa equipa de especialistas testa pessoalmente cada plataforma antes de qualquer recomendação.
          </p>
        </div>

        {/* Methodology */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { value: "35%", label: "Segurança", desc: "Licença, encriptação, proteção de dados" },
            { value: "25%", label: "Jogos", desc: "Variedade, fornecedores, qualidade" },
            { value: "25%", label: "Bónus", desc: "Valor, termos, requisitos" },
            { value: "15%", label: "Suporte", desc: "Disponibilidade, canais, rapidez" },
          ].map((item, i) => (
            <div key={i} className="border-t-2 border-[#B49B6B] pt-6">
              <span className="block text-3xl font-serif text-[#1C1C1C] mb-2">{item.value}</span>
              <span className="block text-sm font-medium text-[#1C1C1C] mb-1">{item.label}</span>
              <span className="text-xs text-[#999]">{item.desc}</span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-white p-8 md:p-12 border border-[#E5E0D8]">
          <blockquote className="text-xl md:text-2xl font-serif text-[#1C1C1C] leading-relaxed mb-6">
            "Mantemos total independência editorial. Os nossos rankings baseiam-se exclusivamente em critérios
            objetivos, sem qualquer influência comercial."
          </blockquote>
          <cite className="text-sm text-[#999] not-italic">— Equipa Editorial, sitesdecasinosemportugal.com</cite>
        </div>
      </div>
    </section>
  )
}
