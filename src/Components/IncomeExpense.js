import React from 'react'
export const IncomeExpense = ({transactions}) => {
    const styling = {padding : '10px',
    border : 'solid 2px black',
    width : '150px'}
    let amount = transactions.map(transaction => transaction.amount);
  let totalIncome = amount.filter(item => item>=0).reduce((acc,item) => acc += item,0)
  let totalExpense = amount.filter(item => item<0).reduce((acc,item) => acc += -item,0)
  return (
    <div className="incomeExpense">
        <div style={styling}>
            <h3>INCOME</h3>
            <h3 style = {{color : 'rgb(62,156,53)', fontSize:'24px;'}}>+₹{totalIncome}</h3>
        </div>
        <div style={styling}>
            <h3>EXPENSE</h3>
            <h3 style = {{color : 'rgba(255,0,0,0.7)', fontSize:'24px;'}}>-₹{totalExpense}</h3>
        </div>
    </div>
  )
}
