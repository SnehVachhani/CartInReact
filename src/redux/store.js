import { configureStore } from "@reduxjs/toolkit";
import billsRedux from "./billsRedux";
import cartReducer from "./cartRedux";
import homeRedux from "./homeRedux";

export default configureStore({
  reducer: { home: homeRedux, cart: cartReducer, bill: billsRedux },
});
