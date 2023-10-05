import { FinanceCard } from "./FinanceCard/card"
import style from "./finance.module.scss"

export const Finance = ({transationList, removeTransation}) => {

  return (
    <>
      <section>
        <h3 className={style.resume__title}>Resumo financeiro</h3>
        {transationList.length === 0 && <p className={style.paragraph}>Você ainda não possui nenhum lançamento.</p>}

        <ul className={style.card__list}>
          {transationList.map((transation) => {
            const {description, value, typeValue, id} = transation;

            return (<FinanceCard key={id}  id={id} description={description} value={value} typeValue={typeValue} removeTransation={removeTransation} />)
          })}
          
        </ul>
      </section>
    </>
  )
}