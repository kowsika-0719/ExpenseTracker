// import React from "react";

// function Balance({transaction}){ // props ku badhila anga pass pannadhayum eduthu podalaam
//     const amounts = transaction.map(Transactions => Transactions.amount)
    
//     const total = amounts.reduce((acc, item) => // all elements in the array are added into acc and this acc is stored in total(indha function la add panni acc la vechikaren, and array la iruka all ele add aairuchuna adha total la store pandrom)
//         (acc+=item) 
//     , 0) //initial value is 0(starting value)
//     return(
//         <>
//         <h3>Balance</h3>
//         {/* <h1>$400</h1> */}
//         <h1>${total}</h1>
//         </>
//     )
// }

// export default Balance






import React from 'react'

function Balance({ transactions }) {
  const amounts = transactions.map(transaction => transaction.amount);
  //amounts=[-20,300,-10,150] <-- after map function 

    const total = amounts.reduce((acc, item) => 
        (acc += item)
      , 0);
  //total=420 <-- after using reduce
  return (
      <>
          <h3>Balance</h3>
          <h1>${ total}</h1>
    </>
  )
}

export default Balance