import style from './input.module.scss'

export const Input = ({ className, id, value, setValue, placeholder, type, text, label }) => {
  return (
    <div className={style.input__group}>
      <label htmlFor={id}>{label}</label>
      <input
        required
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