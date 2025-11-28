import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const navItems = [
    { label: "Sobre Nós", href: "/sobre-nos" },
  ]

  return (
    <footer className="bg-[#1C1C1C] py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-1 group">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              <span className="font-serif text-xl md:text-2xl font-semibold text-[#ffffff] tracking-tight">
                ites<span className="text-[#B49B6B]">de</span>Casinos<span className="text-[#B49B6B]">em</span>Portugal
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B49B6B] group-hover:scale-125 transition-transform" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Análises independentes de casinos online licenciados pelo SRIJ em Portugal.
            </p>
          </div>

          {/* Links */}
          <div>
            <span className="text-xs text-[#B49B6B] uppercase tracking-wide block mb-4">Navegação</span>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <span className="text-xs text-[#B49B6B] uppercase tracking-wide block mb-4">Legal</span>
            <div className="space-y-2">
              <Link
                href="/politica-privacidade"
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link href="/politica-cookies" className="block text-sm text-white/60 hover:text-white transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Organization Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-8 border-y border-white/10 mb-8">
          <Link
            href="https://www.srij.turismodeportugal.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white/20 rounded text-white/60 text-sm font-medium hover:text-white hover:border-[#B49B6B] transition-all"
          >
            SRIJ
          </Link>
          <Link
            href="https://www.icad.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white/20 rounded text-white/60 text-sm font-medium hover:text-white hover:border-[#B49B6B] transition-all"
          >
            ICAD
          </Link>
          <Link
            href="https://www.gambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white/20 rounded text-white/60 text-sm font-medium hover:text-white hover:border-[#B49B6B] transition-all"
          >
            GambleAware
          </Link>
          <Link
            href="https://www.jogoresponsavel.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white/20 rounded text-white/60 text-sm font-medium hover:text-white hover:border-[#B49B6B] transition-all"
          >
            Jogo Responsável
          </Link>
          <Link
            href="https://www.gamcare.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white/20 rounded text-white/60 text-sm font-medium hover:text-white hover:border-[#B49B6B] transition-all"
          >
            GamCare
          </Link>
        </div>

        {/* Warning */}
        <div className="flex items-center justify-center gap-4 py-6 mb-8">
          <span className="text-red-500 font-serif text-2xl">18+</span>
          <p className="text-white/60 text-sm">Jogue com responsabilidade | O jogo pode causar dependência</p>
        </div>

        {/* Copyright */}
        <p className="text-center text-white/40 text-xs">
          © 2025{" "}
          <span className="text-white/60">
            Sites<span className="text-[#B49B6B]/60">de</span>Casinos<span className="text-[#B49B6B]/60">em</span>
            Portugal
          </span>
          .com | Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
