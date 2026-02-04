function WelcomeBanner() {
  return (
    <div style={{
      width: '100%',
      backgroundColor: '#e3f2fd',
      padding: '20px',
      textAlign: 'center',
      borderBottom: '1px solid #b3e5fc',
      boxSizing: 'border-box'
    }}>
      <h2 style={{
        margin: 0,
        fontWeight: 'bold',
        fontSize: '24px',
        color: '#333'
      }}>
        Welcome to Kerex Demo!
      </h2>
    </div>
  )
}

export default WelcomeBanner
