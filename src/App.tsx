function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      {/* Welcome Banner */}
      <div style={{
        width: '100%',
        backgroundColor: '#e3f2fd',
        padding: '24px 16px',
        textAlign: 'center',
        borderBottom: '1px solid #90caf9'
      }}>
        <h2 style={{ margin: 0, fontWeight: 'bold' }}>Welcome to Kerex Demo!</h2>
      </div>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
        <h1>Kerex Demo App</h1>
      </div>
    </div>
  )
}

export default App
