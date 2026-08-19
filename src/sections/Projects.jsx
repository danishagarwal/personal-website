import SectionHeading from '../layout/sectionHeading.jsx';

export default function Projects({ items }) {
  return (
    <section className="section" id="projects">
      <SectionHeading index="05">Projects</SectionHeading>
      <div className="project-grid">
        {items.map((project, index) => (
          <article className="project-card" key={project.repoUrl}>
            <p className="project-index">0{index + 1}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
