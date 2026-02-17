import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FallingHearts from './FallingHearts'

describe('FallingHearts', () => {
  it('renders without errors', () => {
    const { container } = render(<FallingHearts />)
    expect(container).toBeDefined()
  })

  it('renders the falling hearts container', () => {
    const { container } = render(<FallingHearts />)
    const heartsContainer = container.querySelector('.falling-hearts-container')
    expect(heartsContainer).toBeDefined()
  })

  it('generates multiple heart elements', () => {
    const { container } = render(<FallingHearts />)
    const hearts = container.querySelectorAll('.falling-heart')
    expect(hearts.length).toBeGreaterThan(0)
    expect(hearts.length).toBe(25)
  })

  it('applies animation classes to hearts', () => {
    const { container } = render(<FallingHearts />)
    const heart = container.querySelector('.falling-heart')
    expect(heart).toBeDefined()
    expect(heart?.className).toContain('falling-heart')
  })

  it('sets random animation properties on hearts', () => {
    const { container } = render(<FallingHearts />)
    const hearts = container.querySelectorAll('.falling-heart')
    
    // Check that hearts have different animation durations
    const durations = new Set<string>()
    hearts.forEach((heart) => {
      const duration = (heart as HTMLElement).style.animationDuration
      durations.add(duration)
    })
    
    // With 25 hearts and random durations, we should have multiple unique values
    expect(durations.size).toBeGreaterThan(1)
  })

  it('renders heart emoji content', () => {
    const { container } = render(<FallingHearts />)
    const hearts = container.querySelectorAll('.falling-heart')
    hearts.forEach((heart) => {
      expect(heart.textContent).toBe('❤️')
    })
  })

  it('applies color styles to hearts', () => {
    const { container } = render(<FallingHearts />)
    const hearts = container.querySelectorAll('.falling-heart')
    
    // Valid Valentine's Day colors (both hex and RGB formats)
    const validColors = [
      '#ff1744',
      '#ff69b4',
      '#ff6b9d',
      '#d32f2f',
      '#e91e63',
      'rgb(255, 23, 68)',      // #ff1744
      'rgb(255, 105, 180)',    // #ff69b4
      'rgb(255, 107, 157)',    // #ff6b9d
      'rgb(211, 47, 47)',      // #d32f2f
      'rgb(233, 30, 99)',      // #e91e63
    ]
    
    hearts.forEach((heart) => {
      const color = (heart as HTMLElement).style.color
      expect(color).toBeTruthy()
      expect(validColors).toContain(color)
    })
  })

  it('sets opacity on hearts for depth effect', () => {
    const { container } = render(<FallingHearts />)
    const hearts = container.querySelectorAll('.falling-heart')
    
    hearts.forEach((heart) => {
      const opacity = (heart as HTMLElement).style.opacity
      expect(opacity).toBeTruthy()
      const opacityValue = parseFloat(opacity)
      expect(opacityValue).toBeGreaterThanOrEqual(0.4)
      expect(opacityValue).toBeLessThanOrEqual(0.9)
    })
  })
})
