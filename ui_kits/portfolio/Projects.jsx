/* global React, SectionHeader, Pill, Magnetic */

const { useState: useStateP } = React;

// Monochrome line icons (1.3px stroke, currentColor). One per project.
const DrumIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7l1.5-4h7L13 7"/>
    <ellipse cx="8" cy="8" rx="5.2" ry="1.6"/>
    <path d="M3.5 9.5l-1 3.5"/>
    <path d="M12.5 9.5l1 3.5"/>
    <path d="M6.2 9.2l-.7 3.3"/>
    <path d="M9.8 9.2l.7 3.3"/>
  </svg>
);
const LockIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="10" height="7" rx="1.5"/>
    <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>
    <circle cx="8" cy="10.5" r="0.7" fill="currentColor" stroke="none"/>
    <path d="M8 11.2v1.5"/>
  </svg>
);
const CatIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3.2 L3.6 7.3 L5.8 5.6 Z"/>
    <path d="M13 3.2 L12.4 7.3 L10.2 5.6 Z"/>
    <path d="M3.6 7.3 C 3 9.8, 4.4 12.3, 6.6 12.8 C 7.6 13, 8.4 13, 9.4 12.8 C 11.6 12.3, 13 9.8, 12.4 7.3"/>
    <circle cx="6.4" cy="9" r="0.55" fill="currentColor" stroke="none"/>
    <circle cx="9.6" cy="9" r="0.55" fill="currentColor" stroke="none"/>
    <path d="M7.4 10.6 L8 11.2 L8.6 10.6"/>
    <path d="M5.4 10.4 L3.2 10"/>
    <path d="M5.4 10.9 L3.4 11.2"/>
    <path d="M10.6 10.4 L12.8 10"/>
    <path d="M10.6 10.9 L12.6 11.2"/>
  </svg>
);

const PROJECTS = [
  {
    id: 'drummer-sim',
    index: '01',
    category: 'music',
    title: 'Drummer Simulator',
    Icon: DrumIcon,
    blurb: 'A playable drum kit in the browser. Web Audio for the sounds, Canvas for the kit, keyboard + MIDI input. Built because nothing online felt like a real kit.',
    stack: ['TypeScript', 'Web Audio', 'Canvas', 'MIDI'],
    status: 'wip',
    statusLabel: 'WIP',
    href: '#',
  },
  {
    id: 'recon-cli',
    index: '02',
    category: 'security',
    title: 'recon-cli',
    Icon: LockIcon,
    blurb: 'A small Go tool that wraps nmap + a few HTTP probes into one report. Built while studying for OSCP. Single binary, no config.',
    stack: ['Go', 'Cobra', 'nmap'],
    status: 'live',
    statusLabel: 'shipped',
    href: '#',
  },
  {
    id: 'paw-prints',
    index: '03',
    category: 'side',
    title: 'paw-prints',
    Icon: CatIcon,
    blurb: 'A tiny site that logs photos of my cats and dog with EXIF metadata, on a static budget. Wrote it in a weekend because I missed them.',
    stack: ['Astro', 'TypeScript', 'EXIF'],
    status: 'live',
    statusLabel: 'shipped',
    href: '#',
  },
];

function ProjectCard({ p }) {
  const [hover, setHover] = useStateP(false);
  const tones = {
    live: { color: '#2BD37B' },
    wip:  { color: '#FF8A3D' },
    crit: { color: '#FF4D4D' },
  };
  const tone = tones[p.status];

  return (
    <Magnetic strength={0.12} radius={80} tilt>
      <a href={p.href}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         style={{
           display: 'block', textDecoration: 'none', color: 'inherit',
           background: '#121215',
           border: hover ? '1px solid rgba(255,184,0,0.4)' : '1px solid rgba(255,255,255,0.08)',
           boxShadow: hover ? '0 8px 40px -8px rgba(255,184,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)' : 'inset 0 1px 0 rgba(255,255,255,0.04)',
           borderRadius: 10,
           padding: 28,
           transition: 'border-color .25s cubic-bezier(.22,1,.36,1), box-shadow .25s cubic-bezier(.22,1,.36,1)',
           display: 'flex', flexDirection: 'column', gap: 22,
           minHeight: 280, height: '100%',
         }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontFamily: 'var(--rs-font-mono)', fontSize: 10, letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: hover ? '#FFCC33' : 'rgba(255,255,255,0.4)',
            transition: 'color .2s ease',
          }}>{p.index} · {p.category}</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily: 'var(--rs-font-mono)', fontSize: 11, ...tone,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 50, background: tone.color }} />
            {p.statusLabel}
          </span>
        </div>

        <div style={{ flex: 1 }}>
          <h3 style={{
            fontFamily: 'var(--rs-font-sans)', fontSize: 26, fontWeight: 600,
            letterSpacing: '-0.025em', lineHeight: 1.1, color: '#fff', margin: 0,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff',
              transform: hover ? 'rotate(-6deg) scale(1.08)' : 'rotate(0deg)',
              transition: 'transform .35s cubic-bezier(.34,1.56,.64,1)',
            }}>
              <p.Icon size={22} />
            </span>
            {p.title}
          </h3>
          <p style={{
            fontFamily: 'var(--rs-font-sans)', fontSize: 14, lineHeight: 1.55,
            color: 'rgba(255,255,255,0.6)', letterSpacing: '-0.005em', margin: '14px 0 0',
            textWrap: 'pretty',
          }}>{p.blurb}</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {p.stack.map((t) => (
            <span key={t} style={{
              fontFamily: 'var(--rs-font-mono)', fontSize: 10, letterSpacing: '0.04em',
              color: 'rgba(255,255,255,0.6)',
              padding: '3px 8px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 999,
            }}>{t}</span>
          ))}
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--rs-font-mono)', fontSize: 12,
          color: hover ? '#FFCC33' : 'rgba(255,255,255,0.4)',
          transition: 'color .2s ease',
        }}>
          <span>view case</span>
          <span style={{
            display: 'inline-block',
            transform: hover ? 'translateX(6px)' : 'translateX(0)',
            transition: 'transform .25s cubic-bezier(.22,1,.36,1)',
          }}>→</span>
        </div>
      </a>
    </Magnetic>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader index="02" title="PROJECTS" kicker={<>What I'm building. <span style={{ color: 'rgba(255,255,255,0.45)' }}>From music to malware analysis.</span></>} />
        <div style={{
          display: 'grid', gap: 20,
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        }}>
          {PROJECTS.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Projects, PROJECTS });
