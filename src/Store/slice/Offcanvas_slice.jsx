import { createSlice } from '@reduxjs/toolkit'


const OffCanvasSlice = createSlice({
    name: 'offcanvasmenu',
    initialState: {
        toggleShow: false,
        searchShow: false,
        adminShow: false,
        sortShow: false
    },
    reducers: {
        offcanvasToggleShow: (state) => {
            state.toggleShow = !state.toggleShow
        },
        searchToggleShow: (state) => {
            state.searchShow = !state.searchShow
        },
        offcanvasAdminToggle: (state) => {
            state.adminShow = !state.adminShow
        },
        sortoffcanvasshow: (state) => {
            state.sortShow = !state.sortShow
            
        }
    }
})

export const { offcanvasToggleShow, searchToggleShow, offcanvasAdminToggle, sortoffcanvasshow } = OffCanvasSlice.actions
export default OffCanvasSlice.reducer