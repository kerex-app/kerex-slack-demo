import { useMemo } from 'react'
import './FallingHearts.css'

interface Heart {
  id: number
  left: number
  duration: number
  delay: number
  size: number
  opacity: number
  color: string
}

const HEART_COLORS = ['#ff1744', '#ff69b4', '#ff6b9d', '#d32f2f', '#e91e63']

function generateHearts(count: number): Heart[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 8 + Math.random() * 7,
    delay: Math.random() * 5,
    size: 12 + Math.random() * 20,
    opacity: 0.4 + Math.random() * 0.5,
    color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
  }))
}

export default function FallingHearts() {
  const hearts = useMemo(() => generateHearts(25), [])

  return (
    <div className="falling-hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="falling-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            color: heart.color,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}
