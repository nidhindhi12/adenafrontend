import React from 'react'
import { Outlet } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import AdminHeader from '../components/Admin/AdminHeader'
import Sidebar from '../components/Admin/Sidebar'
import AdminFooter from '../components/Admin/AdminFooter'

const Adminlayout = () => {
  return (
    <>
      <div className='d-md-block d-none' style={{ 'backgroundColor': 'var(  --admin-bg-color)' }}>
        <Row className=' mx-0 flex-nowrap'>
          <Col className='px-0' style={{ width: '200px', backgroundColor: 'var(--admin-hover)' }}  >
            <Sidebar />
          </Col>

          <Col className='position-relative px-0 mx-3 min-vh-100' style={{ flex: 4 }}>
            <div> <AdminHeader /></div>
            <div className=' flex-grow-1'><Outlet /></div>

            <div className='w-100 rounded rounded-3'>
              <AdminFooter />
            </div>
          </Col>
        </Row>
      </div>
      <div className=' d-md-none d-flex flex-column min-vh-100 ' style={{ 'backgroundColor': 'var(  --admin-bg-color)' }}>
        <div> <AdminHeader /></div>
        <Sidebar />
        <div className='flex-grow-1'>
          <Outlet />
        </div>
        <AdminFooter />
      </div>


    </>
  )

}

export default Adminlayout