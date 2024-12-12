import PersonalDetailsControl from "./components/Control/PersonalDetailsControl.jsx";
import ResumeCanvas from "./components/Resume/ResumeCanvas.jsx";
import EducationDetailsControl from "./components/Control/EducationDetailsControl.jsx";
import exampleData from "./exampledata.jsx";
import { useState } from "react";
import ExperienceDetailsControl from "./components/Control/ExperienceDetailsControl.jsx";
function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

  function handleNewEducation(education) {
    const newID = crypto.randomUUID();
    education = { ...education, key: newID };
    const newEducationList = [...educationList, education];
    setEducationList(newEducationList);
  }

  function handleNewExperience(experience) {
    const newID = crypto.randomUUID();
    experience = { ...experience, key: newID };
    const newExperienceList = [...experienceList, experience];
    setExperienceList(newExperienceList);
  }

  function handlePersonalInfoChange(e) {
    const attribute = e.target.id;
    const newValue = e.target.value;
    setPersonalInfo({ ...personalInfo, [attribute]: newValue });
  }
  return (
    <>
      <div className="control-panel">
        <PersonalDetailsControl updateInfo={handlePersonalInfoChange} />
        <EducationDetailsControl
          addToList={handleNewEducation}
          educationList={educationList}
        ></EducationDetailsControl>
        <ExperienceDetailsControl
          addToList={handleNewExperience}
          experienceList={experienceList}
        ></ExperienceDetailsControl>
      </div>
      <ResumeCanvas
        personalInfo={personalInfo}
        educationList={educationList}
        experienceList={experienceList}
      />
    </>
  );
}
export default App;
