import { useState } from 'react';
import './ExpenseForm.css';

function CreateExpense(id, title, amount, date) {
      this.id = id;
      this.title = title;
      this.amount = Number(amount);
      this.date = new Date(date);
}

function generateId() {
      let number = Math.floor(Math.random() * 101) + 1;
      return 'e' + number;
}


const ExpenseForm = ({ addExpense: updateList, expenses: data,toggleView }) => {
      const arr = [];
      const [title, setTitle] = useState("");
      const [amount, setAmount] = useState("");
      const [date, setDate] = useState(new Date());

      const submitHandler = (e) => {
            e.preventDefault();        
            arr.unshift(new CreateExpense(generateId(), title, amount, date));
            updateList([...arr, ...data]);

            // reset values 
            setTitle("");
            setAmount("");
            setDate(new Date());
            toggleView();
      }

      return (
            <form onSubmit={submitHandler}>
                  <div className="new-expense__controls">
                        <div className="new-expense__control">
                              <label>Title</label>
                              <input onChange={e => setTitle(e.target.value)} value={title} type="text" />
                        </div>
                        <div className="new-expense__control">
                              <label>Amount</label>
                              <input onChange={e => setAmount(e.target.value)} value={amount} type="number" min="0.01" step="0.01" />
                        </div>
                        <div className="new-expense__control">
                              <label>Date</label>
                              <input onChange={e => setDate(e.target.value)} value={date} type="date" min="2020-01-01" max="2025-12-31" />
                        </div>
                  </div>
                  <div className="new-expense__actions">
                        <button onClick={toggleView} >Cancel</button>
                        <button type="submit">Add Expense</button>
                  </div>
            </form>
      );
}

export default ExpenseForm;