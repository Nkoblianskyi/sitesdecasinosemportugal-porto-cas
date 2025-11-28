"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "@/lib/mock-data"
import { StarRating } from "./star-rating"
import { useEffect, useState } from "react"
import { bettingSites } from "@/lib/mock-data"

interface CasinoModalProps {
  site?: BettingSite
  rank?: number
  isOpen?: boolean
  onClose?: () => void
}

export function CasinoModal({ site: propSite, rank: propRank, isOpen: propIsOpen = false, onClose }: CasinoModalProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [autoOpenSite, setAutoOpenSite] = useState<BettingSite | null>(null)

  useEffect(() => {
    if (!propSite) {
      const hasShown = sessionStorage.getItem("promo-modal-shown")
      if (!hasShown) {
        const timer = setTimeout(() => {
          setAutoOpenSite(bettingSites[0])
          setInternalOpen(true)
          sessionStorage.setItem("promo-modal-shown", "true")
        }, 10000)
        return () => clearTimeout(timer)
      }
    }
  }, [propSite])

  useEffect(() => {
    if (propSite) {
      setInternalOpen(propIsOpen)
    }
  }, [propIsOpen, propSite])

  const handleClose = () => {
    setInternalOpen(false)
    setAutoOpenSite(null)
    onClose?.()
  }

  const site = propSite || autoOpenSite
  const rank = propRank || 1

  if (!internalOpen || !site) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative z-10 w-full max-w-md">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -right-2 -top-2 z-20 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] px-6 py-4 border-b border-accent/30">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="w-8 h-px bg-gradient-to-r from-transparent to-accent"></span>
                <span className="text-accent text-xs font-medium uppercase tracking-[0.2em]">Oferta Exclusiva</span>
                <span className="w-8 h-px bg-gradient-to-l from-transparent to-accent"></span>
              </div>
              <h3 className="font-serif text-white text-lg font-semibold tracking-wide">
                Casino <span className="text-accent">#{rank}</span> em Portugal
              </h3>
            </div>
          </div>

          <div className="p-6">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="bg-black p-4 rounded-xl border border-border w-full max-w-[180px]">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-14 object-contain" />
              </div>
            </div>

            <div className="text-center mb-6 p-4 bg-accent/10 border border-accent/20 rounded-xl">
              <div className="text-accent font-medium text-xs uppercase tracking-wide mb-2">Bónus de Boas-Vindas</div>
              <p className="font-serif font-bold text-2xl text-foreground">{site.bonus}</p>
            </div>

            {/* Rating */}
            <div className="text-center mb-6 pb-6 border-b border-border">
              <div className="text-3xl font-bold text-foreground mb-2">
                {site.rating.toFixed(1)}
                <span className="text-lg text-muted-foreground">/10</span>
              </div>
              <div className="flex items-center justify-center mb-2">
                <StarRating rating={site.rating / 2} size="sm" />
              </div>
              <div className="text-muted-foreground text-xs">{site.reviews.toLocaleString()} avaliações</div>
            </div>

            {/* CTA */}
            <Button
              onClick={(e) => {
                e.stopPropagation()
                window.open(site.url, "_blank")
              }}
              className="w-full btn-gold py-4 text-base rounded-xl font-semibold"
            >
              Jogar Agora
            </Button>

            <p className="text-center text-muted-foreground text-xs mt-4">18+ | Jogue com responsabilidade</p>
          </div>
        </div>
      </div>
    </div>
  )
}
