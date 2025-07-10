import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { Row, Col, Container, Form } from 'react-bootstrap'
import { IoSearch, IoLanguage, IoLogOutSharp } from "react-icons/io5";
import { IoMdSunny, IoIosSettings, IoMdNotificationsOutline } from "react-icons/io";
import admin from '../../images/admin-logo.svg';
import { FaAngleDown } from "react-icons/fa";
import { admindropdown } from '../Data';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { offcanvasAdminToggle } from '../../Store/slice/Offcanvas_slice';

const AdminHeader = () => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  }
  const handleadminoffcanvas = () => {
    dispatch(offcanvasAdminToggle());
  }

  return (
    <div style={{ backgroundColor: 'var( --admin-hover)' }}>
      <Container>
        <Row className=' px-2 py-2'>
          <Col className=' d-flex gap-4  align-items-center' md={5}>
            <p className=' icon-color fs-4' onClick={handleadminoffcanvas}><LuMenu /></p>
            <div className='position-relative border-1 border rounded-3 w-100'>
              <Form.Control className='admin-input px-5' placeholder=' Search here...' />
              <div className=' position-absolute text-white top-0 end-0 px-3  fs-5'>
                <IoSearch style={{ color: 'var(--admin-text-hover)' }} />
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className=' d-flex justify-content-center justify-content-lg-end gap-3 align-items-center mt-2'>
              <IoMdSunny style={{ color: '#fe7a36' }} className=' fs-4' />

              <div style={{ display: 'inline-block',width:'25px' }} id="google_translate_element"></div>
                <IoLanguage className=' icon-color fs-4' />

              <div className='  position-relative'>
                <IoMdNotificationsOutline className=' icon-color fs-4' />
                <div className=' dot rounded-3'></div>
              </div>
              <div className=' position-relative' onClick={handleDropdown} role='button'>
                <img src={admin} alt="" width={35} className='dp-border' />
                <span className=' text-white fw-semibold ms-2'id="google_translate_element" >Olivia</span>
                <span className=' icon-color ms-1'><FaAngleDown /></span>
                {
                  showDropdown && (
                    <div className=' position-absolute profile-box z-2' style={{ backgroundColor: 'var(--admin-bg-color)' }}>
                      <div className='d-flex align-items-center px-2 py-3 gap-2 custom-border'>
                        <img src={admin} alt="" width={40} height={40} className='dp-border' />
                        <div>
                          <h5 className=' mb-0 text-white fs-6'>Olivia John</h5>
                          <span className=' icon-color fs-14 fw-semibold'>Marketing Manager</span>
                        </div>
                      </div>
                      <div>
                        <ul className=' list-unstyled py-3 gap-3'>
                          <li className=' admin-li-hover px-3 py-2' >
                            <span className='pe-3 text-white icon-color'><IoLogOutSharp /></span>
                            
                            <Link to='#' className=' text-white'>Logout</Link>
                          </li>


                        </ul>
                      </div>
                    </div>
                  )
                }
              </div>
              <IoIosSettings className=' icon-color fs-4 setting' />
            </div>
            <div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default AdminHeader


