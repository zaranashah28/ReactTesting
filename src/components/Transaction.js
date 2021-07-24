import React,{useContext} from 'react'
import {AllTransactionState} from '../context/AllTransactionState'



const Transaction = ({dummyTransaction}) => {
  const {deleteTransaction} = useContext(AllTransactionState)
    const sign = dummyTransaction.amount < 0 ? '-' : '+';

    return (
        <div>
              <li className = {dummyTransaction.amount < 0 ?  'minus' : 'plus'}> 
                {dummyTransaction.text} <span>{sign}${Math.abs(dummyTransaction.amount)}</span>
                <button onClick={() => deleteTransaction(dummyTransaction.id)} className="delete-btn">x</button>
              </li>
        </div>
    )
}

export default Transaction
