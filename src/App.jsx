import { useEffect, useState } from 'react';
import Rail from './layout/Rail.jsx';
import Intro from './sections/Intro.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import { navItems, profile } from './content/profile.js';
import { experience } from './content/experience.js';
import { skills } from './content/skills.js';
import { projects } from './content/projects.js';

export default function App() {
  const [activeId, setActiveId] = useState('about');

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

  return (
    <div className="shell">
      <Rail profile={profile} navItems={navItems} activeId={activeId} />
      <main className="main">
        <Intro profile={profile} />
        <About profile={profile} />
        <Experience items={experience} />
        <Skills items={skills} />
        <Projects items={projects} />
      </main>
    </div>
  );
}
