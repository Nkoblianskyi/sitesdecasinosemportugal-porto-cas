import { Shield, CreditCard, Headphones, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/lib/mock-data"

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  const fullStars = Math.floor(rating / 2)
  const partialStar = (rating / 2) % 1
  const emptyStars = 5 - Math.ceil(rating / 2)

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-5 h-5 fill-accent text-accent" />
        ))}
        {partialStar > 0 && (
          <div className="relative">
            <Star className="w-5 h-5 text-accent/20" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${partialStar * 100}%` }}>
              <Star className="w-5 h-5 fill-accent text-accent" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-5 h-5 text-accent/20" />
        ))}
      </div>
      <div className="text-muted-foreground text-sm">({reviews} avaliações)</div>
    </div>
  )
}

export function BonusSection() {
  const topCasinos = bettingSites.slice(0, 3)

  return (
    <section className="py-16 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">
        <div className="text-center mb-12 ">
          <div className="portugal-accent-line w-32 mx-auto mb-8 rounded-full"></div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-primary">Melhores</span> <span className="text-accent">Bónus</span>{" "}
            <span className="text-foreground">de Casino</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Descubra os bónus mais generosos e vantajosos dos casinos online licenciados em Portugal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {topCasinos.map((casino, index) => (
            <div key={casino.id} className="flex flex-col">
              {index === 0 && (
                <div className="text-center mb-4">
                  <div className="bg-accent text-black px-4 py-2 rounded-full font-bold text-sm">MELHOR BÓNUS</div>
                </div>
              )}

              {index !== 0 && <div className="h-[52px]"></div>}

              <div className="text-center mb-6">
                <div className="bg-card border border-border rounded-lg p-4 inline-block mb-4 h-[116px] flex items-center justify-center">
                  <img
                    src={casino.logo || "/placeholder.svg"}
                    alt={casino.name}
                    className="w-[140px] h-[84px] object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 h-[56px] flex items-center justify-center">
                  {casino.name}
                </h3>
              </div>

              <div className="text-center mb-6 flex-grow">
                <div className="text-accent font-bold text-sm mb-2 uppercase">Bónus de Boas-Vindas</div>
                <p className="text-foreground font-bold text-lg mb-4 h-[56px] flex items-center justify-center">
                  {casino.bonus}
                </p>

                <div className="text-accent font-bold text-3xl mb-3">{casino.rating.toFixed(1)}</div>
                <StarRating rating={casino.rating} reviews={casino.reviews} />
              </div>

              <Button
                asChild
                className="w-full bg-accent hover:bg-accent/90 text-black font-bold py-3 uppercase mt-auto shadow-[0_0_20px_rgba(234,179,8,0.3)]"
              >
                <a href={casino.url} target="_blank" rel="noopener noreferrer">
                  Obter Bónus
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="p-8 mb-12">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">
            <span className="text-primary">Porquê Escolher</span>{" "}
            <span className="text-secondary">Casinos Portugueses?</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-foreground font-bold text-xl mb-3">Licenciados SRIJ</h4>
              <p className="text-muted-foreground">
                Todos os casinos são licenciados e regulamentados pelo Serviço de Regulação e Inspeção de Jogos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-foreground font-bold text-xl mb-3">Pagamentos Locais</h4>
              <p className="text-muted-foreground">
                MB WAY, Multibanco e outros métodos de pagamento portugueses para máxima conveniência
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-foreground font-bold text-xl mb-3">Suporte em Português</h4>
              <p className="text-muted-foreground">
                Atendimento ao cliente 24/7 em português por chat, email e telefone
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Dicas para Maximizar os Seus Bónus</h3>

          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
            <div className="space-y-4">
              <div>
                <h4 className="text-foreground font-bold mb-2">Leia os Termos e Condições</h4>
                <p className="text-sm">
                  Sempre verifique os requisitos de apostas, jogos elegíveis e prazos antes de aceitar qualquer bónus.
                </p>
              </div>

              <div>
                <h4 className="text-foreground font-bold mb-2">Gerencie o Seu Bankroll</h4>
                <p className="text-sm">
                  Defina limites claros e nunca aposte mais do que pode permitir-se perder, mesmo com bónus.
                </p>
              </div>

              <div>
                <h4 className="text-foreground font-bold mb-2">Aproveite Promoções Regulares</h4>
                <p className="text-sm">
                  Além do bónus de boas-vindas, muitos casinos oferecem promoções semanais e mensais.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-foreground font-bold mb-2">Escolha Jogos com RTP Alto</h4>
                <p className="text-sm">
                  Prefira jogos com Return to Player (RTP) superior a 96% para maximizar as suas hipóteses.
                </p>
              </div>

              <div>
                <h4 className="text-foreground font-bold mb-2">Verifique a Conta Rapidamente</h4>
                <p className="text-sm">
                  Complete a verificação da conta o mais cedo possível para evitar atrasos nos levantamentos.
                </p>
              </div>

              <div>
                <h4 className="text-foreground font-bold mb-2">Contacte o Suporte</h4>
                <p className="text-sm">Em caso de dúvidas sobre bónus, não hesite em contactar o suporte ao cliente.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-card border border-border rounded-lg text-center">
            <p className="text-secondary font-bold text-lg mb-2">Lembre-se: Jogue com Responsabilidade</p>
            <p className="text-foreground">
              Os bónus são uma forma de entretenimento. Defina sempre limites e jogue apenas o que pode permitir-se
              perder.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
