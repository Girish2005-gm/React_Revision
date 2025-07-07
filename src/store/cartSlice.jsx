// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {  // ✅ Correct key: 'reducers' (plural)
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    RemoveItem: (state, action) => {
      state.cartItems.pop();
    },
    ClearItem: (state, action) => {
      state.cartItems.length = 0;
    }
  }
});

// ✅ Export named actions
export const { addItem, RemoveItem, ClearItem } = cartSlice.actions;

// ✅ Export default reducer
export default cartSlice.reducer;
