import { Reveal, Meta } from './shared';

const Contact = () => (
  <section id="contact" className="section section--oxblood contact">
    <div className="section__inner">
      <div className="contact__head">
        <Meta num="(08)" label="START A PROJECT" tone="cream" />
      </div>

      <h2 className="contact__title">
        <Reveal>
          <span>Let's build</span><br/>
          <em>something that lasts.</em>
        </Reveal>
      </h2>

      <div className="contact__grid">
        <div className="contact__block">
          <div className="mono contact__k">— GENERAL</div>
          <a href="mailto:hello@apalis.io" className="contact__v">hello@apalis.io</a>
        </div>
        <div className="contact__block">
          <div className="mono contact__k">— CAREERS</div>
          <a href="mailto:careers@apalis.io" className="contact__v">careers@apalis.io</a>
        </div>
        <div className="contact__block">
          <div className="mono contact__k">— HQ</div>
          <div className="contact__v">Blantyre, Malawi</div>
        </div>
        <div className="contact__block">
          <div className="mono contact__k">— ALSO</div>
          <div className="contact__v">United Kingdom · SSA</div>
        </div>
      </div>

      <div className="contact__cta">
        <a href="mailto:hello@apalis.io" className="big-cta">
          <span>Start a project</span>
          <svg viewBox="0 0 24 24" width="32" height="32"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
        </a>
      </div>
    </div>

    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M2 22 L12 2 L22 22 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M7 16 H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Apalis</span>
        </div>
        <div className="footer__links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#mission">Mission</a>
          <a href="#team">Team</a>
          <a href="#careers">Careers</a>
        </div>
        <div className="footer__meta mono">
          <span>© 2026 Apalis Technologies</span>
          <span>·</span>
          <span>Malawi</span>
        </div>
      </div>
    </footer>
  </section>
);

export default Contact;
