import { motion } from 'framer-motion'
import { useParallax } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowDown, FaCode } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

// Typewriter hook
function useTypewriter(words, speed = 80, pause = 1800) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx((c) => c + 1)
        }
      } else {
        setText(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx((w) => (w + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx((c) => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return text
}

const ROLES = [
  'Software Development Engineer',
  'Flutter App Developer',
  'Firebase Expert',
  'Problem Solver',
]

const SOCIALS = [
  { icon: FaGithub, href: 'https://github.com/nikhitadasari26', label: 'GitHub', color: '#fff' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/nikhita-dasari-310703291/', label: 'LinkedIn', color: '#0ea5e9' },
  { icon: FaEnvelope, href: 'mailto:nikhitadasari1@gmail.com', label: 'Email', color: '#a78bfa' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/Nikhita_dasari/', label: 'LeetCode', color: '#FFA116' },
]

// Parallax blob
function Blob({ speed, style }) {
  const { ref } = useParallax({ speed })
  return <div ref={ref} className="orb" style={style} />
}

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '0 1.5rem',
        paddingTop: '80px',
      }}
    >
      {/* Parallax orbs — PARALLAX EFFECT */}
      <Blob speed={-18} style={{
        width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 65%)',
        top: '-200px', left: '-200px',
      }} />
      <Blob speed={12} style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 65%)',
        bottom: '-150px', right: '-150px',
      }} />
      <Blob speed={-8} style={{
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 65%)',
        top: '35%', left: '55%',
      }} />

      {/* Noise vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(3,3,9,0.8) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        textAlign: 'center',
        maxWidth: '860px',
        width: '100%',
      }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '2rem',
            background: 'rgba(16,185,129,0.08)',
            border: '1px solid rgba(16,185,129,0.25)',
            fontSize: '0.8rem',
            color: '#34d399',
            fontWeight: 500,
            marginBottom: '2rem',
          }}
        >
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 8px rgba(16,185,129,0.8)',
            animation: 'ping 1.5s ease-in-out infinite',
          }} />
          Open to opportunities
        </motion.div>

        {/* Code tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
            color: 'rgba(139,92,246,0.5)',
            marginBottom: '1rem',
            letterSpacing: '0.05em',
          }}
        >
          &lt;h1&gt;
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(3rem, 9vw, 6.5rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            marginBottom: '0.5rem',
          }}
        >
          <span style={{ color: 'var(--text-primary)' }}>Nikhita</span>
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 55%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Dasari
          </span>
        </motion.h1>

        {/* End tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
            color: 'rgba(139,92,246,0.5)',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em',
          }}
        >
          &lt;/h1&gt;
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            minHeight: '2.5rem',
          }}
        >
          <FaCode style={{ color: '#8b5cf6', fontSize: '1.1rem', flexShrink: 0 }} />
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
            fontWeight: 500,
            color: '#a78bfa',
          }}>
            {role}
            <span style={{
              display: 'inline-block',
              width: '2px',
              height: '1.1em',
              background: '#8b5cf6',
              marginLeft: '2px',
              verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite',
            }} />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            maxWidth: '56ch',
            margin: '0 auto 2.5rem',
          }}
        >
          Aspiring SDE building scalable apps with <strong style={{ color: '#a78bfa' }}>Flutter & Firebase</strong>.
          Strong in DSA · OOP · Clean Code · B.Tech CSE @ CGPA <strong style={{ color: '#a78bfa' }}>8.88</strong>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          <motion.button
            id="view-work-btn"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.04, boxShadow: '0 0 35px rgba(139,92,246,0.55)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.9rem 2.25rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '1rem',
              fontFamily: 'Outfit, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            View My Work ↓
          </motion.button>

          <motion.a
            href="mailto:nikhitadasari1@gmail.com"
            id="contact-hero-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.9rem 2.25rem',
              borderRadius: '10px',
              background: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid rgba(255,255,255,0.12)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              fontFamily: 'Outfit, sans-serif',
              transition: 'border-color 0.2s',
              display: 'inline-flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '4rem',
          }}
        >
          {SOCIALS.map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.18, y: -3 }}
              whileTap={{ scale: 0.9 }}
              title={label}
              style={{
                width: '44px', height: '44px',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '1.05rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = color
                e.currentTarget.style.borderColor = `${color}50`
                e.currentTarget.style.background = `${color}10`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.1 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }
          }}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '0.4rem',
            color: 'var(--text-muted)',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <span>Scroll</span>
          <FaArrowDown />
        </motion.button>
      </div>

      <style>{`
        @keyframes ping {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
