import { useEffect, useState } from 'react';
import SectionHeading from '../layout/sectionHeading.jsx';

const verbs = ['profiles', 'tightens', 'ships', 'speeds up'];

export default function Intro({ profile }) {
  const [verbIndex, setVerbIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) {
      return undefined;
    }

    const id = window.setInterval(() => {
      setVerbIndex((current) => (current + 1) % verbs.length);
    }, 2200);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="section intro" id="intro">
      <SectionHeading index="00">Now playing</SectionHeading>
      <p className="status-pill">
        <span className="status-dot" aria-hidden="true" />
        Shipping at ConnectWise
      </p>
      <h2 className="headline">
        A frontend engineer who{' '}
        <span className="headline-cycle" aria-live="polite">
          {verbs.map((verb, index) => (
            <span
              key={verb}
              className={index === verbIndex ? 'is-active' : undefined}
              aria-hidden={index !== verbIndex}
            >
              {verb}
            </span>
          ))}
        </span>{' '}
        product UI until it feels {profile.headlineAccent}.
      </h2>
      <p className="lede">{profile.lede}</p>
    </section>
  );
}
