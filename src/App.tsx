import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationMenu from './components/NavigationMenu'
import Snow from './components/Snow'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <Snow />
      <div className="app">
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
