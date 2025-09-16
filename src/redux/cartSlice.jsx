import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
   addToCart: (state, action) => {
  const exists = state.items.find((item) => item.id === action.payload.id);
  if (exists) {
    alert("Product already added!");
  } else {
    state.items.push({ ...action.payload, quantity: 1 });
  }
},

     removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const product = state.items.find((i) => i.id === action.payload);
      if (product) product.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const product = state.items.find((i) => i.id === action.payload);
      if (product && product.quantity > 1) product.quantity -= 1;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});


export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
