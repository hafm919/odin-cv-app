import ExperienceSectionItem from "./ExperienceSectionItem";
import "../../styles/Section.css";
function ExperienceSection({ experienceList }) {
  return (
    <>
      {experienceList.length > 0 && (
        <div className="section">
          <h1>EXPERIENCE</h1>
          <hr />
          <div className="section-items">
            {experienceList.map((experience) => (
              <ExperienceSectionItem
                key={experience.key}
                experience={experience}
              ></ExperienceSectionItem>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default ExperienceSection;
