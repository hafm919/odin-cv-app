import AddSectionDetails from "./AddSectionDetails";
import sectionConfig from "../section-configurations";
import SectionList from "./SectionList";
import { useState } from "react";
function SectionDetailsControl({ addToList, list, sectionType, deleteItem }) {
  const title = sectionConfig[sectionType].title;
  const icon = sectionConfig[sectionType].icon;
  const [addMode, setAddMode] = useState(false);
  function toggleAddMode() {
    setAddMode(!addMode);
  }
  return (
    <div className="control-card">
      <div className="control-header">
        <h2>
          <i className={icon}></i> {title}
        </h2>
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
        <SectionList
          list={list}
          sectionType={sectionType}
          deleteItem={deleteItem}
        ></SectionList>
      )}
    </div>
  );
}

export default SectionDetailsControl;
