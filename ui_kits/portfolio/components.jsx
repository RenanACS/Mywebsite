/* global React */
// Shared primitives. Every styles object is uniquely named to avoid global collisions.

const componentsCss = {
  eyebrow: {
    fontFamily: 'var(--rs-font-mono)',
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.4)',
  },
};

function Eyebrow({ children, accent, style }) {
  return (
    <div style={{ ...componentsCss.eyebrow, color: accent ? '#FFCC33' : 'rgba(255,255,255,0.4)', ...style }}>
      {children}
    </div>
  );
}

function SectionHeader({ index, title, kicker }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48 }}>
      <div>
        <Eyebrow style={{ marginBottom: 14 }}>{`${index} / ${title}`}</Eyebrow>
        <div style={{
          fontFamily: 'var(--rs-font-sans)', fontSize: 44, fontWeight: 600,
          letterSpacing: '-0.035em', lineHeight: 1.04, color: '#fff',
        }}>{kicker}</div>
      </div>
    </div>
  );
}

function Pill({ children, tone = 'default' }) {
  const tones = {
    default: { color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)' },
    accent:  { color: '#FFCC33', border: '1px solid rgba(255,184,0,0.4)', background: 'rgba(255,184,0,0.08)' },
    live:    { color: '#2BD37B', border: '1px solid rgba(43,211,123,0.3)' },
    warn:    { color: '#FF8A3D', border: '1px solid rgba(255,138,61,0.3)' },
    crit:    { color: '#FF4D4D', border: '1px solid rgba(255,77,77,0.3)' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 999,
      fontFamily: 'var(--rs-font-mono)', fontSize: 11, letterSpacing: '0.02em',
      background: '#121215',
      ...tones[tone],
    }}>
      {tone !== 'default' && tone !== 'accent' && (
        <span style={{ width: 6, height: 6, borderRadius: 50, background: tones[tone].color }} />
      )}
      {children}
    </span>
  );
}

function Button({ children, variant = 'primary', as = 'a', href = '#', onClick }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    padding: '14px 22px', borderRadius: 10,
    fontFamily: 'var(--rs-font-sans)', fontSize: 15, fontWeight: 500,
    letterSpacing: '-0.01em', textDecoration: 'none', cursor: 'pointer',
    border: '1px solid transparent', transition: 'all .2s cubic-bezier(.22,1,.36,1)',
  };
  const variants = {
    primary:   { background: '#FFB800', color: '#fff' },
    secondary: { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.16)' },
    ghost:     { background: 'transparent', color: 'rgba(255,255,255,0.7)' },
  };
  const onEnter = (e) => {
    if (variant === 'primary') e.currentTarget.style.background = '#FFCC33';
    else if (variant === 'secondary') {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.36)';
      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
    } else e.currentTarget.style.color = '#fff';
  };
  const onLeave = (e) => {
    Object.assign(e.currentTarget.style, variants[variant]);
  };
  const Tag = as;
  return (
    <Tag href={href} onClick={onClick} onMouseEnter={onEnter} onMouseLeave={onLeave}
         style={{ ...base, ...variants[variant] }}>
      {children}
    </Tag>
  );
}

function SocialIcon({ kind, href }) {
  const paths = {
    github: (
      <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8c0 2.87 1.86 5.31 4.44 6.17.32.06.44-.14.44-.31 0-.15-.01-.66-.01-1.2-1.81.33-2.28-.44-2.42-.84-.08-.21-.43-.84-.74-1.01-.25-.14-.61-.47-.01-.48.57-.01.97.52 1.11.74.65 1.09 1.69.78 2.11.6.06-.47.25-.78.46-.96-1.6-.18-3.28-.8-3.28-3.55 0-.78.28-1.43.74-1.93-.07-.18-.32-.92.07-1.91 0 0 .6-.19 1.98.74A6.68 6.68 0 0 1 8 4.65c.6 0 1.21.08 1.77.24 1.38-.94 1.98-.74 1.98-.74.39.99.15 1.73.07 1.91.46.5.74 1.14.74 1.93 0 2.76-1.68 3.37-3.29 3.55.26.22.49.66.49 1.34 0 .97-.01 1.74-.01 1.98 0 .17.12.38.45.31A6.51 6.51 0 0 0 14.5 8c0-3.59-2.91-6.5-6.5-6.5Z" />
    ),
    linkedin: (
      <>
        <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" />
        <circle cx="4.5" cy="5" r="0.7" fill="currentColor" stroke="none" />
        <path d="M4.5 7v5" />
        <path d="M7.5 12V7" />
        <path d="M7.5 9.2c0-1.2.9-2.2 2.05-2.2 1.15 0 2.05 1 2.05 2.2V12" />
      </>
    ),
    instagram: (
      <>
        <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" />
        <circle cx="8" cy="8" r="3" />
        <circle cx="11.6" cy="4.4" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  };
  return (
    <a href={href} target="_blank" rel="noreferrer"
       style={{
         width: 36, height: 36, borderRadius: 8,
         border: '1px solid rgba(255,255,255,0.12)',
         display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
         color: 'rgba(255,255,255,0.7)', transition: 'all .2s cubic-bezier(.22,1,.36,1)',
       }}
       onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.32)'; }}
       onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {paths[kind]}
      </svg>
    </a>
  );
}

function Logo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ color: '#fff' }}>
      <rect x="2" y="2" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.25" />
      <path d="M9 22V10h5.2c2.1 0 3.6 1.3 3.6 3.2 0 1.6-1 2.7-2.5 3.05L18.5 22h-2.2l-3-5.5H11V22H9zm2-7.3h3c1.1 0 1.8-.6 1.8-1.55S15.1 11.6 14 11.6h-3V14.7z" fill="currentColor" />
      <path d="M19.5 19.4c.3 1 1.1 1.5 2.4 1.5 1.1 0 1.8-.5 1.8-1.25 0-.9-.75-1.1-2.05-1.4-1.7-.4-3.1-.95-3.1-2.7 0-1.65 1.35-2.7 3.3-2.7 1.95 0 3.15.95 3.45 2.45l-1.85.35c-.2-.85-.8-1.3-1.65-1.3-.95 0-1.55.45-1.55 1.1 0 .8.85 1 2.05 1.3 1.7.4 3.15.95 3.15 2.8 0 1.85-1.5 2.85-3.6 2.85-2.1 0-3.5-1-3.85-2.7l1.5-.3z" fill="currentColor" />
    </svg>
  );
}

Object.assign(window, { Eyebrow, SectionHeader, Pill, Button, SocialIcon, Logo });
