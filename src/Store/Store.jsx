import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './slice/ModaSlice'
import offcanvasReducer from './slice/Offcanvas_slice'
import toastReducer from './slice/ToastSlice'
import authReducer from './slice/AuthSlice'
import productdataReducer from './slice/ProductdataSlice'
import userReducer from './slice/UserSlice'
import filterproductReducer from './slice/FilterSlice'
import cartsliceReducer from "./slice/CartSlice";



const store = configureStore({
    reducer: {
        modalMenu: modalReducer,
        offcanvasmenu: offcanvasReducer,
        toastbox: toastReducer,
        auth: authReducer,
        productdata: productdataReducer,
        users: userReducer,
        filterproduct: filterproductReducer,
        cart: cartsliceReducer
    }
})


export default store



