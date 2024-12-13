import "../../styles/Control.css";
function PersonalDetailsControl({ updateInfo }) {
  return (
    <div className="control-card">
      <h2>Personal Information</h2>
      <form className="control-form">
        <div>
          <label>Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="John Doe"
            onChange={(e) => updateInfo(e)}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="+91 640005410"
            onChange={(e) => updateInfo(e)}
          />
        </div>
        <div>
          <label>Email Id</label>
          <input
            type="text"
            id="emailID"
            placeholder="example@gmail.com"
            onChange={(e) => updateInfo(e)}
          />
        </div>
      </form>
    </div>
  );
}
export default PersonalDetailsControl;
