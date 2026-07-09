import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'

// ── Glob imports — one per folder category ─────────────────────────────────
const farmVisitMods    = import.meta.glob('../assets/images/farm-visits/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}',       { eager: true })
const riceMillsMods    = import.meta.glob('../assets/images/major-rice-mills/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}',  { eager: true })
const marketMods       = import.meta.glob('../assets/images/market-centers/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}',    { eager: true })
const riceFairMods     = import.meta.glob('../assets/images/rice-fair/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}',         { eager: true })
const harvesterMods    = import.meta.glob('../assets/images/combine-harvesters/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}',{ eager: true })
const ashesiMods       = import.meta.glob('../assets/images/ashesi-university/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true })
const floodMods        = import.meta.glob('../assets/images/flood-pictures/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}',    { eager: true })
const northMods        = import.meta.glob('../assets/images/farm-visit-north/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}',  { eager: true })
const ecoMods          = import.meta.glob('../assets/images/eco-warehouse/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}',     { eager: true })
const africaForumMods  = import.meta.glob('../assets/images/Africa Investment Forum - Morocco/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true })
const ifsMods          = import.meta.glob('../assets/images/Invitation to launch of Rice Importation study by Institute for Fiscal Studies/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true })

// Span cycle for masonry variety
const spanCycle = [
  'col-span-2 row-span-2',
  '', '',
  'col-span-2',
  '', '',
  'row-span-2',
  '', '',
  'col-span-2',
]

function toImages(mods, cat, idOffset) {
  return Object.values(mods).map((mod, i) => ({
    id:   idOffset + i,
    src:  mod.default,
    caption: `${cat} — Photo ${i + 1}`,
    cat,
    span: spanCycle[i % spanCycle.length],
  }))
}

const farmVisitImages = toImages(farmVisitMods,  'Farm Visits',                  0)
const riceMillImages  = toImages(riceMillsMods,   'Major Rice Mills in Ghana',   200)
const marketImages    = toImages(marketMods,       'Promoting Local Rice in Market Centers', 400)
const riceFairImages  = toImages(riceFairMods,     'Rice Fair',                  500)
const harvesterImages = toImages(harvesterMods,    'Combine Harvesters',         600)
const ashesiImages    = toImages(ashesiMods,       'Ashesi University',          700)
const floodImages     = toImages(floodMods,        'Flood Pictures and Videos',  800)
const northImages     = toImages(northMods,        'Farm Visit North',           900)
const ecoImages        = toImages(ecoMods,          'Eco Warehouse',             1000)
const africaForumImages = toImages(africaForumMods, 'Africa Investment Forum',   1100)
const ifsImages         = toImages(ifsMods,          'IFS Rice Importation Study', 1200)

const images = [
  ...farmVisitImages,
  ...riceMillImages,
  ...riceFairImages,
  ...harvesterImages,
  ...northImages,
  ...ecoImages,
  ...floodImages,
  ...marketImages,
  ...ashesiImages,
  ...africaForumImages,
  ...ifsImages,
]

const categories = [
  'All',
  'Farm Visits',
  'Major Rice Mills in Ghana',
  'Rice Fair',
  'Combine Harvesters',
  'Farm Visit North',
  'Eco Warehouse',
  'Flood Pictures and Videos',
  'Promoting Local Rice in Market Centers',
  'Ashesi University',
  'Africa Investment Forum',
  'IFS Rice Importation Study',
]

/* ── commented-out Unsplash placeholders ──────────────────────────────────
const baseImages = [ ... ]
─────────────────────────────────────────────────────────────────────────── */

export default function Gallery() {
  const [active,   setActive]   = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? images : images.filter(img => img.cat === active)

  const openLightbox  = (i) => setLightbox(i)
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prevImg = useCallback(() => setLightbox(i => (i - 1 + filtered.length) % filtered.length), [filtered.length])
  const nextImg = useCallback(() => setLightbox(i => (i + 1) % filtered.length), [filtered.length])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape')      closeLightbox()
      if (e.key === 'ArrowLeft')   prevImg()
      if (e.key === 'ArrowRight')  nextImg()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, closeLightbox, prevImg, nextImg])

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
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

      {/* Lightbox — rendered via portal to escape <main> CSS transform */}
      {lightbox !== null && createPortal(
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImg() }}
            className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            className="relative flex flex-col items-center mx-14 md:mx-20"
            style={{ maxWidth: 'calc(100vw - 112px)', maxHeight: '92vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={lightbox}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].caption}
              className="block w-auto h-auto rounded-lg shadow-2xl"
              style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', animation: 'pageFadeIn 0.25s ease forwards' }}
            />
            <div className="mt-3 text-center">
              <span className="font-mono text-gold text-xs uppercase tracking-widest">{filtered[lightbox].cat}</span>
              <p className="text-white/80 text-sm mt-1">{filtered[lightbox].caption}</p>
              <p className="text-white/30 text-xs mt-1 font-mono">{lightbox + 1} / {filtered.length}</p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextImg() }}
            className="absolute right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight size={22} />
          </button>
        </div>,
        document.body
      )}
    </>
  )
}
