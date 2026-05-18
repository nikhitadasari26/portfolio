import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaMobile, FaDatabase, FaCloud } from 'react-icons/fa'

const highlights = [
  { icon: FaMobile, label: 'Flutter Dev', color: '#06b6d4' },
  { icon: FaDatabase, label: 'Firebase', color: '#f59e0b' },
  { icon: FaCode, label: 'DSA Expert', color: '#8b5cf6' },
  { icon: FaCloud, label: 'Cloud & AWS', color: '#ec4899' },
]

const stats = [
  { value: '300+', label: 'LeetCode Problems' },
  { value: '8.88', label: 'CGPA' },
  { value: '3+', label: 'Major Projects' },
  { value: '5★', label: 'HackerRank SQL' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-200px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <span style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#8b5cf6',
            fontWeight: 600,
          }}>
            Get to Know Me
          </span>
          <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
            About{' '}
            <span style={{
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Me
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}>
          {/* Avatar column — ON-SCROLL ANIMATION #1 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative' }}>
              {/* Avatar container */}
              <div style={{
                width: 'clamp(200px, 35vw, 280px)',
                height: 'clamp(200px, 35vw, 280px)',
                borderRadius: '30px',
                background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.15))',
                border: '1px solid rgba(139,92,246,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* SVG Avatar illustration */}
                <svg viewBox="0 0 200 200" style={{ width: '80%', height: '80%' }} aria-label="Profile illustration">
                  {/* Background circle */}
                  <circle cx="100" cy="100" r="95" fill="rgba(139,92,246,0.1)" />
                  {/* Body */}
                  <ellipse cx="100" cy="155" rx="45" ry="30" fill="rgba(124,58,237,0.6)" />
                  {/* Head */}
                  <circle cx="100" cy="85" r="38" fill="#f1c27d" />
                  {/* Hair */}
                  <ellipse cx="100" cy="57" rx="40" ry="18" fill="#2d1b69" />
                  <rect x="60" y="57" width="10" height="35" rx="5" fill="#2d1b69" />
                  <rect x="130" y="57" width="10" height="35" rx="5" fill="#2d1b69" />
                  {/* Eyes */}
                  <ellipse cx="88" cy="87" rx="5" ry="6" fill="#1a1a2e" />
                  <ellipse cx="112" cy="87" rx="5" ry="6" fill="#1a1a2e" />
                  <circle cx="90" cy="85" r="1.5" fill="#fff" />
                  <circle cx="114" cy="85" r="1.5" fill="#fff" />
                  {/* Smile */}
                  <path d="M 87 100 Q 100 112 113 100" stroke="#c9956c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  {/* Laptop */}
                  <rect x="60" y="145" width="80" height="50" rx="4" fill="#1e1e3f" />
                  <rect x="62" y="147" width="76" height="43" rx="3" fill="#0d0d1f" />
                  {/* Code on screen */}
                  <rect x="67" y="153" width="30" height="3" rx="1.5" fill="#8b5cf6" />
                  <rect x="67" y="159" width="45" height="3" rx="1.5" fill="#06b6d4" />
                  <rect x="67" y="165" width="35" height="3" rx="1.5" fill="#ec4899" />
                  <rect x="67" y="171" width="50" height="3" rx="1.5" fill="#8b5cf6" />
                  <rect x="67" y="177" width="40" height="3" rx="1.5" fill="#22c55e" />
                </svg>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-15px',
                    background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                    borderRadius: '12px',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#fff',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 20px rgba(139,92,246,0.5)',
                  }}
                >
                  B.Tech CSE 🎓
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  style={{
                    position: 'absolute',
                    bottom: '-15px',
                    left: '-15px',
                    background: 'linear-gradient(135deg, #ec4899, #db2777)',
                    borderRadius: '12px',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#fff',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 20px rgba(236,72,153,0.5)',
                  }}
                >
                  CGPA 8.88 ⭐
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.9,
              fontSize: '1rem',
              marginBottom: '1.25rem',
            }}>
              I'm an aspiring <strong style={{ color: '#a78bfa' }}>Software Development Engineer</strong> pursuing
              B.Tech in Computer Science at <strong style={{ color: '#fff' }}>Aditya College of Engineering and Technology</strong>,
              maintaining a strong CGPA of 8.88.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.9,
              fontSize: '1rem',
              marginBottom: '1.25rem',
            }}>
              I have strong foundations in <strong style={{ color: '#06b6d4' }}>Data Structures, Algorithms, OOP, DBMS, and Operating Systems</strong>.
              My hands-on experience spans building scalable mobile applications using <strong style={{ color: '#f59e0b' }}>Flutter & Firebase</strong>,
              backed by practical internship experience at Technical Hub Pvt. Ltd.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.9,
              fontSize: '1rem',
              marginBottom: '2rem',
            }}>
              Currently deepening my expertise in <strong style={{ color: '#ec4899' }}>cloud architecture (AWS)</strong>,
              AI-powered applications, and backend development with Node.js. I'm passionate about writing clean,
              efficient, and maintainable code.
            </p>

            {/* Highlight chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {highlights.map(({ icon: Icon, label, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.6rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${color}30`,
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: color,
                    cursor: 'default',
                  }}
                >
                  <Icon style={{ fontSize: '0.9rem' }} />
                  {label}
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}>
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.6rem',
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
