import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NewsletterBand from './components/NewsletterBand'
import Home from './pages/Home'
import About from './pages/About'
import ValueChain from './pages/ValueChain'
import Advocacy from './pages/Advocacy'
import Programs from './pages/Programs'
import Membership from './pages/Membership'
import News from './pages/News'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import Strategy from './pages/Strategy'
import Gallery from './pages/Gallery'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 page-fade">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/value-chain" element={<ValueChain />} />
          <Route path="/advocacy" element={<Advocacy />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/news" element={<News />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <NewsletterBand />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  )
}
