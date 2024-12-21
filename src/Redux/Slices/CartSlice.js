import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const getItemsSelector = (state) => state.cart;
export const getTotalSelector = createSelector(
  (state) => state.cart,
  (cart) => cart.reduce((total, item) => total + item.price * item.quantity, 0)
);

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
