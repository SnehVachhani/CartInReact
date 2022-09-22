import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      // state.products.push(action.payload);
      var dex=-1;
      for (var i = 0; i < state.products.length; i++) {
        if (state.products[i].name === action.payload.name) dex = i;
      }
      if (dex > -1) {
        state.products[dex] = {
          ...action.payload,
          quantity: state.products[dex].quantity+1,
        };
      }

      // state.products.push(action.payload);
      else {
        state.products.push({ ...action.payload, quantity: 1 });
        // state.products.push(action.payload);
        // console.log({...action.payload, quantity: 1 });
        // console.log(action.payload);
      }
      state.total += action.payload.price;
      // console.log(state.products.findIndex(action.payload));
      console.log(state.products[0]);
    },
    empty: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, empty } = cartSlice.actions;
export default cartSlice.reducer;
