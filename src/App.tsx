import WelcomeBanner from './WelcomeBanner'

function App() {
  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <WelcomeBanner />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '100vh'
      }}>
        <h1>Kerex Demo App</h1>
      </div>
    </div>
  )
}

export default App
