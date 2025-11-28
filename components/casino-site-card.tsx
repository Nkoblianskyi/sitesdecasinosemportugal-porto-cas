"use client"

import { Button } from "@/components/ui/button"
import type { BettingSite } from "@/lib/mock-data"

interface CasinoSiteCardProps {
  site: BettingSite
  rank: number
}

function StarRating({ rating }: { rating: number }) {
  const maxStars = 5
  const filledStars = (rating / 10) * maxStars // Convert 10-scale to 5 stars

  return (
    <div className="flex gap-0.5 mt-1">
      {[...Array(maxStars)].map((_, index) => {
        const fillPercentage = Math.min(100, Math.max(0, (filledStars - index) * 100))

        return (
          <div key={index} className="relative w-4 h-4">
            {/* Empty star background */}
            <svg className="absolute inset-0 w-4 h-4 text-[#E5E0D8]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {/* Filled star overlay */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <svg className="w-4 h-4 text-[#B49B6B]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function CasinoSiteCard({ site, rank }: CasinoSiteCardProps) {
  const isFirst = rank === 1

  return (
    <div
      onClick={() => window.open(site.url, "_blank")}
      className={`group cursor-pointer bg-white border transition-all duration-300 hover:shadow-lg ${
        isFirst ? "border-[#B49B6B] shadow-md" : "border-[#E5E0D8] hover:border-[#B49B6B]/50"
      }`}
    >
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* Rank */}
          <div
            className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center font-serif text-lg md:text-xl ${
              isFirst ? "bg-[#B49B6B] text-white" : "bg-[#F5F2ED] text-[#1C1C1C]"
            }`}
          >
            {rank}
          </div>

          <div className="w-32 h-16 md:w-[140px] md:h-[70px] bg-[#000000] border border-[#E5E0D8] flex-shrink-0 flex items-center justify-center p-3">
            <img
              src={site.logo || "/placeholder.svg"}
              alt={site.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <span className="text-xs uppercase tracking-wider text-[#999] mb-1">Bónus de Boas-Vindas</span>
            <p className="text-2xl md:text-3xl font-semibold text-[#1C1C1C]">{site.bonus}</p>
          </div>

          <div className="flex flex-col items-center px-4 md:px-6 md:border-l border-[#E5E0D8]">
            <span className="block text-2xl md:text-3xl font-serif text-[#1C1C1C]">{site.rating.toFixed(1)}</span>
            <StarRating rating={site.rating} />
          </div>

          {/* CTA */}
          <Button
            onClick={(e) => {
              e.stopPropagation()
              window.open(site.url, "_blank")
            }}
            className={`w-full md:w-auto px-6 py-3 text-sm uppercase tracking-wide transition-colors ${
              isFirst ? "bg-[#B49B6B] hover:bg-[#A08B5B] text-white" : "bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white"
            }`}
          >
            Visitar
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 md:px-6 py-3 bg-[#FAF8F5] border-t border-[#E5E0D8]">
        <div className="flex items-center justify-between text-xs text-[#999]">
          <span>Licenciado SRIJ</span>
          <span>{site.reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} avaliações</span>
          <span>18+</span>
        </div>
      </div>
    </div>
  )
}
