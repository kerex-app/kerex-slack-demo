import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders Kerex Demo App heading', () => {
    render(<App />)
    expect(screen.getByText('Kerex Demo App')).toBeDefined()
  })

  it('renders subtitle text', () => {
    render(<App />)
    expect(screen.getByText('Change has been made by Kerex agent!')).toBeDefined()
  })
})
