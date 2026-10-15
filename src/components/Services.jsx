import { useState } from 'react';
import { Reveal, SectionHeader } from './shared';

const SERVICES = [
  {
    n: '01',
    title: 'Digital Transformation',
    kicker: 'Build',
    body: 'We guide organisations in designing and implementing user-centered digital solutions, leveraging expert knowledge in technology and data security.',
    tags: ['Platforms', 'BI', 'Data Security', 'UX'],
    diagram: 'platform',
  },
  {
    n: '02',
    title: 'Capacity Building',
    kicker: 'Teach',
    body: 'We host discussions and training sessions to enhance digital literacy and foster collaboration among stakeholders in the digital landscape.',
    tags: ['Workshops', 'Training', 'Facilitation'],
    diagram: 'network',
  },
  {
    n: '03',
    title: 'Strategy & Advocacy',
    kicker: 'Shape',
    body: 'We develop and advocate for digital strategies that promote inclusivity and transparency, supporting sustainable and effective digital transformations.',
    tags: ['Policy', 'Inclusion', 'Roadmaps'],
    diagram: 'compass',
  },
  {
    n: '04',
    title: 'Research & Evaluation',
    kicker: 'Prove',
    body: 'We conduct targeted research to support policy development and assess programme impact, utilising advanced methodologies to drive digital policy innovation.',
    tags: ['Mixed Methods', 'M&E', 'Policy'],
    diagram: 'chart',
  },
];

const Diagram = ({ kind }) => {
  if (kind === 'platform') return (
    <svg viewBox="0 0 120 120" className="svc__diagram">
      <rect x="12" y="18" width="96" height="8" className="d-line"/>
      <rect x="12" y="34" width="60" height="8" className="d-fill"/>
      <rect x="12" y="50" width="84" height="8" className="d-line"/>
      <rect x="12" y="66" width="48" height="8" className="d-line"/>
      <rect x="12" y="82" width="72" height="8" className="d-fill"/>
      <rect x="12" y="98" width="36" height="8" className="d-line"/>
    </svg>
  );
  if (kind === 'network') return (
    <svg viewBox="0 0 120 120" className="svc__diagram">
      <circle cx="60" cy="60" r="8" className="d-fill"/>
      <circle cx="20" cy="20" r="5" className="d-node"/>
      <circle cx="100" cy="20" r="5" className="d-node"/>
      <circle cx="20" cy="100" r="5" className="d-node"/>
      <circle cx="100" cy="100" r="5" className="d-node"/>
      <circle cx="60" cy="12" r="5" className="d-node"/>
      <circle cx="60" cy="108" r="5" className="d-node"/>
      <line x1="60" y1="60" x2="20" y2="20" className="d-line"/>
      <line x1="60" y1="60" x2="100" y2="20" className="d-line"/>
      <line x1="60" y1="60" x2="20" y2="100" className="d-line"/>
      <line x1="60" y1="60" x2="100" y2="100" className="d-line"/>
      <line x1="60" y1="60" x2="60" y2="12" className="d-line"/>
      <line x1="60" y1="60" x2="60" y2="108" className="d-line"/>
    </svg>
  );
  if (kind === 'compass') return (
    <svg viewBox="0 0 120 120" className="svc__diagram">
      <circle cx="60" cy="60" r="48" className="d-line" fill="none"/>
      <circle cx="60" cy="60" r="32" className="d-line" fill="none"/>
      <circle cx="60" cy="60" r="3" className="d-fill"/>
      <path d="M60 20 L66 60 L60 100 L54 60 Z" className="d-fill"/>
      <line x1="12" y1="60" x2="108" y2="60" className="d-line"/>
    </svg>
  );
  if (kind === 'chart') return (
    <svg viewBox="0 0 120 120" className="svc__diagram">
      <line x1="16" y1="104" x2="104" y2="104" className="d-line"/>
      <line x1="16" y1="16" x2="16" y2="104" className="d-line"/>
      <rect x="28" y="70" width="12" height="34" className="d-line" fill="none"/>
      <rect x="48" y="50" width="12" height="54" className="d-fill"/>
      <rect x="68" y="36" width="12" height="68" className="d-line" fill="none"/>
      <rect x="88" y="22" width="12" height="82" className="d-fill"/>
    </svg>
  );
  return null;
};

const ServiceRow = ({ s, idx }) => {
  const [hover, setHover] = useState(false);
  return (
    <Reveal delay={idx * 60}>
      <a
        className={`svc ${hover ? 'svc--hover' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        href="#contact"
      >
        <div className="svc__num">{s.n}</div>
        <div className="svc__kicker mono">{s.kicker.toUpperCase()}</div>
        <div className="svc__title">{s.title}</div>
        <div className="svc__body">{s.body}</div>
        <div className="svc__tags">
          {s.tags.map(t => <span key={t} className="chip">{t}</span>)}
        </div>
        <div className="svc__diagram-wrap">
          <Diagram kind={s.diagram} />
        </div>
        <div className="svc__arrow">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
        </div>
      </a>
    </Reveal>
  );
};

const Services = () => (
  <section id="services" className="section section--cream services">
    <div className="section__inner">
      <SectionHeader
        idx="(02)"
        eyebrow="WHAT WE DO"
        title={<>Four disciplines.<br/><em>One mandate.</em></>}
      >
        <p>
          We take on projects that move organisations forward, influence policy,
          and deliver measurable impact — combining international-quality engineering
          with local delivery.
        </p>
      </SectionHeader>

      <div className="svc-grid">
        {SERVICES.map((s, i) => <ServiceRow key={s.n} s={s} idx={i} />)}
      </div>
    </div>
  </section>
);

export default Services;
