import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Users, TrendingUp, Wheat, Globe, Leaf, Factory, Heart, Sprout, Package, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import slide1Img from '../assets/images/WhatsApp Image 2026-04-28 at 2.22.21 AM.jpeg'
import slide2Img from '../assets/images/WhatsApp Image 2026-04-28 at 2.24.15 AM.jpeg'
import slide3Img from '../assets/images/WhatsApp Image 2026-04-28 at 2.26.05 AM.jpeg'

const slides = [
  {
    label: 'Food Security',
    headline: 'Feeding a Nation,\nGrown in Ghana',
    sub: "Domestic rice production is Ghana's most important food security imperative.",
    img: slide1Img,
    overlay: 'from-forest/80 via-forest/55 to-black/50',
  },
  {
    label: 'Economic Sovereignty',
    headline: 'Reducing the\n$1 Billion Import Bill',
    sub: 'Every bag of Ghanaian rice keeps wealth within our communities and our nation.',
    img: slide2Img,
    overlay: 'from-[#3a2800]/85 via-[#5a3e00]/60 to-black/50',
  },
  {
    label: 'Rural Livelihoods',
    headline: 'Half a Million\nFarming Families',
    sub: 'Smallholder farmers are the backbone of the rice sector — we advocate for each of them.',
    img: slide3Img,
    overlay: 'from-forest/85 via-forest-mid/60 to-black/50',
  },
  {
    label: 'Industry Modernisation',
    headline: 'Building the\nFuture of Rice',
    sub: 'Modern milling, digital agribusiness, and youth entrepreneurship are reshaping the sector.',
    img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1920&auto=format&fit=crop&q=80',
    overlay: 'from-ink/85 via-forest/50 to-black/60',
  },
]

const stats = [
  { value: '500K+', label: 'Smallholder Farmers' },
  { value: '1.2M MT', label: 'Annual Production' },
  { value: '$2.4B', label: 'Sector Value' },
  { value: '16', label: 'Regions Represented' },
]

const values = [
  { icon: Shield, title: 'National Advocacy', desc: 'Representing the rice industry at the highest levels of government and policy.' },
  { icon: Users, title: 'Stakeholder Coordination', desc: 'Connecting farmers, millers, traders, and institutions across the value chain.' },
  { icon: TrendingUp, title: 'Industry Development', desc: 'Building capacity, driving innovation, and modernising the sector.' },
]

const whyCards = [
  { icon: Wheat, title: 'Food Security', desc: 'Rice is Ghana\'s most consumed staple — domestic production is a national security imperative.' },
  { icon: Globe, title: 'Economic Sovereignty', desc: 'Reducing the $1B+ annual import bill to keep wealth within Ghana.' },
  { icon: Heart, title: 'Rural Livelihoods', desc: 'Over 500,000 farming families depend on rice for their income and sustenance.' },
  { icon: Factory, title: 'Industrial Opportunity', desc: 'A fully developed rice sector creates jobs in milling, logistics, packaging, and trade.' },
  { icon: Sprout, title: 'Youth & Agribusiness', desc: 'Modern rice agribusiness offers compelling entrepreneurship pathways for Ghana\'s youth.' },
  { icon: Package, title: 'Export Potential', desc: 'Quality Ghanaian rice can compete in ECOWAS markets and beyond.' },
]

// Each entry: name shown under the logo, logo = clearbit URL or null (falls back to styled name pill)
const partners = [
  { name: 'MOFA',                logo: null },
  { name: 'GIDA',                logo: null },
  { name: 'USAID',               logo: 'https://logo.clearbit.com/usaid.gov' },
  { name: 'FAO',                 logo: 'https://logo.clearbit.com/fao.org' },
  { name: 'ECOWAS',              logo: 'https://logo.clearbit.com/ecowas.int' },
  { name: 'AfDB',                logo: 'https://logo.clearbit.com/afdb.org' },
  { name: 'GIZ',                 logo: 'https://logo.clearbit.com/giz.de' },
  { name: 'World Bank',          logo: 'https://logo.clearbit.com/worldbank.org' },
  { name: 'IFAD',                logo: 'https://logo.clearbit.com/ifad.org' },
  { name: 'Yara Ghana',          logo: 'https://logo.clearbit.com/yara.com' },
  { name: 'Olam Agri',           logo: 'https://logo.clearbit.com/olamagri.com' },
  { name: 'KNUST',               logo: 'https://logo.clearbit.com/knust.edu.gh' },
  { name: 'AfricaRice',          logo: 'https://logo.clearbit.com/africarice.org' },
  { name: 'Univ. of Ghana',      logo: 'https://logo.clearbit.com/ug.edu.gh' },
  { name: 'Stanbic Bank',        logo: 'https://logo.clearbit.com/stanbicbank.com.gh' },
  { name: 'Bank of Ghana',       logo: 'https://logo.clearbit.com/bog.gov.gh' },
  { name: 'EPA Ghana',           logo: null },
  { name: 'Ghana Grain Council', logo: null },
]

