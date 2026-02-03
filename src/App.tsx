import { useState } from 'react';
import MenuBar from './MenuBar';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <MenuBar onNavigate={setCurrentPage} />
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {currentPage === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <h1>Kerex Demo App</h1>
            <p>Welcome to the home page</p>
          </div>
        )}
        {currentPage === 'contact' && (
          <div style={{ textAlign: 'center' }}>
            <h1>Contact Us</h1>
            <p>Email: contact@kerex.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
