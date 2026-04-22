import { Reveal, Meta } from './shared';

// To add a photo: drop a JPG into public/team/ and set `photo` to its filename.
const TEAM = [
  { name: 'John Matekenya', role: 'Managing Director & Lead Data Scientist', bio: 'Platforms, data, cloud architecture.', initials: 'JP', photo: 'john-matekenya.jpg' },
  { name: 'Nomsa Nungu', role: 'Research & Evaluation Lead', bio: 'Mixed methods, policy analysis.', initials: 'M2', photo: 'nomsa-nungu.png' },
  { name: 'Reiwell Matekenya', role: 'Business Development Lead', bio: 'User research, product design.', initials: 'M3', photo: 'reiwell-matekenya.jpg' },
  { name: 'Gracious Chadeleka', role: 'Sales & Marketing Officer', bio: 'Digital strategy, advocacy.', initials: 'M4', photo: 'gracious-chadeleka.jpg' },
   { name: 'Dumisani Kaiya', role: 'Software Engineer', bio: 'Web platforms, BI tooling.', initials: 'M5', photo: 'dumie-kaiya.jpg' },
    { name: 'Mzati Mchulu', role: 'Research & Evaluation Lead', bio: 'Mixed methods, policy analysis.', initials: 'M2', photo: 'mzati-mchulu2.jpg' },
];

const TeamCard = ({ p, i }) => (
  <Reveal delay={i * 70} className="team__card">
    <div className="team__portrait">
      {p.photo ? (
        <img
          className="team__photo"
          src={`/team/${p.photo}`}
          alt={`Portrait of ${p.name}`}
          loading="lazy"
        />
      ) : (
        <div className="team__portrait-inner" aria-label={`Photo placeholder for ${p.name}`}>
          <span className="team__initials mono">{p.initials}</span>
          <span className="team__portrait-label mono">PHOTO</span>
        </div>
      )}
    </div>
    <div className="team__meta">
      <div className="team__name">{p.name}</div>
      <div className="team__role mono">{p.role}</div>
      <div className="team__bio">{p.bio}</div>
    </div>
  </Reveal>
);

const Team = () => (
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

      
    </div>
  </section>
);

export default Team;
