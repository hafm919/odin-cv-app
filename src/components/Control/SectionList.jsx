function SectionList({ list, sectionType, deleteItem }) {
  console.log(list);
  return (
    <div className="section-list">
      {list.map((item) => (
        <div key={item.key} className="section-list-item">
          {item.displayName}
          <i
            className="fa fa-trash"
            id={item.key}
            onClick={(e) => deleteItem(e, sectionType)}
          ></i>
        </div>
      ))}
    </div>
  );
}
export default SectionList;
