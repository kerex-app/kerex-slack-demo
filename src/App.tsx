function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>Kerex Demo App</h1>
      <footer style={{
        marginTop: 'auto',
        paddingTop: '40px',
        paddingBottom: '20px',
        color: '#888',
        fontSize: '14px',
        textAlign: 'center',
        width: '100%'
      }}>
        Powered by Kerex
      </footer>
    </div>
  )
}

export default App
