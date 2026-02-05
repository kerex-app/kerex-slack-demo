import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders navigation menu with Home link', () => {
    render(<App />)
    expect(screen.getByText('Home')).toBeDefined()
  })

  it('renders all navigation links', () => {
    render(<App />)
    expect(screen.getByText('Home')).toBeDefined()
    expect(screen.getByText('FAQ')).toBeDefined()
    expect(screen.getByText('Contact')).toBeDefined()
  })

  it('renders Kerex logo', () => {
    render(<App />)
    expect(screen.getByText('Kerex')).toBeDefined()
  })
})
