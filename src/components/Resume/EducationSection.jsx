import EducationSectionItem from "./EducationSectionItem";
import "../../styles/Section.css";

function EducationSection({ educationList }) {
  return (
    <>
      {educationList.length > 0 && (
        <div className="section">
          <h1>Education</h1>
          <hr />
          {educationList.map((education) => (
            <EducationSectionItem
              key={education.key}
              education={education}
            ></EducationSectionItem>
          ))}
          <hr></hr>
        </div>
      )}
    </>
  );
}
export default EducationSection;
