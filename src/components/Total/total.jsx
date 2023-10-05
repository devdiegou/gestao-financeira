import '../../globalStyles.css'
import style from './total.module.scss'

export const Total = () => {
  return (
    <div className={style.total__div}>
      <h3>Valor total</h3>
      <span>O valor  se refere ao saldo</span>
      <div className={style.value__div}>
      <p>R$</p>
      </div>
    </div>
  )
}