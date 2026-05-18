import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiFlutter, SiFirebase, SiMongodb, SiNodedotjs, SiDart } from 'react-icons/si'

const PROJECTS = [
  {
    id: 'qlue',
    title: 'QLUE',
    subtitle: 'AI Powered Resume Interview App',
    description: 'An AI-powered interview prep platform that generates 10–15 personalized mock questions per resume, enabling smarter interview preparation with Google Gemini AI and scalable AWS backend.',
    longDesc: 'Built to solve the problem of generic interview prep, QLUE analyzes uploaded resumes and generates highly personalized questions using Gemini AI. The backend handles concurrent sessions efficiently on AWS Cloud with Firebase as the real-time database.',
    tags: ['Flutter', 'Firebase', 'AWS Cloud', 'Gemini AI', 'Dart'],
    github: 'https://github.com/nikhitadasari26/Qlue',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    accentColor: '#8b5cf6',
    emoji: '🤖',
    metrics: ['10–15 personalized Q&A', 'Gemini AI powered', 'AWS scalable backend'],
    featured: true,
  },
  {
    id: 'creatoros',
    title: 'CREATOROS',
    subtitle: 'AI Powered Creator Operating System',
    description: 'An all-in-one platform for content creators with AI script generation, auto captions, thumbnail analysis, trend discovery, real-time analytics, and multi-platform publishing.',
    longDesc: 'CREATOROS unifies the creator workflow — from ideation to publishing. AI tools handle script writing, caption generation, and thumbnail analysis while the backend powers real-time analytics and cloud-based media processing via FFmpeg.',
    tags: ['Flutter', 'Firebase', 'MongoDB', 'AWS', 'OpenAI', 'FFmpeg', 'Node.js'],
    github: 'https://github.com/Dhanushkotichukka/creatoros_app',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    accentColor: '#ec4899',
    emoji: '🎬',
    metrics: ['AI script generation', 'Multi-platform publish', 'Real-time analytics'],
    featured: true,
  },
  {
    id: 'planzo',
    title: 'PLANZO',
    subtitle: 'Task Management & Reminder App',
    description: 'A productivity-first task management app with categories, priorities, scheduled smart reminders, and real-time Firebase sync across devices for 100+ users.',
    longDesc: 'Planzo helps users stay on top of their work with intelligent task categorization, priority queues, and push notifications. Firebase Auth and Firestore power instant sync and real-time updates across all devices.',
    tags: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Push Notifications'],
    github: 'https://github.com/nikhitadasari26/Planzo',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    accentColor: '#06b6d4',
    emoji: '📋',
    metrics: ['100+ users', 'Real-time sync', 'Smart notifications'],
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      ref={ref}
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderRadius: '20px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      whileHover={{
        y: -8,
        borderColor: `${project.accentColor}30`,
        boxShadow: `0 24px 70px ${project.accentColor}15`,
      }}
    >
      {/* Top gradient bar */}
      <div style={{ height: '3px', background: project.gradient, flexShrink: 0 }} />

      {/* Header */}
      <div style={{
        padding: '1.75rem 1.75rem 0',
        background: `linear-gradient(180deg, ${project.accentColor}06 0%, transparent 100%)`,
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '48px', height: '48px',
              borderRadius: '12px',
              background: `${project.accentColor}15`,
              border: `1px solid ${project.accentColor}25`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem',
              flexShrink: 0,
            }}>
              {project.emoji}
            </div>
            <div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 800,
                fontSize: '1.15rem',
                color: 'var(--text-primary)',
                lineHeight: 1.1,
              }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.75rem', color: project.accentColor, fontWeight: 600, marginTop: '0.15rem' }}>
                {project.subtitle}
              </p>
            </div>
          </div>

          {project.featured && (
            <span style={{
              padding: '0.2rem 0.6rem',
              borderRadius: '2rem',
              background: 'rgba(245,158,11,0.1)',
              border: '1px solid rgba(245,158,11,0.25)',
              fontSize: '0.65rem',
              fontWeight: 700,
              color: '#f59e0b',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}>
              ⭐ Featured
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.25rem 1.75rem', flex: 1 }}>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.88rem',
          lineHeight: 1.8,
          marginBottom: '1rem',
        }}>
          {project.description}
        </p>

        {/* Expanded description */}
        <motion.div
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.83rem',
            lineHeight: 1.8,
            marginBottom: '1rem',
            fontStyle: 'italic',
            borderLeft: `2px solid ${project.accentColor}40`,
            paddingLeft: '0.85rem',
          }}>
            {project.longDesc}
          </p>
        </motion.div>

        {/* Read more toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          style={{
            background: 'none', border: 'none',
            cursor: 'pointer',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: project.accentColor,
            marginBottom: '1.25rem',
            padding: 0,
            letterSpacing: '0.02em',
          }}
        >
          {expanded ? '↑ Show less' : '↓ Read more'}
        </button>

        {/* Metrics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.25rem' }}>
          {project.metrics.map((m) => (
            <div key={m} style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.8rem', color: '#cbd5e1',
            }}>
              <span style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: project.accentColor,
                boxShadow: `0 0 5px ${project.accentColor}`,
                flexShrink: 0,
              }} />
              {m}
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: '0.22rem 0.65rem',
              borderRadius: '2rem',
              background: `${project.accentColor}10`,
              border: `1px solid ${project.accentColor}20`,
              fontSize: '0.7rem',
              fontWeight: 600,
              color: project.accentColor,
              fontFamily: 'JetBrains Mono, monospace',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: '1rem 1.75rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        gap: '0.75rem',
      }}>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          id={`github-${project.id}`}
          aria-label={`View ${project.title} on GitHub`}
          whileHover={{ scale: 1.04, boxShadow: `0 8px 24px ${project.accentColor}35` }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.6rem 1.25rem',
            borderRadius: '8px',
            background: project.gradient,
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.82rem',
            fontWeight: 700,
            fontFamily: 'Outfit, sans-serif',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <FaGithub />
          View Code
        </motion.a>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" style={{
      padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '40%', left: '-200px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-label">🚀 Portfolio</div>
          <h2 className="section-title">
            Featured{' '}
            <span className="gradient-text-2">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '0.95rem' }}>
            Real applications built and shipped to production
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem',
        }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Internship */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            padding: '1.75rem 2rem',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.06), rgba(236,72,153,0.04))',
            border: '1px solid rgba(139,92,246,0.15)',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '1.25rem',
            alignItems: 'start',
          }}
        >
          <div style={{
            width: '52px', height: '52px',
            borderRadius: '12px',
            background: 'rgba(139,92,246,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem',
            flexShrink: 0,
          }}>
            💼
          </div>
          <div>
            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--text-primary)',
              marginBottom: '0.25rem',
            }}>
              Flutter Full Stack Developer Intern
            </div>
            <div style={{ fontSize: '0.82rem', color: '#a78bfa', marginBottom: '0.5rem', fontWeight: 500 }}>
              Technical Hub Pvt. Ltd. · May 2025 – June 2025
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7 }}>
              Built 3 multi-screen mobile apps with Flutter & Dart · Integrated 5+ backend APIs with
              Firebase Auth and Firestore · Enabled real-time event booking for 100+ users ·
              Collaborated in a team of 4, delivering reusable widgets and optimizing app performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
