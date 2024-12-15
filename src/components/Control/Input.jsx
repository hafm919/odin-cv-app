function Input({ type, label, placeholder, name }) {
  return (
    <div>
      <label>{label}</label>
      {type === "textarea" ? (
        <textarea name={name} placeholder={placeholder} required></textarea>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required
        ></input>
      )}
    </div>
  );
}
export default Input;
