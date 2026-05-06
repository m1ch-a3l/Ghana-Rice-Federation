import { BookOpen, FlaskConical, Wrench, Sprout, CalendarDays } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'
import programsHeaderImg from '../assets/images/WhatsApp Image 2026-04-28 at 2.29.27 AM.jpeg'

const flagship = [
  { icon: BookOpen, title: 'Capacity Building', desc: 'Training farmers, millers, and agribusiness actors in modern, evidence-based practices across the value chain.' },
  { icon: FlaskConical, title: 'Research & Innovation Hub', desc: 'Partnering with universities and international bodies to drive applied research in rice varieties, agronomy, and processing.' },
  { icon: Wrench, title: 'Industry Modernisation', desc: 'Supporting the adoption of mechanised farming, modern milling technology, and post-harvest management systems.' },
  { icon: Sprout, title: 'Youth in Rice Agribusiness', desc: 'Structured programmes that equip young entrepreneurs with the skills, networks, and financing to succeed in the rice sector.' },
]

const training = [
  { num: '01', title: 'Good Agricultural Practices (GAP)', desc: 'Soil preparation, seed selection, water management, pest control, and nutrient application for optimal yields.' },
  { num: '02', title: 'Post-Harvest Loss Reduction', desc: 'Drying, storage, and handling protocols that protect quality from field to mill and dramatically reduce losses.' },
  { num: '03', title: 'Milling Operations Management', desc: 'Technical training for mill operators and managers on equipment, quality control, and efficiency improvement.' },
  { num: '04', title: 'Market Linkage & Trade', desc: 'Connecting producers to buyers, training on contracts, pricing, grading, and access to financial services.' },
]

const reach = [
  ['12,000+', 'Farmers Trained'],
  ['340+', 'Millers Engaged'],
  ['450+', 'Youth Agripreneurs'],
  ['16', 'Regions Covered'],
]

const calendar = [
  { month: 'March 2026', title: 'GAP Training — Volta Region', location: 'Ho, Volta Region', slots: 120 },
  { month: 'April 2026', title: 'Milling Operations Workshop', location: 'Kumasi, Ashanti Region', slots: 45 },
  { month: 'June 2026', title: 'Youth Agribusiness Bootcamp', location: 'Accra, Greater Accra', slots: 80 },
]

export default function Programs() {
  return (
    <>
      <PageHeader
        label="Training & Programs"
        title="Building the Industry From Within"
        subtitle="Practical, impactful programmes that strengthen every link in Ghana's rice value chain."
        img={programsHeaderImg}
      />

      {/* Flagship Programmes */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Flagship Programmes</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Our Core Initiatives</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flagship.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-7 border border-mist hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gold-pale flex items-center justify-center mb-5">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-serif text-forest text-lg font-semibold mb-2">{title}</h3>
                <p className="text-slate text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionLabel>Training Portfolio</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold mb-5">Training Programmes</h2>
            <div className="w-14 h-0.5 bg-gold mb-6" />
            <p className="text-slate text-sm leading-relaxed">
              Our training portfolio is designed to be accessible, practical, and directly applicable — delivered in partnership with MOFA extension services, research institutions, and private sector facilitators.
            </p>
          </div>
          <div className="space-y-4">
            {training.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-4 items-start bg-cream rounded-xl p-5 border border-mist">
                <span className="font-mono text-gold font-semibold text-sm w-8 flex-shrink-0">{num}</span>
                <div>
                  <h4 className="font-sans font-semibold text-forest text-sm mb-1">{title}</h4>
                  <p className="text-slate text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Reach */}
      <section className="py-16 px-6 bg-gradient-to-r from-forest to-forest-mid">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel light>Our Impact</SectionLabel>
          <h2 className="font-serif text-white text-3xl font-semibold mb-10">Programme Reach</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {reach.map(([val, lbl]) => (
              <div key={lbl}>
                <div className="font-serif text-gold-light text-4xl font-semibold mb-2">{val}</div>
                <div className="text-white/60 text-xs font-mono uppercase tracking-wide">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Calendar */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel>Upcoming Events</SectionLabel>
            <h2 className="font-serif text-forest text-3xl font-semibold">Training Calendar</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="space-y-4">
            {calendar.map(({ month, title, location, slots }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-mist flex flex-col sm:flex-row sm:items-center gap-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <CalendarDays size={18} className="text-gold" />
                  <span className="font-mono text-gold text-xs font-medium">{month}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-sans font-semibold text-forest text-sm">{title}</h4>
                  <p className="text-slate text-xs mt-0.5">{location}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-mono text-xs text-slate">{slots} slots</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
