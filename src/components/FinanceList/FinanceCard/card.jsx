import style from './card.module.scss'

export const FinanceCard = ({ description, value, typeValue, id, removeTransation }) => {

  return (
    <div className={`${style.card} ${typeValue === 'Entrada' ? style.card__green : style.card__gray}`}>
      <div className={style.primary__div}>
        <h3 className={style.title}>{description}</h3>
        <p className={style.type__value}>{typeValue}</p>
      </div>

      <div className={style.secondary__div}>
        <p className={style.value}>{value.toLocaleString('pt-BR', {
          style: 'currency', currency: 'BRL'})}</p>
        <button onClick={() => removeTransation(id)} className={style.btn__remove}>Excluir</button>
      </div>
    </div>
  )
}