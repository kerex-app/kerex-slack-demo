import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'default' ? 'easter' : 'default'} theme`}
      title={`Switch to ${theme === 'default' ? 'easter' : 'default'} theme`}
    >
      {theme === 'default' ? '🥚' : '🐰'}
    </button>
  )
}
