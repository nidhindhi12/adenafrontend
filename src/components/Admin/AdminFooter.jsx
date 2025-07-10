import React from 'react'
import { Row, Col } from 'react-bootstrap'

const AdminFooter = () => {
  return (
    <div style={{backgroundColor:"var(--admin-hover)"}}>
      <Row className=' mx-0'>
        <Col>
          <p className=' text-white fs-6 fw-bold mt-2 text-center  p-0'>© 2025 Indiriya. All Rights Reserved.</p>
        </Col>
      </Row>

    </div>
  )
}

export default AdminFooter
