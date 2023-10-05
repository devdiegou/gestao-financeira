export const Input = ({ className, id, value, setValue, placeholder, type, text, label }) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{text}</p>
    </div>
  )
}