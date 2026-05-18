import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiFlutter, SiDart, SiFirebase, SiPython, SiJavascript, SiNodedotjs,
  SiMongodb, SiMysql, SiGit, SiGithub, SiDocker, SiLinux,
  SiFigma, SiAndroidstudio, SiHtml5, SiCss
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'

const skillGroups = [
  {
    category: 'Mobile & Core',
    color: '#06b6d4',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#54c5f8' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    category: 'Programming',
    color: '#8b5cf6',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    category: 'Backend & DB',
    color: '#22c55e',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    category: 'Web',
    color: '#f59e0b',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: '#ec4899',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#fff' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
    ],
  },
  {
    category: 'Environment',
    color: '#a78bfa',
    skills: [
      { name: 'VS Code', icon: VscCode, color: '#007ACC' },
      { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    ],
  },
]

function SkillCard({ skill, index }) {
  const Icon = skill.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'backOut' }}
      whileHover={{
        y: -6,
        scale: 1.05,
        boxShadow: `0 15px 40px ${skill.color}30`,
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '1rem 0.75rem',
        borderRadius: '0.8rem',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        cursor: 'default',
        transition: 'border-color 0.2s',
      }}
      onHoverStart={(e) => {
        e.target.style && (e.target.style.borderColor = `${skill.color}40`)
      }}
    >
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '0.6rem',
        background: `${skill.color}15`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        color: skill.color,
      }}>
        <Icon />
      </div>
      <span style={{
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#cbd5e1',
        textAlign: 'center',
        lineHeight: 1.2,
      }}>
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) 1.5rem',
        position: 'relative',
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

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header — ON-SCROLL ANIMATION #2 */}
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
            What I Work With
          </span>
          <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
            My{' '}
            <span style={{
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Tech Stack
            </span>
          </h2>
          <p className="section-subheading" style={{ margin: '0.75rem auto 0', textAlign: 'center' }}>
            Technologies I use to build scalable, modern applications
          </p>
        </motion.div>

        {/* Skill groups — STAGGERED CARD REVEAL = ON-SCROLL ANIMATION #3 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: gi % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: gi * 0.12 }}
            >
              {/* Category label */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}>
                <div style={{
                  width: '4px',
                  height: '20px',
                  borderRadius: '2px',
                  background: group.color,
                  boxShadow: `0 0 10px ${group.color}`,
                }} />
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: group.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  {group.category}
                </span>
              </div>

              {/* Skill cards grid */}
              {inView && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
                  gap: '0.75rem',
                }}>
                  {group.skills.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{
            marginTop: '4rem',
            padding: '2rem',
            borderRadius: '1rem',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <h3 style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 600,
            fontSize: '1.1rem',
            marginBottom: '1.5rem',
            color: '#e2e8f0',
          }}>
            🏅 Certifications
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '0.75rem',
          }}>
            {[
              { name: 'MongoDB Associate Developer', issuer: 'MongoDB', href: 'https://www.credly.com/badges/bcbdc443-679f-4e5a-a9cf-bb4503df1b9c/public_url', color: '#47A248' },
              { name: 'RHCSA', issuer: 'Red Hat', href: 'https://www.credly.com/badges/24831a7e-479a-4179-aca1-70f52939da31/public_url', color: '#EE0000' },
              { name: 'Python Essentials 1', issuer: 'Cisco Netacad', href: 'https://www.credly.com/badges/2e1f8fac-a218-4d22-8025-5b2e93cf2ac6/public_url', color: '#3776AB' },
              { name: 'Java', issuer: 'HackerRank', href: 'https://www.hackerrank.com/certificates/16765eb04aaf', color: '#f89820' },
              { name: 'OS Basics', issuer: 'Cisco Netacad', href: 'https://www.credly.com/badges/5fa28183-e3cf-4e77-8278-bd96a49a7747/public_url', color: '#1BA0D7' },
              { name: 'IT Specialist HTML & CSS', issuer: 'Certiport', href: 'https://www.credly.com/badges/78f2a939-1d52-438d-a503-c2565ba10097/public_url', color: '#E34F26' },
              { name: 'SQL', issuer: 'HackerRank', href: 'https://www.hackerrank.com/certificates/fd66a985d124', color: '#4479A1' },
            ].map(({ name, issuer, href, color }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.6rem 0.85rem',
                  borderRadius: '0.5rem',
                  background: `${color}10`,
                  border: `1px solid ${color}25`,
                  textDecoration: 'none',
                  color: '#e2e8f0',
                  fontSize: '0.8rem',
                  transition: 'background 0.2s',
                }}
              >
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: color,
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.78rem' }}>{name}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.7rem' }}>{issuer}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)',
      }} />
    </section>
  )
}
