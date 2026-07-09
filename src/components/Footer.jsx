import { Link } from 'react-router-dom'
import logoUrl from '../assets/images/footer logo.png'

const IconX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const socialLinks = [
  { label: 'Twitter/X', href: '#', Icon: IconX },
  { label: 'LinkedIn',  href: '#', Icon: IconLinkedIn },
  { label: 'Facebook',  href: '#', Icon: IconFacebook },
  { label: 'YouTube',   href: '#', Icon: IconYouTube },
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
              alt="Rice Federation Ghana"
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            The National Voice of the Rice Industry — advocating, connecting, and developing Ghana's rice sector.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, label, href }) => (
              <a key={label} href={href} aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-forest text-white/60 transition-all duration-200">
                <Icon />
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
            {[['Programs', '/programs'], ['Gallery', '/gallery'], ['Strategy', '/strategy'], ['Our Team', '/team']].map(([label, to]) => (
              <li key={label}><Link to={to} className="text-white/60 hover:text-gold transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="font-mono text-gold text-xs uppercase tracking-widest mb-4">Get Involved</h4>
          <ul className="space-y-2 text-sm">
            {[['Membership', '/membership'], ['Contact Us', '/contact']].map(([label, to]) => (
              <li key={label}><Link to={to} className="text-white/60 hover:text-gold transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Rice Federation Ghana. All rights reserved.</p>
          <p>Accra, Ghana &nbsp;·&nbsp; info@ghanarice.org &nbsp;·&nbsp; 0593824667</p>
        </div>
      </div>

      {/* Powered by */}
      <div className="border-t border-white/5 py-4 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs text-white/25">
          <p>
            Powered by{' '}
            <a href="http://t3sinnovation.com"><span className="text-gold/60 font-semibold">T3S Innovation</span></a>
            <span className="mx-2 text-white/15">·</span>
            <span className="italic">Africa's fastest growing Startup</span>
          </p>
          <p>
            <a href="mailto:support@t3sinnovation.com" className="hover:text-white/50 transition-colors">support@t3sinnovation.com</a>
            <span className="mx-2 text-white/15">·</span>
            0552 528 315
          </p>
        </div>
      </div>
    </footer>
  )
}
