"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const currentDate = new Date()
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]
  const updateDate = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    interface Particle {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      opacity: number
      pulseSpeed: number
      pulseOffset: number
    }

    interface GoldLine {
      x1: number
      y1: number
      x2: number
      y2: number
      opacity: number
      progress: number
      speed: number
    }

    interface FloatingDiamond {
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      opacity: number
      floatOffset: number
    }

    const particles: Particle[] = []
    const goldLines: GoldLine[] = []
    const diamonds: FloatingDiamond[] = []

    const width = canvas.offsetWidth
    const height = canvas.offsetHeight

    const gridSpacing = 60
    for (let x = 0; x < width + gridSpacing; x += gridSpacing) {
      for (let y = 0; y < height + gridSpacing; y += gridSpacing) {
        particles.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          baseX: x,
          baseY: y,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    for (let i = 0; i < 8; i++) {
      const startParticle = particles[Math.floor(Math.random() * particles.length)]
      const angle = Math.random() * Math.PI * 2
      const length = Math.random() * 150 + 100
      goldLines.push({
        x1: startParticle?.baseX || Math.random() * width,
        y1: startParticle?.baseY || Math.random() * height,
        x2: (startParticle?.baseX || 0) + Math.cos(angle) * length,
        y2: (startParticle?.baseY || 0) + Math.sin(angle) * length,
        opacity: 0,
        progress: 0,
        speed: Math.random() * 0.008 + 0.004,
      })
    }

    for (let i = 0; i < 6; i++) {
      diamonds.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 15 + 8,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005,
        opacity: Math.random() * 0.08 + 0.03,
        floatOffset: Math.random() * Math.PI * 2,
      })
    }

    let time = 0

    const animate = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)
      time += 0.016

      const gradient1 = ctx.createRadialGradient(0, 0, 0, 0, 0, w * 0.5)
      gradient1.addColorStop(0, "rgba(180, 155, 107, 0.06)")
      gradient1.addColorStop(1, "rgba(180, 155, 107, 0)")
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, w, h)

      const gradient2 = ctx.createRadialGradient(w, h, 0, w, h, w * 0.6)
      gradient2.addColorStop(0, "rgba(28, 28, 28, 0.03)")
      gradient2.addColorStop(1, "rgba(28, 28, 28, 0)")
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, w, h)

      ctx.strokeStyle = "rgba(180, 155, 107, 0.04)"
      ctx.lineWidth = 1
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p.baseX - p2.baseX, p.baseY - p2.baseY)
          if (dist < gridSpacing * 1.5) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      particles.forEach((p) => {
        const pulse = Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset)
        const currentOpacity = p.opacity * (0.7 + pulse * 0.3)
        const currentSize = p.size * (0.8 + pulse * 0.2)

        p.x = p.baseX + Math.sin(time * 0.5 + p.pulseOffset) * 3
        p.y = p.baseY + Math.cos(time * 0.3 + p.pulseOffset) * 3

        ctx.beginPath()
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180, 155, 107, ${currentOpacity})`
        ctx.fill()
      })

      goldLines.forEach((line) => {
        line.progress += line.speed
        if (line.progress > 2) {
          line.progress = 0
          const startParticle = particles[Math.floor(Math.random() * particles.length)]
          const angle = Math.random() * Math.PI * 2
          const length = Math.random() * 150 + 100
          line.x1 = startParticle?.baseX || Math.random() * w
          line.y1 = startParticle?.baseY || Math.random() * h
          line.x2 = line.x1 + Math.cos(angle) * length
          line.y2 = line.y1 + Math.sin(angle) * length
        }

        const opacity = line.progress < 1 ? line.progress : 2 - line.progress
        if (opacity > 0) {
          ctx.beginPath()
          ctx.moveTo(line.x1, line.y1)
          ctx.lineTo(line.x2, line.y2)
          ctx.strokeStyle = `rgba(212, 175, 55, ${opacity * 0.15})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })

      diamonds.forEach((d) => {
        d.rotation += d.rotationSpeed
        const floatY = Math.sin(time * 0.8 + d.floatOffset) * 8

        ctx.save()
        ctx.translate(d.x, d.y + floatY)
        ctx.rotate(d.rotation)

        ctx.beginPath()
        ctx.moveTo(0, -d.size)
        ctx.lineTo(d.size * 0.6, 0)
        ctx.lineTo(0, d.size)
        ctx.lineTo(-d.size * 0.6, 0)
        ctx.closePath()

        ctx.strokeStyle = `rgba(180, 155, 107, ${d.opacity})`
        ctx.lineWidth = 1
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(0, -d.size * 0.5)
        ctx.lineTo(d.size * 0.3, 0)
        ctx.lineTo(0, d.size * 0.5)
        ctx.lineTo(-d.size * 0.3, 0)
        ctx.closePath()
        ctx.strokeStyle = `rgba(212, 175, 55, ${d.opacity * 0.6})`
        ctx.stroke()

        ctx.restore()
      })

      if (Math.random() < 0.02) {
        const sparkleX = Math.random() * w
        const sparkleY = Math.random() * h
        ctx.beginPath()
        ctx.arc(sparkleX, sparkleY, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.random() * 0.5 + 0.3})`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const trustIndicators = [
    { label: "Licença SRIJ", value: "100%" },
    { label: "Casinos", value: "50+" },
    { label: "Critérios", value: "60+" },
    { label: "Anos", value: "5+" },
  ]

  return (
    <section className="relative h-[250px] md:h-[350px] overflow-hidden bg-gradient-to-br from-[#FDFCFA] via-[#F8F6F1] to-[#F0EDE5]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative h-full container mx-auto max-w-7xl px-4 md:px-6">
        <div className="h-full flex items-center">
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-px bg-[#B49B6B]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#B49B6B] font-medium">{updateDate}</span>
              </div>

              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-[#1C1C1C] leading-tight mb-2">
                Análise Profissional <span className="text-[#B49B6B]">Casinos Online</span>
              </h1>

              <p className="text-xs md:text-sm text-[#666] max-w-md leading-relaxed mb-3 hidden md:block">
                Rankings independentes. Apenas casinos com licença SRIJ.
              </p>

              <a
                href="#rankings"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1C1C1C] text-white text-xs tracking-wide uppercase hover:bg-[#2C2C2C] transition-colors"
              >
                <span>Ver Rankings</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="bg-white/80 backdrop-blur-sm border border-[#E8E4DC] p-1.5 md:p-4">
                <div className="hidden md:flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-[#B49B6B]" />
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#1C1C1C] font-medium">
                    Indicadores de Segurança
                  </span>
                </div>

                <div className="flex md:grid md:grid-cols-4 gap-1 md:gap-3">
                  {trustIndicators.map((indicator, index) => (
                    <div
                      key={index}
                      className="flex-1 text-center py-1 px-0.5 md:p-2 border border-[#E8E4DC] bg-[#FDFCFA]"
                    >
                      <div className="font-serif text-xs md:text-xl text-[#B49B6B] leading-none mb-0.5">
                        {indicator.value}
                      </div>
                      <div className="text-[5px] md:text-[9px] tracking-wide uppercase text-[#666] leading-tight whitespace-nowrap">
                        {indicator.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
