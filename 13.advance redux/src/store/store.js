import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggle-cart";
import cartSlice from "./cart";

export const store = configureStore({
  reducer: {
    ui: toggleSlice.reducer,
    cart: cartSlice.reducer,
  },
});
