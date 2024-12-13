import EducationSectionItem from "./EducationSectionItem";
import "../../styles/Section.css";

function EducationSection({ educationList }) {
  return (
    <>
      {educationList.length > 0 && (
        <div className="section">
          <h1>EDUCATION</h1>
          <hr />
          {educationList.map((education) => (
            <EducationSectionItem
              key={education.key}
              education={education}
            ></EducationSectionItem>
          ))}
        </div>
      )}
    </>
  );
}
export default EducationSection;
