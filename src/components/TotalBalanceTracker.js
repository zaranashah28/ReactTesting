import React,{useContext} from 'react'
import {AllTransactionState} from '../context/AllTransactionState'
import {useI18n} from '../context'

const TotalBalanceTracker = () => {
    const {dummyTransactions} = useContext(AllTransactionState)
    const { t } = useI18n();

    const amounts = dummyTransactions.map(dummyTransaction => dummyTransaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
             <h4>{t('Your Balance')}</h4>
            <h1>${total}</h1>
        </div>
    )
}

export default TotalBalanceTracker
