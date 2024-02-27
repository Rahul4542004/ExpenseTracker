import React from 'react';

export const TransactionList = ({ transactions, deleteItem }) => {
  let styling = {fontSize : '24px'}
  return (
    <div className="history">
      <h2 style={{ color: 'brown' }}>History</h2>
      <ul className="list">
        {transactions.map((transaction) => {
          return (
            <li key={transaction.id} className='transactionItem'>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={styling}>
                  {transaction.text}
                </span>
                <div>
                  <span style={{fontSize:'24px',color:transaction.amount<0?'red':'green'}}>{transaction.amount < 0 ? '-' : '+'}₹{transaction.amount < 0 ? -transaction.amount : transaction.amount}</span>
                  <span className={transaction.amount >= 0 ? 'upgrade-arrow' : 'downgrade-arrow'}></span>
                  <button className="transactionButton" onClick={() => deleteItem(transaction.id)}>Delete</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
