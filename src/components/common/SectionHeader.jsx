import "./SectionHeader.css";

function SectionHeader({ eyebrow, title, centered = true }) {
  return (
    <div
      className={`section-header ${centered ? "section-header--centered" : ""}`}
    >
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeader;
