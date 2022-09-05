import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})
