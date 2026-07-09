import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Mic2, Newspaper, ChevronRight, MapPin, Calendar, X, ZoomIn } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'
import forumImg1 from '../assets/images/Africa Investment Forum - Morocco/20241205_135007.jpg'
import forumImg2 from '../assets/images/Africa Investment Forum - Morocco/20241205_135122(0).jpg'
import forumImg3 from '../assets/images/Africa Investment Forum - Morocco/PXL_20241205_161536427.jpg'
import forumImg4 from '../assets/images/Africa Investment Forum - Morocco/20241203_201827.jpg'
import dailyGraphicImg from '../assets/media/Ghana rice federation daily graphic (1).jpg'
import mediaImg2 from '../assets/media/IMG-20231207-WA0000 (1).jpg'

const mediaImages = [
  { src: dailyGraphicImg, alt: 'Ghana Rice Federation — Daily Graphic feature', label: 'Print', title: 'Ghana Rice Federation — Daily Graphic Feature', desc: "GRF featured in Ghana's leading national newspaper, the Daily Graphic, highlighting the Federation's advocacy work and impact on the domestic rice sector." },
  { src: mediaImg2, alt: 'GRF Media Coverage', label: 'Media', title: 'GRF in the Media — December 2023', desc: 'Coverage of Rice Federation Ghana activities and engagements from December 2023, reflecting the Federation\'s growing public profile.' },
]

export default function MediaEngagements() {
  const [lightbox, setLightbox] = useState(null)

  const close = useCallback(() => setLightbox(null), [])
  const prev  = useCallback(() => setLightbox(i => (i - 1 + mediaImages.length) % mediaImages.length), [])
  const next  = useCallback(() => setLightbox(i => (i + 1) % mediaImages.length), [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      <PageHeader
        label="Media Engagements"
        title="In the Public Discourse"
        subtitle="Media coverage and speaking engagements from the Rice Federation Ghana."
        img="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&auto=format&fit=crop&q=80"
      />

      {/* Media Coverage */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <SectionLabel>In the News</SectionLabel>
            <h2 className="font-sans font-bold text-forest text-2xl md:text-3xl mt-1">Media Coverage</h2>
            <div className="w-14 h-0.5 bg-gold mt-4" />
          </div>

          {/* Newspaper / print coverage — clickable lightbox */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {mediaImages.map(({ src, alt, label, title, desc }, i) => (
              <div
                key={i}
                className="bg-cream rounded-2xl border border-mist overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                onClick={() => setLightbox(i)}
              >
                <div className="relative overflow-hidden" style={{ height: '220px' }}>
                  <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-gold/20 text-gold backdrop-blur-sm">
                      <Newspaper size={10} /> {label}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-sans font-semibold text-forest text-sm leading-snug mb-1">{title}</h4>
                  <p className="text-slate text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <SectionLabel>Speaking</SectionLabel>
            <h2 className="font-sans font-bold text-forest text-2xl md:text-3xl mt-1">Speaking Engagements</h2>
            <div className="w-14 h-0.5 bg-gold mt-4" />
          </div>

          {/* Africa Investment Forum feature */}
          <div className="bg-white rounded-2xl border border-mist overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="grid grid-cols-2 gap-1" style={{ minHeight: '300px' }}>
                <div className="relative overflow-hidden">
                  <img src={forumImg1} alt="Africa Investment Forum Morocco" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative overflow-hidden">
                  <img src={forumImg2} alt="Africa Investment Forum Morocco" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative overflow-hidden">
                  <img src={forumImg3} alt="Africa Investment Forum Morocco" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative overflow-hidden">
                  <img src={forumImg4} alt="Africa Investment Forum Morocco" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold-pale text-forest w-fit mb-4">
                  <Mic2 size={11} /> Featured Engagement
                </span>
                <h3 className="font-sans font-bold text-forest text-xl mb-3">Africa Investment Forum 2024</h3>
                <p className="text-slate text-sm leading-relaxed mb-4">GRF represented Ghana's rice sector at the Africa Investment Forum held in Marrakech, Morocco in December 2024 — engaging with continental investors, development finance institutions, and agribusiness leaders on unlocking capital for the domestic rice value chain.</p>
                <div className="flex flex-wrap gap-3 text-xs text-slate/60 font-mono">
                  <span className="flex items-center gap-1"><Calendar size={10} /> December 2024</span>
                  <span className="flex items-center gap-1"><MapPin size={10} /> Marrakech, Morocco</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Enquiries CTA */}
      <section className="py-16 px-6 bg-forest">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel light>Media</SectionLabel>
          <h2 className="font-sans font-bold text-white text-2xl md:text-3xl mt-2 mb-4">Media Enquiries</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-7 max-w-xl mx-auto">
            For press enquiries, interview requests, or to invite a GRF representative to speak at your event, please contact our communications team.
          </p>
          <a
            href="mailto:media@ghanarice.org"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-forest font-semibold rounded-full hover:brightness-110 transition-all text-sm"
          >
            Contact Media Team <ChevronRight size={15} />
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && createPortal(
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X size={20} />
          </button>

          {mediaImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10 text-xl font-light"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10 text-xl font-light"
              >
                ›
              </button>
            </>
          )}

          <div
            className="flex flex-col items-center mx-14 md:mx-20"
            style={{ maxWidth: 'calc(100vw - 112px)', maxHeight: '92vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={lightbox}
              src={mediaImages[lightbox].src}
              alt={mediaImages[lightbox].alt}
              className="block w-auto h-auto rounded-lg shadow-2xl"
              style={{ maxWidth: '100%', maxHeight: '82vh', objectFit: 'contain' }}
            />
            <div className="mt-4 text-center">
              <p className="text-white/80 text-sm font-semibold">{mediaImages[lightbox].title}</p>
              <p className="text-white/40 text-xs mt-1 font-mono">{lightbox + 1} / {mediaImages.length}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
