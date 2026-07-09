export default function PageHeader({ label, title, subtitle, img }) {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      {/* Background image */}
      {img && (
        <img
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
      )}

      {/* Gradient overlay — forest tint + bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest/85 via-forest-mid/70 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {label && (
          <p className="font-mono text-gold text-xs uppercase tracking-widest mb-3">{label}</p>
        )}
        <h1 className="font-serif text-white text-4xl md:text-5xl font-semibold leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-6 w-14 h-0.5 bg-gold mx-auto" />
      </div>
    </section>
  )
}
