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
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2.2c3.2 0 3.58.012 4.85.07 1.17.054 1.8.25 2.22.415.56.217.96.477 1.38.896.42.42.68.82.9 1.38.164.42.36 1.05.413 2.22.058 1.27.07 1.65.07 4.85s-.012 3.58-.07 4.85c-.054 1.17-.25 1.8-.414 2.22-.218.56-.478.96-.897 1.38-.42.42-.82.68-1.38.9-.42.164-1.05.36-2.22.413-1.27.058-1.65.07-4.85.07s-3.58-.012-4.85-.07c-1.17-.054-1.8-.25-2.22-.414-.56-.218-.96-.478-1.38-.897-.42-.42-.68-.82-.9-1.38-.164-.42-.36-1.05-.413-2.22C2.212 15.58 2.2 15.2 2.2 12s.012-3.58.07-4.85c.054-1.17.25-1.8.415-2.22.217-.56.477-.96.896-1.38.42-.42.82-.68 1.38-.9.42-.164 1.05-.36 2.22-.413C8.42 2.212 8.8 2.2 12 2.2zm0 2.16c-3.14 0-3.51.012-4.75.068-1.06.05-1.64.224-2.02.372-.51.2-.87.436-1.25.818-.38.38-.618.74-.816 1.25-.148.38-.322.96-.372 2.02-.057 1.24-.068 1.61-.068 4.75s.011 3.51.068 4.75c.05 1.06.224 1.64.372 2.02.198.51.436.87.818 1.25.38.38.74.618 1.25.816.38.148.96.322 2.02.372 1.24.057 1.61.068 4.75.068s3.51-.011 4.75-.068c1.06-.05 1.64-.224 2.02-.372.51-.198.87-.436 1.25-.818.38-.38.62-.74.818-1.25.148-.38.322-.96.372-2.02.057-1.24.068-1.61.068-4.75s-.011-3.51-.068-4.75c-.05-1.06-.224-1.64-.372-2.02-.198-.51-.436-.87-.818-1.25-.38-.38-.74-.618-1.25-.816-.38-.148-.96-.322-2.02-.372-1.24-.056-1.61-.068-4.75-.068zm0 3.68a3.96 3.96 0 1 1 0 7.92 3.96 3.96 0 0 1 0-7.92zm0 2.16a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zm5.04-2.4a.93.93 0 1 1 0 1.86.93.93 0 0 1 0-1.86z"/>
    </svg>
  ),
};

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
          <a href="mailto:hello@apalis.io" className="contact__v">inquiries@apalis.io</a>
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
          <div className="contact__v">United Kingdom · RSA</div>
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
