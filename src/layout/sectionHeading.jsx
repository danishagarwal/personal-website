export default function SectionHeading({ index, children }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-index">{index}</span>
      {children}
    </p>
  );
}
