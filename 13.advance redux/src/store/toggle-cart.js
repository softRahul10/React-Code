import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
};
const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice;
