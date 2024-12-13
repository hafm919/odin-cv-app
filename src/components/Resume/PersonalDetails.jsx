import "../../styles/PersonalInfo.css";

function PersonalDetails({ personalInfo }) {
  return (
    <div className="personal-information">
      <h1>{personalInfo.fullName}</h1>
      <div className="contact-info">
        <p>
          {personalInfo.phoneNumber} |{" "}
          <a href={"mailto:" + personalInfo.emailID}>{personalInfo.emailID}</a>
        </p>
      </div>
    </div>
  );
}
export default PersonalDetails;
