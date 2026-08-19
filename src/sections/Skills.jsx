import SectionHeading from '../layout/sectionHeading.jsx';

export default function Skills({ groups }) {
  return (
    <section className="section" id="skills">
      <SectionHeading index="04">Skills</SectionHeading>
      <div className="skill-board">
        {groups.map((group) => (
          <div className="skill-group" key={group.label}>
            <h3 className="skill-group-label">{group.label}</h3>
            <ul className="skills">
              {group.items.map((skill) => (
                <li className="skill-chip" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
