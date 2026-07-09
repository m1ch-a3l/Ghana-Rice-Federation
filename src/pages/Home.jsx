import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Users, TrendingUp, Wheat, Globe, Factory, Heart, Sprout, Package } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import slide1Img from '../assets/images/rice-fair/_MG_6541.jpg'
import slide2Img from '../assets/images/rice-fair/_MG_6447.jpg'
import slide3Img from '../assets/images/rice-fair/_MG_6469.jpg'

const bgSlides = [slide1Img, slide2Img, slide3Img]

const stats = [
  { value: '5',    label: 'Regions Represented' },
  { value: '3K+',  label: 'Smallholder Farmers' },
  { value: '—',    label: 'Annual Production' },
  { value: '—',    label: 'Sector Value' },
]

const values = [
  { icon: Shield, title: 'National Advocacy', desc: 'Creating awareness and representing the rice industry at the highest levels of government and policy.' },
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

function AccordionItem({ icon: Icon, title, desc, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left group"
      >
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${open ? 'bg-gold' : 'bg-gold-pale'}`}>
            <Icon size={16} className={`transition-colors duration-300 ${open ? 'text-forest' : 'text-gold'}`} />
          </div>
          <span className={`font-sans font-semibold text-sm md:text-base transition-colors duration-200 ${open ? 'text-forest' : 'text-forest/80'}`}>
            {title}
          </span>
        </div>
        <span className={`text-gold font-bold text-lg flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate text-sm leading-relaxed pt-3 pl-12">{desc}</p>
      </div>
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

  const next = useCallback(() => goTo((current + 1) % bgSlides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-cream">
        {/* Full-bleed top, large rounded curves only at the bottom */}
        <div className="relative overflow-hidden flex items-center justify-center" style={{ minHeight: '92vh' }}>

          {/* Rotating background images */}
          {bgSlides.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-forest/75" />
              <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-transparent to-forest/60" />
            </div>
          ))}

          {/* Hero text — centered */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-14 py-32 max-w-4xl mx-auto">
            <p className="font-serif italic text-white/75 text-xl md:text-2xl leading-snug mb-4">
              The National Voice of
            </p>
            <h1
              className="font-sans font-black text-gold uppercase leading-none tracking-tight mb-2"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
            >
              Ghana's Rice
            </h1>
            <h1
              className="font-sans font-black text-white uppercase leading-none tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
            >
              Industry
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
              Advocating, connecting, and developing Ghana's rice sector — from farm to table.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-forest font-semibold rounded-full hover:brightness-110 transition-all text-sm">
                Contact Us <ArrowRight size={15} />
              </Link>
              <Link to="/gallery"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all text-sm backdrop-blur-sm">
                Discover Our Work
              </Link>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {bgSlides.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 z-10 h-0.5 bg-white/10">
            <div key={current} className="h-full bg-gold" style={{ animation: 'progressBar 5s linear forwards' }} />
          </div>
        </div>

        {/* ── Three feature cards below hero ─────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 mt-8 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card 1 */}
            <div className="group bg-white rounded-2xl p-6 shadow-sm border border-mist flex flex-col justify-between hover:bg-gold hover:border-gold hover:shadow-lg transition-all duration-300">
              <div>
                <h3 className="font-sans font-semibold text-forest group-hover:text-forest text-base leading-snug mb-2 transition-colors duration-300">
                  Amplifying the Voice of<br/>Ghana's Rice Farmers
                </h3>
                <p className="text-slate group-hover:text-forest/70 text-xs leading-relaxed transition-colors duration-300">
                  Representing 3K+ smallholder farmers at the national policy level to secure fair prices, inputs, and support.
                </p>
              </div>
              <Link to="/advocacy" className="inline-flex items-center gap-1 mt-4 text-forest font-mono font-semibold text-xs uppercase tracking-widest group-hover:text-forest hover:gap-2 transition-all">
                Learn More <ArrowRight size={13} />
              </Link>
            </div>

            {/* Card 2 — center, dark */}
            <div className="group bg-forest rounded-2xl p-8 shadow-sm flex items-center justify-center text-center hover:bg-gold hover:shadow-lg transition-all duration-300">
              <div>
                <h3 className="font-serif text-white group-hover:text-forest text-xl md:text-2xl font-semibold leading-snug transition-colors duration-300">
                  Transforming <span className="italic text-gold group-hover:text-forest/80">Ghana's Rice</span> Sector with Strategic Advocacy &amp; Market Solutions
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl p-6 shadow-sm border border-mist flex flex-col justify-between hover:bg-gold hover:border-gold hover:shadow-lg transition-all duration-300">
              <div>
                <h3 className="font-sans font-semibold text-forest group-hover:text-forest text-base leading-snug mb-2 transition-colors duration-300">
                  Connecting the Full<br/>Rice Value Chain
                </h3>
                <p className="text-slate group-hover:text-forest/70 text-xs leading-relaxed transition-colors duration-300">
                  Linking farmers, millers, aggregators, distributors, and institutions for a stronger domestic rice sector.
                </p>
              </div>
              <Link to="/value-chain" className="inline-flex items-center gap-1 mt-4 text-forest font-mono font-semibold text-xs uppercase tracking-widest hover:gap-2 transition-all">
                Learn More <ArrowRight size={13} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-20 px-8 md:px-16 bg-cream">
        <div className="max-w-7xl mx-auto text-center">
          <SectionLabel>Our Mission</SectionLabel>
          <div className="w-14 h-0.5 bg-gold mx-auto mt-3 mb-10" />
          <p className="font-sans" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', lineHeight: '1.35' }}>
            <em className="text-gold not-italic">To advocate for policies that build the </em>
            <strong className="text-forest font-bold not-italic">domestic rice sector</strong>
            <em className="text-gold not-italic">, to coordinate interventions of stakeholders across the </em>
            <strong className="text-forest font-bold not-italic">value chain</strong>
            <em className="text-gold not-italic">, and develop the industry's </em>
            <strong className="text-forest font-bold not-italic">human, environmental, technical, and institutional capacity </strong>
            <em className="text-gold not-italic">for long-term growth.</em>
          </p>
        </div>
      </section>

      {/* The Opportunity — image + accordion */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">

            {/* Left — image */}
            <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: '560px' }}>
              <img
                src={slide1Img}
                alt="Ghana rice farmers"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <SectionLabel>The Opportunity</SectionLabel>
                <h2 className="font-sans font-bold text-white text-3xl md:text-4xl mt-2 leading-tight">
                  Why Ghana<br/>Rice Matters
                </h2>
                <p className="text-white/70 text-sm mt-3 leading-relaxed">
                  Ghana's rice sector represents one of the most significant economic and food security opportunities on the continent.
                </p>
              </div>
            </div>

            {/* Right — accordion */}
            <div className="flex flex-col justify-center py-4">
              <div className="divide-y divide-mist">
                {whyCards.map(({ icon: Icon, title, desc }, i) => (
                  <AccordionItem key={title} icon={Icon} title={title} desc={desc} defaultOpen={i === 0} />
                ))}
              </div>
            </div>

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
              ['3K+',  'Farmers Represented'],
              ['$1B+', 'Annual Import Bill'],
              ['5',    'Regions Covered'],
              ['4',      'Flagship Programmes'],
            ].map(([val, lbl]) => (
              <div key={lbl}>
                <div className="font-serif text-gold-light text-4xl md:text-5xl font-semibold mb-2">{val}</div>
                <div className="text-white/60 text-xs font-mono uppercase tracking-wide">{lbl}</div>
              </div>
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
            Whether you're a farmer, miller, trader, investor, or advocate — the Rice Federation Ghana is your platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-forest to-forest-mid text-white font-semibold rounded hover:brightness-110 transition-all">
              Contact Us <ArrowRight size={17} />
            </Link>
            <Link to="/membership" className="inline-flex items-center gap-2 px-7 py-3.5 border border-forest text-forest font-semibold rounded hover:bg-forest hover:text-white transition-all">
              Join Us
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
