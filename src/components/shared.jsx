import { useRef, useState, useEffect } from 'react';

export const Reveal = ({ children, delay = 0, as: Tag = 'div', className = '', style = {} }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        io.disconnect();
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal--in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
};

export const Counter = ({ to, suffix = '', duration = 1600, className = '' }) => {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true);
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [started, to, duration]);
  return (
    <span ref={ref} className={className}>
      {val.toLocaleString()}{suffix}
    </span>
  );
};

export const Meta = ({ num, label, tone = 'red' }) => (
  <div className={`meta meta--${tone}`}>
    <span className="meta__num">{num}</span>
    <span className="meta__dot" />
    <span className="meta__label">{label}</span>
  </div>
);

export const SectionHeader = ({ idx, eyebrow, title, children, tone = 'light' }) => (
  <div className={`section-head section-head--${tone}`}>
    <Meta num={idx} label={eyebrow} />
    <h2 className="section-head__title">
      <Reveal>{title}</Reveal>
    </h2>
    {children && <div className="section-head__lede">{children}</div>}
  </div>
);
