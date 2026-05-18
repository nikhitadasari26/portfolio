import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from 'react-icons/si'

// Animated counter hook
function useCounter(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease out cubic
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

const PLATFORMS = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    icon: SiLeetcode,
    color: '#FFA116',
    bg: 'rgba(255,161,22,0.08)',
    border: 'rgba(255,161,22,0.2)',
    href: 'https://leetcode.com/u/Nikhita_dasari/',
    handle: 'Nikhita_dasari',
    stats: [
      { label: 'Problems Solved', value: 300, suffix: '+' },
      { label: 'Max Rating', value: 1580, suffix: '' },
    ],
    badge: '🏆',
    badgeLabel: 'Top Competitive',
  },
  {
    id: 'gfg',
    name: 'GeeksForGeeks',
    icon: SiGeeksforgeeks,
    color: '#2F8D46',
    bg: 'rgba(47,141,70,0.08)',
    border: 'rgba(47,141,70,0.2)',
    href: 'https://www.geeksforgeeks.org/user/nikhitad3dsn/',
    handle: 'nikhitad3dsn',
    stats: [
      { label: 'Problems Solved', value: 200, suffix: '+' },
      { label: 'Star Rating', value: 2, suffix: '★' },
    ],
    badge: '💡',
    badgeLabel: '2★ Coder',
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    icon: SiCodechef,
    color: '#9c6647',
    bg: 'rgba(156,102,71,0.08)',
    border: 'rgba(156,102,71,0.2)',
    href: 'https://www.codechef.com/users/nikhitadasari',
    handle: 'nikhitadasari',
    stats: [
      { label: 'Problems Solved', value: 550, suffix: '+' },
      { label: 'Max Rating', value: 1082, suffix: '' },
    ],
    badge: '⚡',
    badgeLabel: 'Active',
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    icon: SiHackerrank,
    color: '#1BA94C',
    bg: 'rgba(27,169,76,0.08)',
    border: 'rgba(27,169,76,0.2)',
    href: 'https://www.hackerrank.com/profile/nikhitadasari1',
    handle: 'nikhitadasari1',
    stats: [
      { label: 'SQL Rating', value: 5, suffix: '★' },
      { label: 'Java / C', value: 3, suffix: '★ each' },
    ],
    badge: '🌟',
    badgeLabel: '5★ SQL',
  },
]

function CounterStat({ value, suffix, label, color, active }) {
  const count = useCounter(value, 1400, active)
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 900,
        fontSize: '1.75rem',
        color,
        lineHeight: 1,
        letterSpacing: '-0.02em',
      }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.3rem', fontWeight: 500 }}>
        {label}
      </div>
    </div>
  )
}

function PlatformCard({ platform, index, inView }) {
  const Icon = platform.icon
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, borderColor: `${platform.color}40` }}
      style={{
        borderRadius: '18px',
        background: platform.bg,
        border: `1px solid ${platform.border}`,
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '44px', height: '44px',
            borderRadius: '10px',
            background: `${platform.color}15`,
            border: `1px solid ${platform.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.4rem',
            color: platform.color,
          }}>
            <Icon />
          </div>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
              {platform.name}
            </div>
            <div style={{
              fontSize: '0.7rem',
              fontFamily: 'JetBrains Mono, monospace',
              color: platform.color,
              marginTop: '0.1rem',
            }}>
              @{platform.handle}
            </div>
          </div>
        </div>

        <span style={{
          padding: '0.25rem 0.65rem',
          borderRadius: '2rem',
          background: `${platform.color}12`,
          border: `1px solid ${platform.color}25`,
          fontSize: '0.68rem',
          fontWeight: 700,
          color: platform.color,
          whiteSpace: 'nowrap',
        }}>
          {platform.badge} {platform.badgeLabel}
        </span>
      </div>

      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        padding: '1rem',
        borderRadius: '10px',
        background: 'rgba(0,0,0,0.2)',
      }}>
        {platform.stats.map(({ label, value, suffix }) => (
          <CounterStat
            key={label}
            label={label}
            value={value}
            suffix={suffix}
            color={platform.color}
            active={inView}
          />
        ))}
      </div>

      {/* CTA */}
      <motion.a
        href={platform.href}
        target="_blank"
        rel="noopener noreferrer"
        id={`platform-${platform.id}`}
        aria-label={`View ${platform.name} profile`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.65rem',
          borderRadius: '8px',
          background: `${platform.color}15`,
          border: `1px solid ${platform.color}30`,
          color: platform.color,
          textDecoration: 'none',
          fontSize: '0.82rem',
          fontWeight: 700,
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = `${platform.color}25`}
        onMouseLeave={(e) => e.currentTarget.style.background = `${platform.color}15`}
      >
        <Icon style={{ fontSize: '0.9rem' }} />
        View Profile ↗
      </motion.a>
    </motion.article>
  )
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="achievements"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
        position: 'relative',
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(8,8,24,0.6) 50%, var(--bg-primary) 100%)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-label">🏆 Competitive Programming</div>
          <h2 className="section-title">
            Coding{' '}
            <span className="gradient-text-2">Achievements</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '0.95rem' }}>
            Over 1000+ problems solved across competitive programming platforms
          </p>
        </motion.div>

        {/* Total summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
            padding: '1.5rem',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {[
            { label: 'Total Problems', value: '1050+', icon: '💻', color: '#8b5cf6' },
            { label: 'Platforms', value: '4', icon: '🌐', color: '#06b6d4' },
            { label: 'Best Rating', value: '1580', icon: '📈', color: '#FFA116' },
            { label: 'Top Skill', value: 'SQL 5★', icon: '⭐', color: '#10b981' },
          ].map(({ label, value, icon, color }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{icon}</div>
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 800,
                fontSize: '1.4rem',
                color,
              }}>
                {value}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Platform cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.25rem',
        }}>
          {PLATFORMS.map((platform, i) => (
            <PlatformCard key={platform.id} platform={platform} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
