import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Adminlayout from '../Layout/Adminlayout'
import Dashboard from '../components/Admin/Dashboard'
import Product from '../components/Admin/Product'
import Employee from '../components/Admin/User'
import Orders from '../components/Admin/Orders'
import Category from '../components/Admin/Category'
import Metal from '../components/Admin/Metal'
import Ocassion from '../components/Admin/Ocassion'
import ProductList from '../components/Admin/ProductList'
import User from '../components/Admin/User'
import { AdminProtectedRoutes} from '../utils/Protectedroute'


const Adminroutes = () => {
    return (
        <>
            <Routes>
                <Route path="/admin" element={<AdminProtectedRoutes><Adminlayout/></AdminProtectedRoutes>}>
                    <Route index element={<Dashboard />} />
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                    <Route path='/admin/user' element={<User/>} />
                    <Route path='/admin/products' element={<Product />} />
                    <Route path='/admin/orders' element={<Orders />} />
                    <Route path='/admin/category' element={<Category />} />
                    <Route path='/admin/metal' element={<Metal />} />
                    <Route path='/admin/ocassion' element={<Ocassion />} />
                    <Route path='/admin/productlist' element={<ProductList />} />
                </Route>
            </Routes>
            {/* <Routes>
                <Route path="/admin" element={<AdminProtectedRoutes><Adminlayout /></AdminProtectedRoutes>}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="user" element={<User />} />
                    <Route path="products" element={<Product />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="category" element={<Category />} />
                    <Route path="metal" element={<Metal />} />
                    <Route path="ocassion" element={<Ocassion />} />
                    <Route path="productlist" element={<ProductList />} />
                </Route>
            </Routes> */}

        </>
    )
}

export default Adminroutes
