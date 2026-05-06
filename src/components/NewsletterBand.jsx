import { useState } from 'react'
import { Send } from 'lucide-react'

export default function NewsletterBand() {
  const [email,  setEmail]  = useState('')
  const [name,   setName]   = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
    setName('')
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section className="bg-ink py-14 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-gold text-xs uppercase tracking-widest mb-2">Stay Informed</p>
        <h3 className="font-serif text-white text-2xl md:text-3xl font-semibold mb-2">
          Ghana Rice Bulletin
        </h3>
        <p className="text-white/60 mb-8 text-sm">
          Industry news, policy updates &amp; training opportunities — straight to your inbox.
        </p>
        {status === 'success' ? (
          <div className="inline-block bg-gold/20 border border-gold/40 text-gold-light px-6 py-3 rounded text-sm font-medium">
            Thank you for subscribing! Welcome to the Ghana Rice Bulletin.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={e => setName(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded bg-white/10 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-none focus:border-gold"
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2.5 rounded bg-white/10 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-none focus:border-gold"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold text-sm rounded hover:brightness-110 transition-all"
            >
              <Send size={15} /> Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
