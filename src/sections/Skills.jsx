export default function Skills({ items }) {
  return (
    <section className="section" id="skills">
      <p className="eyebrow">Skills</p>
      <ul className="skills">
        {items.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
