import SectionHeading from '../layout/sectionHeading.jsx';

export default function About({ profile }) {
  return (
    <section className="section" id="about">
      <SectionHeading index="01">About</SectionHeading>
      <div className="about">
        <figure className="about-photo">
          <img src={profile.photoSrc} alt={profile.photoAlt} />
        </figure>
        <p>{profile.bio}</p>
      </div>
    </section>
  );
}
