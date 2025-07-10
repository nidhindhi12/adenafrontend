import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Mainfooter from '../components/Mainfooter'
import Footbar from '../components/Footbar'

const EndUserLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Mainfooter/>
            <Footbar/>
        </>
    )

}

export default EndUserLayout
