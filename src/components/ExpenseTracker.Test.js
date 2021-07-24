import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import App from './App'
import ExpenseTracker from './ExpenseTracker'
import History from './History';
import IncomeExpense from './IncomeExpense';
import NewTransaction from './NewTransaction';
import {ADD_TRANSACTION,DELETE_TRANSACTION} from '../context/ActionTypes'
import { reducer } from '../context/Reducer';


describe('App reducer',() =>{
  const dummyTransactions = [{
    id:1,
    text:'Salary',
    amount:+8000,
  },
  {
    id:2,
    text:'Food',
    amount:-5000,
  }]
  
  it('Should handle ADD_TRANSACTION', () =>{
    const state ={
      dummyTransactions:[],
    }

    const action = {
      type: ADD_TRANSACTION,
      payload:dummyTransactions,
    }

    expect(reducer(state,action)).toEqual({
      ...state,
      dummyTransactions:[action.payload,...state.dummyTransactions]
    })
  })

  it('Should handle DELETE_TRANSACTION', () =>{
    const state ={
      dummyTransactions:[],
    }

    const action = {
      type: DELETE_TRANSACTION,
      payload:dummyTransactions.id,
    }

    expect(reducer(state,action)).toEqual({
      ...state,
      dummyTransactions:state.dummyTransactions.filter(dummyTransaction => dummyTransaction.id !== action.payload)
    })
  })
})


describe('./src/components/IncomeExpense',() =>{
  const dummyTransaction = [
    {
      id:Math.floor(Math.random()*10000000),
      text:'Salary',
      amount:+8000
    },
    {
      id:Math.floor(Math.random()*10000000),
      text:'Food',
      amount:-5000
    }
  ]

  const amounts = dummyTransaction.map(
    (dummyTransaction) => dummyTransaction.amount,
  );

  const getComponent = () =>{
    return shallow(<IncomeExpense />)
  }

  let component
  let instance

  beforeEach(() =>{
    component = getComponent();
    instance = component.instance()
  })

  it('Should IncomeExpense render without crashing',() =>{
    expect(component.exists()).toBe(true)
  })

  it("should income title text written correctly",() =>{
    const wrapper = shallow(<IncomeExpense />);
    const header = (<h4>Income</h4>)
    expect(wrapper.contains(header)).toEqual(true);
  })

  it('should Income amount is correct',() =>{
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  expect(income).toEqual('8000.00')
    })

  it('should Expense amount is correct',() =>{
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);
    expect(expense).toEqual('5000.00')
  })
})

describe('./src/components/App', () => {
  const getComponent = ()=>{
    return mount(<App  />)
  }
  
  let component 
  let instance
  beforeEach(() => {
    component = getComponent();
    instance=component.instance();
  })


it('Should App renders without crashing',() =>{
  expect(component.exists()).toBe(true)
});

it('Should App Header Component',() =>{
  const homeComponent = component.find(ExpenseTracker);
  expect(homeComponent).toHaveLength(1);
});


});

describe("passing header component without crashing",() =>{
  it("renders expense tracker header component",() =>{
    const wrapper = shallow(<ExpenseTracker />);
    const header = (<h2>Expense Tracker</h2>)
    expect(wrapper.contains(header)).toEqual(true);
  })

  it("renders history header component",() =>{
    const wrapper = shallow(<History />);
    const header = (<h3>History</h3>)
    expect(wrapper.contains(header)).toEqual(true);
  })

  it("renders income expense header component",() =>{
    const wrapper = shallow(<IncomeExpense />);
    const header = (<h4>Income</h4>)
    expect(wrapper.contains(header)).toEqual(true);
  })

  it("renders income expense header component",() =>{
    const wrapper = shallow(<IncomeExpense />);
    const header = (<h4>Income</h4>)
    expect(wrapper.contains(header)).toEqual(true);
  })

  it("renders New Transaction header component",() =>{
    const wrapper = shallow(<NewTransaction />);
    const header = (<h3>Add</h3>)
    expect(wrapper.contains(header)).toEqual(true);
  })
  


})


