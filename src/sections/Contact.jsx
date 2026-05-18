import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from 'react-icons/si'

const contactLinks = [
  {
    id: 'contact-email',
    icon: FaEnvelope,
    label: 'Email Me',
    value: 'nikhitadasari1@gmail.com',
    href: 'mailto:nikhitadasari1@gmail.com',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
    border: 'rgba(139,92,246,0.25)',
  },
  {
    id: 'contact-github',
    icon: FaGithub,
    label: 'GitHub',
    value: 'nikhitadasari26',
    href: 'https://github.com/nikhitadasari26',
    color: '#e2e8f0',
    bg: 'rgba(255,255,255,0.05)',
    border: 'rgba(255,255,255,0.12)',
  },
  {
    id: 'contact-linkedin',
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'nikhita-dasari',
    href: 'https://www.linkedin.com/in/nikhita-dasari-310703291/',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.1)',
    border: 'rgba(14,165,233,0.25)',
  },
  {
    id: 'contact-phone',
    icon: FaPhone,
    label: 'Phone',
    value: '+91 9392536413',
    href: 'tel:+919392536413',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.1)',
    border: 'rgba(34,197,94,0.25)',
  },
]

const competitive = [
  {
    icon: SiLeetcode,
    name: 'LeetCode',
    detail: '300+ problems · Rating 1580',
    href: 'https://leetcode.com/u/Nikhita_dasari/',
    color: '#FFA116',
  },
  {
    icon: SiGeeksforgeeks,
    name: 'GeeksforGeeks',
    detail: '200+ problems · 2★',
    href: 'https://www.geeksforgeeks.org/user/nikhitad3dsn/',
    color: '#2F8D46',
  },
  {
    icon: SiCodechef,
    name: 'CodeChef',
    detail: '550+ problems · Rating 1082',
    href: 'https://www.codechef.com/users/nikhitadasari',
    color: '#5B4638',
  },
  {
    icon: SiHackerrank,
    name: 'HackerRank',
    detail: '5★ SQL · 3★ Java, C',
    href: 'https://www.hackerrank.com/profile/nikhitadasari1',
    color: '#1BA94C',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open mailto with form content
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`)
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)
    window.open(`mailto:nikhitadasari1@gmail.com?subject=${subject}&body=${body}`)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.01)',
      }}
    >
      {/* Decorative top border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)',
      }} />

      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-150px',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header — ON-SCROLL ANIMATION #4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#8b5cf6',
            fontWeight: 600,
          }}>
            Let's Connect
          </span>
          <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
            Get In{' '}
            <span style={{
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Touch
            </span>
          </h2>
          <p className="section-subheading" style={{ margin: '0.75rem auto 0', textAlign: 'center' }}>
            Open to internships, collaborations, and full-time opportunities
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Left — Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              color: '#e2e8f0',
            }}>
              Contact Details
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              {contactLinks.map(({ id, icon: Icon, label, value, href, color, bg, border }) => (
                <motion.a
                  key={id}
                  id={id}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 6, scale: 1.01 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderRadius: '0.75rem',
                    background: bg,
                    border: `1px solid ${border}`,
                    textDecoration: 'none',
                    color: '#fff',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '0.5rem',
                    background: `${color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: color,
                    fontSize: '1.1rem',
                    flexShrink: 0,
                  }}>
                    <Icon />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '0.1rem' }}>
                      {label}
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: color }}>
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              marginBottom: '2.5rem',
            }}>
              <FaMapMarkerAlt style={{ color: '#8b5cf6' }} />
              Andhra Pradesh, India
            </div>

            {/* Competitive programming */}
            <h3 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '1.1rem',
              marginBottom: '1rem',
              color: '#e2e8f0',
            }}>
              Competitive Programming
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {competitive.map(({ icon: Icon, name, detail, href, color }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.6rem',
                    background: `${color}08`,
                    border: `1px solid ${color}20`,
                    textDecoration: 'none',
                    color: '#e2e8f0',
                    fontSize: '0.85rem',
                  }}
                >
                  <Icon style={{ color: color, fontSize: '1.2rem', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color }}>{name}</strong>
                    <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>· {detail}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              color: '#e2e8f0',
            }}>
              Send a Message
            </h3>

            <form
              id="contact-form"
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '2rem',
                borderRadius: '1rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Name */}
              <div>
                <label htmlFor="contact-name" style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.05em',
                }}>
                  YOUR NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.6rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#f1f5f9',
                    fontSize: '0.9rem',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(139,92,246,0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email-field" style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.05em',
                }}>
                  YOUR EMAIL
                </label>
                <input
                  id="contact-email-field"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.6rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#f1f5f9',
                    fontSize: '0.9rem',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(139,92,246,0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.05em',
                }}>
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.6rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#f1f5f9',
                    fontSize: '0.9rem',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                    resize: 'vertical',
                    minHeight: '120px',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(139,92,246,0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              {/* Submit */}
              <motion.button
                id="contact-submit"
                type="submit"
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(139,92,246,0.5)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '0.9rem',
                  borderRadius: '0.6rem',
                  background: submitted
                    ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                    : 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '0.03em',
                  transition: 'background 0.3s',
                }}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
