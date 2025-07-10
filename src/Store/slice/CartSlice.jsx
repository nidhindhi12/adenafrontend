import { createSlice } from '@reduxjs/toolkit'


const storedCart = JSON.parse(localStorage.getItem('items')) || [];
const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0,
        products: []
    },
    reducers: {
        // 
        addcartItems: (state, action) => {
            const existprod = state.products.find((item) => item._id === action.payload._id)
            if (!existprod) {
                state.value += 1;
                const cartitemqty = { ...action.payload, qty: 1 };
                state.products = [...state.products, cartitemqty];
            }
        },
        increaseqty: (state, action) => {
            const matchproduct = state.products.find(prod => prod._id === action.payload._id);
            matchproduct.qty++;
        },
        decreaseqty: (state, action) => {
            const matchproduct = state.products.find(prod => prod._id === action.payload._id)
            matchproduct.qty--;
            if (matchproduct.qty <= 0) {
                matchproduct.qty = 1;
            }
        },
        removeItem: (state, action) => {
            state.products = state.products.filter(prod => prod._id !== action.payload._id)
        }
    }
})


export const { addcartItems, increaseqty, decreaseqty, removeItem, setcartfromstorage } = CartSlice.actions
export default CartSlice.reducer