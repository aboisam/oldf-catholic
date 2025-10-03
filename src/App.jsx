import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Socienties from './pages/Socienties'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Services from './pages/Services'
import News from './pages/News'
import Donation from './pages/Donation'
import Event from './pages/Event'
import "leaflet/dist/leaflet.css";

const App = () => {
  return (
    <div>
      <div className='mb-20'>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/news' element={<News />} />
        <Route path='/socienties' element={<Socienties />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/events' element={<Event />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App;
