import { useState, useEffect } from 'react';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Mission', href: '#mission' },
    { label: 'Impact', href: '#impact' },
    { label: 'Team', href: '#team' },
    { label: 'Careers', href: '#careers' },
    { label: 'Journal', href: '#blog' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="nav__brand" aria-label="Apalis home">
        <span className="nav__mark">
          <img src="/bird-logo.png" alt="" aria-hidden="true" width="32" height="32" style={{objectFit:'contain', mixBlendMode:'screen'}} />
        </span>
        {/* <span className="nav__word">Apalis</span> */}
        {/* <span className="nav__locale">MW</span> */}
      </a>

      <ul className="nav__links">
        {links.map((l) => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>

      <div className="nav__end">
        <a href="#contact" className="nav__cta">
          <span>Start a project</span>
          <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
            <path d="M3 13 L13 3 M6 3 H13 V10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </a>
        <button className="nav__burger" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="nav__mobile" onClick={() => setMenuOpen(false)}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#contact" className="nav__mobile-cta">Start a project →</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
