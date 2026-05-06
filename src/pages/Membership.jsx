import { Link } from 'react-router-dom'
import { Megaphone, Network, BookOpen, BarChart2, FileText, Star, Check, ArrowRight, Download } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'

const benefits = [
  { icon: Megaphone, title: 'Amplified Voice', desc: 'Your concerns, priorities, and interests represented at the national level — in Parliament, MOFA, and beyond.' },
  { icon: Network, title: 'Business Connections', desc: 'Access to an expanding network of verified buyers, millers, traders, investors, and service providers.' },
  { icon: BookOpen, title: 'Capacity & Training', desc: 'Priority access to GRF training programmes, workshops, and technical assistance at member rates.' },
  { icon: BarChart2, title: 'Market Intelligence', desc: 'Regular industry reports, price trends, import/export data, and seasonal outlooks.' },
  { icon: FileText, title: 'Policy Access', desc: 'Early access to policy consultations, regulatory updates, and government programme announcements.' },
  { icon: Star, title: 'Brand & Credibility', desc: 'GRF membership certification that signals quality, legitimacy, and commitment to the industry.' },
]

const tiers = [
  {
    name: 'Farmer Member',
    tag: 'Entry',
    tagStyle: 'bg-mist text-slate',
    features: ['Access to GRF network', 'Training & workshops', 'Industry newsletters', 'Policy updates', 'Member directory listing'],
    cta: 'Apply as Farmer',
    featured: false,
  },
  {
    name: 'Industry Member',
    tag: 'Most Popular',
    tagStyle: 'bg-gold text-forest',
    features: ['All Farmer benefits', 'Full voting rights', 'Board eligibility', 'Market intelligence reports', 'Trade facilitation support', 'Priority event access'],
    cta: 'Apply as Industry Member',
    featured: true,
  },
  {
    name: 'Corporate & Institutional',
    tag: 'Premium',
    tagStyle: 'bg-forest text-gold',
    features: ['All Industry benefits', 'Sponsorship opportunities', 'Speaking slots at GRF events', 'Co-branded publications', 'Custom research access', 'Executive roundtable access'],
    cta: 'Apply as Corporate Member',
    featured: false,
  },
]

const steps = [
  { num: '01', title: 'Download Application Form', desc: 'Get the appropriate membership application form for your category.' },
  { num: '02', title: 'Complete & Submit', desc: 'Fill in your details and submit via email or in person at our Accra secretariat.' },
  { num: '03', title: 'Review & Verification', desc: 'Our team reviews your application and may request supporting documents.' },
  { num: '04', title: 'Confirmation & Welcome', desc: 'Receive your membership certificate and access to member resources.' },
]

export default function Membership() {
  return (
    <>
      <PageHeader
        label="Membership"
        title="Join the Ghana Rice Federation"
        subtitle="Be part of the national body that represents, connects, and develops Ghana's rice industry."
        img="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&auto=format&fit=crop&q=80"
      />

      {/* Benefits */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Why Join</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Membership Benefits</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-7 border border-mist hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gold-pale flex items-center justify-center mb-4">
                  <Icon size={18} className="text-gold" />
                </div>
                <h3 className="font-sans font-semibold text-forest mb-2 text-sm">{title}</h3>
                <p className="text-slate text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Membership Categories</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Choose Your Tier</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {tiers.map(({ name, tag, tagStyle, features, cta, featured }) => (
              <div
                key={name}
                className={`rounded-xl p-8 border-2 transition-all duration-300 flex flex-col ${
                  featured
                    ? 'border-gold shadow-2xl bg-white ring-1 ring-gold/30'
                    : 'border-mist bg-cream hover:border-gold/40 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <h3 className="font-serif text-forest text-xl font-semibold">{name}</h3>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${tagStyle}`}>{tag}</span>
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate">
                      <Check size={14} className="text-gold flex-shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded text-sm font-semibold transition-all ${
                    featured
                      ? 'bg-gradient-to-r from-gold to-gold-light text-forest hover:brightness-110'
                      : 'border border-forest text-forest hover:bg-forest hover:text-white'
                  }`}
                >
                  {cta} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>How to Join</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Application Process</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="bg-white rounded-xl p-6 border border-mist text-center">
                <div className="font-mono text-gold text-2xl font-semibold mb-3">{num}</div>
                <h4 className="font-sans font-semibold text-forest text-sm mb-2">{title}</h4>
                <p className="text-slate text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          {/* Download Forms */}
          <div className="bg-white rounded-xl p-8 border border-mist text-center">
            <h3 className="font-serif text-forest text-xl font-semibold mb-2">Download Application Forms</h3>
            <p className="text-slate text-sm mb-6">Select the form that matches your membership category.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {['Farmer Member Form', 'Industry Member Form', 'Corporate Member Form'].map(label => (
                <button
                  key={label}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-forest text-forest text-sm font-semibold rounded hover:bg-forest hover:text-white transition-all"
                >
                  <Download size={15} /> {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
