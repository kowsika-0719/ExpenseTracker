// import { useEffect, useState } from 'react'
// import './index.css'
// import Header from './Components/Header'
// import Balance from './Components/Balance'
// import IncomeExp from './Components/IncomeExp'
// import TransactionList from './Components/History'
// import AddTransaction from './Components/AddTransaction'


// function App() {
//   const initialState = {
//     Transactions: [
//         { id: 1, text: 'Flower', amount: -20 },
//         { id: 2, text: 'Salary', amount: 300 },
//         { id: 3, text: 'Book', amount: -10 },
//         { id: 4, text: 'Camera', amount: 150 }
//       ],
//   }
//   const [transaction, setTransaction]= useState(initialState.Transactions) 
//   // transaction is a variable

//   const deleteTransaction = (id) => { //else function deleteTransaction
//     const updatedTransaction = transaction.filter(Transactions => Transactions.id !== id)
//     setTransaction(updatedTransaction)
//     // except for id i need to delete give me all other
//   }

//   function addTransaction(text, amount) {
//     const newTransaction  ={
//       id: Math.floor(Math.random() * 1000000),
//       text,
//       amount
//     }
//     setTransaction([...transaction, newTransaction]) //just remove the one we need, prev la apdiye vechitu
//   }

//   return (
//     <>
//     {/*Mounting */}
//       <Header/> 
//       <Balance transaction={transaction}/>
//       <IncomeExp transaction = {transaction}/> {/*prop pass pannite*/}
//       <TransactionList transaction ={transaction} deleteTransaction={deleteTransaction}/>
//       <AddTransaction transaction ={transaction} addTransaction={addTransaction}/>
//     </>
//   )
// }

// export default App





import { useState } from 'react'
import AddTransaction from './Components/AddTransaction'
import './App.css'
import Balance from './Components/Balance'
import Header from './Components/Header'
import IncomeExp from './Components/IncomeExp'
import TransactionList from './Components/TransactionList'

function App() {
  //Main initial data
  const initialState = {
    transaction: [
      // { id: 1, text: 'Wire', amount: -200 },
      { id: 2, text: 'Salary', amount: 1000 },
      { id: 4, text: 'Others', amount: 150 },
      { id: 1, text: 'Wire', amount: -200 },
      { id: 3, text: 'Basic', amount: -100 },
      // { id: 4, text: 'Interest', amount: 150 }
    ],
  }


  //used useState for updateing and passing props for other components
  const [transactions, setTransaction] = useState(initialState.transaction);

  //function for delete transaction card using ID in History
  function deleteTransaction(id){
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransaction(updatedTransactions);
  }
  
  //function for adding transaction card using text and amount as parameter from the user and id generate with random function [1-1000000] number in History
  function addTransaction(text, amount) {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount

    };
    setTransaction([...transactions,newTransaction])
  }

  return (
    <>
      {/* List of components and props(State,functions) are passed */}
      <Header />
      <Balance transactions={ transactions} />
      <IncomeExp transactions={ transactions} />
      <TransactionList transactions={transactions} deleteTransaction={ deleteTransaction} />
      <AddTransaction transactions={transactions} addTransaction={ addTransaction} />
    </>
  )
}

export default App
// Additonally add some modules and add favicon and title heading in index.html and upload it in GitHub....