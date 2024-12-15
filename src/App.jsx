import PersonalDetailsControl from "./components/Control/PersonalDetailsControl.jsx";
import ResumeCanvas from "./components/Resume/ResumeCanvas.jsx";
import exampleData from "./exampledata.jsx";
import { useState } from "react";
import SectionDetailsControl from "./components/Control/SectionDetailsControl.jsx";
import "./App.css";
function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [educationList, setEducationList] = useState(exampleData.education);
  const [experienceList, setExperienceList] = useState(exampleData.experience);
  function handleNewEducation(education) {
    const newID = crypto.randomUUID();
    const display = education.school;
    education = { ...education, key: newID, displayName: display };
    const newEducationList = [...educationList, education];
    setEducationList(newEducationList);
  }
  function clearAll() {
    setEducationList([]);
    setExperienceList([]);
  }

  function deleteItem(e, sectionType) {
    const itemKey = e.target.id;
    const sectionList =
      sectionType === "education" ? educationList : experienceList;
    const setSectionList =
      sectionType === "education" ? setEducationList : setExperienceList;

    const newSectionList = sectionList.filter((item) => item.key != itemKey);
    setSectionList(newSectionList);
  }

  function print() {
    let printContents = document.getElementById("resume").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  function handleNewExperience(experience) {
    const newID = crypto.randomUUID();
    const display = experience.company;
    experience = { ...experience, key: newID, displayName: display };
    console.log(experience);
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
        <div style={{ display: "flex" }}>
          <button className="clear" onClick={clearAll}>
            Clear
          </button>
          <button className="print" onClick={print}>
            <i className="fa fa-print"></i>
          </button>
        </div>

        <PersonalDetailsControl updateInfo={handlePersonalInfoChange} />
        <SectionDetailsControl
          addToList={handleNewEducation}
          list={educationList}
          sectionType={"education"}
          deleteItem={deleteItem}
        ></SectionDetailsControl>
        <SectionDetailsControl
          addToList={handleNewExperience}
          list={experienceList}
          sectionType={"experience"}
          deleteItem={deleteItem}
        ></SectionDetailsControl>
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
