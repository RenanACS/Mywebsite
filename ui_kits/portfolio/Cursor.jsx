/* global React */
// Custom cursor: canvas particle system that repels from the mouse

const { useEffect, useRef: useRefC } = React;

function Cursor() {
  const canvasRef = useRefC(null);
  const stateRef = useRefC({
    tx: 0, ty: 0,   // target (pointer)
    visible: false,
  });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.innerWidth < 1024) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    
    const numParticles = 120;
    const repulsionRadius = 180;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2 + 0.5;
        this.color = 'rgba(255, 184, 0, ' + (Math.random() * 0.4 + 0.1) + ')';
      }

      update(mouseX, mouseY) {
        // Drift
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Repulsion (Antigravity field)
        if (stateRef.current.visible) {
          const dx = this.x - mouseX;
          const dy = this.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < repulsionRadius) {
            const force = (repulsionRadius - dist) / repulsionRadius;
            // Push away
            this.x += (dx / dist) * force * 10;
            this.y += (dy / dist) * force * 10;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    const onMove = (e) => {
      stateRef.current.tx = e.clientX;
      stateRef.current.ty = e.clientY;
      if (!stateRef.current.visible) {
        stateRef.current.visible = true;
        canvas.style.opacity = '1';
      }
    };
    
    const onLeave = () => {
      stateRef.current.visible = false;
      canvas.style.opacity = '0';
    };

    let raf;
    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      
      const s = stateRef.current;

      particles.forEach(p => {
        p.update(s.tx, s.ty); // pass exact mouse position instead of snappy ring position
        p.draw();
      });

      raf = requestAnimationFrame(tick);
    };
    
    raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', left: 0, top: 0, pointerEvents: 'none',
        zIndex: 0, opacity: 0, transition: 'opacity .4s ease',
      }}
    />
  );
}

Object.assign(window, { Cursor });
