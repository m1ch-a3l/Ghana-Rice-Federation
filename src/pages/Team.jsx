import { Mail } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'

const board = [
  {
    name: 'Name Placeholder',
    role: 'Board President',
    bio: 'Provides strategic direction and chairs the governing board of the Rice Federation Ghana. Brings over two decades of experience in agricultural policy and rural development.',
    initials: 'BP',
  },
  {
    name: 'Name Placeholder',
    role: 'Vice President',
    bio: 'Oversees industry engagement and supports the President in executing the Federation\'s strategic priorities across the rice value chain.',
    initials: 'VP',
  },
  {
    name: 'Name Placeholder',
    role: 'Secretary General',
    bio: 'Leads day-to-day operations of the Secretariat, manages stakeholder relationships, and coordinates the Federation\'s programmes and advocacy activities.',
    initials: 'SG',
  },
  {
    name: 'Name Placeholder',
    role: 'Treasurer',
    bio: 'Oversees financial management, reporting, and accountability for the Federation, ensuring sound stewardship of member resources.',
    initials: 'TR',
  },
]

const secretariat = [
  {
    name: 'Name Placeholder',
    role: 'Head of Programmes',
    bio: 'Designs and coordinates GRF training, capacity-building, and industry development programmes across Ghana\'s regions.',
    initials: 'HP',
  },
  {
    name: 'Name Placeholder',
    role: 'Policy & Advocacy Officer',
    bio: 'Leads the Federation\'s engagement with government, development partners, and regulatory bodies on rice sector policy.',
    initials: 'PA',
  },
  {
    name: 'Name Placeholder',
    role: 'Communications Officer',
    bio: 'Manages the GRF\'s public communications, media relations, and digital presence to amplify the industry\'s voice.',
    initials: 'CO',
  },
  {
    name: 'Name Placeholder',
    role: 'Membership & Partnerships Officer',
    bio: 'Drives member recruitment, engagement, and manages strategic partnerships with development organisations and private sector actors.',
    initials: 'MP',
  },
]

function MemberCard({ name, role, bio, initials, photo }) {
  return (
    <div className="bg-white rounded-xl border border-mist overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Avatar */}
      <div className="bg-gradient-to-br from-forest to-forest-light h-48 flex items-center justify-center relative">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover object-top" />
        ) : (
          <span className="font-mono text-gold font-bold text-3xl">{initials}</span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
      </div>
      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <p className="font-mono text-gold text-[10px] uppercase tracking-widest mb-1">{role}</p>
        <h3 className="font-serif text-forest text-lg font-semibold mb-3">{name}</h3>
        <p className="text-slate text-xs leading-relaxed flex-1">{bio}</p>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <>
      <PageHeader
        label="Our Team"
        title="The People Behind GRF"
        subtitle="Meet the board and secretariat driving Ghana's rice industry forward."
        img="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&auto=format&fit=crop&q=80"
      />

      {/* Board */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Governance</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Board of Directors</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <p className="text-slate text-sm max-w-xl mx-auto">
              The GRF is governed by an elected Board drawn from member organisations, ensuring representation across the full rice value chain.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {board.map(member => (
              <MemberCard key={member.role} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Secretariat */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Secretariat</SectionLabel>
            <h2 className="font-serif text-forest text-3xl md:text-4xl font-semibold">Management Team</h2>
            <div className="w-14 h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <p className="text-slate text-sm max-w-xl mx-auto">
              Our professional secretariat delivers the programmes, partnerships, and advocacy that advance Ghana's rice sector every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secretariat.map(member => (
              <MemberCard key={member.role} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 px-6 bg-forest">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-gold text-xs uppercase tracking-widest mb-3">Get Involved</p>
          <h2 className="font-serif text-white text-3xl font-semibold mb-4">Work With Us</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            The Rice Federation Ghana is always looking for passionate professionals and volunteers to advance the mission of Ghana's rice industry.
          </p>
          <a
            href="mailto:info@ghanarice.org"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold to-gold-light text-forest font-semibold rounded hover:brightness-110 transition-all"
          >
            <Mail size={16} /> Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}
