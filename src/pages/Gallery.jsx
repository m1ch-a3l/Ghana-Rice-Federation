import { useState, useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'

// ── Farm Visits images loaded from the local folder via Vite glob import ──
const farmVisitModules = import.meta.glob(
  '../assets/images/farm-visits/*.jpeg',
  { eager: true }
)

// Span pattern cycles through to give the masonry grid visual variety
const spanCycle = [
  'col-span-2 row-span-2', // large feature
  '',                       // normal
  '',                       // normal
  'col-span-2',             // wide
  '',                       // normal
  '',                       // normal
  'row-span-2',             // tall
  '',                       // normal
  '',                       // normal
  'col-span-2',             // wide
]

const farmVisitImages = Object.values(farmVisitModules).map((mod, i) => ({
  id:      200 + i,
  src:     mod.default,
  caption: `Farm Visit — Photo ${i + 1}`,
  cat:     'Farm Visits',
  span:    spanCycle[i % spanCycle.length],
}))

const categories = ['All', 'Farm Visits', 'Farming', 'Harvest', 'Milling', 'Community', 'Market']

const baseImages = [
  // Farming
  { id: 1, src: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=900&auto=format&fit=crop&q=80', caption: 'Paddy fields in the Volta Region', cat: 'Farming', span: 'col-span-2 row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&auto=format&fit=crop&q=80', caption: 'Young rice seedlings at transplanting', cat: 'Farming', span: '' },
  { id: 3, src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80', caption: 'Irrigated rice fields at dawn', cat: 'Farming', span: '' },
  { id: 4, src: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=900&auto=format&fit=crop&q=80', caption: 'Row cultivation in the Northern Region', cat: 'Farming', span: 'col-span-2' },

  // Harvest
  { id: 5, src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=900&auto=format&fit=crop&q=80', caption: 'Freshly harvested paddy rice', cat: 'Harvest', span: 'col-span-2' },
  { id: 6, src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&auto=format&fit=crop&q=80', caption: 'Golden harvest season', cat: 'Harvest', span: '' },
  { id: 7, src: 'https://images.unsplash.com/photo-1506484381205-f7945653044d?w=600&auto=format&fit=crop&q=80', caption: 'Post-harvest drying on raised platforms', cat: 'Harvest', span: '' },
  { id: 8, src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&auto=format&fit=crop&q=80', caption: 'Winnowing paddy to remove husks', cat: 'Harvest', span: '' },

  // Milling
  { id: 9,  src: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?w=900&auto=format&fit=crop&q=80', caption: 'Modern rice mill interior', cat: 'Milling', span: 'col-span-2 row-span-2' },
  { id: 10, src: 'https://images.unsplash.com/photo-1591137516559-b6a2e6e3b0b2?w=600&auto=format&fit=crop&q=80', caption: 'Quality sorting after milling', cat: 'Milling', span: '' },
  { id: 11, src: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&auto=format&fit=crop&q=80', caption: 'Bagging and sealing milled rice', cat: 'Milling', span: '' },

  // Community
  { id: 12, src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&auto=format&fit=crop&q=80', caption: 'GRF capacity building workshop', cat: 'Community', span: 'col-span-2' },
  { id: 13, src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=80', caption: 'Farmer cooperative meeting', cat: 'Community', span: '' },
  { id: 14, src: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&auto=format&fit=crop&q=80', caption: 'Policy dialogue at the national forum', cat: 'Community', span: '' },
  { id: 15, src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80', caption: 'Youth agripreneurs training cohort', cat: 'Community', span: '' },

  // Market
  { id: 16, src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80', caption: 'Rice market in Accra', cat: 'Market', span: '' },
  { id: 17, src: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=900&auto=format&fit=crop&q=80', caption: 'Packaged local rice brands', cat: 'Market', span: 'col-span-2' },
  { id: 18, src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=80', caption: 'Wholesale grain trade', cat: 'Market', span: '' },
]

// Farm Visits appear first so the category filter lands on real photos immediately
const images = [...farmVisitImages, ...baseImages]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null) // index in filtered array

  const filtered = active === 'All' ? images : images.filter(img => img.cat === active)

  const openLightbox = (i) => setLightbox(i)
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prevImg = useCallback(() => setLightbox(i => (i - 1 + filtered.length) % filtered.length), [filtered.length])
  const nextImg = useCallback(() => setLightbox(i => (i + 1) % filtered.length), [filtered.length])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImg()
      if (e.key === 'ArrowRight') nextImg()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, closeLightbox, prevImg, nextImg])

  // Close when clicking outside
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      <PageHeader
        label="Photo Gallery"
        title="Ghana Rice — In Pictures"
        subtitle="A visual journey through the fields, mills, markets, and communities that make up Ghana's rice industry."
        img="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&auto=format&fit=crop&q=80"
      />

      <section className="py-16 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActive(cat); setLightbox(null) }}
                className={`px-5 py-2 rounded-full text-sm font-mono font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-forest text-gold border border-forest'
                    : 'bg-white border border-mist text-slate hover:border-gold hover:text-forest'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-4">
            {filtered.map((img, i) => (
              <div
                key={img.id}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${img.span || ''}`}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="self-end">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn size={15} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="inline-block font-mono text-gold text-[10px] uppercase tracking-widest mb-1">{img.cat}</span>
                    <p className="text-white text-xs font-medium leading-snug">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate text-sm py-12">No images in this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImg() }}
            className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] mx-16 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={lightbox}
              src={
                filtered[lightbox].src.startsWith('http')
                  ? filtered[lightbox].src.replace('w=600', 'w=1400').replace('w=900', 'w=1400')
                  : filtered[lightbox].src
              }
              alt={filtered[lightbox].caption}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              style={{ animation: 'pageFadeIn 0.25s ease forwards' }}
            />
            <div className="mt-4 text-center">
              <span className="font-mono text-gold text-xs uppercase tracking-widest">{filtered[lightbox].cat}</span>
              <p className="text-white/80 text-sm mt-1">{filtered[lightbox].caption}</p>
              <p className="text-white/30 text-xs mt-2 font-mono">{lightbox + 1} / {filtered.length}</p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImg() }}
            className="absolute right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </>
  )
}
