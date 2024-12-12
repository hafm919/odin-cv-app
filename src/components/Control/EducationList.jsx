function EducationList({ educationList }) {
  return (
    <ul>
      {educationList.map((education) => (
        <li key={education.key}>{education.school}</li>
      ))}
    </ul>
  );
}
export default EducationList;
