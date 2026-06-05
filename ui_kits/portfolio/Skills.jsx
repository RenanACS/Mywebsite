/* global React, SectionHeader, Pill, useLang, T */

const SKILL_ITEMS = [
  [
    { name: 'TypeScript', tone: 'live', icon: 'https://cdn.simpleicons.org/typescript/fff' },
    { name: 'Go', tone: 'live', icon: 'https://cdn.simpleicons.org/go/fff' },
    { name: 'Node.js', tone: 'live', icon: 'https://cdn.simpleicons.org/nodedotjs/fff' },
    { name: 'React', tone: 'live', icon: 'https://cdn.simpleicons.org/react/fff' },
    { name: 'PostgreSQL', tone: 'live', icon: 'https://cdn.simpleicons.org/postgresql/fff' },
    { name: 'Linux', tone: 'live', icon: 'https://cdn.simpleicons.org/linux/fff' },
    { name: 'Git', tone: 'live', icon: 'https://cdn.simpleicons.org/git/fff' },
    { name: 'Docker', tone: 'live', icon: 'https://cdn.simpleicons.org/docker/fff' },
  ],
  [
    { name: 'OSCP', tone: 'accent', icon: 'https://cdn.simpleicons.org/kalilinux/fff' },
    { name: 'Burp Suite', tone: 'accent', icon: 'https://cdn.simpleicons.org/burpsuite/fff' },
    { name: 'nmap', tone: 'accent' },
    { name: 'Metasploit', tone: 'accent', icon: 'https://cdn.simpleicons.org/metasploit/fff' },
    { name: 'Wireshark', tone: 'accent', icon: 'https://cdn.simpleicons.org/wireshark/fff' },
    { name: 'Bash scripting', tone: 'accent', icon: 'https://cdn.simpleicons.org/gnubash/fff' },
    { name: 'Python', tone: 'accent', icon: 'https://cdn.simpleicons.org/python/fff' },
    { name: 'Active Directory', tone: 'accent' },
    { name: 'web app sec', tone: 'accent' },
  ],
];

function Skills() {
  const { lang } = useLang();
  const t = T[lang].skills;

  return (
    <section id="skills" style={{ padding: '120px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          index="03"
          title={t.title}
          kicker={<>{t.kicker1} <span style={{ color: 'rgba(255,255,255,0.45)' }}>{t.kicker2}</span></>}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {t.groups.map((group, i) => (
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
                  color: i === 1 ? '#FFCC33' : 'rgba(255,255,255,0.4)',
                  marginBottom: 8,
                }}>{`0${i+1} / ${group.eyebrow.toUpperCase()}`}</div>
                <div style={{
                  fontFamily: 'var(--rs-font-sans)', fontSize: 18, fontWeight: 500,
                  letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.3,
                }}>{group.headline}</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {SKILL_ITEMS[i].map((item) => (
                  <Pill key={item.name} tone={item.tone}>
                    {item.icon ? <img src={item.icon} alt={item.name} title={item.name} style={{ width: 16, height: 16, display: 'block' }} /> : item.name}
                  </Pill>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

Object.assign(window, { Skills });
