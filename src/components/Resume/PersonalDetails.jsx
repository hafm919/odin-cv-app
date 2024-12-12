import "../../styles/PersonalInfo.css";

function PersonalDetails({ personalInfo }) {
  return (
    <div className="personal-information">
      <h1>{personalInfo.fullName}</h1>
      <div className="contact-info">
        <span>
          <h3>{personalInfo.phoneNumber} </h3>
        </span>

        <h3> {personalInfo.emailID}</h3>
      </div>
    </div>
  );
}
export default PersonalDetails;
