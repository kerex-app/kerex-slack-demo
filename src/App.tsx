function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}>
        <h1>Kerex Demo App</h1>
      </div>
      <footer style={{
        textAlign: 'center',
        color: '#888',
        fontSize: '14px',
        padding: '20px',
        marginTop: '20px',
        borderTop: '1px solid #f0f0f0'
      }}>
        Powered by Kerex
      </footer>
    </div>
  )
}

export default App
