function AddEducationDetails({ toggle, addToList }) {
  function submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const education = Object.fromEntries(data.entries());
    toggle();
    addToList(education);
  }
  return (
    <form className="control-form" onSubmit={submitForm}>
      <label>School/University</label>
      <input
        type="text"
        id="school"
        name="school"
        placeholder="Manipal Institute Of Technology"
      />
      <label>Degree</label>
      <input
        type="text"
        id="qualification"
        name="degree"
        placeholder="BTech Computer Science"
      />
      <label>City</label>
      <input type="text" id="edCity" placeholder="Manipal" name="city" />
      <label>Country</label>
      <input type="text" id="edCountry" placeholder="India" name="country" />
      <label>Start Year</label>
      <input type="date" id="edStart" name="start" />
      <label>Graduation Year</label>
      <input type="date" id="edEnd" name="end" />
      <button type="submit">Save</button>
      <button onClick={toggle}>Cancel</button>
    </form>
  );
}
export default AddEducationDetails;
