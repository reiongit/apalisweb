import { Reveal, Meta } from './shared';

// To add a photo: drop a JPG into public/team/ and set `photo` to its filename.
const TEAM = [
  { name: 'John Matekenya', role: 'Chief Executive Officer', bio: 'Sets vision and direction.', initials: 'JM', photo: 'john-matekenya.jpg' },
  { name: 'Reiwell Matekenya', role: 'Chief Operations Officer', bio: 'Drives execution, growth and delivery.', initials: 'RM', photo: 'reiwell-matekenya.jpg' },
  { name: 'Llostam Kaonga', role: 'Chief Technology Officer', bio: 'Leads the engineering team.', initials: 'LK', photo: 'llostam-kaonga.jpg' },
  { name: 'Mzati Mchulu', role: 'Business Development Lead', bio: 'Builds partnerships, drives sales and opens new markets.', initials: 'MM', photo: 'mzati-mchulu.jpg' },
  { name: 'Dumisani Kaiya', role: 'Full Stack Developer', bio: 'Builds and maintains the product across front and back end.', initials: 'DK', photo: 'dumie-kaiya.jpg' },
  { name: 'Nomsa Faith Nungu', role: 'Research & Evaluation Lead', bio: 'Leads mixed-methods research and policy analysis.', initials: 'NN', photo: 'nomsa-nungu.png' },
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
