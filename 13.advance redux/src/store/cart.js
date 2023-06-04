import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      let exiting = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!exiting) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        exiting.quantity++;
        exiting.totalPrice = exiting.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      let exiting = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (exiting.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exiting.quantity--;
        exiting.totalPrice = exiting.totalPrice - exiting.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
