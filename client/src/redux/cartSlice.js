import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    tax: 10,
  },
  reducers: {
    addProduct: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (findCartItem) {
        findCartItem.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
      state.total += action.payload.price;
    },
    deleteCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity;
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      cartItem.quantity += 1;
      state.total += cartItem.price;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      cartItem.quantity -= 1;
      if (cartItem.quantity === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
      }
      state.total -= cartItem.price;
    },
  },
});

export const { addProduct, deleteCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
