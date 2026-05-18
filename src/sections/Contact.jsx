import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'

const CONTACT_LINKS = [
  {
    id: 'contact-email',
    icon: FaEnvelope,
    label: 'Email',
    value: 'nikhitadasari1@gmail.com',
    href: 'mailto:nikhitadasari1@gmail.com',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.2)',
    action: 'Send Email →',
  },
  {
    id: 'contact-github',
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/nikhitadasari26',
    href: 'https://github.com/nikhitadasari26',
    color: '#f1f5f9',
    bg: 'rgba(241,245,249,0.05)',
    border: 'rgba(241,245,249,0.1)',
    action: 'View Profile →',
  },
  {
    id: 'contact-linkedin',
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'nikhita-dasari-310703291',
    href: 'https://www.linkedin.com/in/nikhita-dasari-310703291/',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
    border: 'rgba(14,165,233,0.2)',
    action: 'Connect →',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    const subj = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    setTimeout(() => {
      window.open(`mailto:nikhitadasari1@gmail.com?subject=${subj}&body=${body}`)
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 600)
  }

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top divider */}
      <div style={{
        position: 'absolute', top: 0, left: '15%', right: '15%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)',
      }} />

      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '30%', right: '-200px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-label">📬 Let's Talk</div>
          <h2 className="section-title">
            Get In{' '}
            <span className="gradient-text-2">Touch</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '0.95rem', maxWidth: '42ch', margin: '0.75rem auto 0' }}>
            Open to internships, collaborations, and full-time roles. Let's build something great together.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Intro card */}
            <div style={{
              padding: '1.75rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(236,72,153,0.04))',
              border: '1px solid rgba(139,92,246,0.15)',
              marginBottom: '1.5rem',
            }}>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                marginBottom: '0.75rem',
                color: 'var(--text-primary)',
              }}>
                Let's work together! 👋
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.88rem',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}>
                I'm currently looking for new opportunities. Whether it's a full-time role,
                internship, freelance project, or just a friendly chat about tech — my inbox is always open.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                <FaMapMarkerAlt style={{ color: '#8b5cf6', flexShrink: 0 }} />
                <span>Andhra Pradesh, India · Open to Remote</span>
              </div>
            </div>

            {/* Contact links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {CONTACT_LINKS.map(({ id, icon: Icon, label, value, href, color, bg, border, action }) => (
                <motion.a
                  key={id}
                  id={id}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 6, borderColor: `${color}50` }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    background: bg,
                    border: `1px solid ${border}`,
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{
                    width: '38px', height: '38px',
                    borderRadius: '8px',
                    background: `${color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color, fontSize: '1rem',
                  }}>
                    <Icon />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {label}
                    </div>
                    <div style={{ fontSize: '0.85rem', color, fontWeight: 600, marginTop: '0.1rem', wordBreak: 'break-all' }}>
                      {value}
                    </div>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
                    {action}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <h3 style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'var(--text-primary)',
                marginBottom: '0.25rem',
              }}>
                Send a Message
              </h3>

              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label htmlFor="contact-name" style={{
                    display: 'block', fontSize: '0.72rem', fontWeight: 700,
                    color: 'var(--text-secondary)', marginBottom: '0.4rem',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(139,92,246,0.5)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.08)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email-input" style={{
                    display: 'block', fontSize: '0.72rem', fontWeight: 700,
                    color: 'var(--text-secondary)', marginBottom: '0.4rem',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>
                    Email *
                  </label>
                  <input
                    id="contact-email-input"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(139,92,246,0.5)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.08)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" style={{
                  display: 'block', fontSize: '0.72rem', fontWeight: 700,
                  color: 'var(--text-secondary)', marginBottom: '0.4rem',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Job Opportunity / Collaboration / Other"
                  value={form.subject}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(139,92,246,0.5)'
                    e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.08)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" style={{
                  display: 'block', fontSize: '0.72rem', fontWeight: 700,
                  color: 'var(--text-secondary)', marginBottom: '0.4rem',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or just say hi..."
                  value={form.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(139,92,246,0.5)'
                    e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.08)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              {/* Submit */}
              <motion.button
                id="contact-submit"
                type="submit"
                disabled={status !== 'idle'}
                whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 0 30px rgba(139,92,246,0.45)' } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                style={{
                  padding: '0.95rem',
                  borderRadius: '10px',
                  background: status === 'sent'
                    ? 'linear-gradient(135deg, #10b981, #059669)'
                    : status === 'sending'
                    ? 'rgba(139,92,246,0.5)'
                    : 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  color: '#fff',
                  border: 'none',
                  cursor: status === 'idle' ? 'pointer' : 'not-allowed',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '0.02em',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                {status === 'sent' && <FaCheckCircle />}
                {status === 'idle' && 'Send Message →'}
                {status === 'sending' && 'Opening email client...'}
                {status === 'sent' && 'Message Ready to Send!'}
              </motion.button>

              {status === 'sent' && (
                <p style={{
                  fontSize: '0.78rem',
                  color: '#34d399',
                  textAlign: 'center',
                  margin: '0',
                }}>
                  ✓ Your email client should have opened. If not, email nikhitadasari1@gmail.com directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
