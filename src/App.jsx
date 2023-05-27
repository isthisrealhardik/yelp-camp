import React, { useState } from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import Campground from './pages/Campground'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Review from "./pages/Review"

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
          <Route path='/review' element={<Review />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App