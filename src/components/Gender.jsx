import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Gender = () => {
    return (
        <div>
            <h1 style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)" }} className=' text-center heading-size mb-0'>Curated For You</h1>
            <p className=' sub-heading-size text-center' style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)", opacity: "0.6" }}>Shop by Gender</p>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <Link to={'/filterproduct/Women'}>
                            <div className='img-box'>
                                <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749736131/aea87b20c9c3b387a417427cc3978158_ryu6bu.jpg" alt="" style={{ width: '250px', height: '300px' }} className='rounded-3 cursor  zoom-img' />
                            </div>
                            <p className=' fs-5 fw-medium text-center' style={{ fontFamily: 'var(--secondary-font)',color:'var(--icon-color)' }}>Women Jewellery</p>
                        </Link>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Link to='/filterproduct/Men'>
                            <div className=' img-box'>
                                <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749735681/f421051fb65436b23897e66ca08db182_lzfblf.jpg" alt="" style={{ width: '250px', height: '300px' }} className='rounded-3 cursor zoom-img' />
                            </div>
                            <p className=' fs-5 fw-medium  text-center' style={{ fontFamily: 'var(--secondary-font)',color:'var(--icon-color)' }}>Men Jewellery</p>
                        </Link>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Link to='/filterproduct/kids'>
                            <div className=' img-box'>
                                <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749737044/439d0c12bf35011389eb8c9f8f78defa_wbgr9m.jpg" alt="" style={{ width: '250px', height: '300px' }} className='rounded-3 cursor zoom-img' />
                            </div>
                            <p className=' fs-5 fw-medium text-center' style={{ fontFamily: 'var(--secondary-font)',color:'var(--icon-color)' }}>Kids Jewellery</p>
                </Link>
                    </Col>
            </Row>
        </Container>
        </div >
    )
}

export default Gender
