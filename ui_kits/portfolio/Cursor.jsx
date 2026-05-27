/* global React */
// Custom cursor: a 1px ring + a soft 600px radial glow that drifts behind it.
// The native cursor is hidden by body CSS; we restore it over text inputs in index.html.

const { useEffect, useRef: useRefC } = React;

function Cursor() {
  const ringRef = useRefC(null);
  const glowRef = useRefC(null);
  const stateRef = useRefC({
    tx: 0, ty: 0,   // target (pointer)
    rx: 0, ry: 0,   // ring (snappy)
    gx: 0, gy: 0,   // glow (lazy)
    visible: false,
  });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.innerWidth < 1024) return;

    const onMove = (e) => {
      stateRef.current.tx = e.clientX;
      stateRef.current.ty = e.clientY;
      if (!stateRef.current.visible) {
        stateRef.current.rx = e.clientX;
        stateRef.current.ry = e.clientY;
        stateRef.current.gx = e.clientX;
        stateRef.current.gy = e.clientY;
        stateRef.current.visible = true;
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (glowRef.current) glowRef.current.style.opacity = '1';
      }
    };
    const onLeave = () => {
      stateRef.current.visible = false;
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    let raf;
    const tick = () => {
      const s = stateRef.current;
      // ring snappy
      s.rx += (s.tx - s.rx) * 0.32;
      s.ry += (s.ty - s.ry) * 0.32;
      // glow lazy
      s.gx += (s.tx - s.gx) * 0.08;
      s.gy += (s.ty - s.gy) * 0.08;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${s.rx - 6}px, ${s.ry - 6}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${s.gx - 300}px, ${s.gy - 300}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        style={{
          position: 'fixed', left: 0, top: 0, width: 600, height: 600, pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(255,184,0,0.12) 0%, rgba(255,184,0,0) 55%)',
          opacity: 0, transition: 'opacity .4s ease', zIndex: 1, mixBlendMode: 'screen',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', left: 0, top: 0, width: 12, height: 12, pointerEvents: 'none',
          border: '1px solid #FFB800', borderRadius: '50%',
          background: 'rgba(255,184,0,0.2)',
          opacity: 0, transition: 'opacity .2s ease', zIndex: 9999,
        }}
      />
    </>
  );
}

Object.assign(window, { Cursor });
