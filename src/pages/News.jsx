import { Calendar, Tag } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'

const featured = [
  {
    emoji: '🌾',
    tag: 'Policy',
    title: 'GRF Presents Import Tariff Proposal to Parliament',
    desc: 'The Ghana Rice Federation formally submitted its comprehensive import tariff reform proposal to the Parliamentary Select Committee on Food and Agriculture, calling for a phased approach to protecting domestic producers.',
    date: 'February 2026',
    author: 'GRF Secretariat',
  },
  {
    emoji: '🏭',
    tag: 'Industry',
    title: 'Ghana\'s Milling Capacity Grows by 18% — GRF Report',
    desc: 'New data from the Federation\'s annual sector survey reveals a significant expansion in milling infrastructure, driven by private investment and government incentives introduced in 2024.',
    date: 'January 2026',
    author: 'GRF Research',
  },
]

const articles = [
  { emoji: '👩‍🌾', tag: 'Agribusiness', title: 'Youth Agripreneurs Transform Northern Rice Belt', desc: 'A new cohort of young entrepreneurs is reshaping rice farming in the Northern Region through mechanisation, digital tools, and cooperative farming models.', date: 'Dec 2025', author: 'GRF Programs' },
  { emoji: '💰', tag: 'Finance', title: 'AfDB Commits $50M to Ghana Rice Infrastructure', desc: 'The African Development Bank announces a landmark $50 million financing package targeting irrigation rehabilitation and post-harvest infrastructure in the Volta and Northern regions.', date: 'Nov 2025', author: 'GRF News' },
  { emoji: '🌍', tag: 'Trade', title: 'ECOWAS Opens Regional Rice Trade Window', desc: 'New trade facilitation protocols under the ECOWAS Common External Tariff create opportunities for Ghanaian rice exporters to access regional markets with reduced barriers.', date: 'Oct 2025', author: 'GRF Trade Desk' },
  { emoji: '🌱', tag: 'Sustainability', title: 'Climate-Resilient Rice Varieties Show Promise', desc: 'Trials conducted across five regions demonstrate that newly developed drought-tolerant rice varieties can maintain yields even in reduced-rainfall years, offering hope for climate adaptation.', date: 'Sep 2025', author: 'GRF Research' },
  { emoji: '🌾', tag: 'Policy', title: 'National Rice Development Strategy Launched', desc: 'The Ministry of Food and Agriculture, in collaboration with the GRF, officially launches the National Rice Development Strategy 2025-2030 — a comprehensive roadmap for sector transformation.', date: 'Aug 2025', author: 'GRF Policy' },
  { emoji: '🏭', tag: 'Industry', title: 'GRF Quality Standards Framework Endorsed', desc: 'A new industry-wide quality standards framework, developed by the GRF in partnership with Ghana Standards Authority, receives formal endorsement and begins phased implementation.', date: 'Aug 2025', author: 'GRF Secretariat' },
]

const tagColors = {
  Policy: 'bg-forest/10 text-forest',
  Industry: 'bg-gold/10 text-gold',
  Agribusiness: 'bg-forest-light/10 text-forest-light',
  Finance: 'bg-blue-50 text-blue-700',
  Trade: 'bg-purple-50 text-purple-700',
  Sustainability: 'bg-green-50 text-green-700',
}

export default function News() {
  return (
    <>
      <PageHeader
        label="News & Updates"
        title="From the Federation"
        subtitle="The latest from Ghana's rice industry — policy updates, market intelligence, and sector news."
        img="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&auto=format&fit=crop&q=80"
      />

      {/* Featured Articles */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <SectionLabel>Featured Stories</SectionLabel>
            <h2 className="font-serif text-forest text-3xl font-semibold">Top Stories</h2>
            <div className="w-14 h-0.5 bg-gold mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featured.map(({ emoji, tag, title, desc, date, author }) => (
              <div key={title} className="bg-white rounded-xl overflow-hidden border border-mist hover:shadow-lg transition-shadow duration-300 group">
                <div className="bg-gradient-to-br from-forest to-forest-mid h-36 flex items-center justify-center text-6xl">
                  {emoji}
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${tagColors[tag] || 'bg-mist text-slate'}`}>
                      {tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-forest text-xl font-semibold mb-3 group-hover:text-gold transition-colors">
                    {title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="flex items-center gap-4 text-xs text-slate/70 font-mono">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
                    <span>{author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <SectionLabel>More Stories</SectionLabel>
            <h2 className="font-serif text-forest text-3xl font-semibold">Industry News</h2>
            <div className="w-14 h-0.5 bg-gold mt-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(({ emoji, tag, title, desc, date, author }) => (
              <div key={title} className="rounded-xl border border-mist hover:shadow-md hover:border-gold/30 transition-all duration-300 overflow-hidden group cursor-pointer">
                <div className="bg-cream h-20 flex items-center justify-center text-4xl border-b border-mist">
                  {emoji}
                </div>
                <div className="p-5">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded ${tagColors[tag] || 'bg-mist text-slate'}`}>
                    {tag}
                  </span>
                  <h4 className="font-sans font-semibold text-forest mt-2 mb-2 text-sm group-hover:text-gold transition-colors leading-snug">
                    {title}
                  </h4>
                  <p className="text-slate text-xs leading-relaxed mb-3">{desc}</p>
                  <div className="flex items-center gap-3 text-xs text-slate/60 font-mono">
                    <span>{date}</span> · <span>{author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
