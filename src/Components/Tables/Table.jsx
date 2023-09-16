import React, { useContext } from 'react'
import { OrrdersContext } from '../Context/OrdersContext'
import './Tables.css'


function Table(props) {
    const tableID = props.id
    const orderCtx = useContext(OrrdersContext)
    const deleteOrder = (id) =>{
        let x = orderCtx.Orders.filter((order) =>{
            return order.orderID!==id
        })
        orderCtx.setOrders(x)
    }
  return (
    <div>
        <h3>{props.value}</h3>
        { orderCtx.Orders.map((order) => {
            if(order.table===tableID){
                return(
                    <div key={order.orderID} className='order'>
                        <p>
                            {order.dish}, Rs. {order.price} <button className='deleteOrder' onClick={()=>{deleteOrder(order.orderID)}}>Delete</button>
                        </p>
                    </div>
                )
            }
        })}
    </div>
  )
}

export default Table