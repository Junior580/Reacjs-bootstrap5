import React from 'react'
import './styles/App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Menu } from './pages/Menu'

//bootstrap
// import * as bootstrap from 'bootstrap'
// import Alert from 'bootstrap/js/dist/alert'
// import { Tooltip, Toast, Popover } from 'bootstrap'

const App = () => (
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </div>
)

export default App
