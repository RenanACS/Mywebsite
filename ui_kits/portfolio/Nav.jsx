/* global React, Logo, SocialIcon, Magnetic, useLang, T */

const { useEffect: useEffectN, useState: useStateN } = React;

const SOCIAL = {
  github: 'https://github.com/RenanACS',
  linkedin: 'https://www.linkedin.com/in/renan-augusto-soares-883983411',
  instagram: 'https://instagram.com/renanacsoares',
};

function LangToggle() {
  const { lang, setLang } = useLang();

  const btn = (code) => (
    <button
      key={code}
      onClick={() => setLang(code)}
      style={{
        fontFamily: 'var(--rs-font-mono)',
        fontSize: 11,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: lang === code ? '#fff' : 'rgba(255,255,255,0.35)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '2px 0',
        transition: 'color .2s ease',
      }}
      onMouseEnter={(e) => { if (lang !== code) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
      onMouseLeave={(e) => { if (lang !== code) e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}
    >
      {code}
    </button>
  );

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      {btn('pt')}
      <span style={{ fontFamily: 'var(--rs-font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>·</span>
      {btn('en')}
    </div>
  );
}

function Nav({ active = 'about' }) {
  const [scrolled, setScrolled] = useStateN(false);
  const { lang } = useLang();
  const t = T[lang].nav;

  useEffectN(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const link = (id, label) => (
    <a href={`#${id}`} style={{
      fontFamily: 'var(--rs-font-sans)', fontSize: 13, fontWeight: 500,
      color: active === id ? '#fff' : 'rgba(255,255,255,0.5)',
      textDecoration: 'none', letterSpacing: '-0.01em',
      transition: 'color .2s cubic-bezier(.22,1,.36,1)',
    }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
       onMouseLeave={(e) => e.currentTarget.style.color = active === id ? '#fff' : 'rgba(255,255,255,0.5)'}>
      {label}
    </a>
  );

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '14px 32px',
      background: scrolled ? 'rgba(0,0,0,0.6)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      transition: 'all .3s cubic-bezier(.22,1,.36,1)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 32 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: '#fff' }}>
          <Logo size={28} />
          <span style={{
            fontFamily: 'var(--rs-font-mono)', fontSize: 12,
            color: 'rgba(255,255,255,0.6)', letterSpacing: '0.02em',
          }}>renan.soares</span>
        </a>
        <nav style={{ display: 'flex', gap: 28, marginLeft: 32 }}>
          {link('about', t.about)}
          {link('projects', t.projects)}
          {link('skills', t.skills)}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
          <LangToggle />
          <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.12)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Magnetic strength={0.4}><SocialIcon kind="github" href={SOCIAL.github} /></Magnetic>
            <Magnetic strength={0.4}><SocialIcon kind="linkedin" href={SOCIAL.linkedin} /></Magnetic>
            <Magnetic strength={0.4}><SocialIcon kind="instagram" href={SOCIAL.instagram} /></Magnetic>
          </div>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Nav, SOCIAL });
