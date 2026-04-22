import { Reveal, Meta } from './shared';

const About = () => (
  <section id="about" className="section section--dark about">
    <div className="section__inner">
      <div className="about__grid">
        <div className="about__left">
          <Meta num="(03)" label="ABOUT US" tone="cream" />
          <h2 className="about__title">
            <Reveal>
              <span>Who we are</span><br/>
              <em>and what drives<br/>us forward.</em>
            </Reveal>
          </h2>
        </div>

        <div className="about__right">
          <Reveal delay={120}>
            <p className="about__lede">
              Apalis is a Malawi-based software company building modern web platforms,
              business intelligence products, and digital transformation solutions for
              clients across the public and private sectors.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="about__body">
              Founded in <strong>2017</strong>, we take on work that matters — projects that
              move organisations forward, influence policy, and deliver measurable impact.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <p className="about__body">
              We combine international-quality engineering with local delivery capability,
              bringing experience from engagements in <strong>Malawi</strong>, the
              <strong> United Kingdom</strong>, and across <strong>Sub-Saharan Africa</strong>,
              giving every project the depth it deserves — built for the long view.
            </p>
          </Reveal>

          <div className="about__facts">
            {[
              ['Founded', '2017'],
              ['HQ', 'Lilongwe, MW'],
              ['Engagements', 'MW / UK / RSA'],
              ['Sectors', 'Public & Private'],
            ].map(([k, v], i) => (
              <Reveal delay={480 + i * 80} key={k} className="fact">
                <span className="mono fact__k">{k}</span>
                <span className="fact__v">{v}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
