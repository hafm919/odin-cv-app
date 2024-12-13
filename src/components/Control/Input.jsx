function Input({ type, label, placeholder, name }) {
  return (
    <div>
      <label>{label}</label>
      {type === "textarea" ? (
        <textarea name={name} placeholder={placeholder}></textarea>
      ) : (
        <input type={type} name={name} placeholder={placeholder}></input>
      )}
    </div>
  );
}
export default Input;
