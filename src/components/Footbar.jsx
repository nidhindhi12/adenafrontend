import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { IoHomeSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { TiUser } from "react-icons/ti";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Signup_login from './Signup_login';
import { changeIsOpen } from '../Store/slice/ModaSlice';



const Footbar = () => {

    const dispatch = useDispatch()
    return (
        <>

            <section className="footbar py-2 sticky-bottom d-block d-lg-none" style={{ backgroundColor: 'var( --header-bg-color)' }}>
                <Container >
                    <Row>
                        <ul className='d-flex justify-content-around  list-unstyled align-items-center py-1 mb-0'>
                            <li className=' px-2 py-1  rounded'>
                                <Link to="/">
                                    <IoHomeSharp className=' fs-3 icon-color-1' />
                                </Link>
                            </li>
                            <li className=' px-2 py-1  rounded'>
                                <Link to="filterproduct/All Jewellery">
                                    <AiFillProduct className=' fs-3 icon-color-1' />
                                </Link>
                            </li>
                            <li className=' px-2 py-1  rounded'>
                                <p onClick={() => dispatch(changeIsOpen())} className=' mb-0'>
                                    <TiUser className=' fs-1 icon-color-1' />
                                </p>
                            </li>
                            <li className=' position-relative px-2 py-1'>
                                <Link to="/cart" className='d-flex align-items-center'>
                                    <RiShoppingCart2Fill className='fs-2 icon-color-1' />
                                </Link>
                            </li>
                        </ul>
                    </Row>
                </Container >

            </section >

        </>
    )
}

export default Footbar
