import React from 'react'

export const TransactionList = ({transactions,deleteItem}) => {
  return (
    <>
        <h2>History<hr style={{color:'black'}}/></h2>
        <ul>
            {transactions.map((transaction) => { return <li key = {transaction.id} className='transactionItem'>
                        {transaction.text}({transaction.amount<0?'-':'+'}₹{transaction.amount<0?-transaction.amount:transaction.amount})
                        <button onClick={() => deleteItem(transaction.id)}>delete</button>
                        </li>})}
        </ul>
    </>
  )
}