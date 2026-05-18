import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TIMELINE = [
  {
    year: '2023–Present',
    title: 'B.Tech Computer Science',
    org: 'Aditya College of Engineering & Technology',
    detail: 'CGPA: 8.88 · Coursework: DSA, OOP, DBMS, OS, Networks',
    color: '#8b5cf6',
    icon: '🎓',
  },
  {
    year: 'May–Jun 2025',
    title: 'Flutter Full Stack Developer Intern',
    org: 'Technical Hub Pvt. Ltd.',
    detail: 'Built 3 multi-screen apps · Integrated 5+ APIs · Real-time booking for 100+ users',
    color: '#ec4899',
    icon: '💼',
  },
  {
    year: '2021–2023',
    title: 'Class 12th',
    org: 'Andhra Pradesh State Board',
    detail: 'Percentage: 91.8%',
    color: '#06b6d4',
    icon: '📚',
  },
]

const HIGHLIGHTS = [
  { label: 'Flutter Dev', color: '#06b6d4', bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.2)' },
  { label: 'Firebase Expert', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)' },
  { label: 'DSA Enthusiast', color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)' },
  { label: 'AWS Basics', color: '#f97316', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.2)' },
  { label: 'AI Apps', color: '#10b981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)' },
  { label: 'Clean Code', color: '#ec4899', bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.2)' },
]

function TimelineItem({ item, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ display: 'flex', gap: '1.25rem' }}
    >
      {/* Left — icon + line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: '44px', height: '44px',
          borderRadius: '12px',
          background: `${item.color}15`,
          border: `1px solid ${item.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem',
          flexShrink: 0,
        }}>
          {item.icon}
        </div>
        {index < TIMELINE.length - 1 && (
          <div style={{
            width: '2px', flex: 1,
            background: `linear-gradient(180deg, ${item.color}30, transparent)`,
            margin: '0.5rem 0',
          }} />
        )}
      </div>

      {/* Right — content */}
      <div style={{ paddingBottom: index < TIMELINE.length - 1 ? '1.75rem' : 0 }}>
        <div style={{
          fontSize: '0.72rem',
          fontFamily: 'JetBrains Mono, monospace',
          color: item.color,
          fontWeight: 600,
          marginBottom: '0.25rem',
          letterSpacing: '0.05em',
        }}>
          {item.year}
        </div>
        <div style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 700,
          fontSize: '1rem',
          color: 'var(--text-primary)',
          marginBottom: '0.2rem',
        }}>
          {item.title}
        </div>
        <div style={{
          fontSize: '0.82rem',
          color: '#a78bfa',
          fontWeight: 500,
          marginBottom: '0.35rem',
        }}>
          {item.org}
        </div>
        <div style={{
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
        }}>
          {item.detail}
        </div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} style={{
      padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '-300px',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4.5rem' }}
        >
          <div className="section-label">
            <span>👋</span> About Me
          </div>
          <h2 className="section-title">
            The Story{' '}
            <span className="gradient-text-2">Behind</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left — Avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Avatar card */}
            <div style={{
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Gradient corner */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4)',
              }} />

              {/* SVG Avatar */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '140px', height: '140px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.15))',
                  border: '2px solid rgba(139,92,246,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <svg viewBox="0 0 160 160" width="120" height="120" aria-label="Profile avatar">
                  <circle cx="80" cy="80" r="78" fill="rgba(139,92,246,0.08)" />
                  {/* Body */}
                  <ellipse cx="80" cy="130" rx="38" ry="28" fill="rgba(124,58,237,0.7)" />
                  {/* Head */}
                  <circle cx="80" cy="68" r="32" fill="#f1c27d" />
                  {/* Hair */}
                  <ellipse cx="80" cy="44" rx="34" ry="16" fill="#1a0a3d" />
                  <path d="M46 58 Q40 80 44 90" stroke="#1a0a3d" strokeWidth="8" fill="none" strokeLinecap="round" />
                  <path d="M114 58 Q120 80 116 90" stroke="#1a0a3d" strokeWidth="8" fill="none" strokeLinecap="round" />
                  {/* Eyes */}
                  <ellipse cx="70" cy="70" rx="4.5" ry="5" fill="#1a1a2e" />
                  <ellipse cx="90" cy="70" rx="4.5" ry="5" fill="#1a1a2e" />
                  <circle cx="71.5" cy="68.5" r="1.5" fill="#fff" />
                  <circle cx="91.5" cy="68.5" r="1.5" fill="#fff" />
                  {/* Smile */}
                  <path d="M 70 82 Q 80 92 90 82" stroke="#c9956c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  {/* Laptop */}
                  <rect x="52" y="122" width="56" height="36" rx="4" fill="#0d0d1f" />
                  <rect x="54" y="124" width="52" height="30" rx="2" fill="#030309" />
                  <rect x="58" y="128" width="20" height="3" rx="1.5" fill="#8b5cf6" />
                  <rect x="58" y="133" width="32" height="2" rx="1" fill="#06b6d4" />
                  <rect x="58" y="137" width="25" height="2" rx="1" fill="#ec4899" />
                  <rect x="58" y="141" width="36" height="2" rx="1" fill="#10b981" />
                  <rect x="58" y="145" width="28" height="2" rx="1" fill="#8b5cf6" />
                </svg>
              </motion.div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  Sai Manasa Nikhita Dasari
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  Aditya College of Engineering & Technology
                </div>
              </div>

              {/* Highlights */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                {HIGHLIGHTS.map(({ label, color, bg, border }) => (
                  <motion.span
                    key={label}
                    whileHover={{ scale: 1.06, y: -2 }}
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: '2rem',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color, background: bg, border: `1px solid ${border}`,
                      cursor: 'default',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { value: '8.88', label: 'CGPA', color: '#8b5cf6' },
                { value: '300+', label: 'LeetCode', color: '#FFA116' },
                { value: '200+', label: 'GFG Problems', color: '#2F8D46' },
                { value: '7', label: 'Certifications', color: '#06b6d4' },
              ].map(({ value, label, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.04, borderColor: `${color}40` }}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textAlign: 'center',
                    transition: 'all 0.2s',
                    cursor: 'default',
                  }}
                >
                  <div style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 900,
                    fontSize: '1.8rem',
                    background: `linear-gradient(135deg, ${color}, ${color}aa)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1.1,
                  }}>
                    {value}
                  </div>
                  <div style={{ fontSize: '0.73rem', color: 'var(--text-secondary)', marginTop: '0.25rem', fontWeight: 500 }}>
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {/* Bio */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '1.25rem',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
              }}>
                Who I Am
              </h3>
              {[
                `I'm an aspiring Software Development Engineer with a passion for building products that make a difference. My journey started with C programming and evolved into building full-stack mobile apps with Flutter and Firebase.`,
                `I thrive at the intersection of clean engineering and creative problem solving. During my internship at Technical Hub Pvt. Ltd., I built 3 production-level apps used by 100+ real users, integrating Firebase Auth, Firestore, and real-time APIs.`,
                `Outside of building apps, I invest heavily in competitive programming — solving 300+ problems on LeetCode, achieving a 5★ rating in SQL on HackerRank, and holding industry certifications from Red Hat, MongoDB, and Cisco.`,
              ].map((para, i) => (
                <p key={i} style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.85,
                  fontSize: '0.93rem',
                  marginBottom: i < 2 ? '1rem' : 0,
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Timeline */}
            <div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
              }}>
                My Journey
              </h3>
              {TIMELINE.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} inView={inView} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
