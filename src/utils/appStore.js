import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlics";

const appStore = configureStore({
    reducer:{
        cart: cartReducer,
    },
});

export default appStore;