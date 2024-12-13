import AddSectionDetails from "./AddSectionDetails";
import sectionConfig from "../section-configurations";
import SectionList from "./SectionList";
import { useState } from "react";
function SectionDetailsControl({ addToList, list, sectionType }) {
  const title = sectionConfig[sectionType].title;
  const [addMode, setAddMode] = useState(false);
  function toggleAddMode() {
    setAddMode(!addMode);
  }
  return (
    <div className="control-card">
      <div className="control-header">
        <h2>{title}</h2>
        {!addMode && (
          <button
            className="add-icon"
            onClick={() => {
              toggleAddMode();
            }}
          >
            <i className="fa fa-plus"></i>
          </button>
        )}
      </div>

      {addMode ? (
        <AddSectionDetails
          toggle={toggleAddMode}
          addToList={addToList}
          sectionType={sectionType}
        ></AddSectionDetails>
      ) : (
        <SectionList list={list}></SectionList>
      )}
    </div>
  );
}

export default SectionDetailsControl;
