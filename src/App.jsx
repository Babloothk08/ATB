import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'
import TourPackagesPage from './pages/TourPackagesPage'
import DestinationsPage from './pages/DestinationsPage'
import BlogPage from './pages/BlogPage'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/packages" element={<TourPackagesPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
