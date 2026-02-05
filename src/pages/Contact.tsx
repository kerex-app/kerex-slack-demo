import './Pages.css'

export default function Contact() {
  return (
    <div className="page-content">
      <div className="page-wrapper">
        <h1>Contact Us</h1>
        <div className="contact-section">
          <div className="contact-card">
            <h3>Email</h3>
            <p>
              <a href="mailto:support@kerex.app">support@kerex.app</a>
            </p>
          </div>
          <div className="contact-card">
            <h3>Phone</h3>
            <p>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
          </div>
          <div className="contact-card">
            <h3>Address</h3>
            <p>
              Kerex Headquarters<br />
              123 Tech Street<br />
              San Francisco, CA 94105
            </p>
          </div>
        </div>
        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
