import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["burger", "pizza"],
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state here.
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export default cartSlice.reducer;
export const {addItem, removeItem, clearCart} = cartSlice.actions;