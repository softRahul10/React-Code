import { useSelector, useDispatch } from 'react-redux';
import { counterAction } from '../store';
import classes from './Counter.module.css';

console.log('Counter component created');
const Counter = () => {

  const value = useSelector(data => data.counter);
  const displayState = useSelector(data => data.showCounter);
  const dispatch = useDispatch();

  function plus() {
    dispatch(counterAction.increment());
  }
  function minus() {
    dispatch(counterAction.decrement());
  }
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {displayState && <div className={classes.value}>{value}</div>}
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// // class component
// class Counter extends Component {
  
//   incrementCounter = ()=> {
//     this.props.increment();
//   }
//   decrementCounter = ()=> {
//     this.props.decrement();
//   }


//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementCounter}>+</button>
//           <button onClick={this.decrementCounter}>-</button>
//         </div>
//         <button onClick={()=>{}}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type:'Increment' }),
//     decrement: () => dispatch({ type:'Decrement' }),
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
