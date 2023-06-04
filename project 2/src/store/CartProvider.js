import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // logic
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if(existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem; 
    }else{
      updatedItems = state
    }




    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
  } else {
    return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchState] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchState({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
