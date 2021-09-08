import { LOGIN } from "../constants/auth.constants"

export const login = (userData) => {
    return {
        type: LOGIN,
        payload: userData
    }
}