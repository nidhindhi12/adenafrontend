import React from 'react'
import { Routes, Route } from "react-router-dom"
import Wishlist from '../components/Wishlist'
import Home from "../components/Home"
import EndUserLayout from '../Layout/EndUserLayout'
import ShowProducts from '../components/ShowProducts'
import Cart from '../components/Cart'
import { Protectedroute } from '../utils/Protectedroute'
import Checkout from '../components/Checkout'
import Orderplaced from '../components/Orderplaced'
import EmailVerify from '../components/EmailVerify'
import ResetPassword from '../components/Resetpassword'


const EndUserroute = () => {
    return (
        <Routes >
            <Route path='/' element={<EndUserLayout />}>
                <Route index element={<Home />} />
                {/* <Route path/> */}
                <Route path='/wishlist' element={<Protectedroute><Wishlist /></Protectedroute>} />
                <Route path='/filterproduct/:itemName' element={<Protectedroute><ShowProducts /></Protectedroute>} />
                <Route path='/cart' element={<Protectedroute><Cart /></Protectedroute>} />
                <Route path='/checkout' element={<Checkout />} />
            </Route>
            <Route path='/orderplaced' element={<Orderplaced />} />
            <Route path='/verify-email/:token' element={<EmailVerify />} />
            <Route path="/reset-password/:userId/:token" element={<ResetPassword />} />


        </Routes >
    )
}

export default EndUserroute
