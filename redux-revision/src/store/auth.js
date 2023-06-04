import { createSlice } from "@reduxjs/toolkit";

const loginInitialState = { isLogin: false };
const loginSlice = createSlice({
  name: "login",
  initialState: loginInitialState,
  reducers: {
    logIn(state) {
      state.isLogin = true;
    },
    logOut(state) {
      state.isLogin = false;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
