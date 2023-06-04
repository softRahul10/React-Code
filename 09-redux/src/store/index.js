import { createSlice, configureStore } from '@reduxjs/toolkit';

// Create slice for counter
const initialState = {
      counter:0,
      showCounter: true,
}
const counterSlice = createSlice({
      name: 'counter',
      initialState: initialState,
      reducers:{
            increment(state) {
                  state.counter++;
            },
            decrement(state) {
                  state.counter--;
            },
            toggle(state) {
                  state.showCounter = !state.showCounter;
            }
      }
});


// Create slice for Authentication
const initialAuthState = {
      isAuthenticated: false,
}

const authSlice = createSlice({
      name:'userAuthentication',
      initialState: initialAuthState,
      reducers:{
            login(state) {
                  state.isAuthenticated = true;
            },
            logout(state) {
                  state.isAuthenticated = false;
            }
      }
})


const store = configureStore({
      reducer:{
            counter:counterSlice.reducer,
            auth: authSlice.reducer
      }
});
export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;

// const counterReducer = (state= initialState ,action)=> {
//       if(action.type === 'Increment') {
//             return {
//                   counter: state.counter + 1,
//                   showCounter: state.showCounter
//             }
//       }else if(action.type === 'Decrement') {
//             return {
//                   counter: state.counter - 1,
//                   showCounter: state.showCounter
//             }
//       }else if(action.type === 'toggle') {
//             return {
//                   counter: state.counter,
//                   showCounter: !state.showCounter
//             }
//       }
//       return state;
      
// }
