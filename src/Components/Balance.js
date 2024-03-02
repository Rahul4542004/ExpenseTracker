import React from 'react'

export const Balance = ({transactions}) => {
  let amount = transactions.map(transaction => transaction.amount);
  let totalBalance = amount.reduce((acc,item) => acc += item,0);
  return (
    <div style={{ display: 'flex', alignItems: 'center',marginBottom : '10px',marginTop : '-20px'}}>
    <h2 className = 'heading' style = {{fontSize:'40px'}}>Your Balance : </h2>
    <h2 className='alternateHeading'>Balance : </h2>
    <h2 className = 'balance' style={{
      color: totalBalance < 0 ? 'red' : 'green',
      marginLeft: '5px',
      fontSize : '40px'
    }}>
      {totalBalance < 0 && '-'}₹{totalBalance < 0 ? -totalBalance : totalBalance}
    </h2>
    {totalBalance<0 && <div><span className="warn warning"></span></div>}
  </div>
  )
}
