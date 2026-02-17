import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import FallingHearts from './FallingHearts'

describe('FallingHearts', () => {
  it('renders without crashing', () => {
    const { container } = render(<FallingHearts />)
    expect(container).toBeTruthy()
  })

  it('renders the falling hearts container', () => {
    const { container } = render(<FallingHearts />)
    const fallingHeartsContainer = container.querySelector('.falling-hearts-container')
    expect(fallingHeartsContainer).toBeTruthy()
  })

  it('renders multiple heart elements', () => {
    const { container } = render(<FallingHearts />)
    const hearts = container.querySelectorAll('.heart')
    expect(hearts.length).toBeGreaterThan(0)
    expect(hearts.length).toBe(25)
  })

  it('applies size classes to hearts', () => {
    const { container } = render(<FallingHearts />)
    const hearts = container.querySelectorAll('.heart')
    const sizeClasses = Array.from(hearts).map((heart) => {
      const classList = Array.from(heart.classList)
      return classList.find((cls) => cls.includes('heart-small') || cls.includes('heart-medium') || cls.includes('heart-large'))
    })
    expect(sizeClasses.some((cls) => cls)).toBeTruthy()
  })

  it('applies color classes to hearts', () => {
    const { container } = render(<FallingHearts />)
    const hearts = container.querySelectorAll('.heart')
    const colorClasses = Array.from(hearts).map((heart) => {
      const classList = Array.from(heart.classList)
      return classList.find((cls) => cls.includes('heart-color-'))
    })
    expect(colorClasses.some((cls) => cls)).toBeTruthy()
  })

  it('renders heart symbols', () => {
    const { container } = render(<FallingHearts />)
    const hearts = container.querySelectorAll('.heart')
    hearts.forEach((heart) => {
      expect(heart.textContent).toBe('♥')
    })
  })
})
