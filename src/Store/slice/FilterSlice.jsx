import { createSlice } from "@reduxjs/toolkit";


const FilterSlice = createSlice({
    name: 'filterproduct',
    initialState: {
        products: [],
        selectedFilter: [],
        allproducts: [],
        wishlist: [],
        getfilter: [],
        countwishlist: 0,
        searchTerm:''
    },
    reducers: {

        showallproduct: (state, action) => {
            state.products = action.payload;
            state.allproducts = action.payload;

        },
        addwishlist: (state, action) => {
            const exists = state.wishlist.some(p => p._id === action.payload._id)
            if (!exists) {
                state.wishlist.push(action.payload);
                localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
            } else {
                console.log('already added')
            }
        },
        setgetfilter: (state, action) => {
            state.getfilter =action.payload;
            console.log(state.getfilter);
        },
        countofwislist: (state, action) => {
            state.wishlist = action.payload;
            state.countwishlist = state.wishlist.length;
        },
        storeSearchTerm:(state,action)=>{
            state.searchTerm=action.payload
        }

    }
})
export const { filterProductsbByCat, showallproduct, setgetfilter, countofwislist, fetchselectedfilter,storeSearchTerm } = FilterSlice.actions
export default FilterSlice.reducer