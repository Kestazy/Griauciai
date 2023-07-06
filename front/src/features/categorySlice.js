import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "categories",
    initialState: {
        category: ''
    },
    reducers: {
        selectedCategory: (state, action) => {
            state.category = action.payload;
        }
    }
});

export const { selectedCategory } = categorySlice.actions

export default categorySlice.reducer