import { useMemo } from 'react'
import './FallingHearts.css'

interface Heart {
  id: number
  left: number
  duration: number
  delay: number
  size: 'small' | 'medium' | 'large'
  color: 1 | 2 | 3 | 4
  useSway: boolean
}

function FallingHearts() {
  const hearts = useMemo(() => {
    const heartArray: Heart[] = []
    const heartCount = 25

    for (let i = 0; i < heartCount; i++) {
      const sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large']
      const colors: Array<1 | 2 | 3 | 4> = [1, 2, 3, 4]

      heartArray.push({
        id: i,
        left: Math.random() * 100,
        duration: 8 + Math.random() * 7, // 8-15 seconds
        delay: Math.random() * 5, // 0-5 seconds stagger
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        useSway: Math.random() > 0.5,
      })
    }

    return heartArray
  }, [])

  return (
    <div className="falling-hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`heart heart-${heart.size} heart-color-${heart.color}`}
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            animationName: heart.useSway ? 'fall-sway' : 'fall',
          }}
        >
          ♥
        </div>
      ))}
    </div>
  )
}

export default FallingHearts
