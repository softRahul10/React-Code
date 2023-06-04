import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

function App() {

  const initialExpenses = [
    {
      title: 'Tata Car',
      amount: 600000,
      date: new Date(2023, 8, 30),
    },
    {
      title: 'HP Laptop',
      amount: 25000,
      date: new Date(2023, 6, 15),
    },
    {
      title: 'OLA Electric Bike',
      amount: 120000,
      date: new Date(2023, 11, 10),
    },
    {
      title: 'Iphone 16',
      amount: 150000,
      date: new Date(2023, 9, 20),
    },


  ];
  const [list, setList] = useState(initialExpenses);
  return (
    <div>
      <NewExpense addExpense={setList} expenses={list} />
      <Expenses data={list} />
    </div>
  );
}

export default App;
