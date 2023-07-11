import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "../services/categoryServise";

// const initialState = {
//     categories: [],
//     isError: false,
//     isSuccess: false,
//     isLoading: false,
//     message: ''
// }

//create new category
export const setCategory = createAsyncThunk(
    'categories/create',
    async (categoryData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await categoryService.setCategory(categoryData, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// export const categorySlice = createSlice({
//     name: "categories",
//     initialState: {
//         category: ''
//     },
//     reducers: {
//         selectedCategory: (state, action) => {
//             state.category = action.payload;
//         }
//     }
// });

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        category: ''
    },
    reducers: {
        selectedCategory: (state, action) => {
            state.category = action.payload;
        },
        // reset: (state) => initialState,
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(setCategory.pending, (state) => {
    //             state.isLoading = true
    //         })
    //         .addCase(setCategory.fulfilled, (state, action) => {
    //             state.isLoading = false
    //             state.isSuccess = true
    //         })
    //         .addCase(setCategory.rejected, (state, action) => {
    //             state.isLoading = false
    //             state.isError = true
    //             state.message = action.payload
    //         })
    // }
});

export const { selectedCategory, reset } = categorySlice.actions;

export default categorySlice.reducer;