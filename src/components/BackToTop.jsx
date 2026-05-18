import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          id="back-to-top-btn"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.12, boxShadow: '0 0 30px rgba(139,92,246,0.6)' }}
          whileTap={{ scale: 0.92 }}
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 900,
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(139,92,246,0.35)',
          }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
