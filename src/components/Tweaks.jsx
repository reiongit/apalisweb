import { useState, useEffect } from 'react';

const DEFAULTS = {
  redShade: 'oxblood',
  accent: 'bone',
  cursorFollow: true,
};

const Tweaks = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(DEFAULTS);

  useEffect(() => {
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
  }, [state]);

  const set = (k, v) => setState(s => ({ ...s, [k]: v }));

  return (
    <div className={`tweaks tweaks--active ${open ? 'tweaks--open' : ''}`}>
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
        </div>
      )}
    </div>
  );
};

export default Tweaks;
