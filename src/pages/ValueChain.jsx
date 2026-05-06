import { ArrowRight, Wheat, Package, Factory, Truck, ShoppingCart, Users } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'

const chainNodes = [
  { icon: Wheat, label: 'Farmers', color: 'bg-forest text-white' },
  { icon: Package, label: 'Aggregators', color: 'bg-forest-mid text-white' },
  { icon: Factory, label: 'Millers', color: 'bg-forest-light text-white' },
  { icon: Truck, label: 'Distributors', color: 'bg-gold text-forest' },
  { icon: ShoppingCart, label: 'Retailers', color: 'bg-gold-light text-forest' },
  { icon: Users, label: 'Consumers', color: 'bg-gold-pale text-forest border border-gold/40' },
]

const downstreamCards = [
  {
    title: 'Aggregators & Traders',
    desc: 'Aggregators play a critical role in consolidating paddy rice from smallholder farmers and ensuring a reliable supply to processing mills. They bridge the gap between scattered production and industrial demand.',
    points: ['Paddy consolidation from 100s of small farms', 'Quality grading and sorting', 'Logistics and cold-chain management', 'Price discovery and market signalling'],
  },
  {
    title: 'Millers & Processors',
    desc: 'Rice mills transform paddy into the table-ready product. Ghana has a growing network of modern milling facilities ranging from small community mills to large commercial processors.',
    points: ['Parboiling and milling operations', 'Bran and husk by-product utilisation', 'Packaging and branding for retail', 'Quality certification and standards'],
  },
  {
    title: 'Distributors & Logistics',
    desc: 'An efficient distribution network ensures milled rice reaches markets across Ghana\'s 16 regions. Road, rail, and port logistics are critical enablers.',
    points: ['National distribution networks', 'Cold storage and warehousing', 'Port handling for exports', 'Last-mile delivery solutions'],
  },
  {
    title: 'Retailers & Merchants',
    desc: 'From open-air markets to supermarkets, retailers are the final link connecting Ghanaian rice to consumers. Brand loyalty and consumer education are key at this stage.',
    points: ['Traditional market traders', 'Supermarkets and retail chains', 'Institutional catering procurement', 'Online and e-commerce channels'],
  },
]

export default function ValueChain() {
  return (
    <>
      <PageHeader
        label="The Rice Value Chain"
        title="From Field to Table"
        subtitle="Understanding how rice moves from Ghana's farms to the consumer's plate — and the GRF's role at every stage."
        img="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&auto=format&fit=crop&q=80"
      />

      {/* Chain Visualisation */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel>The Value Chain</SectionLabel>
            <h2 className="font-serif text-forest text-3xl font-semibold">Six Interconnected Stages</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 flex-wrap">
            {chainNodes.map(({ icon: Icon, label, color }, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`flex flex-col items-center justify-center w-24 h-24 rounded-xl ${color} shadow-md hover:-translate-y-1 transition-transform duration-300`}>
                  <Icon size={24} className="mb-1" />
                  <span className="font-mono text-xs font-medium text-center leading-tight">{label}</span>
                </div>
                {i < chainNodes.length - 1 && (
                  <ArrowRight size={18} className="text-gold flex-shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmers Section */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>Stage 01</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold mb-5">Farmers — The Foundation</h2>
            <div className="w-14 h-0.5 bg-gold mb-6" />
            <div className="space-y-4 text-slate text-sm leading-relaxed">
              <p>
                Smallholder farmers are the backbone of Ghana's rice industry, cultivating paddy rice across the country's major river basins and inland valleys. They represent the largest segment of the value chain by number and social impact.
              </p>
              <p>
                The GRF advocates for policies, inputs, financing, and training that empower farmers to increase yields, reduce post-harvest losses, and earn fair prices for their produce.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              ['500K+', 'Smallholder farming households'],
              ['75%', 'Of production from smallholders'],
              ['1.2M MT', 'Annual paddy production'],
              ['16', 'Regions with active rice farming'],
            ].map(([val, lbl]) => (
              <div key={lbl} className="bg-white rounded-xl p-6 border border-mist text-center hover:shadow-md transition-shadow">
                <div className="font-serif text-forest text-3xl font-semibold mb-1">{val}</div>
                <div className="text-slate text-xs leading-snug">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downstream Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Downstream Actors</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">From Mill to Market</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downstreamCards.map(({ title, desc, points }) => (
              <div key={title} className="rounded-xl border border-mist p-8 hover:shadow-md hover:border-gold/30 transition-all duration-300">
                <h3 className="font-serif text-forest text-xl font-semibold mb-3">{title}</h3>
                <p className="text-slate text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate">
                      <span className="text-gold mt-0.5">▸</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Businesses */}
      <section className="py-16 px-6 bg-gold-pale">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Allied Sectors</SectionLabel>
          <h2 className="font-serif text-forest text-3xl font-semibold mb-5">Supporting Businesses & Allied Sectors</h2>
          <p className="text-slate text-sm leading-relaxed max-w-2xl mx-auto">
            A thriving rice value chain creates ripple effects across the economy — from agro-input dealers and equipment suppliers to financial institutions, insurers, packaging manufacturers, and ICT service providers.
            The GRF works to strengthen these supporting sectors alongside the core rice chain.
          </p>
        </div>
      </section>
    </>
  )
}
