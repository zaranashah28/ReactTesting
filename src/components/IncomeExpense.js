import React,{useContext} from 'react'
import {AllTransactionState} from '../context/AllTransactionState'
import {useI18n} from '../context'

const IncomeExpense = () => {
  const { t } = useI18n();
  const {dummyTransactions} = useContext(AllTransactionState)
  const amounts = dummyTransactions.map(dummyTransaction => dummyTransaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
    return (
        <div>
              <div className="inc-exp-container">
        <div>
          <h4>{t('Income')}</h4>
          <p  className="money plus">${income}</p>
        </div>
        <div>
          <h4>{t('Expense')}</h4>
          <p  className="money minus">${expense}</p>
        </div>
      </div>
        </div>
    )
}

export default IncomeExpense
