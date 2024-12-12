import { useState } from "react";
import AddExperienceDetails from "./AddExperienceDetails";
import ExperienceList from "./ExperienceList";

function ExperienceDetailsControl({ addToList, experienceList }) {
  const [addMode, setAddMode] = useState(true);
  function toggleAddMode() {
    setAddMode(!addMode);
  }
  return (
    <div className="control-card">
      <div style={{ display: "flex" }}>
        <h2>Experience Details</h2>
        {!addMode && (
          <button
            onClick={() => {
              toggleAddMode();
            }}
          >
            Add
          </button>
        )}
      </div>

      {addMode ? (
        <AddExperienceDetails
          toggle={toggleAddMode}
          addToList={addToList}
        ></AddExperienceDetails>
      ) : (
        <ExperienceList experienceList={experienceList}></ExperienceList>
      )}
    </div>
  );
}
export default ExperienceDetailsControl;
