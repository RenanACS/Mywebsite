/* global React, Magnetic, Button, Pill */

function Hero() {
  return (
    <section id="top" style={{
      minHeight: '100vh', position: 'relative',
      padding: '160px 32px 120px',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
        {/* status row */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '6px 12px', borderRadius: 999,
          border: '1px solid rgba(43,211,123,0.3)',
          background: '#121215',
          marginBottom: 32,
        }}>
          <span style={{ position: 'relative', width: 8, height: 8 }}>
            <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#2BD37B' }} />
            <span style={{ position: 'absolute', inset: -3, borderRadius: '50%', background: '#2BD37B', opacity: 0.4, animation: 'rsPulse 2s ease-out infinite' }} />
          </span>
          <span style={{
            fontFamily: 'var(--rs-font-mono)', fontSize: 11, letterSpacing: '0.06em',
            color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase',
          }}>Available — heading toward red team</span>
        </div>

        {/* the big line */}
        <h1 style={{
          fontFamily: 'var(--rs-font-sans)', fontWeight: 600,
          fontSize: 'clamp(56px, 9vw, 120px)', lineHeight: 0.96,
          letterSpacing: '-0.045em', color: '#fff', margin: 0,
          textWrap: 'balance',
        }}>
          Renan Soares.<br />
          <span style={{ color: 'rgba(255,255,255,0.45)' }}>I break things</span><br />
          <span style={{ color: 'rgba(255,255,255,0.45)' }}>on purpose.</span>
        </h1>

        <p style={{
          fontFamily: 'var(--rs-font-sans)', fontSize: 18, lineHeight: 1.55,
          color: 'rgba(255,255,255,0.6)', maxWidth: 560, marginTop: 32,
          letterSpacing: '-0.01em',
        }}>
          Software engineer by day, drummer by night, learning to break into systems on weekends. I write code, read manpages, and keep a list of <span style={{
            fontFamily: 'var(--rs-font-mono)', fontSize: '0.92em', background: '#121215',
            border: '1px solid rgba(255,255,255,0.1)', padding: '1px 6px', borderRadius: 4,
          }}>CVE</span> tabs open.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, marginTop: 40, alignItems: 'center' }}>
          <Magnetic strength={0.25} radius={40}>
            <Button href="#projects">See projects <span style={{ fontFamily: 'var(--rs-font-mono)' }}>→</span></Button>
          </Magnetic>
          <Magnetic strength={0.2} radius={40}>
            <Button variant="secondary" href="mailto:contact@example.com">Say hi</Button>
          </Magnetic>
          <span style={{
            fontFamily: 'var(--rs-font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.35)',
            marginLeft: 8, letterSpacing: '0.02em',
          }}>// hover the buttons — they pull back</span>
        </div>

        {/* tiny coordinate readout at bottom-left */}
        <div style={{
          position: 'absolute', bottom: 32, left: 32, display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <span style={{
            fontFamily: 'var(--rs-font-mono)', fontSize: 10, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)',
          }}>scroll ↓</span>
          <span style={{ width: 60, height: 1, background: 'rgba(255,255,255,0.16)' }} />
        </div>

        {/* tiny location/time at bottom-right */}
        <div style={{
          position: 'absolute', bottom: 32, right: 32,
          fontFamily: 'var(--rs-font-mono)', fontSize: 10, letterSpacing: '0.04em',
          color: 'rgba(255,255,255,0.32)', textAlign: 'right',
        }}>
          <div>// 2026</div>
          <div>// v0.1 portfolio</div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
