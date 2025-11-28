import { CasinoSiteCard } from "./casino-site-card"
import { bettingSites } from "@/lib/mock-data"

export function RatingSection() {
  return (
    <section className="py-20 px-6 bg-[#FAF8F5]">
      <div className="container mx-auto max-w-5xl">

        {/* Casino cards */}
        <div className="space-y-4">
          {bettingSites.map((site, index) => (
            <CasinoSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#999] mt-10">
          18+ | Jogue com responsabilidade | Todos os casinos licenciados SRIJ
        </p>
      </div>
    </section>
  )
}
