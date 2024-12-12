function AddExperienceDetails({ toggle, addToList }) {
  function submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const experience = Object.fromEntries(data.entries());
    toggle();
    addToList(experience);
  }
  return (
    <form className="control-form" onSubmit={submitForm}>
      <label>Company</label>
      <input type="text" id="company" name="company" placeholder="Intel" />
      <label>Job Title</label>
      <input
        type="text"
        id="job"
        name="job"
        placeholder="Senior SOC Design Lead"
      />
      <label>City</label>
      <input type="text" id="expCity" placeholder="Bangalore" name="city" />
      <label>Country</label>
      <input type="text" id="expCountry" placeholder="India" name="country" />
      <label>Start Year</label>
      <input type="date" id="expStart" name="start" />
      <label>End Year</label>
      <input type="date" id="expEnd" name="end" />
      <textarea name="description" id="description"></textarea>
      <button type="submit">Save</button>
      <button onClick={toggle}>Cancel</button>
    </form>
  );
}
export default AddExperienceDetails;
