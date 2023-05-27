import React, { useState } from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import Campground from './pages/Campground'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path="/campground/:id/:name/:price" element={<Campground />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App