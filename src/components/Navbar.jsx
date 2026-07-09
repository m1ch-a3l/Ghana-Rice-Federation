import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logoUrl from '../assets/images/logo.png'

const navItems = [
  { to: '/', label: 'Home' },
  {
    label: 'About',
    children: [
      { to: '/about',  label: 'About Us' },
      { to: '/team',   label: 'Our Team' },
    ],
  },
  {
    label: 'Industry',
    children: [
      { to: '/value-chain', label: 'Value Chain' },
      { to: '/advocacy',    label: 'Advocacy' },
      { to: '/programs',    label: 'Programs' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { to: '/gallery',      label: 'Gallery' },
      { to: '/publications', label: 'Publications' },
      { to: '/media',        label: 'Media' },
    ],
  },
]

function DropdownMenu({ item, pathname }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)

  const isChildActive = item.children?.some(c => pathname.startsWith(c.to))

  const onEnter = () => {
    clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const onLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <li className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-sans font-medium transition-colors duration-200 ${
          isChildActive
            ? 'text-forest bg-forest/8 font-semibold'
            : 'text-forest/80 hover:text-forest hover:bg-forest/8'
        }`}
      >
        {item.label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul className="absolute top-full left-0 mt-1 min-w-[160px] bg-white border border-mist rounded-xl shadow-lg py-1.5 z-50">
          {item.children.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`block px-4 py-2.5 text-sm font-sans transition-colors duration-150 ${
                  pathname.startsWith(to)
                    ? 'text-forest font-semibold bg-forest/5'
                    : 'text-forest/75 hover:text-forest hover:bg-forest/5'
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

function MobileItem({ item, pathname }) {
  const [expanded, setExpanded] = useState(false)

  if (!item.children) {
    return (
      <Link
        to={item.to}
        className={`block px-4 py-3 rounded font-medium text-sm transition-colors ${
          (item.to === '/' ? pathname === '/' : pathname.startsWith(item.to))
            ? 'text-forest bg-forest/8 font-semibold'
            : 'text-forest/70 hover:text-forest hover:bg-forest/8'
        }`}
      >
        {item.label}
      </Link>
    )
  }

  const isChildActive = item.children.some(c => pathname.startsWith(c.to))

  return (
    <div>
      <button
        onClick={() => setExpanded(e => !e)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded font-medium text-sm transition-colors ${
          isChildActive
            ? 'text-forest bg-forest/8 font-semibold'
            : 'text-forest/70 hover:text-forest hover:bg-forest/8'
        }`}
      >
        {item.label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
      </button>
      {expanded && (
        <div className="ml-4 mt-0.5 space-y-0.5 border-l-2 border-mist pl-3">
          {item.children.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block px-3 py-2.5 rounded text-sm transition-colors ${
                pathname.startsWith(to)
                  ? 'text-forest font-semibold'
                  : 'text-forest/65 hover:text-forest'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoUrl} alt="Rice Federation Ghana" className="h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label} item={item} pathname={pathname} />
            ) : (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`px-3 py-2 rounded text-sm font-sans font-medium transition-colors duration-200 ${
                    (item.to === '/' ? pathname === '/' : pathname.startsWith(item.to))
                      ? 'text-forest bg-forest/8 font-semibold'
                      : 'text-forest/80 hover:text-forest hover:bg-forest/8'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
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
            className="lg:hidden p-2 text-forest hover:text-forest-mid"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-mist px-4 py-3 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <MobileItem key={item.label ?? item.to} item={item} pathname={pathname} />
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
