import React from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App