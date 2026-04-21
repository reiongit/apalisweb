const STATS = [
  { n: 9, suffix: '+', label: 'Years delivering', sub: 'Since 2017' },
  { n: 40, suffix: '+', label: 'Projects shipped', sub: 'Public & private' },
  { n: 3, suffix: '', label: 'Geographies', sub: 'MW / UK / SSA' },
  { n: 100, suffix: '%', label: 'Partner-led', sub: 'Built for the long view' },
];

const Impact = () => {
  return (
    <section id="impact" className="section section--cream impact">
      <div className="section__inner">
        <SectionHeader
          idx="(05)"
          eyebrow="IMPACT IN NUMBERS"
          title={<>Measured in <em>outcomes,</em><br/>not outputs.</>}
        />

        <div className="impact__grid">
          {STATS.map((s, i) => (
            <Reveal delay={i * 90} key={s.label} className="stat">
              <div className="stat__num">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="stat__rule" />
              <div className="stat__label">{s.label}</div>
              <div className="stat__sub mono">{s.sub}</div>
            </Reveal>
          ))}
        </div>

        <div className="impact__quote">
          <Reveal delay={200}>
            <blockquote>
              <span className="impact__quote-mark">“</span>
              We take on projects that move organisations forward, influence policy,
              and deliver <em>measurable impact</em> — built for the long view.
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Impact });
