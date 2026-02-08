import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Kerex</h1>
        <p className="hero-subtitle">
          Experience the future of premium application development
        </p>
        <p className="hero-description">
          Discover how Kerex can transform your business with cutting-edge 
          technology and innovative solutions.
        </p>
        <div className="hero-cta">
          <Link to="/contact" className="cta-button primary">
            Sign Up for a Demo
          </Link>
          <button className="cta-button secondary" onClick={() => {}}>
            Learn More
          </button>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
    </section>
  )
}
