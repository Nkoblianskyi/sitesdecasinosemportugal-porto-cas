import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade - Sites de Casinos em Portugal",
  description:
    "Política de Privacidade do sitesdecasinosemportugal.com. Como recolhemos, utilizamos e protegemos os seus dados pessoais.",
  robots: "index, follow",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <div className="luxury-card rounded-2xl p-8 md:p-10">
          <h1 className="heading-display text-3xl md:text-4xl text-foreground mb-2">Política de Privacidade</h1>
          <div className="elegant-divider max-w-xs mb-8" />

          <div className="space-y-8 text-body">
            <section>
              <p className="text-muted-foreground">
                A privacidade dos utilizadores do{" "}
                <strong className="text-foreground">sitesdecasinosemportugal.com</strong> é uma prioridade. Esta
                política descreve como recolhemos, utilizamos, protegemos e partilhamos as suas informações pessoais.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">1. Responsável pelo Tratamento</h2>
              <p className="text-muted-foreground">
                O site sitesdecasinosemportugal.com é um portal de informação e comparação de casinos online em
                Portugal, comprometido com a transparência e proteção dos dados pessoais dos nossos visitantes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">2. Dados que Recolhemos</h2>
              <div className="space-y-3">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-1">Dados de Navegação</h3>
                  <p className="text-muted-foreground text-sm">
                    Informações sobre como utiliza o nosso site, incluindo páginas visitadas e tempo de permanência.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-1">Dados Técnicos</h3>
                  <p className="text-muted-foreground text-sm">
                    Endereço IP, localização geográfica aproximada e informações do dispositivo.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">3. Como Utilizamos os Seus Dados</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Fornecer análises precisas sobre casinos online em Portugal</li>
                <li>Melhorar a experiência de navegação e funcionalidade do site</li>
                <li>Analisar padrões de utilização para otimizar o conteúdo</li>
                <li>Garantir a segurança e integridade da plataforma</li>
                <li>Cumprir obrigações legais e regulamentares</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">4. Os Seus Direitos (RGPD)</h2>
              <p className="text-muted-foreground mb-3">De acordo com o RGPD, tem os seguintes direitos:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>
                  <strong className="text-foreground">Direito de Acesso:</strong> Solicitar uma cópia dos seus dados
                </li>
                <li>
                  <strong className="text-foreground">Direito de Retificação:</strong> Corrigir dados incorretos
                </li>
                <li>
                  <strong className="text-foreground">Direito ao Apagamento:</strong> Solicitar eliminação dos dados
                </li>
                <li>
                  <strong className="text-foreground">Direito de Oposição:</strong> Opor-se ao processamento
                </li>
                <li>
                  <strong className="text-foreground">Direito à Portabilidade:</strong> Receber dados em formato legível
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">5. Jogo Responsável</h2>
              <p className="text-muted-foreground">
                O sitesdecasinosemportugal.com promove o jogo responsável. Todos os casinos analisados são licenciados
                pelo SRIJ. O jogo é apenas para maiores de 18 anos. Se tem problemas de jogo, procure ajuda em{" "}
                <a
                  href="https://www.icad.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  www.icad.pt
                </a>
                .
              </p>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Última atualização:</strong> Janeiro 2025
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Consulte também a nossa{" "}
                <Link href="/politica-cookies" className="text-accent hover:underline font-medium">
                  Política de Cookies
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
