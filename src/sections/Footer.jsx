import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer style={{
      padding: '2.5rem 1.5rem',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      position: 'relative',
    }}>
      {/* Gradient line at top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '20%',
        right: '20%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)',
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 800,
          fontSize: '1.2rem',
          background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          &lt;Nikhita /&gt;
        </div>

        {/* Copyright */}
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.82rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          © 2025 Sai Manasa Nikhita Dasari. Built with
          <FaHeart style={{ color: '#ec4899', fontSize: '0.75rem' }} />
          using React + Vite
        </p>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {[
            { icon: FaGithub, href: 'https://github.com/nikhitadasari26', label: 'GitHub' },
            { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/nikhita-dasari-310703291/', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#8b5cf6'
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
