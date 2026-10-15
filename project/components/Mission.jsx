const Mission = () => {
  return (
    <section id="mission" className="section section--oxblood mission">
      <div className="section__inner">
        <div className="mission__header">
          <Meta num="(04)" label="MISSION & VISION" tone="cream" />
        </div>

        <div className="mission__split">
          <Reveal className="mission__card" delay={0}>
            <div className="mission__label mono">— MISSION</div>
            <h3 className="mission__statement">
              Build technology that <em>accelerates Africa's progress</em> by delivering
              impactful, world-class digital solutions.
            </h3>
            <div className="mission__rule" />
            <div className="mission__ops">
              {['Impactful', 'World-class', 'Measurable'].map(t => (
                <span key={t} className="mono">{t}</span>
              ))}
            </div>
          </Reveal>

          <Reveal className="mission__card" delay={160}>
            <div className="mission__label mono">— VISION</div>
            <h3 className="mission__statement">
              To be Africa's <em>most trusted</em> engineering partner, turning
              complexity into excellence.
            </h3>
            <div className="mission__rule" />
            <div className="mission__ops">
              {['Trust', 'Depth', 'Excellence'].map(t => (
                <span key={t} className="mono">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mission__marquee" aria-hidden="true">
          <div className="mission__marquee-track">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="mission__marquee-group">
                <em>Built for the long view.</em>
                <span className="mission__marquee-sep">✦</span>
                <em>Built for the long view.</em>
                <span className="mission__marquee-sep">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Mission });
