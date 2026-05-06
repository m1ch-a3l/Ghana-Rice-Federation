import { Shield, Lightbulb, Star, Users } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'

const timeline = [
  { year: '2018', event: 'Nationwide industry consultations begin' },
  { year: '2020', event: 'Federation constituted by founding members' },
  { year: '2021', event: 'First national rice industry forum convened' },
  { year: '2023', event: 'Permanent secretariat opened in Accra' },
  { year: '2025+', event: 'Strategic partnerships launched with MOFA, FAO, AfDB' },
]

const coreValues = [
  { icon: Users, title: 'Unity', desc: 'Bringing together diverse stakeholders under one national voice for collective advancement.' },
  { icon: Shield, title: 'Advocacy', desc: 'Speaking truth to power on behalf of every actor in Ghana\'s rice value chain.' },
  { icon: Star, title: 'Integrity', desc: 'Operating with transparency, accountability, and the highest ethical standards.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Embracing technology, research, and modern practices to transform the industry.' },
]

const leadership = [
  { role: 'Board President', initials: 'BP', desc: 'Provides strategic direction and chairs the governing board of the Federation.' },
  { role: 'Secretary General', initials: 'SG', desc: 'Leads day-to-day operations and manages stakeholder relationships.' },
  { role: 'Treasurer', initials: 'TR', desc: 'Oversees financial management and reporting for the Federation.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="About Ghana Rice Federation"
        subtitle="The national body representing Ghana's rice industry — from field to table."
        img="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&auto=format&fit=crop&q=80"
      />

      {/* Our Story */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold mb-5">
              Born from the Fields, Built for the Nation
            </h2>
            <div className="w-14 h-0.5 bg-gold mb-6" />
            <div className="space-y-4 text-slate text-sm leading-relaxed">
              <p>
                The Ghana Rice Federation emerged from years of dialogue between farmers, millers, traders, and policymakers who recognised that Ghana's rice sector needed a unified, credible voice at the national level.
              </p>
              <p>
                What began as informal consultations in 2018 grew into a formal federation — bringing together diverse actors under a shared mission: to develop Ghana's domestic rice industry into a self-sufficient, competitive, and modern sector.
              </p>
              <p>
                Today, the GRF represents over 500,000 smallholder farmers, hundreds of mills, and thousands of businesses across Ghana's 16 regions, advocating for policies that protect the industry and investing in the capacity of every actor within it.
              </p>
            </div>
          </div>
          {/* Timeline */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-6">Milestones</h3>
            {timeline.map(({ year, event }, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-16 flex-shrink-0 text-right">
                  <span className="font-mono text-gold font-medium text-sm">{year}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold mt-1 flex-shrink-0" />
                  {i < timeline.length - 1 && <div className="w-0.5 h-10 bg-mist mt-1" />}
                </div>
                <p className="text-slate text-sm leading-relaxed flex-1">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-forest rounded-xl p-8 text-white">
            <p className="font-mono text-gold text-xs uppercase tracking-widest mb-3">Our Vision</p>
            <h3 className="font-serif text-2xl font-semibold mb-4">A Self-Sufficient Ghana</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              A Ghana where domestically produced rice meets national demand, reduces import dependence, and positions the country as a competitive rice producer within West Africa and beyond.
            </p>
          </div>
          <div className="bg-gold-pale border border-gold/30 rounded-xl p-8">
            <p className="font-mono text-gold text-xs uppercase tracking-widest mb-3">Our Mission</p>
            <h3 className="font-serif text-forest text-2xl font-semibold mb-4">Advocate, Connect, Develop</h3>
            <p className="text-slate text-sm leading-relaxed">
              To advocate for policies that advance the rice sector, connect stakeholders across the value chain, and develop the industry's human, technical, and institutional capacity for long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Core Values</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-7 text-center border border-mist hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gold-pale flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-serif text-forest text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Governance</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Federation Leadership</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4 mb-6" />
            <p className="text-slate text-sm max-w-2xl mx-auto">
              The GRF is governed by an elected Board drawn from member organisations, ensuring representation across the full value chain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map(({ role, initials, desc }) => (
              <div key={role} className="text-center bg-cream rounded-xl p-8 border border-mist">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-forest to-forest-light flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono text-gold font-semibold text-sm">{initials}</span>
                </div>
                <h3 className="font-sans font-semibold text-forest mb-2">{role}</h3>
                <p className="text-slate text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
