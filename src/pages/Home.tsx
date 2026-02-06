import './Pages.css'

export default function Home() {
  return (
    <div className="page-content">
      <div className="page-wrapper">
        <h1>Welcome to Kerex</h1>
        <p className="page-subtitle">Your premium demo application</p>
        <div className="content-section">
          <p>
            This is the home page of our demonstration app, showcasing a modern 
            navigation menu with active page indicators and a beautiful dark theme.
          </p>
          <p>
            Navigate using the menu bar at the top to explore different sections 
            of the application.
          </p>
        </div>
        <div className="cta-container">
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </div>
  )
}
