const TEAM = [
  { name: 'Member One', role: 'Principal Engineer', bio: 'Platforms, data, cloud architecture.', initials: 'M1' },
  { name: 'Member Two', role: 'Research & Evaluation Lead', bio: 'Mixed methods, policy analysis.', initials: 'M2' },
  { name: 'Member Three', role: 'Design Lead', bio: 'User research, product design.', initials: 'M3' },
  { name: 'Member Four', role: 'Strategy Lead', bio: 'Digital strategy, advocacy.', initials: 'M4' },
  { name: 'Member Five', role: 'Software Engineer', bio: 'Web platforms, BI tooling.', initials: 'M5' },
  { name: 'Member Six', role: 'Capacity Lead', bio: 'Training, facilitation.', initials: 'M6' },
];

const TeamCard = ({ p, i }) => (
  <Reveal delay={i * 70} className="team__card">
    <div className="team__portrait">
      <div className="team__portrait-inner" aria-label={`Photo placeholder for ${p.name}`}>
        <span className="team__initials mono">{p.initials}</span>
        <span className="team__portrait-label mono">PHOTO</span>
      </div>
    </div>
    <div className="team__meta">
      <div className="team__name">{p.name}</div>
      <div className="team__role mono">{p.role}</div>
      <div className="team__bio">{p.bio}</div>
    </div>
  </Reveal>
);

const Team = () => {
  return (
    <section id="team" className="section section--dark team">
      <div className="section__inner">
        <div className="team__head">
          <Meta num="(06)" label="PEOPLE" tone="cream" />
          <h2 className="team__title">
            <Reveal>
              The people<br/><em>behind the work.</em>
            </Reveal>
          </h2>
          <Reveal delay={150} className="team__lede">
            <p>
              A small, senior team with international engineering backgrounds and
              deep local context.
            </p>
          </Reveal>
        </div>

        <div className="team__grid">
          {TEAM.map((p, i) => <TeamCard key={p.initials} p={p} i={i} />)}
        </div>

        <div className="team__note mono">
          — Portraits to be replaced with real team photography.
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Team });
