import { Link } from 'react-router-dom'
import logoUrl from '../assets/images/Ghana-Rice-Federation-logo.jpg'

const socialLinks = [
  { label: 'Twitter/X', href: '#', char: '𝕏' },
  { label: 'LinkedIn', href: '#', char: 'in' },
  { label: 'Facebook', href: '#', char: 'f' },
  { label: 'YouTube', href: '#', char: '▶' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <img
              src={logoUrl}
              alt="Ghana Rice Federation"
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            The National Voice of the Rice Industry — advocating, connecting, and developing Ghana's rice sector.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ char, label, href }) => (
              <a key={label} href={href} aria-label={label}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-forest text-white/60 transition-all duration-200 text-xs font-bold font-mono">
                {char}
              </a>
            ))}
          </div>
        </div>

        {/* Organisation */}
        <div>
          <h4 className="font-mono text-gold text-xs uppercase tracking-widest mb-4">Organisation</h4>
          <ul className="space-y-2 text-sm">
            {[['About Us', '/about'], ['Leadership', '/about'], ['Value Chain', '/value-chain'], ['Advocacy', '/advocacy']].map(([label, to]) => (
              <li key={label}><Link to={to} className="text-white/60 hover:text-gold transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Industry */}
        <div>
          <h4 className="font-mono text-gold text-xs uppercase tracking-widest mb-4">Industry</h4>
          <ul className="space-y-2 text-sm">
            {[['Programs', '/programs'], ['Partners', '/partners'], ['Gallery', '/gallery'], ['Strategy', '/strategy']].map(([label, to]) => (
              <li key={label}><Link to={to} className="text-white/60 hover:text-gold transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="font-mono text-gold text-xs uppercase tracking-widest mb-4">Get Involved</h4>
          <ul className="space-y-2 text-sm">
            {[['Membership', '/membership'], ['Partnerships', '/partners'], ['Contact Us', '/contact']].map(([label, to]) => (
              <li key={label}><Link to={to} className="text-white/60 hover:text-gold transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Ghana Rice Federation. All rights reserved.</p>
          <p>Accra, Ghana &nbsp;·&nbsp; info@ghanaricefederation.org &nbsp;·&nbsp; +233 30 000 0000</p>
        </div>
      </div>
    </footer>
  )
}
