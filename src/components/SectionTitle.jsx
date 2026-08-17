export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-heading reveal">
      <span>{eyebrow}</span>
      <div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}
