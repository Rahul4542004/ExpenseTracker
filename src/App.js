import {Header} from './Components/Header'
import { Balance } from './Components/Balance'
import { IncomeExpense } from './Components/IncomeExpense'
import {TransactionList} from './Components/TransactionList'
import { AddTransaction } from './Components/AddTransaction'
import { useState } from 'react'
import './App.css'
let nextId = 5;
export default function App()
{
  let [transactions,setTransactions] = useState(initialState);
   function addTransaction(text,amount)
   {
     setTransactions([
        ...transactions,
       {id : nextId++,text : text,amount : parseInt(amount)}
     ]);
  }
  function deleteItem(id)
  {
    let updatedTransactions = transactions.filter(transaction => transaction.id !== id)
    setTransactions(updatedTransactions);
  }
  return(
      <div className = 'innerContainer'>
        <Header/>
        <Balance transactions={transactions}/>
        <IncomeExpense transactions={transactions}/>
        <TransactionList transactions={transactions} deleteItem={deleteItem}/>
        <AddTransaction addTransaction={addTransaction}/>
      </div>
  )
}
const initialState = [
  { id: 1, text: 'Flower', amount: -20 },
   { id: 2, text: 'Salary', amount: 300 },
   { id: 3, text: 'Book', amount: -10 },
   { id: 4, text: 'Camera', amount: 150 }
];