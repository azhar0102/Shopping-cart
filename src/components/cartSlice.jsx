import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item, id) => {
        return id !== action.payload;
      });
    },
  },
});

export default cartSlice.reducer;
export const { add } = cartSlice.actions;
