import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
      const [hideForm, setHideForm] = useState(true);
      function changeView() {
            setHideForm(prev => !prev)
      }
      const ele = <button onClick={changeView}> Add New Expense </button>;
      return (
            <div className='new-expense'>
                  {hideForm ? ele : <ExpenseForm addExpense={props.addExpense} expenses={props.expenses} toggleView={changeView} />}
            </div>
      );
}

export default NewExpense;