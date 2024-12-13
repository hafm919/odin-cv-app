import "../../styles/Section.css";
function EducationSectionItem({ education }) {
  const start = new Date(education.start);
  const end = new Date(education.end);
  const formater = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <div className="section-item">
      <div>
        <h3>{education.school}</h3>
        <p>
          <i>{education.degree}</i>
        </p>
      </div>
      <div className="date-location-group">
        <p>
          {formater.format(start)} - {formater.format(end)}
        </p>
        <p>
          {education.city}, {education.country}
        </p>
      </div>
    </div>
  );
}
export default EducationSectionItem;
