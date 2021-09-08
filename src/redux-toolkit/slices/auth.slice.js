import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, { payload }){
            state.userData = payload;
        },
        logout(state){
            state.userData = null;
        }
    },
    extraReducers:{

    }
})

export const {
    login,
    logout
} = authSlice.actions

const authReducer = authSlice.reducer;

export default authReducer;