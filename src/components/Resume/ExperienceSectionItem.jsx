import "../../styles/Section.css";
function ExperienceSectionItem({ experience }) {
  const start = new Date(experience.start);
  const end = new Date(experience.end);
  const formater = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  });
  const bulletPoints = experience.description.split("--");
  console.log(bulletPoints);
  return (
    <div>
      <div className="section-item">
        <div>
          <h3>{experience.company}</h3>
          <p>{experience.job}</p>
        </div>
        <div className="date-location-group">
          <p>
            {formater.format(start)} - {formater.format(end)}
          </p>
          <p>
            {experience.city}, {experience.country}
          </p>
        </div>
      </div>
      <ul>
        {bulletPoints.map((bulletPoint, index) => {
          bulletPoint = bulletPoint.replace(/(\r\n|\n|\r)/gm, "");
          bulletPoint = bulletPoint.trim();
          if (bulletPoint != "") {
            return <li key={experience.company + index}>{bulletPoint}</li>;
          }
        })}
      </ul>
    </div>
  );
}

export default ExperienceSectionItem;
