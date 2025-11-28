"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Sobre Nós", href: "/sobre-nos" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E0D8]">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-1 group">
          <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            <span className="font-serif text-xl md:text-2xl font-semibold text-[#1C1C1C] tracking-tight">
              ites<span className="text-[#B49B6B]">de</span>Casinos<span className="text-[#B49B6B]">em</span>Portugal
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B49B6B] group-hover:scale-125 transition-transform" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-[#666] hover:text-[#1C1C1C] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Image src="/srij.svg" alt="Logo" width={32} height={32} />
            <p className="text-xs text-red-900 mt-1 border-red-900 border rounded-full w-6 h-6 flex items-center justify-center">18+</p>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-[#1C1C1C]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Fechar" : "Menu"}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-[#E5E0D8]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-[#666]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
