import { Reveal, SectionHeader } from './shared';

const ROLES = [
  { title: 'Senior Software Engineer', loc: 'Blantyre · Hybrid', type: 'Full-time' },
  { title: 'Research Associate', loc: 'Remote · SSA', type: 'Full-time' },
  { title: 'Product Designer', loc: 'Blantyre · Hybrid', type: 'Full-time' },
  { title: 'Policy & Strategy Analyst', loc: 'Remote · SSA', type: 'Contract' },
];

const Careers = () => (
  <section id="careers" className="section section--cream careers">
    <div className="section__inner">
      <SectionHeader
        idx="(07)"
        eyebrow="CAREERS"
        title={<>Work on things<br/>that <em>matter.</em></>}
      >
        <p>
          We hire senior, we hire selectively, and we invest deeply. If you care
          about engineering with consequence, we'd like to meet you.
        </p>
      </SectionHeader>

      <div className="careers__list">
        {ROLES.map((r, i) => (
          <Reveal delay={i * 60} key={r.title}>
            <a href="#contact" className="role">
              <span className="role__n mono">0{i + 1}</span>
              <span className="role__title">{r.title}</span>
              <span className="role__loc mono">{r.loc}</span>
              <span className="role__type mono">{r.type}</span>
              <span className="role__arrow">
                <svg viewBox="0 0 24 24" width="20" height="20"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="careers__spont">
        <Reveal>
          <div className="careers__spont-inner">
            <div className="mono careers__spont-kicker">— DON'T SEE YOUR ROLE?</div>
            <div className="careers__spont-title">Send us a note anyway.</div>
            <a href="mailto:careers@apalis.io" className="btn btn--primary">
              <span>careers@apalis.io</span>
              <svg viewBox="0 0 16 16" width="14" height="14"><path d="M3 13 L13 3 M6 3 H13 V10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Careers;
