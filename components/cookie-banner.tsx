"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50 shadow-lg">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-foreground text-sm">
            Este site utiliza cookies para melhorar a sua experiência de navegação.{" "}
            <Link href="/politica-privacidade" className="text-accent hover:underline font-medium">
              Política de Privacidade
            </Link>{" "}
            |{" "}
            <Link href="/politica-cookies" className="text-accent hover:underline font-medium">
              Política de Cookies
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={rejectCookies}
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-muted bg-transparent"
          >
            Recusar
          </Button>
          <Button onClick={acceptCookies} size="sm" className="btn-gold">
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
}
