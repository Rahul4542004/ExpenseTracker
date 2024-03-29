import React,{useState} from 'react'

export const AddTransaction = ({addTransaction}) => 
{
    const [transactionName,setTransactionName] = useState('');
    const [amount,setAmount] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction(transactionName, amount);
      };
    return (
        <form onSubmit={handleSubmit} className = "form">
            <h3>Add New Transaction</h3>
            <h4>Transaction</h4>
            <input type="text" placeholder="Enter Transaction name..." className="input"
                onChange={(e) => setTransactionName(e.target.value)}/>
            <h4>Amount (Negative - Expense, Positive - Income)</h4>
            <input type="number" placeholder="0" className="input" onChange={(e) => setAmount(e.target.value)}/>
            <br/>
            <button className="button" type="submit">Add Transaction</button>
        </form>
    )
}
