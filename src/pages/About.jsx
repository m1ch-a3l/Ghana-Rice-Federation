import { Shield, Lightbulb, Star, Users } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'
import farmImg from '../assets/images/farm-visit-north/SAM_1048.JPG'
import farmImg2 from '../assets/images/farm-visit-north/SAM_1020.JPG'
import millImg from '../assets/images/major-rice-mills/aveyime/IMG_2355.JPG'

const timeline = [
  { year: '2018', event: 'Nationwide consultations begin among rice farmers in the Asutsuare–Akuse enclave' },
  { year: '2020', event: 'Association expands to include farmers affected by the Akosombo Dam spillage along the Volta River' },
  { year: '2021', event: 'Federation formalised as a unified platform; first national rice industry forum convened' },
  { year: '2023', event: 'Permanent secretariat established; membership grows to over 3K+ smallholder farmers' },
  { year: '2025+', event: 'Strategic partnerships launched with MOFA, FAO, AfDB and development partners' },
]

const coreValues = [
  { icon: Users,     title: 'Unity',      desc: 'Bringing together diverse stakeholders — farmers, millers, traders, processors, and policymakers — under one national voice.' },
  { icon: Shield,    title: 'Advocacy',   desc: 'Speaking truth to power on behalf of every actor in Ghana\'s rice value chain at the highest levels of government and policy.' },
  { icon: Star,      title: 'Integrity',  desc: 'Operating with transparency, accountability, and the highest ethical standards in service of our members and the nation.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Embracing technology, research, and modern practices to transform the domestic rice industry into a competitive and self-sufficient sector.' },
]

const leadership = [
  { role: 'Board President',   initials: 'BP', desc: 'Provides strategic direction and chairs the governing board of the Rice Federation Ghana.' },
  { role: 'Secretary General', initials: 'SG', desc: 'Leads day-to-day operations of the Secretariat and manages stakeholder relationships.' },
  { role: 'Treasurer',         initials: 'TR', desc: 'Oversees financial management, reporting, and accountability for the Federation.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="About Rice Federation Ghana"
        subtitle="The umbrella organisation and leading advocate for the entire rice value chain in Ghana."
        img="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&auto=format&fit=crop&q=80"
      />

      {/* Our Story */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold mb-5">
              Born from the Fields, Built for the Nation
            </h2>
            <div className="w-14 h-0.5 bg-gold mb-6" />
            <div className="space-y-4 text-slate text-sm leading-relaxed">
              <p>
                The Rice Federation Ghana began as a loose association of rice farmers in the Asutsuare–Akuse rice-growing enclave who came together to address a common challenge: mobilising resources to pre-finance the production activities of smallholder farmers and recovering funds.
              </p>
              <p>
                Following the devastating impact of the Akosombo Dam spillage, which caused significant losses to rice farmers along the banks of the Volta River, the association expanded to include farmers from other impacted areas. During this difficult period, the Rice Federation became a unified platform through which affected farmers engaged government and other stakeholders, providing a credible national voice for the industry's recovery efforts.
              </p>
              <p>
                Building on this foundation, what started as an informal network of farmers has steadily evolved into a formal federation that brings together stakeholders from across Ghana's rice value chain. United by a shared vision, the Federation is committed to developing a self-sufficient, competitive, and modern domestic rice industry.
              </p>
              <p>
                Today, the Rice Federation Ghana represents and works with more than 3K+ smallholder rice farmers, alongside millers, aggregators, input suppliers, processors, traders, service providers, and other value chain actors across the country.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '260px' }}>
              <img src={farmImg} alt="Rice farmers in northern Ghana" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="font-mono text-gold text-xs uppercase tracking-widest">Farm Visit — Northern Ghana</span>
              </div>
            </div>
            {/* Timeline */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-2">Milestones</h3>
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
        </div>
      </section>

      {/* Who We Are — image left, text right */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '380px' }}>
            <img src={millImg} alt="Rice milling facility in Ghana" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono text-gold text-xs uppercase tracking-widest block mb-1">Aveyime Rice Mill</span>
              <p className="text-white/80 text-xs leading-snug">One of Ghana's major processing facilities served by GRF members.</p>
            </div>
          </div>
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold mb-4">The Voice of Ghana's Rice Industry</h2>
            <div className="w-14 h-0.5 bg-gold mb-6" />
            <div className="space-y-4 text-slate text-sm leading-relaxed">
              <p>
                The Rice Federation Ghana is the umbrella organisation and leading advocate for the entire rice value chain in Ghana. We are committed to advancing a unified, competitive, and sustainable rice industry by coordinating stakeholder interventions and advocating for the interests of farmers, millers, merchants, processors, input suppliers, service providers, and other value chain actors.
              </p>
              <p>
                As the collective voice of Ghana's rice industry, Ghana Rice provides strong representation to ensure the sector's priorities are heard and considered in policy development, investment decisions, and industry initiatives at both the national and international levels.
              </p>
              <p className="font-medium text-forest">
                You can become part of this growing community and help shape the future of Ghana's rice industry. Contact us today to learn more about membership and partnership opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-forest rounded-xl p-8 text-white">
            <p className="font-mono text-gold text-xs uppercase tracking-widest mb-3">Our Vision</p>
            <h3 className="font-serif text-2xl font-semibold mb-4">A Resilient, Sustainable Rice Industry</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              To build a resilient and sustainable rice industry that has a measurable and positive impact on national development and the lives of stakeholders in the rice industry.
            </p>
          </div>
          <div className="bg-gold-pale border border-gold/30 rounded-xl p-8">
            <p className="font-mono text-gold text-xs uppercase tracking-widest mb-3">Our Mission</p>
            <h3 className="font-serif text-forest text-2xl font-semibold mb-4">Advocate, Coordinate, Develop</h3>
            <p className="text-slate text-sm leading-relaxed">
              To advocate for policies that build the domestic rice sector, to coordinate interventions of stakeholders across the value chain, and to develop the industry's human, environmental, technical, and institutional capacity for long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Core Values</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-cream rounded-xl p-7 text-center border border-mist hover:shadow-md hover:-translate-y-1 transition-all duration-300">
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

      {/* Full-width image strip */}
      <div className="relative overflow-hidden" style={{ height: '320px' }}>
        <img src={farmImg2} alt="Rice fields in Ghana" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-forest/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-mono text-gold text-xs uppercase tracking-widest mb-3">Our Reach</p>
          <h2 className="font-sans font-bold text-white text-2xl md:text-3xl max-w-2xl">3K+ Farmers. 5 Regions. One Federation.</h2>
        </div>
      </div>

      {/* Leadership */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Governance</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Federation Leadership</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4 mb-6" />
            <p className="text-slate text-sm max-w-2xl mx-auto">
              The Rice Federation Ghana is governed by an elected Board drawn from member organisations, ensuring representation across the full rice value chain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map(({ role, initials, desc }) => (
              <div key={role} className="text-center bg-white rounded-xl p-8 border border-mist">
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
