import { motion } from 'framer-motion'
import { useParallax } from 'react-scroll-parallax'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowDown } from 'react-icons/fa'

const socials = [
  { icon: FaGithub, href: 'https://github.com/nikhitadasari26', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/nikhita-dasari-310703291/', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:nikhitadasari1@gmail.com', label: 'Email' },
]

// Floating blob component
function Blob({ style, parallaxSpeed }) {
  const { ref } = useParallax({ speed: parallaxSpeed })
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export default function Hero() {
  const { ref: taglineRef } = useParallax({ speed: -5 })

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '0 1.5rem',
        paddingTop: '80px',
      }}
    >
      {/* Parallax background blobs — PARALLAX EFFECT #1 */}
      <Blob
        parallaxSpeed={-15}
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)',
          top: '-100px',
          left: '-150px',
        }}
      />
      <Blob
        parallaxSpeed={10}
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)',
          bottom: '-50px',
          right: '-100px',
        }}
      />
      <Blob
        parallaxSpeed={-8}
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)',
          top: '40%',
          left: '60%',
        }}
      />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '800px',
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '2rem',
            background: 'rgba(139,92,246,0.1)',
            border: '1px solid rgba(139,92,246,0.3)',
            fontSize: '0.85rem',
            color: '#a78bfa',
            fontWeight: 500,
            marginBottom: '1.5rem',
          }}
        >
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#22c55e',
            boxShadow: '0 0 8px #22c55e',
            display: 'inline-block',
            animation: 'pulse 2s infinite',
          }} />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: 1.1,
            marginBottom: '0.5rem',
          }}
        >
          Hi, I'm{' '}
          <span style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Nikhita
          </span>
        </motion.h1>

        {/* Full name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
            color: 'var(--text-secondary)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          Sai Manasa Nikhita Dasari
        </motion.p>

        {/* Role */}
        <motion.div
          ref={taglineRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 600,
            marginBottom: '1.5rem',
            color: '#cbd5e1',
          }}
        >
          Aspiring{' '}
          <span style={{
            background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Software Development Engineer
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            lineHeight: 1.8,
            maxWidth: '60ch',
            margin: '0 auto 2.5rem',
          }}
        >
          Building scalable apps with Flutter & Firebase. Strong in DSA, OOP & clean code principles.
          Currently pursuing B.Tech CSE with CGPA 8.88.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          <motion.a
            href="#projects"
            id="view-work-btn"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139,92,246,0.6)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 2rem',
              borderRadius: '0.75rem',
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              fontFamily: 'Outfit, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="mailto:nikhitadasari1@gmail.com"
            id="contact-me-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 2rem',
              borderRadius: '0.75rem',
              background: 'transparent',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              fontFamily: 'Outfit, sans-serif',
              border: '1px solid rgba(255,255,255,0.15)',
              letterSpacing: '0.02em',
            }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '0.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#8b5cf6'
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          id="scroll-down-btn"
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.2, y: { duration: 1.5, repeat: Infinity } }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-secondary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
          }}
        >
          <span>SCROLL</span>
          <FaArrowDown style={{ fontSize: '1rem' }} />
        </motion.button>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
