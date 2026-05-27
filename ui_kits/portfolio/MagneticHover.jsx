/* global React */
// Magnetic hover wrapper.
// Wrap any element with <Magnetic strength={0.35}>...</Magnetic> to make it
// physically follow the cursor when it's nearby. Uses a spring on transform.
// Disabled below 1024px and on touch devices.

const { useEffect, useRef, useState } = React;

function isTouchOrSmall() {
  if (typeof window === 'undefined') return true;
  if (window.matchMedia('(pointer: coarse)').matches) return true;
  if (window.innerWidth < 1024) return true;
  return false;
}

function Magnetic({ children, strength = 0.35, radius = 120, tilt = false, className, style }) {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const currentRef = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const [active, setActive] = useState(true);

  useEffect(() => {
    const check = () => setActive(!isTouchOrSmall());
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!active) return;
    const el = ref.current;
    if (!el) return;

    const tick = () => {
      const c = currentRef.current;
      const t = targetRef.current;
      // simple spring: lerp toward target each frame
      const k = 0.18;
      c.x += (t.x - c.x) * k;
      c.y += (t.y - c.y) * k;
      c.rx += (t.rx - c.rx) * k;
      c.ry += (t.ry - c.ry) * k;
      if (el) {
        el.style.transform = tilt
          ? `translate3d(${c.x}px, ${c.y}px, 0) rotateX(${c.rx}deg) rotateY(${c.ry}deg)`
          : `translate3d(${c.x}px, ${c.y}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, tilt]);

  const onMove = (e) => {
    if (!active) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    const max = Math.max(r.width, r.height) / 2 + radius;
    const falloff = Math.max(0, 1 - dist / max);
    targetRef.current.x = dx * strength * falloff;
    targetRef.current.y = dy * strength * falloff;
    if (tilt) {
      // small ±0.5° tilt
      targetRef.current.ry = (dx / r.width) * 1.2;
      targetRef.current.rx = -(dy / r.height) * 1.2;
    }
  };

  const onLeave = () => {
    targetRef.current.x = 0;
    targetRef.current.y = 0;
    targetRef.current.rx = 0;
    targetRef.current.ry = 0;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: 'inline-block', willChange: 'transform', transformStyle: 'preserve-3d', ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

Object.assign(window, { Magnetic });
