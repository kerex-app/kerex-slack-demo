function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{
        margin: '0 0 16px 0',
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#1a1a1a'
      }}>
        Kerex Demo App
      </h1>
      <h2 style={{
        margin: '0',
        fontSize: '1.25rem',
        fontWeight: '400',
        color: '#666',
        lineHeight: '1.5'
      }}>
        Change has been made by Kerex agent!
      </h2>
    </div>
  )
}

export default App