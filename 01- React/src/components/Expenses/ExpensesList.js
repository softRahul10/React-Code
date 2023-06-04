import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = props => {
      if(props.data.length === 0) {
            return <h1 className='expenses-list__fallback'> Null </h1>;
      }

      return (
            <ul className='expenses-list'>
                  {props.data.map(obj=>{
                        return <ExpenseItem title={obj.title} date={obj.date} amount={obj.amount} key={obj.id} />
                  })}
            </ul>
      );
}

export default ExpensesList;