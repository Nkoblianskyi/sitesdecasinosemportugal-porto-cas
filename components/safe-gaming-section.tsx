export function SafeGamingSection() {
  return (
    <section id="seguranca" className="py-20 px-6 bg-[#1C1C1C]">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#B49B6B]">Jogo Responsável</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-4 mb-6">A Sua Segurança é Prioritária</h2>
          <p className="text-white/60 leading-relaxed">
            Promovemos práticas de jogo consciente e responsável. O jogo deve ser entretenimento, nunca uma fonte de
            problemas.
          </p>
        </div>

        {/* Warning */}
        <div className="flex items-center gap-6 p-6 border border-red-500/30 bg-red-500/5 mb-12">
          <span className="text-5xl font-serif text-red-500">18+</span>
          <div>
            <p className="text-white font-medium mb-1">O jogo pode causar dependência</p>
            <p className="text-white/60 text-sm">Proibido a menores de 18 anos</p>
          </div>
        </div>

        {/* Tips */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { num: "01", title: "Defina Limites", text: "Estabeleça limites de tempo e dinheiro antes de jogar." },
            { num: "02", title: "Entretenimento", text: "O jogo deve ser diversão, não fonte de rendimento." },
            { num: "03", title: "Auto-Exclusão", text: "Use as ferramentas de auto-exclusão se necessário." },
          ].map((tip, i) => (
            <div key={i} className="border-l border-[#B49B6B] pl-6">
              <span className="text-[#B49B6B] font-serif text-2xl block mb-3">{tip.num}</span>
              <h3 className="text-white font-medium mb-2">{tip.title}</h3>
              <p className="text-white/60 text-sm">{tip.text}</p>
            </div>
          ))}
        </div>

        {/* Contacts */}
        <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10">
          <a href="tel:213950840" className="text-center group">
            <span className="block text-[#B49B6B] text-xl font-serif group-hover:text-[#C4AB7B] transition-colors">
              213 950 840
            </span>
            <span className="text-xs text-white/40 uppercase tracking-wide">Linha Vida</span>
          </a>
          <a href="https://www.icad.pt" target="_blank" rel="noopener noreferrer" className="text-center group">
            <span className="block text-[#B49B6B] text-xl font-serif group-hover:text-[#C4AB7B] transition-colors">
              icad.pt
            </span>
            <span className="text-xs text-white/40 uppercase tracking-wide">ICAD</span>
          </a>
        </div>
      </div>
    </section>
  )
}
