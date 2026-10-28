import { useEffect, useState } from 'react';

/** True only on desktop-width viewports without a reduced-motion preference.
 *  Heavy scroll effects (parallax, scrub, pinned panels) are gated on this. */
export function useRichMotion(): boolean {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return enabled;
}
