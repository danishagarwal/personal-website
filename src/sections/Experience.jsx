import SectionHeading from '../layout/sectionHeading.jsx';

export default function Experience({ items }) {
  return (
    <section className="section" id="experience">
      <SectionHeading index="03">Experience</SectionHeading>
      <div className="timeline">
        {items.map((job) => (
          <article className="timeline-card" key={`${job.company}-${job.role}`}>
            <h3 className="timeline-title">{job.company}</h3>
            <p className="timeline-meta">{job.period}</p>
            <p className="timeline-body">{job.role}</p>
            <p className="lede">{job.summary}</p>
            {job.highlights?.length ? (
              <ul className="experience-highlights">
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
