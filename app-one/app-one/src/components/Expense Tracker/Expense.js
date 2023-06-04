import { useReducer } from "react";
import Title from "../UI/Title";
import ExpenseUI from "./ExpenseUI";

const initState = { money: 1000 };
const reducer = (state, action) => {
      if (action.type === "Increment") {
            return { money: state.money + 10 };
      }
      if (action.type === "Decrement") {
            return { money: state.money - 10 };
      }
}
const Expense = () => {
      const [money, dispatchMoney] = useReducer(reducer, initState);
      return (
            <>
                  <Title value={"My Expense Tracker"} />
                  <ExpenseUI
                        currentBalance={money}
                        updateBalance={dispatchMoney}
                  />
            </>
      );
}

export default Expense;