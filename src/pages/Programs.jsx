import { BookOpen, FlaskConical, Wrench, Sprout, CalendarDays } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'
import programsHeaderImg from '../assets/images/rice-fair/_MG_6359.jpg'
import harvesterImg from '../assets/images/combine-harvesters/SAM_1131.JPG'
import farmImg from '../assets/images/ashesi-university/IMG_20230726_143352.jpg'
import millImg from '../assets/images/major-rice-mills/aveyime/IMG_2357.JPG'
import millImg2 from '../assets/images/major-rice-mills/Wienco/IMG_2324.JPG'

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
  ['5', 'Regions Covered'],
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
              <div key={title} className="group bg-white rounded-xl p-7 border border-mist hover:bg-forest hover:border-forest hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gold-pale group-hover:bg-gold flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={22} className="text-gold group-hover:text-forest transition-colors duration-300" />
                </div>
                <h3 className="font-sans text-forest group-hover:text-white text-lg font-semibold mb-2 transition-colors duration-300">{title}</h3>
                <p className="text-slate group-hover:text-white/70 text-xs leading-relaxed transition-colors duration-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width harvester image strip */}
      <div className="relative overflow-hidden" style={{ height: '340px' }}>
        <img src={harvesterImg} alt="Mechanised rice harvesting in Ghana" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-forest/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <SectionLabel light>In the Field</SectionLabel>
          <h2 className="font-sans font-bold text-white text-2xl md:text-3xl mt-2 max-w-2xl">From Classroom to the Farm</h2>
          <p className="text-white/60 text-sm mt-3 max-w-lg leading-relaxed">GRF programmes combine hands-on field training with technical workshops — ensuring knowledge translates directly into practice.</p>
        </div>
      </div>

      {/* Training Modules — image left, modules right */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div>
              <SectionLabel>Training Portfolio</SectionLabel>
              <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold mb-5">Training Programmes</h2>
              <div className="w-14 h-0.5 bg-gold mb-6" />
              <p className="text-slate text-sm leading-relaxed">
                Our training portfolio is designed to be accessible, practical, and directly applicable — delivered in partnership with MOFA extension services, research institutions, and private sector facilitators.
              </p>
            </div>
            {/* Image below text */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '240px' }}>
              <img src={farmImg} alt="GRF field training session" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="font-mono text-gold text-xs uppercase tracking-widest">GRF Programme — Ashesi University</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {training.map(({ num, title, desc }) => (
              <div key={num} className="group flex gap-4 items-start bg-cream rounded-xl p-5 border border-mist hover:bg-gold hover:border-gold hover:shadow-md transition-all duration-300">
                <span className="font-mono text-gold group-hover:text-forest font-semibold text-sm w-8 flex-shrink-0 transition-colors duration-300">{num}</span>
                <div>
                  <h4 className="font-sans font-semibold text-forest text-sm mb-1 transition-colors duration-300">{title}</h4>
                  <p className="text-slate group-hover:text-forest/70 text-xs leading-relaxed transition-colors duration-300">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Reach — real photo background */}
      <section className="relative py-20 px-6 overflow-hidden">
        <img src={millImg} alt="Rice mill operations" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/80" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
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

      {/* Training Calendar — with side image */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-8">
              <SectionLabel>Upcoming Events</SectionLabel>
              <h2 className="font-serif text-forest text-3xl font-semibold">Training Calendar</h2>
              <div className="w-14 h-0.5 bg-gold mt-4" />
            </div>
            <div className="space-y-4">
              {calendar.map(({ month, title, location, slots }) => (
                <div key={title} className="group bg-white rounded-xl p-6 border border-mist flex flex-col sm:flex-row sm:items-center gap-5 hover:bg-forest hover:border-forest hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <CalendarDays size={18} className="text-gold group-hover:text-gold transition-colors duration-300" />
                    <span className="font-mono text-gold text-xs font-medium transition-colors duration-300">{month}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-sans font-semibold text-forest group-hover:text-white text-sm transition-colors duration-300">{title}</h4>
                    <p className="text-slate group-hover:text-white/60 text-xs mt-0.5 transition-colors duration-300">{location}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-mono text-xs text-slate group-hover:text-white/60 transition-colors duration-300">{slots} slots</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Side image */}
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '420px' }}>
            <img src={millImg2} alt="Rice milling training workshop" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="font-mono text-gold text-xs uppercase tracking-widest block mb-2">Wienco Rice Mill</span>
              <p className="text-white/70 text-sm font-semibold leading-snug">Milling Operations Management training is conducted on-site at partner facilities across Ghana.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
