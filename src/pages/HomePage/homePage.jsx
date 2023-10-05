import { Form } from "../../components/FinanceForm/form"
import { Finance } from "../../components/FinanceList/finance"
import { Total } from "../../components/Total/total"

export const HomePage = ({transationList, addTransation, removeTransation}) => {
  return <main>
    <div className="container">
      <Form addTransation={addTransation}/>
      <Finance transationList={transationList} removeTransation={removeTransation}/> 
      <Total />
    </div>
  </main>
}