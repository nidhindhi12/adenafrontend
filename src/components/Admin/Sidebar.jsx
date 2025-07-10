import React, { useState } from 'react'
import admin_logo from '../../images/admin-logo.svg'
import '../Data'
import { adminnavbar } from '../Data'
import { Offcanvas, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { offcanvasAdminToggle } from '../../Store/slice/Offcanvas_slice'
import { useDispatch, useSelector } from 'react-redux'
import { FaChevronUp } from "react-icons/fa"
import { FaChevronDown } from "react-icons/fa";

const Sidebar = () => {
  const admincanvasshow = useSelector(state => state.offcanvasmenu.adminShow);
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };


  return (
    <>
      <Offcanvas show={admincanvasshow} onHide={() => dispatch(offcanvasAdminToggle())} responsive="md" className='px-2  vh-100' style={{ backgroundColor: 'var(--admin-hover)', width: '350px' }} >

        <Offcanvas.Title>
          <div className=' d-flex gap-3  pt-3 justify-content-start' >
            <img src={admin_logo} alt="" width={30} />
            <span className=' text-white fs-3 fw-bold'>Adena</span>

          </div>
        </Offcanvas.Title>
        <Offcanvas.Body>
          <div>
            <ul className='list-unstyled mt-4'>
              {adminnavbar.map((item, index) => (
                <li key={index} className='mb-2 px-auto  py-2 px-4 fw-semibold admin-li-hover'>
                  <div
                    className='d-flex justify-between align-items-center gap-2 text-white'
                    onClick={() => item.children ? toggleDropdown(index) : null}
                    style={{ cursor: item.children ? 'pointer' : 'default' }}
                  >
                    <div className='d-flex gap-3 align-items-center'>
                      <div className='icon-color'><item.icon /></div>
                      {item.path ? (
                        <Link to={item.path} className='text-white text-decoration-none'>
                          {item.name}
                        </Link>
                      ) : (
                        <span>{item.name}</span>
                      )}
                    </div>
                    {item.children && (
                      openDropdown === index ? <FaChevronUp className=' fs-14' /> : <FaChevronDown className=' fs-14' />
                    )}
                  </div>

                  {item.children && openDropdown === index && (
                    <ul className=' text-white ms-3 mt-2'>
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex} className='mb-2 admin-li-hover'>
                          <Link to={child.path} className='text-white text-decoration-none ms-3'>
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Sidebar