/* Renders one partner tile — shows logo image if available, falls back to styled name */
function PartnerCard({ name, logo }) {
  const [imgOk, setImgOk] = useState(true)
  return (
    <div className="mx-4 flex-shrink-0 w-36 h-20 bg-cream border border-mist rounded-xl flex flex-col items-center justify-center gap-1.5 px-3 hover:border-gold/50 hover:shadow-sm transition-all duration-300 group">
      {logo && imgOk ? (
        <>
          <img
            src={logo}
            alt={name}
            className="h-9 w-auto max-w-[100px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            onError={() => setImgOk(false)}
          />
          <span className="text-[10px] font-mono text-slate/60 uppercase tracking-wide leading-none text-center">{name}</span>
        </>
      ) : (
        <span className="font-mono text-xs font-semibold text-slate group-hover:text-forest transition-colors text-center leading-snug">{name}</span>
      )}
    </div>
  )
}

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index) => {
    if (animating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 700)
  }, [animating])

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16">

        {/* Carousel background slides */}
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Photo */}
            <img
              src={s.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            {/* Colour-tinted overlay for readability */}
            <div className={`absolute inset-0 bg-gradient-to-br ${s.overlay}`} />
            {/* Bottom vignette to ground the stats */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        ))}

        {/* Slide label strip — top left */}
        <div className="absolute top-24 left-6 md:left-12 z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.5 bg-gold" />
            <span className="font-mono text-gold text-xs uppercase tracking-widest opacity-80 transition-all duration-500">
              {slide.label}
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Animated headline per slide */}
          <h1
            key={current}
            className="font-serif text-white font-semibold leading-tight text-5xl md:text-6xl lg:text-7xl mb-6"
            style={{ animation: 'heroTextIn 0.6s ease forwards' }}
          >
            {slide.headline.split('\n').map((line, i) => (
              <span key={i} className={i === 1 ? 'block text-gold-light' : 'block'}>{line}</span>
            ))}
          </h1>

          <p
            key={`sub-${current}`}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ animation: 'heroTextIn 0.8s ease forwards' }}
          >
            {slide.sub}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/membership" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold rounded hover:brightness-110 transition-all whitespace-nowrap">
              Become a Member <ArrowRight size={17} />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded hover:bg-white/10 transition-all whitespace-nowrap">
              Discover Our Work
            </Link>
          </div>

          {/* Stats — hidden on mobile, shown from md up */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-serif text-gold-light text-3xl md:text-4xl font-semibold">{value}</div>
                <div className="text-white/60 text-xs mt-1 font-mono uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-6 h-2 bg-gold'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-0.5 bg-white/10">
          <div
            key={current}
            className="h-full bg-gold"
            style={{ animation: 'progressBar 5s linear forwards' }}
          />
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto text-center">
          <SectionLabel>Our Mission</SectionLabel>
          <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold mb-3">
            Championing Ghana's Rice Industry
          </h2>
          <div className="w-14 h-0.5 bg-gold mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-8 shadow-sm border border-mist hover:-translate-y-1 transition-transform duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-pale flex items-center justify-center mb-5 mx-auto">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-serif text-forest text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ghana Rice Matters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>The Opportunity</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Why Ghana Rice Matters</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl border border-mist hover:border-gold/40 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-pale flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-forest transition-colors">
                    <Icon size={18} className="text-gold group-hover:text-forest" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-forest mb-1.5 text-base">{title}</h3>
                    <p className="text-slate text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Band */}
      <section className="py-16 px-6 bg-gradient-to-r from-forest to-forest-mid">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel light>Our Reach</SectionLabel>
            <h2 className="font-serif text-white text-3xl md:text-4xl font-semibold">Industry at a Glance</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              ['500K+', 'Farmers Represented'],
              ['$1B+', 'Annual Import Bill (Target)'],
              ['16', 'Regions Active'],
              ['4', 'Flagship Programmes'],
            ].map(([val, lbl]) => (
              <div key={lbl}>
                <div className="font-serif text-gold-light text-4xl md:text-5xl font-semibold mb-2">{val}</div>
                <div className="text-white/60 text-xs font-mono uppercase tracking-wide">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-14 bg-white border-y border-mist overflow-hidden">
        <p className="font-mono text-xs text-slate uppercase tracking-widest text-center mb-8">
          Our Partners &amp; Collaborators
        </p>
        {/* Overflow mask — fades edges */}
        <div
          className="relative"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}
        >
          {/* Track — duplicated for seamless loop */}
          <div className="flex animate-marquee" style={{ width: 'max-content' }}>
            {[...partners, ...partners].map(({ name, logo }, i) => (
              <PartnerCard key={`${name}-${i}`} name={name} logo={logo} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 px-6 bg-gold-pale">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Join the Movement</SectionLabel>
          <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold mb-4">
            Be Part of Ghana's Rice Revolution
          </h2>
          <p className="text-slate text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you're a farmer, miller, trader, investor, or advocate — the Ghana Rice Federation is your platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-forest to-forest-mid text-white font-semibold rounded hover:brightness-110 transition-all">
              Become a Member <ArrowRight size={17} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-forest text-forest font-semibold rounded hover:bg-forest hover:text-white transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
