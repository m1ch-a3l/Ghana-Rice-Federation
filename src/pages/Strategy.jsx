import { Link } from 'react-router-dom'
import { Search, BookOpen, Mail, Share2, BarChart2, Lock, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'

const pillars = [
  {
    icon: Search,
    title: 'SEO Strategy',
    items: [
      'On-page optimisation for all key rice industry terms',
      'Authority content targeting "Ghana rice" search clusters',
      'Local SEO for Accra secretariat and regional events',
      'Technical SEO: sitemap, schema markup, core web vitals',
      'Competitive analysis against agricultural org benchmarks',
    ],
  },
  {
    icon: BookOpen,
    title: 'Blog Content Roadmap',
    items: [
      'Q1 2026: Policy analysis & budget season coverage',
      'Q2 2026: Planting season — farm profiles & best practices',
      'Q3 2026: Post-harvest season — milling & market insights',
      'Q4 2026: Year-in-review, sector outlook, event coverage',
      '12-month editorial calendar with monthly publication targets',
    ],
  },
  {
    icon: Mail,
    title: 'Newsletter Strategy',
    items: [
      'Ghana Rice Bulletin — weekly industry digest',
      'Monthly deep-dive: one policy, one market insight, one success story',
      'Segmented lists: farmers, millers, investors, policymakers',
      'Automated welcome series for new subscribers',
      'Open rate optimisation and A/B subject line testing',
    ],
  },
  {
    icon: Share2,
    title: 'Social Media Integration',
    items: [
      'LinkedIn: policy thought leadership and industry data',
      'Twitter/X: news commentary and real-time engagement',
      'Facebook: community building and event promotion',
      'WhatsApp Business: farmer community communication',
      'YouTube: training videos and event recordings',
    ],
  },
  {
    icon: BarChart2,
    title: 'Industry Data Dashboard',
    items: [
      'Live rice production, import, and price metrics',
      'Regional yield data and seasonal comparisons',
      'Policy tracker: reform progress and milestones',
      'Sources: MOFA, SRID, GSS, ECOWAS trade data',
      'Quarterly refresh with annual comprehensive report',
    ],
  },
  {
    icon: Lock,
    title: 'Member Portal',
    items: [
      'Secure login for verified GRF members',
      'Document library: forms, reports, policy papers',
      'Member directory and B2B networking tools',
      'Training registration and certification tracking',
      'Mobile-first design with WhatsApp integration',
    ],
  },
]

export default function Strategy() {
  return (
    <>
      <PageHeader
        label="Digital Strategy"
        title="Website Strategy & Digital Growth"
        subtitle="A roadmap for making the GRF's digital presence as powerful as its on-the-ground work."
        img="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&auto=format&fit=crop&q=80"
      />

      {/* Strategy Cards */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Strategic Pillars</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Six Growth Pillars</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map(({ icon: Icon, title, items }, i) => (
              <div key={title} className="bg-white rounded-xl p-8 border-l-4 border-gold shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-gold-pale flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono text-gold text-xs uppercase tracking-widest">Pillar {String(i + 1).padStart(2, '0')}</p>
                    <h3 className="font-serif text-forest text-xl font-semibold">{title}</h3>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate">
                      <span className="text-gold mt-0.5 flex-shrink-0">▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation CTA */}
      <section className="py-20 px-6 bg-forest">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel light>Next Steps</SectionLabel>
          <h2 className="font-serif text-white text-3xl md:text-4xl font-semibold mb-5">
            Ready to Implement?
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-8">
            These strategic recommendations are ready for phased implementation. Contact us to discuss priorities, timelines, and partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold rounded hover:brightness-110 transition-all"
            >
              Discuss Implementation <ArrowRight size={17} />
            </Link>
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded hover:bg-white/10 transition-all"
            >
              Join the Federation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
