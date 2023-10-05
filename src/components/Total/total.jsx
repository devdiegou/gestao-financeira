import '../../globalStyles.css'
import style from './total.module.scss'

export const Total = ({ transationList }) => {
  const totalValue = transationList.reduce((accumulator, currentValue) => currentValue.typeValue === 'Entrada' ? accumulator + currentValue.value : accumulator - currentValue.value, 0)

  return (
    <>
      {transationList.length >= 1 &&
        <div className={style.total__div}>
          <h3>Valor total</h3>
          <span>*O valor  se refere ao saldo*</span>
          <div className={style.value__div}>
            <p>{totalValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
          </div>
        </div>}
    </>
  )
}