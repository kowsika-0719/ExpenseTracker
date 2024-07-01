// import React, { useState } from 'react'
// // function add() {
// //     const text = document.getElementById('text')
// //     const amount = document.getElementById('amount')
    
// //     const text1 = text.value
// // }

// function AddTransaction({transaction, AddTransaction}) {
//   const [text, setText] = useState("")
//   const [amount, setAmount] = useState("")
//   function onSubmit(e){
//     e.preventDefault();
//     AddTransaction(text,Number(amount))
//     setText("")
//     setAmount("")
//   }
  
//   return (
//     <>
//     <h3>Add new transaction</h3>
//       <form id="form" onSubmit={onSubmit}>
//         <div className="form-control">
//           <label htmlFor="text">Text</label>
//           <input type="text" value={text} id="text" onChange={(e)=>setText(e.target.value)} placeholder="Enter text..."/>
//         </div>
//         <div className="form-control">
//           <label htmlFor="amount">Amount <br />
//             (negative - expense, positive - income)</label>
//           <input type="number" value={amount} id="amount" placeholder="Enter amount..." onChange={(e) => setAmount(e.target.value)}/>
//         </div>
//         <button className="btn">Add transaction</button> 
//       </form>
//     </>
//   )
// }

// export default AddTransaction











import React, { useState } from "react";

const AddTransaction = ({ addTransaction }) => {
  //Setting state to reset the value in the input box after user typed and to get the value from the field
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // onSubmit funtion for from inside return-->HTML

  // Below is the code for normal function without arrow function
  // function onSubmit(e){
  //   e.preventDefault();
  //   addTransaction(text, Number(amount));
  //   setText("");
  //   setAmount("");
  // }

  // But try to write every function as arrow function as possible i.e.., good coding writing practise ... get familiar with writing and understanding arrow functions
  const onSubmit = (e) => {
    e.preventDefault(); //keeps from refreshing the the form after submiting
    addTransaction(text, Number(amount)); //the amount will be in string so we are converting for calculating purpose
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
