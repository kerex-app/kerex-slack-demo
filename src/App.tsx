import { useState } from 'react'

function App() {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    console.log('Get Started button clicked')
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>Kerex Demo App</h1>
      
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 32px',
          marginTop: '32px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          boxShadow: isHovered 
            ? '0 8px 16px rgba(236, 72, 153, 0.4)'
            : '0 4px 8px rgba(139, 92, 246, 0.2)',
        }}
      >
        Get Started
      </button>
    </div>
  )
}

export default App
