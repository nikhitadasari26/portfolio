import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import {
  SiFlutter, SiFirebase, SiMongodb, SiNodedotjs, SiDart
} from 'react-icons/si'

const projects = [
  {
    id: 'qlue',
    title: 'QLUE',
    subtitle: 'AI Powered Resume Interview App',
    description:
      'An AI-powered interview prep app that generates 10–15 personalized mock questions per resume. Implements smart question generation using Gemini AI and deploys scalable backend services on AWS Cloud to handle concurrent interview sessions efficiently.',
    tags: ['Flutter', 'Firebase', 'AWS Cloud', 'Gemini AI', 'Dart'],
    tagIcons: { Flutter: SiFlutter, Firebase: SiFirebase, Dart: SiDart },
    github: 'https://github.com/nikhitadasari26/Qlue',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    accentColor: '#8b5cf6',
    emoji: '🤖',
    highlights: [
      '10–15 personalized questions per resume',
      'Gemini AI integration',
      'AWS Cloud scalable backend',
    ],
  },
  {
    id: 'creatoros',
    title: 'CREATOROS',
    subtitle: 'AI Powered Creator Operating System',
    description:
      'An all-in-one platform for content creators integrating video editing, analytics, publishing, AI scripting, and media management. Features intelligent tools including AI script generation, auto captions, thumbnail analysis, trend discovery, and personalized recommendations.',
    tags: ['Flutter', 'Firebase', 'MongoDB', 'AWS', 'OpenAI', 'FFmpeg', 'Node.js'],
    tagIcons: { Flutter: SiFlutter, Firebase: SiFirebase, MongoDB: SiMongodb, 'Node.js': SiNodedotjs },
    github: 'https://github.com/Dhanushkotichukka/creatoros_app',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    accentColor: '#ec4899',
    emoji: '🎬',
    highlights: [
      'Multi-platform content publishing',
      'Real-time analytics dashboard',
      'AI-powered script generation',
    ],
  },
  {
    id: 'planzo',
    title: 'PLANZO',
    subtitle: 'Task Management & Reminder App',
    description:
      'A feature-rich task management app with categories, priorities, and scheduled reminders. Integrates Firebase Authentication and Firestore to manage 100+ user tasks with real-time updates, push notifications, and seamless cross-device sync.',
    tags: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Notifications'],
    tagIcons: { Flutter: SiFlutter, Dart: SiDart, Firebase: SiFirebase },
    github: 'https://github.com/nikhitadasari26/Planzo',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    accentColor: '#06b6d4',
    emoji: '📋',
    highlights: [
      'Real-time sync across devices',
      '100+ user task management',
      'Smart push notifications',
    ],
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      style={{
        borderRadius: '1.25rem',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onHoverStart={(e) => {
        if (e.target && e.target.style) {
          e.target.style.borderColor = `${project.accentColor}40`
          e.target.style.boxShadow = `0 20px 60px ${project.accentColor}20`
        }
      }}
    >
      {/* Gradient top strip */}
      <div style={{
        height: '4px',
        background: project.gradient,
      }} />

      {/* Glowing top banner */}
      <div style={{
        padding: '2rem 2rem 1.5rem',
        background: `linear-gradient(180deg, ${project.accentColor}08 0%, transparent 100%)`,
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.25rem',
            }}>
              <span style={{ fontSize: '1.75rem' }}>{project.emoji}</span>
              <div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.3rem',
                  color: '#f1f5f9',
                  lineHeight: 1.1,
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: '0.8rem',
                  color: project.accentColor,
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  marginTop: '0.15rem',
                }}>
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* GitHub link */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            id={`github-${project.id}`}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '0.6rem',
              background: `${project.accentColor}15`,
              border: `1px solid ${project.accentColor}30`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: project.accentColor,
              textDecoration: 'none',
              fontSize: '1.1rem',
              flexShrink: 0,
            }}
          >
            <FaGithub />
          </motion.a>
        </div>

        {/* Description */}
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          lineHeight: 1.8,
          marginBottom: '1.5rem',
        }}>
          {project.description}
        </p>

        {/* Highlights */}
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          marginBottom: '1.5rem',
        }}>
          {project.highlights.map((h) => (
            <li key={h} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.82rem',
              color: '#cbd5e1',
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: project.accentColor,
                flexShrink: 0,
              }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: '0.25rem 0.7rem',
              borderRadius: '2rem',
              background: `${project.accentColor}12`,
              border: `1px solid ${project.accentColor}25`,
              fontSize: '0.72rem',
              fontWeight: 600,
              color: project.accentColor,
              letterSpacing: '0.02em',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{
        marginTop: 'auto',
        padding: '1.25rem 2rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        gap: '0.75rem',
      }}>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          id={`view-repo-${project.id}`}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.25rem',
            borderRadius: '0.5rem',
            background: project.gradient,
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.03em',
            fontFamily: 'Outfit, sans-serif',
          }}
        >
          <FaGithub />
          View Repository
        </motion.a>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '-200px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          ref={ref}
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
            What I've Built
          </span>
          <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
            Featured{' '}
            <span style={{
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Projects
            </span>
          </h2>
          <p className="section-subheading" style={{ margin: '0.75rem auto 0', textAlign: 'center' }}>
            Real-world applications built with cutting-edge technology
          </p>
        </motion.div>

        {/* Project cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Internship callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            marginTop: '3rem',
            padding: '1.75rem 2rem',
            borderRadius: '1rem',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(236,72,153,0.06))',
            border: '1px solid rgba(139,92,246,0.2)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '2rem', flexShrink: 0 }}>💼</span>
          <div>
            <h3 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '1.05rem',
              color: '#f1f5f9',
              marginBottom: '0.4rem',
            }}>
              Flutter Full Stack Developer Intern — Technical Hub Pvt. Ltd.
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7 }}>
              May 2025 – June 2025 · Built 3 multi-screen mobile apps with Flutter & Dart,
              integrated 5+ backend APIs with Firebase Auth and Firestore enabling real-time event booking
              for 100+ users. Collaborated in a team of 4 to deliver reusable widgets and optimize app performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
