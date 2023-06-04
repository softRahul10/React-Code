import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(function (prevState) {
    return prevState.counter.counter;
  });

  const toggleState = useSelector(function (state){
      return state.counter.showCounter;
  });

  function incrementHandler() {
    dispatch(counterActions.increment());
  }
  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const increase = () => {
    dispatch(counterActions.increase(100));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { toggleState && <div className={classes.value}> {value} </div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increase}>+100</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
