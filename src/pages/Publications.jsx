import { Download, FileText, ChevronRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'
import pdf1 from '../assets/Publications/Publications/Beyond Import Bans -solving Ghanas rice importation crisis.pdf'
import pdf2 from '../assets/Publications/Publications/Ghana rice federation constitution.pdf'
import pdf3 from '../assets/Publications/Publications/Reovery plan for rice farmers affected by Akosombo dam spillage.pdf'

const publications = [
  {
    type: 'Policy Brief',
    title: 'Beyond Import Bans: Solving Ghana\'s Rice Importation Crisis',
    desc: 'An in-depth policy analysis examining why blanket import bans fail and proposing a structured, evidence-based framework for managing rice imports while building domestic production capacity.',
    file: pdf1,
    filename: 'Beyond-Import-Bans-GRF.pdf',
    badge: 'bg-gold-pale text-forest',
  },
  {
    type: 'Governance Document',
    title: 'Rice Federation Ghana — Constitution',
    desc: 'The founding constitutional document of the Rice Federation Ghana, setting out the Federation\'s mandate, membership structure, governance framework, and operational principles.',
    file: pdf2,
    filename: 'GRF-Constitution.pdf',
    badge: 'bg-forest/10 text-forest',
  },
  {
    type: 'Recovery Plan',
    title: 'Recovery Plan for Rice Farmers Affected by the Akosombo Dam Spillage',
    desc: 'A comprehensive recovery and rehabilitation plan developed for the thousands of smallholder rice farmers whose livelihoods were devastated by the Akosombo Dam spillage along the Volta River basin.',
    file: pdf3,
    filename: 'GRF-Akosombo-Recovery-Plan.pdf',
    badge: 'bg-mist text-slate',
  },
]

export default function Publications() {
  return (
    <>
      <PageHeader
        label="Publications"
        title="Knowledge & Research"
        subtitle="Policy briefs, governance documents, and industry reports from the Rice Federation Ghana."
        img="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1920&auto=format&fit=crop&q=80"
      />

      {/* Publications list */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <SectionLabel>Documents</SectionLabel>
            <h2 className="font-sans font-bold text-forest text-2xl md:text-3xl mt-1">GRF Publications</h2>
            <div className="w-14 h-0.5 bg-gold mt-4" />
          </div>
          <div className="space-y-6">
            {publications.map(({ type, title, desc, file, filename, badge }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-mist hover:border-gold/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row md:items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gold-pale flex items-center justify-center">
                    <FileText size={26} className="text-gold" />
                  </div>
                </div>
                <div className="flex-1">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${badge}`}>{type}</span>
                  <h3 className="font-sans font-bold text-forest text-base md:text-lg leading-snug mb-3">{title}</h3>
                  <p className="text-slate text-sm leading-relaxed mb-5">{desc}</p>
                  <a
                    href={file}
                    download={filename}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-forest text-sm font-semibold rounded-full hover:brightness-110 transition-all"
                  >
                    <Download size={14} /> Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit research CTA */}
      <section className="py-16 px-6 bg-forest">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel light>Contribute</SectionLabel>
          <h2 className="font-sans font-bold text-white text-2xl md:text-3xl mt-2 mb-4">Share Your Research</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-7 max-w-xl mx-auto">
            Are you a researcher, academic, or industry professional with findings relevant to Ghana's rice sector? We welcome submissions for our publications library.
          </p>
          <a
            href="mailto:info@ghanarice.org"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-forest font-semibold rounded-full hover:brightness-110 transition-all text-sm"
          >
            Submit a Publication <ChevronRight size={15} />
          </a>
        </div>
      </section>
    </>
  )
}
