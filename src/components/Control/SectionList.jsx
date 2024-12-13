function SectionList({ list }) {
  console.log(list);
  return (
    <ul>
      {list.map((item) => (
        <li key={item.key}>{item.displayName}</li>
      ))}
    </ul>
  );
}
export default SectionList;
