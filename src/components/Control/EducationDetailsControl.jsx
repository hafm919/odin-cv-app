import AddEducationDetails from "./AddEducationDetails";
import { useState } from "react";
import EducationList from "./EducationList";
function EducationDetailsControl({ addToList, educationList }) {
  const [addMode, setAddMode] = useState(true);
  function toggleAddMode() {
    setAddMode(!addMode);
  }
  return (
    <div className="control-card">
      <div style={{ display: "flex" }}>
        <h2>Education Details</h2>
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
        <AddEducationDetails
          toggle={toggleAddMode}
          addToList={addToList}
        ></AddEducationDetails>
      ) : (
        <EducationList educationList={educationList}></EducationList>
      )}
    </div>
  );
}
export default EducationDetailsControl;
