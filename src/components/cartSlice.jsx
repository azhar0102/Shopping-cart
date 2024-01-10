import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const loadCartFromLocalStorage = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error parsing cart from local storage:", error);
    return [];
  }
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: loadCartFromLocalStorage(),
  reducers: {
    add: (state, action) => {
      const { id, title, image, price } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        // If item already exists in the cart, create a new array with updated count
        return state.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // If item is not in the cart, add it with count set to 1
        return [...state, { id, title, image, price, count: 1 }];
      }
    },
    remove: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
    increaseCount: (state, action) => {
      const { id } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
    },
    decreaseCount: (state, action) => {
      const { id } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, count: Math.max(1, item.count - 1) } : item
      );
    },
  },
});

export default cartSlice.reducer;
export const { add, remove, increaseCount, decreaseCount } = cartSlice.actions;
