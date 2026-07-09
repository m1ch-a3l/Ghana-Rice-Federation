import { Link } from 'react-router-dom'
import { ArrowRight, Building, Globe, Briefcase, FlaskConical } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'

const categories = [
  {
    icon: Building,
    title: 'Government Partners',
    desc: 'Ministries and state agencies that shape the policy and regulatory environment for rice in Ghana.',
    orgs: ['Ministry of Food & Agriculture (MOFA)', 'Ghana Irrigation Development Authority (GIDA)', 'Ghana Cocoa Board (for cross-crop learnings)', 'Environmental Protection Agency (EPA)', 'Ministry of Trade & Industry (MOTI)', 'Ghana Revenue Authority (GRA)', 'Bank of Ghana'],
  },
  {
    icon: Globe,
    title: 'International & Development Partners',
    desc: 'Global organisations and bilateral donors investing in Ghana\'s agricultural transformation.',
    orgs: ['USAID Feed the Future', 'FAO Ghana', 'ECOWAS Agricultural Department', 'African Development Bank (AfDB)', 'GIZ Germany', 'World Bank Agriculture Division', 'IFAD'],
  },
  {
    icon: Briefcase,
    title: 'Private Sector Partners',
    desc: 'Businesses and associations aligned with the GRF\'s mission across the value chain.',
    orgs: ['Ghana National Chamber of Commerce', 'Ghana Grain Council', 'Stanbic Bank Ghana (Agric Finance)', 'Yara Ghana (Inputs)', 'Olam Agri Ghana', 'DHL Supply Chain Ghana'],
  },
  {
    icon: FlaskConical,
    title: 'Research & Academic Partners',
    desc: 'Institutions driving evidence-based research and innovation in rice science and agribusiness.',
    orgs: ['CSIR — Crops Research Institute', 'University of Ghana (UGBS Agriculture)', 'KNUST Faculty of Agriculture', 'SARI — Savanna Agricultural Research Institute', 'Africa Rice Centre (AfricaRice)'],
  },
]

export default function Partners() {
  return (
    <>
      <PageHeader
        label="Partners & Collaborators"
        title="Stronger Together"
        subtitle="Building an ecosystem of partners who share our vision for a thriving domestic rice industry."
        img="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&auto=format&fit=crop&q=80"
      />

      {/* Intro */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>Our Network</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold mb-5">A Coalition for Change</h2>
            <div className="w-14 h-0.5 bg-gold mb-6" />
            <p className="text-slate text-sm leading-relaxed">
              The Ghana Rice Federation operates at the centre of a broad coalition of government bodies, international organisations, private sector actors, and research institutions. Our partnerships give us the reach, resources, and credibility to deliver impact at scale.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['25+', 'Active Partners'], ['4', 'Partner Categories'], ['8', 'Countries Engaged'], ['$50M+', 'Mobilised in Support']].map(([val, lbl]) => (
              <div key={lbl} className="bg-white rounded-xl p-5 text-center border border-mist">
                <div className="font-serif text-forest text-3xl font-semibold">{val}</div>
                <div className="text-slate text-xs mt-1">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Our Partners</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Partner Categories</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(({ icon: Icon, title, desc, orgs }) => (
              <div key={title} className="rounded-xl border border-mist p-8 hover:shadow-md hover:border-gold/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-pale flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-forest text-xl font-semibold">{title}</h3>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {orgs.map(org => (
                    <li key={org} className="flex items-center gap-2 text-sm text-slate">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {org}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 px-6 bg-forest">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel light>Partner With Us</SectionLabel>
          <h2 className="font-serif text-white text-3xl md:text-4xl font-semibold mb-5">
            Become a Strategic Partner
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you're a company, development organisation, research body, or government agency — partnering with the GRF places you at the heart of Ghana's rice sector transformation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold rounded hover:brightness-110 transition-all"
          >
            Discuss a Partnership <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  )
}
