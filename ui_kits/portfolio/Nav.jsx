/* global React, Logo, SocialIcon, Magnetic */

const { useEffect: useEffectN, useState: useStateN } = React;

const SOCIAL = {
  github: 'https://github.com/RenanACS',
  linkedin: 'https://www.linkedin.com/in/renan-augusto-soares-883983411',
  instagram: 'https://instagram.com/renanacsoares',
};

function Nav({ active = 'about' }) {
  const [scrolled, setScrolled] = useStateN(false);
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
          {link('about', 'about')}
          {link('projects', 'projects')}
          {link('skills', 'skills')}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Magnetic strength={0.4}><SocialIcon kind="github" href={SOCIAL.github} /></Magnetic>
          <Magnetic strength={0.4}><SocialIcon kind="linkedin" href={SOCIAL.linkedin} /></Magnetic>
          <Magnetic strength={0.4}><SocialIcon kind="instagram" href={SOCIAL.instagram} /></Magnetic>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Nav, SOCIAL });
