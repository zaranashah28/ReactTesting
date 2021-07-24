import '../App.css';
import ExpenseTracker from './ExpenseTracker';
import History from './History';
import IncomeExpense from './IncomeExpense';
import NewTransaction from './NewTransaction';
import TotalBalanceTracker from './TotalBalanceTracker';

function App() {
  return (
    <div className="container">
          <ExpenseTracker />

      <TotalBalanceTracker />
      <IncomeExpense />
      <History />
      <NewTransaction />
     
    </div>
  );
}

export default App;
