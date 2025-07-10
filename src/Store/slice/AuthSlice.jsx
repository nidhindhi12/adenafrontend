import { createSlice } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        authvalue: false,
        users: {}

    },
    reducers: {
        changeauthvalue: (state, action) => {
            state.authvalue = true;
            state.users = action.payload;
        },
        clearLogout: (state) => {
            state.authvalue = false;
            state.users = {}
        }
    }

})

export const { changeauthvalue, clearLogout } = AuthSlice.actions;
export default AuthSlice.reducer