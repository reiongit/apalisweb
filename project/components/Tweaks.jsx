const Tweaks = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const defaults = window.__APALIS_DEFAULTS || {};
  const [state, setState] = React.useState({
    redShade: defaults.redShade || 'oxblood',
    cursorFollow: defaults.cursorFollow !== false,
    accent: defaults.accent || 'cream',
    sectionVariant: defaults.sectionVariant || 'alternating',
  });

  React.useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') { setActive(true); setOpen(true); }
      if (d.type === '__deactivate_edit_mode') { setActive(false); setOpen(false); }
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // Apply tweaks to CSS variables
  React.useEffect(() => {
    const root = document.documentElement;
    const reds = {
      oxblood: { primary: 'oklch(0.40 0.18 25)', deep: 'oklch(0.30 0.16 25)', bright: 'oklch(0.56 0.22 25)' },
      crimson: { primary: 'oklch(0.48 0.22 22)', deep: 'oklch(0.34 0.18 22)', bright: 'oklch(0.62 0.24 22)' },
      scarlet: { primary: 'oklch(0.58 0.24 28)', deep: 'oklch(0.42 0.20 28)', bright: 'oklch(0.68 0.24 28)' },
      brick:   { primary: 'oklch(0.45 0.14 32)', deep: 'oklch(0.32 0.12 32)', bright: 'oklch(0.58 0.18 32)' },
    };
    const r = reds[state.redShade] || reds.oxblood;
    root.style.setProperty('--red', r.primary);
    root.style.setProperty('--red-deep', r.deep);
    root.style.setProperty('--red-bright', r.bright);

    const accents = {
      cream: '#F5F1EA',
      bone:  '#EDE7DB',
      paper: '#F7F5F0',
      snow:  '#FAFAF7',
    };
    root.style.setProperty('--cream', accents[state.accent] || accents.cream);

    window.__APALIS_TWEAKS = state;
    window.dispatchEvent(new CustomEvent('tweaks-updated'));

    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: state,
    }, '*');
  }, [state]);

  const set = (k, v) => setState(s => ({ ...s, [k]: v }));

  if (!active) return null;

  return (
    <div className={`tweaks ${open ? 'tweaks--open' : ''}`}>
      <div className="tweaks__header">
        <span className="mono">TWEAKS</span>
        <button onClick={() => setOpen(o => !o)} aria-label="Toggle tweaks">
          {open ? '–' : '+'}
        </button>
      </div>

      {open && (
        <div className="tweaks__body">
          <div className="tweaks__group">
            <label className="mono">Red shade</label>
            <div className="tweaks__swatches">
              {['oxblood', 'crimson', 'scarlet', 'brick'].map(r => (
                <button
                  key={r}
                  onClick={() => set('redShade', r)}
                  className={`swatch swatch--${r} ${state.redShade === r ? 'swatch--on' : ''}`}
                  aria-label={r}
                />
              ))}
            </div>
          </div>

          <div className="tweaks__group">
            <label className="mono">Warm white</label>
            <div className="tweaks__swatches">
              {['cream', 'bone', 'paper', 'snow'].map(a => (
                <button
                  key={a}
                  onClick={() => set('accent', a)}
                  className={`swatch swatch--w-${a} ${state.accent === a ? 'swatch--on' : ''}`}
                  aria-label={a}
                />
              ))}
            </div>
          </div>

          <div className="tweaks__group">
            <label className="mono">Cursor follower</label>
            <div className="tweaks__toggle">
              <button
                className={state.cursorFollow ? 'on' : ''}
                onClick={() => set('cursorFollow', true)}
              >On</button>
              <button
                className={!state.cursorFollow ? 'on' : ''}
                onClick={() => set('cursorFollow', false)}
              >Off</button>
            </div>
          </div>

          <div className="tweaks__hint mono">
            Tweaks persist via the toolbar toggle.
          </div>
        </div>
      )}
    </div>
  );
};

Object.assign(window, { Tweaks });
