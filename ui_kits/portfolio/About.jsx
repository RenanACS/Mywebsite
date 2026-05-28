/* global React, SectionHeader, Pill, useLang, T */

function About() {
  const { lang } = useLang();
  const t = T[lang].about;

  return (
    <section id="about" style={{ padding: '120px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          index="01"
          title={t.title}
          kicker={<>{t.kicker1} <span style={{ color: 'rgba(255,255,255,0.45)' }}>{t.kicker2}</span></>}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'start' }}>
          {/* bio column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <p style={{
              fontFamily: 'var(--rs-font-sans)', fontSize: 19, lineHeight: 1.55,
              color: 'rgba(255,255,255,0.85)', letterSpacing: '-0.015em', margin: 0,
              textWrap: 'pretty',
            }}>
              {t.bio1a}<strong style={{ color: '#fff', fontWeight: 600 }}>Renan</strong>{t.bio1b}
            </p>
            <p style={{
              fontFamily: 'var(--rs-font-sans)', fontSize: 17, lineHeight: 1.6,
              color: 'rgba(255,255,255,0.62)', letterSpacing: '-0.01em', margin: 0,
              textWrap: 'pretty',
            }}>
              {t.bio2a}<strong style={{ color: '#FFCC33', fontWeight: 500 }}>{t.bio2b}</strong>{t.bio2c}<span style={{
                fontFamily: 'var(--rs-font-mono)', fontSize: '0.9em', background: '#121215',
                border: '1px solid rgba(255,255,255,0.1)', padding: '1px 6px', borderRadius: 4,
                color: 'rgba(255,255,255,0.85)',
              }}>OSCP</span>{t.bio2d}
            </p>
            <p style={{
              fontFamily: 'var(--rs-font-sans)', fontSize: 17, lineHeight: 1.6,
              color: 'rgba(255,255,255,0.62)', letterSpacing: '-0.01em', margin: 0,
            }}>
              {t.bio3}
            </p>
          </div>

          {/* side facts column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <FactRow k={t.keys.based} v={t.vals.based} />
            <FactRow k={t.keys.dayJob} v={t.vals.dayJob} />
            <FactRow k={t.keys.studying} v={t.vals.studying} />
            <FactRow k={t.keys.instrument} v={t.vals.instrument} />
            <FactRow k={t.keys.companions} v={t.vals.companions} />
            <FactRow k={t.keys.editor} v="Neovim" />
            <FactRow k={t.keys.shell} v="zsh + tmux" />
            <FactRow k={t.keys.reading} v={<span><em>The Web App Hacker's Handbook</em></span>} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FactRow({ k, v }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '110px 1fr', gap: 16,
      padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
      alignItems: 'baseline',
    }}>
      <span style={{
        fontFamily: 'var(--rs-font-mono)', fontSize: 11, letterSpacing: '0.04em',
        color: 'rgba(255,255,255,0.4)', textTransform: 'lowercase',
      }}>{k}</span>
      <span style={{
        fontFamily: 'var(--rs-font-sans)', fontSize: 14, letterSpacing: '-0.01em',
        color: 'rgba(255,255,255,0.85)',
      }}>{v}</span>
    </div>
  );
}

Object.assign(window, { About });
