import React, { useContext, useRef} from 'react'
import { OrrdersContext } from '../Context/OrdersContext'
import './OrderForm.css'

function Form() {
    const orderCtx = useContext(OrrdersContext)
    const idRef = useRef()
    const priceRef = useRef()
    const dishRef = useRef()
    const tableRef = useRef()
    const formSubmit =(event)=>{
        event.preventDefault();
        const enteredOrderID = idRef.current.value
        const enteredPrice = priceRef.current.value
        const enteredDish = dishRef.current.value
        const enteredTableNumber = tableRef.current.value
        if(enteredOrderID && enteredPrice && enteredDish){
            console.log("Passed")
            const newOrder = {
                table:enteredTableNumber,
                orderID:enteredOrderID,
                price:enteredPrice,
                dish:enteredDish
            }
            orderCtx.setOrders((prev)=>[...prev,newOrder])
            idRef.current.value = ''
            priceRef.current.value = ''
            dishRef.current.value = ''
            tableRef.current.value = 'table1'
        }
        else{
            window.alert("Please Enter All Values")
        }

    }
  return (
  <form onSubmit={formSubmit}>
  <label htmlFor="orderID">Order ID</label>
  <input ref={idRef} type="text" id="orderID" /> 
  <label htmlFor="price">Price</label>
  <input ref={priceRef} type="number" id="price" />
  <label htmlFor="dish">Dish</label>
  <input ref={dishRef} type="text" id="dish" />
  <label htmlFor="table">Table</label>
  <select ref={tableRef} id="table">
    <option value="table1">Table 1</option>
    <option value="table2">Table 2</option>
    <option value="table3">Table 3</option>
  </select>
  <button type='submit'>Add Dish</button>
  </form>
  )
}

export default Form