export default function Intro({ profile }) {
  return (
    <section className="section" id="intro">
      <p className="eyebrow">Intro</p>
      <h2 className="headline">{profile.headline}</h2>
      <p className="lede">{profile.lede}</p>
    </section>
  );
}
