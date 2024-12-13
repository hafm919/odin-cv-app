import sectionConfig from "../section-configurations";
import Input from "./Input";
function AddSectionDetails({ toggle, addToList, sectionType }) {
  const fields = sectionConfig[sectionType].inputs;
  function submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const entry = Object.fromEntries(data.entries());
    toggle();
    addToList(entry);
  }
  return (
    <form className="control-form" onSubmit={submitForm}>
      {fields.map((field) => (
        <Input
          key={field.key}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          label={field.label}
        ></Input>
      ))}
      <button type="submit" className="save">
        Save
      </button>
      <button className="cancel" onClick={toggle}>
        Cancel
      </button>
    </form>
  );
}
export default AddSectionDetails;
