import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nós - Sites de Casinos em Portugal",
  description:
    "Conheça a equipa por detrás do sitesdecasinosemportugal.com. Especialistas em análises de casinos online licenciados em Portugal.",
  robots: "index, follow",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4 pattern-overlay">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Sobre o sitesdecasinosemportugal
            </h1>
            <div className="elegant-divider max-w-xs mx-auto mb-6" />
            <p className="text-body text-muted-foreground text-lg max-w-2xl mx-auto">
              A sua plataforma de referência para análises independentes de casinos online licenciados em Portugal
            </p>
          </div>
        </section>

        {/* Stats - without icons */}
        <section className="py-12 px-4 section-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "100%", label: "Casinos Licenciados" },
                { value: "10+", label: "Anos de Experiência" },
                { value: "50K+", label: "Utilizadores" },
                { value: "25+", label: "Casinos Analisados" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 border border-border/50 rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision - without icons */}
        <section className="py-16 px-4 section-cream">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="luxury-card rounded-2xl p-8">
                <span className="text-accent font-serif text-sm tracking-widest uppercase mb-4 block">01</span>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">A Nossa Missão</h2>
                <p className="text-body text-muted-foreground">
                  Proporcionar aos jogadores portugueses informação fidedigna e análises detalhadas dos melhores casinos
                  online licenciados em Portugal. Testamos pessoalmente cada casino antes de recomendar, garantindo
                  total transparência e imparcialidade nas nossas avaliações.
                </p>
              </div>

              <div className="luxury-card rounded-2xl p-8">
                <span className="text-accent font-serif text-sm tracking-widest uppercase mb-4 block">02</span>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">A Nossa Visão</h2>
                <p className="text-body text-muted-foreground">
                  Ser a principal referência em Portugal para análises de casinos online, promovendo sempre o jogo
                  responsável e a segurança dos jogadores. Acreditamos que informação de qualidade é essencial para uma
                  experiência de jogo segura e agradável.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values - without icons */}
        <section className="py-16 px-4 section-white">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="heading-display text-2xl md:text-3xl text-foreground mb-4">Os Nossos Valores</h2>
              <div className="elegant-divider max-w-xs mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "Transparência",
                  description:
                    "Todas as nossas análises são baseadas em testes reais e critérios objetivos. Não há favorecimentos.",
                },
                {
                  num: "02",
                  title: "Independência",
                  description:
                    "Mantemos completa independência editorial. As classificações refletem apenas a qualidade dos serviços.",
                },
                {
                  num: "03",
                  title: "Responsabilidade",
                  description:
                    "Promovemos ativamente o jogo responsável e fornecemos recursos para quem precisa de ajuda.",
                },
              ].map((value, index) => (
                <div key={index} className="luxury-card rounded-xl p-6 text-center">
                  <span className="text-accent font-serif text-sm tracking-widest mb-3 block">{value.num}</span>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
