import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { aboutus, customerservice } from './Data'
import pay from '../images/pay.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeIsOpen } from '../Store/slice/ModaSlice'
import logo from '../images/offcanvas.gif'

const Mainfooter = () => {
    const dispatch = useDispatch();
    const handleSignup = () => {
        dispatch(changeIsOpen());
    }
    return (
        <>
        <div className=' text-center pt-5'>
             <img src={logo} alt="" width={180} />
        </div>
            <footer style={{ backgroundColor: 'var(--header-bg-color)' }} className=' spacer'>
                <Container>
                    <Row md={2} xs={1} lg={4} className=' justify-content-between'>
                        <Col className=' px-3 fw-medium' style={{ color: 'var(--hover-color)' }}>
                            <p className=' text-uppercase fw-bold fs-14' style={{ color: 'var(--icon-color)' }}>Contact Us</p>
                            <div className=' mb-2 fs-13 mt-4'>Tower of London, London EC3N 4AB, United Kingdom.</div>
                            <div>
                                <ul className=' ps-0 ' >
                                    <li className=' list-unstyled fs-13 mb-2 '>
                                        <Link style={{ color: 'var(--hover-color)' }} className=' position-relative underline-footer' >(+84) 123 567 712</Link>
                                    </li>
                                    <li className=' list-unstyled fs-13'>
                                        <Link style={{ color: 'var(--hover-color)' }} className=' position-relative underline-footer' >adenajewelryshop@gmail.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <p className=' text-uppercase fw-bold fs-14' style={{ color: 'var(--icon-color)' }}>Customer Service</p>
                            <ul className='ps-3'>
                                {
                                    customerservice.map((value, index) => (
                                        <li className=' list-unstyled' key={index}>
                                            <Link to={value.path} style={{ color: 'var(--hover-color)' }} className='fw-medium fs-13' key={index}>{value.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>

                        </Col>
                        <Col>
                            <p className=' text-uppercase fw-bold fs-14' style={{ color: 'var(--icon-color)' }}>About Us</p>
                            <ul className='ps-2'>
                                {
                                    aboutus.map((value, index) => (
                                        <li className=' list-unstyled' key={index}>
                                            <Link to={value.path} style={{ color: 'var(--hover-color)' }} className='fw-medium fs-13' key={index}>{value.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Col>
                        <Col>
                            <p className=' text-uppercase fw-bold fs-14' style={{ color: 'var(--icon-color)' }}>Join Our Community</p>
                            <p style={{ color: 'var(--icon-color)' }} className=' mb-2'>Enter your email...</p>
                            <div className='border border-black'></div>
                            <Button className=' text-uppercase mt-3 btn-size' onClick={handleSignup}>
                                Sign up
                            </Button>
                        </Col>
                    </Row>

                </Container>
            </footer>
            <div style={{ backgroundColor: 'var(--header-bg-color)' }}>
                <Container>
                    <Row className=' d-flex py-3 align-items-center justify-content-center justify-content-md-between'>
                        <Col style={{ color: 'var(--icon-color)' }} className='text-md-start text-center' xs={12} md={4}> Copyright © 2024. All Right Reserved</Col>
                        <Col className=' text-center my-3 my-lg-0' xs={12} md={4}><img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517857/pay_ocvs7g.png" alt="" /></Col>
                        <Col className=' d-flex  justify-content-md-end justify-content-center  gap-2'xs={12} md={4}>
                            <ul className=' d-flex list-unstyled gap-1 mb-0'>
                                <li ><Link className=' fs-14  rounded-5 text-center bg-icon-color'><FaFacebookF  className='icon'/></Link></li>
                                <li ><Link className=' fs-14  rounded-5  text-center bg-icon-color'><FaXTwitter className='icon' /></Link></li>
                                <li > <Link className=' fs-14  rounded-5 text-center bg-icon-color'><FaInstagram className='icon' /></Link></li>
                                <li ><Link className=' fs-14  rounded-5 text-center bg-icon-color'><FaLinkedinIn className='icon' /></Link></li>
                            </ul>
                        </Col>
                    </Row >
                </Container>
            </div>
        </>
    )
}
export default Mainfooter



