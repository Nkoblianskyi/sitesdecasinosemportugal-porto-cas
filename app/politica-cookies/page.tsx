import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies - Sites de Casinos em Portugal",
  description: "Saiba como o sitesdecasinosemportugal.com utiliza cookies para melhorar a sua experiência.",
  robots: "index, follow",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <div className="luxury-card rounded-2xl p-8 md:p-10">
          <h1 className="heading-display text-3xl md:text-4xl text-foreground mb-2">Política de Cookies</h1>
          <div className="elegant-divider max-w-xs mb-8" />

          <div className="space-y-8 text-body">
            <section>
              <p className="text-muted-foreground">
                O site <strong className="text-foreground">sitesdecasinosemportugal.com</strong> utiliza cookies para
                garantir a melhor experiência de navegação aos utilizadores. Esta política explica como e porquê
                utilizamos cookies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">O que são Cookies?</h2>
              <p className="text-muted-foreground">
                Cookies são pequenos ficheiros de texto que os sites armazenam no seu navegador ou dispositivo. Estes
                ficheiros permitem que o site reconheça o seu dispositivo e guarde preferências ou informações de
                navegação para melhorar a sua experiência online.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">Como Utilizamos Cookies</h2>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Cookies Estritamente Necessários</h3>
                  <p className="text-muted-foreground text-sm">
                    Essenciais para o funcionamento do site. Permitem a navegação básica e o acesso a funcionalidades
                    seguras.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Cookies de Análise e Performance</h3>
                  <p className="text-muted-foreground text-sm">
                    Utilizamos ferramentas como Google Analytics para compreender como os visitantes interagem com o
                    nosso site.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Cookies de Funcionalidade</h3>
                  <p className="text-muted-foreground text-sm">
                    Guardam as suas preferências para proporcionar uma experiência personalizada.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Cookies de Afiliados</h3>
                  <p className="text-muted-foreground text-sm">
                    Utilizados para rastrear cliques em links de casinos parceiros.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">Gestão de Cookies</h2>
              <p className="text-muted-foreground">
                Pode controlar e gerir cookies através das definições do seu navegador. Tenha em conta que desativar
                certos tipos de cookies pode afetar a funcionalidade do site.
              </p>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Última atualização:</strong> Janeiro 2025
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Para mais informações, consulte a nossa{" "}
                <Link href="/politica-privacidade" className="text-accent hover:underline font-medium">
                  Política de Privacidade
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
