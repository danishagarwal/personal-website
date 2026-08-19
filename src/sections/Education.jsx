import SectionHeading from '../layout/sectionHeading.jsx';

export default function Education({ items }) {
  return (
    <section className="section" id="education">
      <SectionHeading index="02">Education</SectionHeading>
      <div className="timeline">
        {items.map((item) => (
          <article className="timeline-card" key={item.school}>
            <h3 className="timeline-title">{item.school}</h3>
            <p className="timeline-meta">{item.period}</p>
            <p className="timeline-body">{item.credential}</p>
            <p className="timeline-accent">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
