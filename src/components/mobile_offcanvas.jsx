import React from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { offcanvasToggleShow } from '../Store/slice/Offcanvas_slice';
import logo from '../images/Indriya-Logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { headerdata } from './Data';
import offcanvasgif from '../images/offcanvas.gif'
import samavapattern from '../images/Samava-Pattern.svg'
import Signup_login from '../components/Signup_login'
import { changeIsOpen } from '../Store/slice/ModaSlice';
import { clearLogout } from '../Store/slice/AuthSlice';

function OffCanvasMobile({ name, ...props }) {
  const offcanvasShow = useSelector((state) => state.offcanvasmenu.toggleShow);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleModal = () => {
    dispatch(changeIsOpen());
  }
  const handlewishlist = () => {

    const token = localStorage.getItem('token');
    if (token) {
      navigate('/wishlist');
      dispatch(offcanvasToggleShow());
    }
    else
      dispatch(changeIsOpen())
  }
  const handleLogout1 = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('items');
    navigate('/')
    dispatch(clearLogout());
    dispatch(offcanvasToggleShow())
  }

  return (
    <>
      <Offcanvas show={offcanvasShow} onHide={() => dispatch(offcanvasToggleShow())} {...props} className='bg-color custom-canvas'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link to='/'> <img src={logo} alt="" width={130} /></Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='px-0'>
          <div className=' d-flex flex-column  gap-4 text-color px-3' >
            {
              headerdata.map((item, index) => (
                <Link to="/filterproduct" style={{ fontFamily: 'var(--secondary-font)' }} onClick={() => handleFilter(item)} key={index}>{item}</Link>
              ))
            }
          </div>
          <div className='d-lg-none text-center mt-5'>
            <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517723/offcanvas_adstjm.gif" alt="" width={170} />
            <div style={{ 'backgroundColor': "var(--icon-color)" }} className=' text-start text-white pt-2 position-relative pb-60'>
              <p className='px-3 cursor' onClick={handlewishlist}>Wishlist</p>
              <p className=' px-3' style={{ cursor: 'pointer' }} onClick={handleLogout1}>Logout</p>
              <Signup_login />

              <p className='px-3 '><input type="search" placeholder='search...' className=' w-100' /></p>
              <div className=' position-absolute bottom-0'>
                <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517811/download_nd72xf.svg" alt="" className='w-100' />
              </div>
            </div>
          </div>
        </Offcanvas.Body>``
      </Offcanvas>
    </>
  );
}
export default function OffcanvasOptions() {
  const config = {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,

  };

  return (
    <div className="m-3">
      <OffCanvasMobile {...config} />
    </div>
  );
}

