import React from 'react'

export const Balance = ({transactions}) => {
  let amount = transactions.map(transaction => transaction.amount);
  let totalBalance = amount.reduce((acc,item) => acc += item,0);
  return (
    <>
        <h3>Your Balance</h3>
        <h2 style={{
            marginTop : '-20px',
        }}>{totalBalance<0 && '-'}₹{totalBalance<0?-totalBalance:totalBalance}</h2>
    </>
  )
}
