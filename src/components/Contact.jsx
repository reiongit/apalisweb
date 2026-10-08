import { Reveal, Meta } from './shared';

// Edit these URLs to point to Apalis's real social pages.
const SOCIAL_LINKS = [
  { label: 'LinkedIn',  url: 'https://www.linkedin.com/company/18780209' },
  { label: 'Facebook',  url: 'https://web.facebook.com/weareapalis' },
  { label: 'Instagram', url: 'https://www.instagram.com/weareapalis/' },
];

const SOCIAL_ICONS = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z"/>
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.25-1.55 1.57-1.55h1.68V3.4c-.3-.04-1.3-.13-2.47-.13-2.44 0-4.12 1.5-4.12 4.22v2.3H7.5V13h2.66v8z"/>
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" stroke="currentColor" strokeWidth="1.75" fill="none"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" fill="none"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  ),
};

const Contact = () => (
  <section id="contact" className="section section--oxblood contact">
    <div className="section__inner">
      <div className="contact__head">
        <Meta num="(09)" label="START A PROJECT" tone="cream" />
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
          <a href="mailto:hello@apalis.io" className="contact__v">inquiries@apalis.io</a>
        </div>
        <div className="contact__block">
          <div className="mono contact__k">— CAREERS</div>
          <a href="mailto:careers@apalis.io" className="contact__v">careers@apalis.io</a>
        </div>
        <div className="contact__block">
          <div className="mono contact__k">— HQ</div>
          <div className="contact__v">Lilongwe, Malawi</div>
        </div>
        <div className="contact__block">
          <div className="mono contact__k">— ALSO</div>
          <div className="contact__v">United Kingdom · RSA</div>
        </div>
      </div>

      <div className="contact__cta">
        <a href="mailto:inquiries@apalis.io" className="big-cta">
          <span>Start a project</span>
          <svg viewBox="0 0 24 24" width="32" height="32"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
        </a>
      </div>
    </div>

    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/bird-logo.png" alt="" aria-hidden="true" width="28" height="28" style={{objectFit:'contain', mixBlendMode:'screen'}} />
          <span>Apalis</span>
        </div>
        <div className="footer__links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#mission">Mission</a>
          <a href="#team">Team</a>
          <a href="#careers">Careers</a>
        </div>
        <div className="footer__socials">
          {SOCIAL_LINKS.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              className="footer__social"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SOCIAL_ICONS[label]}
            </a>
          ))}
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
