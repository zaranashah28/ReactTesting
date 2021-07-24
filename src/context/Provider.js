import React, { useReducer, useEffect } from 'react';
import {AllTransactionState,initalState} from './AllTransactionState'
import { reducer } from './Reducer';

export   const I18nContextProvider = ({languages, children, test='Hello'}) =>{
 

    const [state,dispatch] = useReducer(reducer, initalState)

      /* Store the initLang in the context */


    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction
        })
    }

    function setError(error){
        dispatch({
            type: 'SET_ERROR',
            payload:error
        })
    }

    function resetError(){
        dispatch({
            type: 'RESET_ERROR',
            payload:{error:undefined}
        })
    }

    function setLanguage(code){
        dispatch({
            type: 'setLanguage',
            payload: code,
        })
    }

    useEffect(() => {
        async function initialise() {
          await dispatch({
            type: 'initialise',
            payload: languages,
          });
        }
       
        initialise();
      }, [languages]);
    


    return(
    <AllTransactionState.Provider value={{
      ...state,
        dummyTransactions:state.dummyTransactions,
        deleteTransaction,
        addTransaction,
        setError,
        resetError,
        setLanguage,
        
    }}>
        {children}
    </AllTransactionState.Provider>
    )



}