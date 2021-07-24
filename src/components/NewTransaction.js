import React,{useState,useContext} from 'react'
import {AllTransactionState} from '../context/AllTransactionState'
import {  toast } from 'react-toastify';
import {useI18n} from '../context'

import 'react-toastify/dist/ReactToastify.css';

const NewTransaction = () => {
  const { t } = useI18n();
    const [data,setData] = useState({
        text :"",
        amount: ""
    })

    const {addTransaction} = useContext(AllTransactionState)

    const onInputChange = e =>{
        setData({...data,[e.target.name] :e.target.value })
    }
    const {text,amount} = data;

    const onExpense = e => {
      e.preventDefault();
      const NewTransaction = {
        id : Math.floor(Math.random()* 100000000),
        text,
        amount: -amount
      }
      console.log("Expense",NewTransaction);
      addTransaction(NewTransaction)
    }

    const onDeposit = e => {
      e.preventDefault();
    
      console.log("Data",data);
    if(text === '' && amount=== ''){
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_CENTER
      });
         
       console.log("can't be empty");

    }
    else{
      const NewTransaction1 = {
        id : Math.floor(Math.random()* 100000000),
        text,
        amount: +amount
      }
      console.log("deposit amount",NewTransaction1);
      addTransaction(NewTransaction1)
   
 
    return;
      
    }
  

    }
 

  
    return (
        <div>
        <h3>{t('Add')}</h3>
        <form >
        <div className="form-control">
          <label htmlFor="text">{t('text')}</label>
          <input type="text"
           placeholder={t('enter')} name="text" value={text} onChange={e => onInputChange(e)}  />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >{t('amount')} <br />
            ({t('negative - expense, positive - income')})</label
          >
          <input type="number"  placeholder={t('enteramount')} name="amount" value={amount} onChange={e => onInputChange(e)} />
        </div>
        
     
        <button className="btn"  onClick={onDeposit}>{t('Deposit')}</button>
        {/* <button className="btn">Deposit</button> */}
        <button className="btn1" onClick={onExpense}>{t('Expense')}</button>
      </form>
        </div>
    )
}

export default NewTransaction
