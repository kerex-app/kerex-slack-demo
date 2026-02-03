function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite'
    }}>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <h1 style={{
        color: 'white',
        fontSize: '3.5rem',
        fontWeight: 'bold',
        textShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        letterSpacing: '0.05em'
      }}>Kerex Demo App</h1>
    </div>
  )
}

export default App
