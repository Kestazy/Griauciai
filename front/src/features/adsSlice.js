import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import adService from '../services/adsServise';

const initialState = {
    ads: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//create new AD
export const createAd = createAsyncThunk(
    'ad/create',
    async (adData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await adService.createad(adData, token)
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

//get user ads
export const getUserAds = createAsyncThunk(
    'ad/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await adService.getUserAds(token)
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

export const adSlice = createSlice({
    name: 'ad',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createAd.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createAd.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.ads.push(action.payload)
            })
            .addCase(createAd.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            .addCase(getUserAds.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserAds.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.ads = action.payload
            })
            .addCase(getUserAds.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
        // .addCase(deleteAd.pending, (state) => {
        //     state.isLoading = true
        // })
        // .addCase(deleteAd.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = true
        //     state.ads = state.ads.filter(
        //         (ad) => ad._id !== action.payload.id
        //     )
        // })
        // .addCase(deleteAd.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.isError = true
        //     state.message = action.payload
        // })
    }
});

export const { reset } = adSlice.actions;
export default adSlice.reducer;