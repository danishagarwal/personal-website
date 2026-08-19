export default function Projects({ items }) {
  return (
    <section className="section" id="projects">
      <p className="eyebrow">Projects</p>
      <div className="project-grid">
        {items.map((project) => (
          <article className="project-card" key={project.repoUrl}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
