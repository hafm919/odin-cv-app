function ExperienceList({ experienceList }) {
  return (
    <ul>
      {experienceList.map((experience) => (
        <li key={experience.key}>{experience.company}</li>
      ))}
    </ul>
  );
}
export default ExperienceList;
