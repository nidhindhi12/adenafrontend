import { createSlice } from "@reduxjs/toolkit";


const ToastSlice = createSlice({
    name: "toastbox",
    initialState: {
        type: '',
        message: '',
        id:null,
    },
    reducers: {
        showToast: (state, action) => {
            state.message = action.payload.message,
            state.type = action.payload.type,
            state.id=Date.now();
        },
        closeToast: (state, actions) => {
            state.type = '',
            state.message = '',
            state.id=null
        }
    }
})
export const { showToast, closeToast } = ToastSlice.actions
export default ToastSlice.reducer