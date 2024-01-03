import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: loadCartFromLocalStorage(),
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    remove: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
  },
});

export default cartSlice.reducer;
export const { add, remove } = cartSlice.actions;
