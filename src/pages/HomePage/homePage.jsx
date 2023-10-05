import { Form } from "../../components/FinanceForm/form"
import { Finance } from "../../components/FinanceList/finance"
import { Total } from "../../components/Total/total"

export const HomePage = ({transationList, addTransation, removeTransation}) => {
  return <main>
    <div className="container">
      <Form transationList={transationList} addTransation={addTransation}/>
      <Finance transationList={transationList} removeTransation={removeTransation}/> 
    </div>
  </main>
}