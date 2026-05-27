/* global React, SectionHeader, Pill */

function About() {
  return (
    <section id="about" style={{ padding: '120px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader index="01" title="ABOUT" kicker={<>A few facts. <span style={{ color: 'rgba(255,255,255,0.45)' }}>About me.</span></>} />

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'start' }}>
          {/* bio column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <p style={{
              fontFamily: 'var(--rs-font-sans)', fontSize: 19, lineHeight: 1.55,
              color: 'rgba(255,255,255,0.85)', letterSpacing: '-0.015em', margin: 0,
              textWrap: 'pretty',
            }}>
              I'm <strong style={{ color: '#fff', fontWeight: 600 }}>Renan</strong>, a software engineer from Brazil. I came up writing application code and got hooked on the layer underneath — kernels, networks, the shape of how things actually run.
            </p>
            <p style={{
              fontFamily: 'var(--rs-font-sans)', fontSize: 17, lineHeight: 1.6,
              color: 'rgba(255,255,255,0.62)', letterSpacing: '-0.01em', margin: 0,
              textWrap: 'pretty',
            }}>
              I'm pivoting into <strong style={{ color: '#FFCC33', fontWeight: 500 }}>offensive security</strong> — red team, pentest, the kind of work where you read a system long enough to find the seams. Studying for <span style={{
                fontFamily: 'var(--rs-font-mono)', fontSize: '0.9em', background: '#121215',
                border: '1px solid rgba(255,255,255,0.1)', padding: '1px 6px', borderRadius: 4,
                color: 'rgba(255,255,255,0.85)',
              }}>OSCP</span>, sharpening tooling in CTFs, building things that put me closer to the metal.
            </p>
            <p style={{
              fontFamily: 'var(--rs-font-sans)', fontSize: 17, lineHeight: 1.6,
              color: 'rgba(255,255,255,0.62)', letterSpacing: '-0.01em', margin: 0,
            }}>
              When I'm not at the keyboard I'm at a kit. Drums have been the longest-running thing in my life — patience, listening, repetition — and they show up in everything else I do.
            </p>
          </div>

          {/* side facts column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <FactRow k="based" v="Brazil" />
            <FactRow k="day job" v="Software engineer" />
            <FactRow k="studying" v="OSCP · web app hacking" />
            <FactRow k="instrument" v="Drums · 12 years and counting" />
            <FactRow k="companions" v="2 cats, 1 dog" />
            <FactRow k="editor" v="Neovim" />
            <FactRow k="shell" v="zsh + tmux" />
            <FactRow k="reading" v={<span><em>The Web App Hacker's Handbook</em></span>} />
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
