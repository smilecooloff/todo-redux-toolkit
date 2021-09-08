import { LOGIN, LOGOUT } from "../constants/auth.constants";

const initialState = {
    userData: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log("User Logged in");
            return {
                ...state,
                userData: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                userData: null,
            }
        default: return state;
    }
}

export default authReducer;