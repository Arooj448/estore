import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";


const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools:true,
});


export { Store };
