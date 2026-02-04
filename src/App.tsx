function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <h1>Kerex Demo App</h1>
      <button
        style={{
          background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1rem',
          padding: '12px 32px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)'
        }}
        onMouseEnter={(e) => {
          const button = e.currentTarget;
          button.style.transform = 'scale(1.05)';
          button.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.6)';
        }}
        onMouseLeave={(e) => {
          const button = e.currentTarget;
          button.style.transform = 'scale(1)';
          button.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.4)';
        }}
        onClick={() => alert('Get Started clicked!')}
      >
        Get Started
      </button>
    </div>
  )
}

export default App
