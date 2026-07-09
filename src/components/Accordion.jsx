import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="divide-y divide-mist border border-mist rounded-lg overflow-hidden">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-cream transition-colors"
          >
            <span className="font-sans font-medium text-body text-sm">{item.question}</span>
            {open === i ? <Minus size={16} className="text-gold flex-shrink-0" /> : <Plus size={16} className="text-slate flex-shrink-0" />}
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-sm text-slate leading-relaxed bg-cream">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
