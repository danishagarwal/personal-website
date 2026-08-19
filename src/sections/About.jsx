export default function About({ profile }) {
  return (
    <section className="section" id="about">
      <p className="eyebrow">About</p>
      <div className="about">
        <img src={profile.photoSrc} alt={profile.photoAlt} />
        <p>{profile.bio}</p>
      </div>
    </section>
  );
}
