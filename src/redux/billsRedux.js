import { createSlice } from "@reduxjs/toolkit";

const billsSlice = createSlice({
  name: "cart",
  initialState: {
    bills: [],
  },
  reducers: {
    addBill: (state, action) => {
      state.bills.push(action.payload);
      console.log(state);
    },
  },
});

export const {addBill} = billsSlice.actions;
export default billsSlice.reducer;
