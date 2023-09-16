import React from 'react'
import Table from './Table'
import './Tables.css'


function Tables() {

  return (
    <div className='tables-window' >
        <h2>Tables</h2>
        <div className='tables' >
            <Table
                id='table1'
                value='Table 1'
                // data  = {orderCtx.Orders.table1}
            />
            <Table
                id='table2'
                value='Table 2'
                // data  = {orderCtx.Orders.table2}
            />
            <Table
                id='table3'
                value='Table 3'
                // data  = {orderCtx.Orders.table3}
            />
        </div>
    </div>
  )
}

export default Tables
