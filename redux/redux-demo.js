const redux = require('redux');
const counterReducer = (prevState, action) => {
      if (action.type === 'INCREMENT') {
            return {
                  counter: prevState.counter + 1
            }
      } else if (action.type === 'DECREMENT') {
            return {
                  counter: prevState.counter - 1
            }
      }
      return prevState;
}
const store = redux.createStore(counterReducer, { counter: 0 });
const counterSubscriber = () => {
      const latestState = store.getState();
      console.log(latestState);
}

store.subscribe(counterSubscriber);
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'DECREMENT' });
