import { useEffect, useRef } from 'react'
import './Snow.css'

const SNOWFLAKE_COUNT = 50

export default function Snow() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create snowflakes
    const createSnowflake = () => {
      const snowflake = document.createElement('div')
      snowflake.className = 'snowflake'
      
      // Random properties for each snowflake
      const size = Math.random() * 5 + 2 // 2-7px
      const left = Math.random() * 100
      const duration = Math.random() * 8 + 6 // 6-14 seconds
      const delay = Math.random() * 2
      const opacity = Math.random() * 0.5 + 0.5 // 0.5-1
      
      snowflake.style.left = `${left}%`
      snowflake.style.width = `${size}px`
      snowflake.style.height = `${size}px`
      snowflake.style.opacity = `${opacity}`
      snowflake.style.animationDuration = `${duration}s`
      snowflake.style.animationDelay = `${delay}s`
      
      container.appendChild(snowflake)
      
      // Remove snowflake after animation completes
      setTimeout(() => {
        snowflake.remove()
      }, (duration + delay) * 1000)
    }

    // Create initial snowflakes
    for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
      setTimeout(() => createSnowflake(), i * 100)
    }

    // Continuously create new snowflakes
    const interval = setInterval(() => {
      createSnowflake()
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return <div ref={containerRef} className="snow-container" />
}
