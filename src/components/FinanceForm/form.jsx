import { useState } from 'react'
import '../../globalStyles.css'
import style from './form.module.scss'
import { Input } from '../../Input/input.jsx'
import { Total } from '../Total/total'

export const Form = ({ transationList, addTransation }) => {
  const [description, setDescription] = useState('')

  const [price, setPrice] = useState(0)

  const [typeValue, setTypeValue] = useState('')

  const submit = (e) => {
    e.preventDefault()
    addTransation(description, +price, typeValue)

    setDescription('')
    setTypeValue('')
    setPrice('')
  }

  return (
    <div className={style.div__container}>
      <form className={style.form__container} onSubmit={submit}>
        <Input className={style.description} label='Descrição' placeholder='Digite aqui sua descrição' type='text' id='description'
          value={description} setValue={setDescription} />
  
        <Input className={style.value} label='Valor (R$)' type='number'  id='value' value={price} setValue={setPrice} />
  
        <div className={style.type__value}>
          <label>Tipo de valor</label>
          <select name='Valor' value={typeValue} onChange={(e) => setTypeValue(e.target.value)} required>
            <option value={''}>Selecione um tipo</option>
            <option>Entrada</option>
            <option>Saída</option>
          </select>
        </div>
  
        <button type='submit' className={style.btn__form}>Inserir valor</button>
      </form>
      <Total typeValue={typeValue} transationList={transationList} />
    </div>
  )
}