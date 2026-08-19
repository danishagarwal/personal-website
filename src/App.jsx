import React, { useEffect, useState } from 'react';
import ThemeToggle from './layout/ThemeToggle.jsx';
import Rail from './layout/Rail.jsx';
import Intro from './sections/Intro.jsx';
import About from './sections/About.jsx';
import Education from './sections/Education.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import { navItems, profile } from './content/profile.js';
import { education } from './content/education.js';
import { experience } from './content/experience.js';
import { skillGroups } from './content/skills.js';
import { projects } from './content/projects.js';
import { applyTheme, readTheme } from './theme/theme.js';

export default function App() {
  const [activeId, setActiveId] = useState('about');
  const [theme, setTheme] = useState(() =>
    typeof document === 'undefined' ? 'dark' : readTheme()
  );

  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) {
      return undefined;
    }

    const onMove = (event) => {
      document.documentElement.style.setProperty('--spot-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--spot-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    setTheme(next);
  };

  return (
    <div className="shell">
      <div className="atmosphere" aria-hidden="true" />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <Rail profile={profile} navItems={navItems} activeId={activeId} />
      <main className="main">
        <Intro profile={profile} />
        <About profile={profile} />
        <Education items={education} />
        <Experience items={experience} />
        <Skills groups={skillGroups} />
        <Projects items={projects} />
      </main>
    </div>
  );
}
