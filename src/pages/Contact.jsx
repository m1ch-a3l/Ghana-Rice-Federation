import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionLabel from '../components/SectionLabel'
import { EMAILJS_CONFIG } from '../emailConfig'

const subjects = [
  'Membership Application',
  'Partnership & Collaboration',
  'Investment Enquiry',
  'Media & Press',
  'Policy & Advocacy',
  'Training & Programmes',
  'General Enquiry',
]

const contactInfo = [
  { icon: MapPin, title: 'Address',      lines: ['Ghana Rice Federation Secretariat', 'Accra, Ghana'] },
  { icon: Phone,  title: 'Phone',        lines: ['+233 30 000 0000'] },
  { icon: Mail,   title: 'Email',        lines: ['mickeyeinstein2@gmail.com'] },
  { icon: Clock,  title: 'Office Hours', lines: ['Mon–Fri: 8:00am – 5:00pm', 'Saturday: 9:00am – 1:00pm'] },
]

const empty = { first_name: '', last_name: '', email: '', phone: '', organisation: '', subject: '', message: '' }

export default function Contact() {
  const formRef  = useRef(null)
  const [form,   setForm]   = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  /* ── Validation ── */
  const validate = () => {
    const e = {}
    if (!form.first_name.trim())   e.first_name   = 'Required'
    if (!form.last_name.trim())    e.last_name    = 'Required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                   e.email        = 'Valid email required'
    if (!form.organisation.trim()) e.organisation = 'Required'
    if (!form.subject)             e.subject      = 'Please select a subject'
    if (form.message.trim().length < 10)
                                   e.message      = 'Please enter a message (min 10 characters)'
    return e
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: undefined }))
  }

  /* ── Submit → EmailJS ── */
  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')

    const templateParams = {
      first_name:       form.first_name,
      last_name:        form.last_name,
      email:            form.email,
      phone:            form.phone || 'Not provided',
      organisation:     form.organisation,
      subject:          form.subject,
      message:          form.message,
      time:             new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' }),
      recipient_email:  EMAILJS_CONFIG.RECIPIENT_EMAIL,
    }

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      setStatus('success')
      setForm(empty)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const inputCls = (field) =>
    `w-full px-4 py-2.5 rounded border text-sm bg-white focus:outline-none focus:ring-1 transition-colors ${
      errors[field]
        ? 'border-red-400 focus:ring-red-400'
        : 'border-mist focus:border-gold focus:ring-gold'
    }`

  return (
    <>
      <PageHeader
        label="Contact Us"
        title="Get in Touch"
        subtitle="Reach out to the Ghana Rice Federation — we'd love to hear from you."
        img="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&auto=format&fit=crop&q=80"
      />

      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ── Form ── */}
          <div className="lg:col-span-3">
            <SectionLabel>Send a Message</SectionLabel>
            <h2 className="font-serif text-forest text-2xl md:text-3xl font-semibold mb-6">
              Contact the Secretariat
            </h2>

            {/* Success state */}
            {status === 'success' && (
              <div className="bg-forest/5 border border-forest/20 rounded-xl p-8 text-center">
                <CheckCircle size={44} className="text-forest mx-auto mb-4" />
                <h3 className="font-serif text-forest text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-slate text-sm leading-relaxed">
                  Thank you for contacting us. Our team will respond to{' '}
                  <span className="font-medium text-forest">{form.email || 'you'}</span>{' '}
                  within 2–3 business days.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="mt-6 text-gold text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}

            {/* Error state */}
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-5 flex items-start gap-3 mb-6">
                <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-700 text-sm font-medium">Message could not be sent.</p>
                  <p className="text-red-500 text-xs mt-1">
                    Please email us directly at{' '}
                    <a href="mailto:info@ghanaricefederation.org" className="underline">
                      info@ghanaricefederation.org
                    </a>
                  </p>
                  <button
                    onClick={() => setStatus(null)}
                    className="mt-2 text-red-600 text-xs font-semibold hover:underline"
                  >
                    Try again
                  </button>
                </div>
              </div>
            )}

            {/* Form */}
            {status !== 'success' && (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-slate uppercase tracking-wide mb-1.5">
                      First Name <span className="text-gold">*</span>
                    </label>
                    <input
                      name="first_name" value={form.first_name} onChange={handleChange}
                      className={inputCls('first_name')} placeholder="Kwame"
                    />
                    {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>}
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate uppercase tracking-wide mb-1.5">
                      Last Name <span className="text-gold">*</span>
                    </label>
                    <input
                      name="last_name" value={form.last_name} onChange={handleChange}
                      className={inputCls('last_name')} placeholder="Mensah"
                    />
                    {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-slate uppercase tracking-wide mb-1.5">
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      className={inputCls('email')} placeholder="kwame@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate uppercase tracking-wide mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className={inputCls('phone')} placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate uppercase tracking-wide mb-1.5">
                    Organisation <span className="text-gold">*</span>
                  </label>
                  <input
                    name="organisation" value={form.organisation} onChange={handleChange}
                    className={inputCls('organisation')} placeholder="Your company or organisation"
                  />
                  {errors.organisation && <p className="text-red-500 text-xs mt-1">{errors.organisation}</p>}
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate uppercase tracking-wide mb-1.5">
                    Subject <span className="text-gold">*</span>
                  </label>
                  <select
                    name="subject" value={form.subject} onChange={handleChange}
                    className={inputCls('subject')}
                  >
                    <option value="">Select a subject…</option>
                    {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate uppercase tracking-wide mb-1.5">
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    rows={5} className={inputCls('message')} placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-forest to-forest-mid text-white font-semibold text-sm rounded hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <><Loader size={16} className="animate-spin" /> Sending…</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── Contact Info ── */}
          <div className="lg:col-span-2 space-y-4">
            <SectionLabel>Contact Details</SectionLabel>
            <h2 className="font-serif text-forest text-2xl font-semibold mb-6">Find Us</h2>
            {contactInfo.map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-5 border border-mist flex items-start gap-4 hover:shadow-sm transition-shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-gold-pale flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-forest text-sm mb-1">{title}</h4>
                  {lines.map(line => (
                    <p key={line} className="text-slate text-xs">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Direct email prompt */}
            <div className="bg-gold-pale border border-gold/30 rounded-xl p-5 mt-6">
              <p className="text-forest text-xs font-mono uppercase tracking-widest mb-1">Prefer email?</p>
              <a
                href="mailto:mickeyeinstein2@gmail.com"
                className="text-forest font-semibold text-sm hover:text-gold transition-colors break-all"
              >
                info@ghanaricefederation.org
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
