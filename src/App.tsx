function App() {
  const handleGetStarted = () => {
    alert('Welcome to Kerex! Let\'s get started.');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      margin: 0,
      padding: 0
    }}>
      <div style={{
        textAlign: 'center'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '3rem',
          marginBottom: '1rem',
          fontWeight: '700',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
        }}>Kerex Demo App</h1>
        
        <p style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '1.2rem',
          marginBottom: '2.5rem',
          fontWeight: '300'
        }}>Start your journey with us today</p>
        
        <button
          onClick={handleGetStarted}
          style={{
            padding: '14px 40px',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: 'white',
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.transform = 'translateY(-2px)';
            target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.transform = 'translateY(0)';
            target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
