import { useState } from "react"
import { Header } from "./components/Header/header"
import './container.css'
import { HomePage } from "./pages/HomePage/homePage"

function App() {
  const [transationList, setTransationList] = useState([]);

  const addTransation = (description, value, typeValue) => {
    const id = crypto.randomUUID();
    const newTransation = {id, description, value, typeValue};

    setTransationList([...transationList, newTransation])
  }

  const removeTransation = (id) => {
    const listFiltered = transationList.filter((transation) => {
      if(transation.id !== id) {
        return transation
      }
    });
    
    setTransationList(listFiltered)
  }

  return (
    <>
      <Header />

      <HomePage transationList={transationList} addTransation={addTransation} removeTransation={removeTransation}/>
    </>
  )
}

export default App
