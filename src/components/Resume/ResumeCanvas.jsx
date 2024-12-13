import "../../styles/Resume.css";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import PersonalDetails from "./PersonalDetails";

function ResumeCanvas({ personalInfo, educationList, experienceList }) {
  return (
    <div id="resume" className="canvas">
      <PersonalDetails personalInfo={personalInfo} />
      <EducationSection educationList={educationList} />
      <ExperienceSection experienceList={experienceList}></ExperienceSection>
    </div>
  );
}
export default ResumeCanvas;
