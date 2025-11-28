"use client"

import { Star } from "lucide-react"
import { useState } from "react"

interface StarRatingProps {
  rating: number // Rating from 0 to 5 (e.g., 4.6)
  size?: "sm" | "md" | "lg"
  showHover?: boolean
  className?: string
}

export function StarRating({ rating, size = "md", showHover = false, className = "" }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null)

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const roundedRating = Math.round(rating * 5) / 5
  const displayRating = hoverRating !== null ? hoverRating : roundedRating

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((starIndex) => {
        const fillPercentage = Math.min(Math.max((displayRating - (starIndex - 1)) * 100, 0), 100)

        return (
          <div
            key={starIndex}
            className="relative"
            onMouseEnter={() => showHover && setHoverRating(starIndex)}
            onMouseLeave={() => showHover && setHoverRating(null)}
          >
            <Star className={`${sizeClasses[size]} text-[#D4AF37] stroke-[#D4AF37] fill-none`} />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
              }}
            >
              <Star className={`${sizeClasses[size]} text-[#D4AF37] fill-[#D4AF37]`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
