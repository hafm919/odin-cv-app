import "../../styles/Section.css";
function ExperienceSectionItem({ experience }) {
  return (
    <div>
      <div className="section-item">
        <div>
          <h3>{experience.company}</h3>
          <p>{experience.job}</p>
        </div>
        <div>
          <h3>
            {experience.start}-{experience.end}
          </h3>
          <p>
            {experience.city},{experience.country}
          </p>
        </div>
      </div>
      <p>{experience.description}</p>
    </div>
  );
}

export default ExperienceSectionItem;
