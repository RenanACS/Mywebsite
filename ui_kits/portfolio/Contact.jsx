/* global React, Magnetic, SocialIcon, SOCIAL */

function Contact() {
  return (
    <section id="contact" style={{
      padding: '120px 32px 80px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--rs-font-mono)', fontSize: 10, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 24,
        }}>04 / CONTACT</div>

        <Magnetic strength={0.06} radius={300}>
          <a href={`mailto:contact@example.com`} style={{
            display: 'inline-block', textDecoration: 'none', color: '#fff',
            fontFamily: 'var(--rs-font-sans)', fontWeight: 600,
            fontSize: 'clamp(48px, 8vw, 96px)', lineHeight: 0.96,
            letterSpacing: '-0.045em',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#FFCC33'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>
            Let's talk. <span style={{ color: 'rgba(255,255,255,0.4)' }}>→</span>
          </a>
        </Magnetic>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 32 }}>
          <Magnetic strength={0.4}><SocialIcon kind="github" href={SOCIAL.github} /></Magnetic>
          <Magnetic strength={0.4}><SocialIcon kind="linkedin" href={SOCIAL.linkedin} /></Magnetic>
          <Magnetic strength={0.4}><SocialIcon kind="instagram" href={SOCIAL.instagram} /></Magnetic>
          <span style={{
            fontFamily: 'var(--rs-font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.4)',
            marginLeft: 8, letterSpacing: '0.02em',
          }}>
            github · linkedin · instagram
          </span>
        </div>

        {/* footer line */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginTop: 96, paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          fontFamily: 'var(--rs-font-mono)', fontSize: 11,
          color: 'rgba(255,255,255,0.35)', letterSpacing: '0.02em',
        }}>
          <span>© 2026 Renan Augusto da Costa Soares</span>
          <span>built · 0 frameworks · 1 cursor</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Contact });
