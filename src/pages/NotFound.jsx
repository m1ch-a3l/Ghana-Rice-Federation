import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-md">
        <div className="font-serif text-gold text-8xl font-semibold mb-4">404</div>
        <h1 className="font-serif text-forest text-3xl font-semibold mb-3">Page Not Found</h1>
        <p className="text-slate text-sm leading-relaxed mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-forest to-forest-mid text-white font-semibold text-sm rounded hover:brightness-110 transition-all"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </div>
  )
}
