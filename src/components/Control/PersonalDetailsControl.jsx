import "../../styles/Control.css";
function PersonalDetailsControl({ updateInfo }) {
  return (
    <div className="control-card">
      <h2>Personal Information</h2>
      <form className="control-form">
        <label>Full Name</label>
        <input
          type="text"
          id="fullName"
          placeholder="John Doe"
          onChange={(e) => updateInfo(e)}
        />
        <label>Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="+91 640005410"
          onChange={(e) => updateInfo(e)}
        />
        <label>Email Id</label>
        <input
          type="text"
          id="emailID"
          placeholder="example@gmail.com"
          onChange={(e) => updateInfo(e)}
        />
      </form>
    </div>
  );
}
export default PersonalDetailsControl;
