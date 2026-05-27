/* global React, SectionHeader, Pill */

const SKILLS = [
  {
    eyebrow: 'shipping',
    headline: 'What I reach for first.',
    items: [
      { name: 'TypeScript', tone: 'live' },
      { name: 'Go', tone: 'live' },
      { name: 'Node.js', tone: 'live' },
      { name: 'React', tone: 'live' },
      { name: 'PostgreSQL', tone: 'live' },
      { name: 'Linux', tone: 'live' },
      { name: 'Git', tone: 'live' },
      { name: 'Docker', tone: 'live' },
    ],
  },
  {
    eyebrow: 'studying',
    headline: 'Where I\'m headed.',
    items: [
      { name: 'OSCP', tone: 'accent' },
      { name: 'Burp Suite', tone: 'accent' },
      { name: 'nmap', tone: 'accent' },
      { name: 'Metasploit', tone: 'accent' },
      { name: 'Wireshark', tone: 'accent' },
      { name: 'Bash scripting', tone: 'accent' },
      { name: 'Python', tone: 'accent' },
      { name: 'Active Directory', tone: 'accent' },
      { name: 'web app sec', tone: 'accent' },
    ],
  },
  {
    eyebrow: 'familiar',
    headline: 'Shipped with, would do again.',
    items: [
      { name: 'Rust', tone: 'default' },
      { name: 'Next.js', tone: 'default' },
      { name: 'AWS', tone: 'default' },
      { name: 'Redis', tone: 'default' },
      { name: 'GraphQL', tone: 'default' },
      { name: 'Tailwind', tone: 'default' },
      { name: 'Vim', tone: 'default' },
      { name: 'tmux', tone: 'default' },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          index="03"
          title="SKILLS"
          kicker={<>The stack. <span style={{ color: 'rgba(255,255,255,0.45)' }}>Three lists: shipping, studying, familiar.</span></>}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {SKILLS.map((group, i) => (
            <div key={group.eyebrow} style={{
              display: 'grid', gridTemplateColumns: '220px 1fr', gap: 48,
              padding: '24px 0',
              borderTop: i === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              alignItems: 'start',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--rs-font-mono)', fontSize: 10, letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: group.eyebrow === 'studying' ? '#FFCC33' : 'rgba(255,255,255,0.4)',
                  marginBottom: 8,
                }}>{`0${i+1} / ${group.eyebrow.toUpperCase()}`}</div>
                <div style={{
                  fontFamily: 'var(--rs-font-sans)', fontSize: 18, fontWeight: 500,
                  letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.3,
                }}>{group.headline}</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.items.map((item) => (
                  <Pill key={item.name} tone={item.tone}>{item.name}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* tiny CTA-style note */}
        <p style={{
          fontFamily: 'var(--rs-font-mono)', fontSize: 12, color: 'rgba(255,255,255,0.4)',
          marginTop: 32, letterSpacing: '0.02em',
        }}>// the list grows. ping me about anything not here.</p>
      </div>
    </section>
  );
}

Object.assign(window, { Skills, SKILLS });
