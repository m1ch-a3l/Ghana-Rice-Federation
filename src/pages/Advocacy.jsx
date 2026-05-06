import { Landmark, BarChart2, Handshake, Users, Globe, Megaphone } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'

const howCards = [
  { icon: Landmark, title: 'Government Engagement', desc: 'Direct dialogue with MOFA, Parliament, and the Executive on rice sector policy, budgets, and legislation.' },
  { icon: BarChart2, title: 'Evidence-Based Policy', desc: 'Commissioning research, data collection, and economic analyses to underpin policy recommendations with facts.' },
  { icon: Handshake, title: 'Regulatory Partnerships', desc: 'Working with regulatory bodies including Ghana Standards Authority and FDA to shape workable standards.' },
  { icon: Users, title: 'Industry Coalitions', desc: 'Building broad coalitions of rice sector actors to present unified positions on national priorities.' },
  { icon: Globe, title: 'Regional & International Platforms', desc: 'Engaging ECOWAS, AU, FAO, and development partners on cross-border and multilateral rice policy.' },
  { icon: Megaphone, title: 'Public Advocacy', desc: 'Media campaigns, publications, and public events to build awareness and political will for rice sector reform.' },
]

const reforms = [
  {
    title: 'Import Substitution Framework',
    desc: 'Advocating for a phased tariff and levy structure on imported rice that protects domestic production without causing consumer price shocks.',
    items: ['Import tariff reform for parboiled rice', 'Tariff escalation schedules tied to domestic supply milestones', 'Smuggling prevention mechanisms'],
  },
  {
    title: 'Rice Sector Investment Policy',
    desc: 'Pushing for a dedicated national investment framework that channels both public and private capital into the rice sector.',
    items: ['Investment incentives for milling modernisation', 'Tax holidays for greenfield rice processing facilities', 'Public-private partnerships for irrigation'],
  },
  {
    title: 'Quality & Standards Harmonisation',
    desc: 'Working with GSA and FDA to create clear, enforceable, and farmer-friendly standards that improve quality while growing market access.',
    items: ['ECOWAS regional standards alignment', 'Mandatory quality grading systems', 'Consumer labelling and certification'],
  },
  {
    title: 'Smallholder Finance Reform',
    desc: 'Advocating for improved access to credit, insurance, and input subsidies for smallholder farmers who are the backbone of the sector.',
    items: ['Subsidised inputs programme', 'Agricultural development bank for rice', 'Crop insurance framework'],
  },
]

export default function Advocacy() {
  return (
    <>
      <PageHeader
        label="Advocacy & Policy"
        title="The Voice of the Industry"
        subtitle="Shaping the policies, regulations, and investments that determine the future of rice in Ghana."
        img="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&auto=format&fit=crop&q=80"
      />

      {/* Mandate */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionLabel>Our Mandate</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold mb-5">Advocacy at the Highest Level</h2>
            <div className="w-14 h-0.5 bg-gold mb-6" />
            <div className="space-y-4 text-slate text-sm leading-relaxed">
              <p>
                The Ghana Rice Federation is the principal voice of Ghana's rice industry in engagements with government, development partners, and regional bodies. We translate industry needs into actionable policy recommendations.
              </p>
              <p>
                Our advocacy work spans import policy, agricultural financing, irrigation investment, quality standards, and land tenure — the foundational issues that determine whether Ghana's rice sector can grow and compete.
              </p>
            </div>
          </div>
          {/* Policy Priorities */}
          <div>
            <h3 className="font-mono text-gold text-xs uppercase tracking-widest mb-5">Policy Priorities 2025–2027</h3>
            <ol className="space-y-3">
              {[
                'Import tariff reform for parboiled rice',
                'National Irrigation Fund establishment',
                'Subsidised inputs programme for smallholders',
                'Government institutional procurement localisation',
                'Investment incentives for milling modernisation',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white rounded-lg px-5 py-3.5 border border-mist">
                  <span className="font-mono text-gold font-semibold text-sm w-5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-slate text-sm">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* How We Advocate */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">How We Advocate</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howCards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-7 rounded-xl border border-mist hover:border-gold/40 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gold-pale flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-sans font-semibold text-forest mb-2 text-sm">{title}</h3>
                <p className="text-slate text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Reforms */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Key Reform Areas</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Industry Reform Agenda</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reforms.map(({ title, desc, items }) => (
              <div key={title} className="bg-white rounded-xl p-8 border-l-4 border-gold shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-forest text-xl font-semibold mb-3">{title}</h3>
                <p className="text-slate text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate">
                      <span className="text-gold mt-0.5">▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
