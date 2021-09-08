import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers:{

    }
})

export const {
} = authSlice.actions

const cartReducer = authSlice.reducer;

export default cartReducer;