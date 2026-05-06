export default function SectionLabel({ children, light = false }) {
  return (
    <p className={`font-mono text-xs uppercase tracking-widest mb-3 ${light ? 'text-gold-light' : 'text-gold'}`}>
      {children}
    </p>
  )
}
