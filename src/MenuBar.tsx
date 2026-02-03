interface MenuBarProps {
  onNavigate?: (page: 'home' | 'contact') => void;
}

function MenuBar({ onNavigate }: MenuBarProps) {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '1rem 2rem',
      display: 'flex',
      gap: '2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <button
        onClick={() => onNavigate?.('home')}
        style={{
          backgroundColor: 'transparent',
          color: 'white',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer',
          fontWeight: 500,
          transition: 'color 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#4CAF50'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
      >
        Home
      </button>
      <button
        onClick={() => onNavigate?.('contact')}
        style={{
          backgroundColor: 'transparent',
          color: 'white',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer',
          fontWeight: 500,
          transition: 'color 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#4CAF50'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
      >
        Contact
      </button>
    </nav>
  );
}

export default MenuBar;
