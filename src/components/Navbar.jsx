import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/value-chain', label: 'Value Chain' },
  { to: '/advocacy', label: 'Advocacy' },
  { to: '/programs', label: 'Programs' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/partners', label: 'Partners' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const isActive = (to) => to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-forest/95 backdrop-blur-md shadow-lg' : 'bg-forest'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="src/assets/images/Ghana-Rice-Federation-logo.jpg"
            alt="Ghana Rice Federation"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`px-3 py-2 rounded text-sm font-sans font-medium transition-colors duration-200 ${
                  isActive(to)
                    ? 'text-gold bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/membership"
            className="hidden md:inline-flex items-center px-4 py-2 rounded text-sm font-semibold bg-gradient-to-r from-gold to-gold-light text-forest hover:brightness-110 transition-all duration-200"
          >
            Join Us
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-forest border-t border-white/10 px-6 py-4 space-y-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block px-4 py-3 rounded font-medium text-sm transition-colors ${
                isActive(to)
                  ? 'text-gold bg-white/10'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/membership"
            className="block mt-3 px-4 py-3 rounded text-center font-semibold text-sm bg-gradient-to-r from-gold to-gold-light text-forest"
          >
            Join Us
          </Link>
        </div>
      )}
    </header>
  )
}
