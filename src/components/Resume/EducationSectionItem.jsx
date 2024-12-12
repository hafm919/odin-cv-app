import "../../styles/Section.css";
function EducationSectionItem({ education }) {
  console.log(education.school);
  return (
    <div className="section-item">
      <div>
        <h3>{education.school}</h3>
        <p>{education.degree}</p>
      </div>
      <div>
        <h3>
          {education.start}-{education.end}
        </h3>
        <p>
          {education.city},{education.country}
        </p>
      </div>
    </div>
  );
}
export default EducationSectionItem;
