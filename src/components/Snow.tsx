import React, { useMemo } from 'react'
import './Snow.css'

interface Snowflake {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export default function Snow() {
  // Generate snowflakes with random properties for variation
  const snowflakes: Snowflake[] = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 6,
      size: 0.5 + Math.random() * 1.5,
    }))
  }, [])

  return (
    <div className="snow-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            fontSize: `${flake.size}rem`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}
