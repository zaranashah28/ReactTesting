import React,{useContext} from 'react'
import Transaction from './Transaction'
import {AllTransactionState} from '../context/AllTransactionState'
import {useI18n} from '../context'

const History = () => {
    const {dummyTransactions} = useContext(AllTransactionState)
    const { t } = useI18n();
                
    return (
        <div>
      <h3>{t('History')}</h3>
      <ul  className="list">
          {dummyTransactions.map(dummyTransaction =>
             (<Transaction  key={dummyTransaction.id} dummyTransaction={dummyTransaction} /> ))}
      
      </ul>
        </div>
    )
}

export default History
