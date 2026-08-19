export default function Experience({ items }) {
  return (
    <section className="section" id="experience">
      <p className="eyebrow">Experience</p>
      {items.map((job) => (
        <article key={`${job.company}-${job.role}`}>
          <div className="experience-row">
            <strong>
              {job.company} — {job.role}
            </strong>
            <span className="experience-period">{job.period}</span>
          </div>
          <p className="lede">{job.summary}</p>
        </article>
      ))}
    </section>
  );
}
