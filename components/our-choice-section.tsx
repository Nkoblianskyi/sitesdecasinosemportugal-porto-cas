  import { bettingSites } from "@/lib/mock-data"

  export function OurChoiceSection() {
    const choice = bettingSites[0]

    return (
      <section className="py-20 px-6 bg-[#1C1C1C]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-[#B49B6B]">Escolha Editorial</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6">
                A Nossa
                <br />
                Recomendação
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Após análise rigorosa de todos os critérios, {choice.name} destaca-se pela combinação de segurança,
                variedade de jogos e qualidade do serviço ao cliente.
              </p>

              <div className="space-y-4">
                {["Licença SRIJ verificada", "Pagamentos em menos de 2h", "Suporte 24/7 em português"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#B49B6B]" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Card */}
            <div className="bg-white p-8">
              <div className="text-center mb-8">
                <div className="w-32 h-20 mx-auto bg-[#000000] border border-[#E5E0D8] flex items-center justify-center mb-4">
                  <img
                    src={choice.logo || "/placeholder.svg"}
                    alt={choice.name}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <h3 className="font-serif text-2xl text-[#1C1C1C]">{choice.name}</h3>
              </div>

              <div className="flex justify-center gap-8 mb-8 pb-8 border-b border-[#E5E0D8]">
                <div className="text-center">
                  <span className="block text-4xl font-serif text-[#B49B6B]">{choice.rating.toFixed(1)}</span>
                  <span className="text-xs text-[#999] uppercase tracking-wide">Rating</span>
                </div>
                <div className="w-px bg-[#E5E0D8]" />
                <div className="text-center">
                  <span className="block text-4xl font-serif text-[#1C1C1C]">{(choice.reviews / 1000).toFixed(0)}K</span>
                  <span className="text-xs text-[#999] uppercase tracking-wide">Reviews</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <span className="text-xs text-[#999] uppercase tracking-wide block mb-2">Bónus</span>
                <span className="text-lg font-medium text-[#1C1C1C]">{choice.bonus}</span>
              </div>

              <a
                href={choice.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#B49B6B] hover:bg-[#A08B5B] text-white text-center text-sm uppercase tracking-wide transition-colors"
              >
                Visitar Casino
              </a>

              <p className="text-center text-xs text-[#999] mt-4">18+ | Jogue com responsabilidade</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
