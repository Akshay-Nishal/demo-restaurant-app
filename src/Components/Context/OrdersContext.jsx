import { createContext, useState } from "react";
export const OrrdersContext = createContext(
    {
        Orders:null,
        setOrders:()=>null
    }
)

export const OrdersProvider = ({children})=>{
    const [Orders,setOrders] = useState(defaultOrders)
    const values = {Orders,setOrders}
    return <OrrdersContext.Provider value={values}>{children}</OrrdersContext.Provider>
}


const defaultOrders = [
    { table: 'table1', orderID: 1, price: 30, dish: 'Pizza' },
    { table: 'table1', orderID: 2, price: 12, dish: 'Burger' },
    { table: 'table2', orderID: 3, price: 22, dish: 'Sushi' },
    { table: 'table3', orderID: 4, price: 17, dish: 'Tandoori Chicken' },
    { table: 'table3', orderID: 5, price: 32, dish: 'Sushi Roll' }

]


// const defaultOrders = {


//     table1:[
//         {
//         table:'table1',
//         orderID : 1,
//         price : 25,
//         dish :'Momos',}],
//     table2:[
//         {orderID : 2,
//         price : 35,
//         dish : 'Chole Bhature',},
//         {orderID : 3,
//         price : 45,
//         dish : 'Samosa',}
//     ],
//     table3:[
//         {orderID : 4,
//         price : 55,
//         dish : 'Dal Fry',}
//     ]
// }
