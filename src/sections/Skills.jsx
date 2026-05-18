import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'
import {
  SiFlutter, SiDart, SiFirebase, SiPython, SiJavascript, SiNodedotjs,
  SiMongodb, SiMysql, SiGit, SiGithub, SiDocker,
  SiFigma, SiAndroidstudio, SiHtml5, SiCss, SiLinux
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'

const SKILL_GROUPS = [
  {
    category: 'Mobile Development',
    icon: '📱',
    color: '#06b6d4',
    proficiency: 90,
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#54c5f8' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    category: 'Programming Languages',
    icon: '🧠',
    color: '#8b5cf6',
    proficiency: 82,
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    category: 'Backend & Databases',
    icon: '🔧',
    color: '#10b981',
    proficiency: 72,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    category: 'Web Technologies',
    icon: '🌐',
    color: '#f59e0b',
    proficiency: 78,
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    color: '#ec4899',
    proficiency: 60,
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#fff' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
    ],
  },
  {
    category: 'Tools & Environment',
    icon: '🛠️',
    color: '#a78bfa',
    proficiency: 88,
    skills: [
      { name: 'VS Code', icon: VscCode, color: '#007ACC' },
      { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    ],
  },
]

// Animated progress bar
function ProgressBar({ value, color, inView }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!inView || !ref.current) return
    const el = ref.current
    el.style.width = '0%'
    const timeout = setTimeout(() => {
      el.style.transition = 'width 1.2s cubic-bezier(0.22,1,0.36,1)'
      el.style.width = `${value}%`
    }, 200)
    return () => clearTimeout(timeout)
  }, [inView, value])

  return (
    <div style={{
      height: '4px',
      background: 'rgba(255,255,255,0.06)',
      borderRadius: '2px',
      overflow: 'hidden',
      marginTop: '0.75rem',
    }}>
      <div
        ref={ref}
        style={{
          height: '100%',
          width: '0%',
          borderRadius: '2px',
          background: `linear-gradient(90deg, ${color}, ${color}aa)`,
          boxShadow: `0 0 8px ${color}60`,
        }}
      />
    </div>
  )
}

function SkillCard({ skill, index }) {
  const Icon = skill.icon
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: 'backOut' }}
      whileHover={{ y: -5, scale: 1.08 }}
      title={skill.name}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.85rem 0.5rem',
        borderRadius: '10px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        cursor: 'default',
        transition: 'all 0.2s',
        minWidth: '72px',
      }}
      onHoverStart={() => {}}
    >
      <div style={{
        width: '40px', height: '40px',
        borderRadius: '8px',
        background: `${skill.color}12`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.4rem',
        color: skill.color,
      }}>
        <Icon />
      </div>
      <span style={{
        fontSize: '0.67rem',
        fontWeight: 600,
        color: 'var(--text-secondary)',
        textAlign: 'center',
        lineHeight: 1.3,
      }}>
        {skill.name}
      </span>
    </motion.div>
  )
}

function SkillGroup({ group, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        padding: '1.5rem',
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        transition: 'border-color 0.3s',
      }}
      whileHover={{ borderColor: `${group.color}25` }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ fontSize: '1.1rem' }}>{group.icon}</span>
          <span style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 700,
            fontSize: '0.9rem',
            color: group.color,
          }}>
            {group.category}
          </span>
        </div>
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
        }}>
          {group.proficiency}%
        </span>
      </div>

      {/* Progress bar — ON-SCROLL ANIMATION: skill fill */}
      <ProgressBar value={group.proficiency} color={group.color} inView={inView} />

      {/* Skill icons */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginTop: '1.25rem',
      }}>
        {inView && group.skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{
      padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-section-stripe) 50%, var(--bg-primary) 100%)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-label">⚡ Tech Stack</div>
          <h2 className="section-title">
            Skills &{' '}
            <span className="gradient-text-2">Expertise</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            marginTop: '0.75rem',
            fontSize: '0.95rem',
          }}>
            Technologies I use to build scalable, production-ready applications
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {SKILL_GROUPS.map((group, i) => (
            <SkillGroup key={group.category} group={group} index={i} inView={inView} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{
            padding: '2rem',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}>
            <span style={{ fontSize: '1.25rem' }}>🏅</span>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>
              Certifications
            </h3>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
            gap: '0.75rem',
          }}>
            {[
              { name: 'MongoDB Associate Developer', issuer: 'MongoDB', color: '#47A248', href: 'https://www.credly.com/badges/bcbdc443-679f-4e5a-a9cf-bb4503df1b9c/public_url' },
              { name: 'RHCSA', issuer: 'Red Hat', color: '#EE0000', href: 'https://www.credly.com/badges/24831a7e-479a-4179-aca1-70f52939da31/public_url' },
              { name: 'Python Essentials 1', issuer: 'Cisco Netacad', color: '#3776AB', href: 'https://www.credly.com/badges/2e1f8fac-a218-4d22-8025-5b2e93cf2ac6/public_url' },
              { name: 'Java', issuer: 'HackerRank', color: '#f89820', href: 'https://www.hackerrank.com/certificates/16765eb04aaf' },
              { name: 'Operating Systems Basics', issuer: 'Cisco Netacad', color: '#1BA0D7', href: 'https://www.credly.com/badges/5fa28183-e3cf-4e77-8278-bd96a49a7747/public_url' },
              { name: 'IT Specialist HTML & CSS', issuer: 'Certiport', color: '#E34F26', href: 'https://www.credly.com/badges/78f2a939-1d52-438d-a503-c2565ba10097/public_url' },
              { name: 'SQL', issuer: 'HackerRank', color: '#4479A1', href: 'https://www.hackerrank.com/certificates/fd66a985d124' },
              { name: 'GitHub Foundations', issuer: 'Microsoft', color: '#0078d4', href: 'https://learn.microsoft.com/api/credentials/share/en-in/NikhitaDasari-1339/3363AB4061BDF7B7?sharingId=41F7046E6EF3AFE9' },
            ].map(({ name, issuer, color, href }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4, borderColor: `${color}50` }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  background: `${color}08`,
                  border: `1px solid ${color}20`,
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{
                  width: '8px', height: '8px',
                  borderRadius: '50%',
                  background: color,
                  boxShadow: `0 0 6px ${color}`,
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>{name}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>{issuer} ↗</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
