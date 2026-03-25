import { render, screen, fireEvent } from '@testing-library/react'
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

  it('renders theme toggle button', () => {
    render(<App />)
    const themeToggle = screen.getByRole('button', { name: /switch to/i })
    expect(themeToggle).toBeDefined()
  })

  it('displays egg emoji initially', () => {
    render(<App />)
    const themeToggle = screen.getByRole('button', { name: /switch to easter/i })
    expect(themeToggle.textContent).toBe('🥚')
  })

  it('toggles theme when button is clicked', () => {
    render(<App />)
    const themeToggle = screen.getByRole('button', { name: /switch to easter/i })
    
    // Initially should show egg emoji
    expect(themeToggle.textContent).toBe('🥚')
    
    // Click to switch to easter theme
    fireEvent.click(themeToggle)
    
    // Should now show bunny emoji
    expect(themeToggle.textContent).toBe('🐰')
    
    // Click again to switch back to default
    fireEvent.click(themeToggle)
    
    // Should show egg emoji again
    expect(themeToggle.textContent).toBe('🥚')
  })

  it('applies easter-theme class when theme is easter', () => {
    render(<App />)
    const app = screen.getByText('Kerex').closest('.app')
    const themeToggle = screen.getByRole('button', { name: /switch to easter/i })
    
    // Initially should not have easter-theme class
    expect(app?.className).not.toContain('easter-theme')
    
    // Click to switch to easter theme
    fireEvent.click(themeToggle)
    
    // Should now have easter-theme class
    expect(app?.className).toContain('easter-theme')
  })
})
