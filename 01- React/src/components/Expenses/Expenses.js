import React from 'react';
import Card from '../UI/Card';
import ExpensesFilter from '../Filter/ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {

  const [filterYear, setFilterYear] = useState(2023);
  const filterListOfItems = props.data.filter(item => item.date.getFullYear() === filterYear);

  return (
    <Card className="expenses">
      <ExpensesFilter updateYear={setFilterYear} />
      <ExpensesChart expenses={filterListOfItems} />
      <ExpensesList data={filterListOfItems} />
    </Card>
  )
}
