import './Pages.css'

export default function About() {
  return (
    <div className="page-content">
      <div className="page-wrapper">
        <h1>About Us</h1>
        <p className="page-subtitle">Learn more about Kerex</p>
        
        <div className="content-section">
          <h2 style={{ color: '#00d4ff', marginTop: '0' }}>Our Mission</h2>
          <p>
            At Kerex, we're committed to delivering premium digital solutions that 
            empower businesses to achieve their goals. We believe in the power of 
            modern web technologies and best practices to create exceptional user 
            experiences.
          </p>
        </div>

        <div className="content-section" style={{ marginTop: '2rem' }}>
          <h2 style={{ color: '#00d4ff', marginTop: '0' }}>Who We Are</h2>
          <p>
            Founded in 2024, Kerex is a forward-thinking technology company dedicated 
            to building innovative web applications. Our team consists of passionate 
            developers, designers, and strategists who work together to create solutions 
            that make a difference.
          </p>
          <p>
            We specialize in React-based applications, responsive design, and modern 
            development practices that prioritize performance, accessibility, and user 
            satisfaction.
          </p>
        </div>

        <div className="content-section" style={{ marginTop: '2rem' }}>
          <h2 style={{ color: '#00d4ff', marginTop: '0' }}>Our Values</h2>
          <p>
            We are guided by three core values that shape everything we do:
          </p>
          <ul style={{ color: '#d0d0d0', lineHeight: '2' }}>
            <li><strong style={{ color: '#00d4ff' }}>Excellence:</strong> We strive for the highest quality in all our work</li>
            <li><strong style={{ color: '#00d4ff' }}>Innovation:</strong> We embrace new technologies and creative solutions</li>
            <li><strong style={{ color: '#00d4ff' }}>Trust:</strong> We build lasting relationships with our clients through transparency and reliability</li>
          </ul>
        </div>

        <div className="content-section" style={{ marginTop: '2rem' }}>
          <h2 style={{ color: '#00d4ff', marginTop: '0' }}>Why Choose Kerex?</h2>
          <p>
            When you partner with Kerex, you're choosing a team that goes the extra mile. 
            We combine technical expertise with strategic thinking to deliver solutions that 
            not only meet your requirements but exceed your expectations. Our commitment to 
            clean code, best practices, and continuous improvement ensures your project is 
            built on a solid foundation.
          </p>
        </div>
      </div>
    </div>
  )
}
