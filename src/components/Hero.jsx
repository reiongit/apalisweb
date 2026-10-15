import { useRef, useState, useEffect } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    const fmt = () => {
      try {
        const t = new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Africa/Blantyre',
          hour: '2-digit',
          minute: '2-digit',
        });
        setTime(t);
      } catch (e) {
        setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
      }
    };
    fmt();
    const id = setInterval(fmt, 15000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const dot = el.querySelector('.hero__cursor');
    const dot2 = el.querySelector('.hero__cursor-ring');
    let rx = 0, ry = 0, tx = 0, ty = 0, raf;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      el.classList.add('hero--cursor-active');
    };
    const onLeave = () => el.classList.remove('hero--cursor-active');
    const loop = () => {
      rx += (tx - rx) * 0.22;
      ry += (ty - ry) * 0.22;
      if (dot) dot.style.transform = `translate(${tx}px, ${ty}px)`;
      if (dot2) dot2.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <header id="top" className="hero" ref={heroRef}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__cursor-ring" aria-hidden="true" />
      <div className="hero__cursor" aria-hidden="true" />

      <div className="hero__topbar">
        <div className="hero__topbar-right">
          <span className="mono">Lilongwe, MW</span>
          <span className="mono">—</span>
          <span className="mono">{time || '—'} CAT</span>
        </div>
      </div>

      <div className="hero__main">
        <div className="hero__eyebrow">
          <span className="mono">(01)</span>
          <span className="mono">—</span>
          <span className="mono">ENGINEERING · POLICY · IMPACT</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__line">
            <em>Engineering</em>
          </span>
          <span className="hero__line">
            for Africa's
          </span>
          <span className="hero__line hero__line--accent">
            progress<span className="hero__dot">.</span>
          </span>
        </h1>

        <div className="hero__footer">
          <div className="hero__lede">
            <p>
              Apalis is a Malawi-based software company building modern web platforms,
              business intelligence, and digital transformation for organisations that
              shape the public and private sectors.
            </p>
          </div>

          <div className="hero__actions">
            <a href="#services" className="btn btn--primary">
              <span>See our services</span>
              <svg viewBox="0 0 16 16" width="14" height="14"><path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact" className="btn btn--ghost">
              <span>Start a project</span>
            </a>
          </div>
        </div>

        <div className="hero__ticker" aria-hidden="true">
          <div className="hero__ticker-track">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="hero__ticker-group" key={i}>
                <span>Malawi</span><span className="dot">◆</span>
                <span>United Kingdom</span><span className="dot">◆</span>
                <span>Sub-Saharan Africa</span><span className="dot">◆</span>
                <span>Public Sector</span><span className="dot">◆</span>
                <span>Private Sector</span><span className="dot">◆</span>
                <span>Est. 2017</span><span className="dot">◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
