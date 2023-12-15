import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    cart: [],
    orders: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    checkout: (state) => {
        state.orders = [...state.orders, { items: [...state.cart], date: new Date().toLocaleString() }];
        state.cart = [];
      },
  },
});

export const { increment , addToCart, removeFromCart, clearCart , checkout } = counterSlice.actions;
export default counterSlice.reducer;
