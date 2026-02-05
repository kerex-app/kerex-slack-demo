import { Link, useLocation } from 'react-router-dom'
import './NavigationMenu.css'

export default function NavigationMenu() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="nav-menu">
      <div className="nav-container">
        <div className="nav-logo">Kerex</div>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/faq" 
              className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
