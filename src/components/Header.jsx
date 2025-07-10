import { Container, Badge, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/Indriya-Logo.svg'
import { RiPokerHeartsLine, RiUser6Fill, RiMenu3Line } from "react-icons/ri";
import { IoIosCart } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { changeIsOpen } from '../Store/slice/ModaSlice';
import Signup_login from '../components/Signup_login'
import { offcanvasToggleShow, searchToggleShow } from '../Store/slice/Offcanvas_slice';
import OffcanvasOptions from './mobile_offcanvas'
import Searchbox from './Searchbox';
import { clearLogout } from '../Store/slice/AuthSlice';
import { headerdata } from './Data';
import axios from 'axios'
import { showToast } from '../Store/slice/ToastSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleModal = () => {
        dispatch(changeIsOpen());
    }
    const handleOffcanvas = () => {
        dispatch(offcanvasToggleShow())
    }
    const handleSearch = () => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(searchToggleShow());
        }
        else
            dispatch(changeIsOpen())
    }
    const handleLogout1 = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('items');
        localStorage.removeItem('user');

        navigate('/')
        dispatch(clearLogout());
    }
    const handlewishlist = (item) => {

        const token = localStorage.getItem('token');
        if (token) {
            navigate(`/${item}`);
        }
        else
            dispatch(changeIsOpen())
    }
    const auth = useSelector((state) => state.auth.authvalue)
    const isOpen = useSelector((state) => state.modalMenu.isopen)
    const wishlist = useSelector((state) => state.filterproduct.countwishlist);
    const cart = JSON.parse(localStorage.getItem("items"))
    const user = JSON.parse(localStorage.getItem('user'));

    const handleReset = async () => {
        try {
            const response = await axios.post(`http://localhost:5000/api/reset-password-link/${user._id}`);

            console.log(response);
            if (response.data.status) {
                dispatch(showToast({ message: response.data.message, type: 'success' }));
            }
            else {
                dispatch(showToast({ message: response.data.message, type: 'success' }));
            }
        } catch (error) {
            dispatch(showToast({ message: "Something went wrong", type: 'success' }));
        }

    }

    return (
        <>
            <Navbar expand="lg" className=" px-4 bg-color text-color">
                <Container fluid>
                    <Navbar.Brand className='d-none d-lg-block'>
                        <Link to='/'> <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517034/download_qd4tvl.svg   " alt="" width={140} /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='d-none' />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="d-flex my-2 my-lg-0  mx-auto text-nowrap gap-2" style={{ maxHeight: '100px' }} navbarScroll>
                            {
                                headerdata.map((item, index) => (
                                    <Nav.Link
                                        key={index}
                                        as="div" // Optional if you want to keep <h6> style
                                        onClick={() => navigate(`filterproduct/${item}`)}
                                        className='cursor navhover'
                                    >
                                        <h6 style={{ fontFamily: 'var(--secondary-font)' }}>{item}</h6>
                                    </Nav.Link>
                                ))
                            }
                        </Nav>
                    </Navbar.Collapse>

                    <div className="header-icons d-flex gap-2 justify-content-end text-color fw-bold d-none d-lg-flex">
                        <div className='position-relative'><FiSearch className=' fs-4' onClick={handleSearch} />
                            <Searchbox />
                        </div>
                        <div className='position-relative'>
                            <p onClick={() => handlewishlist('wishlist')} className='mb-0'> <RiPokerHeartsLine className=' fs-4' /></p>
                            <div className=' position-absolute badge-position '><Badge className='rounded-5' style={{ backgroundColor: "var(--icon-color) !important" }}>{wishlist}</Badge></div>
                        </div>
                        {
                            auth ? (
                                <div className="position-relative">
                                    <p className="fs-5 px-2  ms-3 mb-0 cursor  rounded-5 text-white curdor" style={{ backgroundColor: "var(--icon-color)" }} onClick={handleModal}>
                                        {user.firstname?.charAt(0).toUpperCase()}
                                    </p>
                                    {isOpen && (
                                        <div
                                            className="position-absolute login-drop z-3 ps-2 pt-2"
                                            style={{
                                                backgroundColor: 'var(--admin-hover)',

                                                height: '70px',
                                                borderRadius: '3px',
                                            }}
                                        >
                                            <p className="text-white cursor mb-0" onClick={handleLogout1}>
                                                Logout
                                            </p>

                                            <p className="text-white cursor mb-0" onClick={handleReset}>
                                                Reset Password
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <RiUser6Fill className="fs-4 cursor-pointer" onClick={handleModal} />
                                    <Signup_login />
                                </div>
                            )
                        }
                        <div className=' position-relative' onClick={() => handlewishlist('cart')}>
                            <p className='mb-0'><IoIosCart className='fs-4' /></p>

                            <div className='position-absolute badge-position'><Badge className=' rounded-5' style={{ backgroundColor: "var(--icon-color) !important" }}>{cart?.length}</Badge></div>
                        </div>
                    </div>
                    <div className='d-flex d-lg-none justify-content-between align-items-center w-100 '>
                        <RiMenu3Line className='fs-4 ' onClick={handleOffcanvas} />
                        < OffcanvasOptions />
                        <Link to='/'> <img src={logo} alt="" width={140} /></Link>
                        <div className='position-relative'><FiSearch className=' fs-4' onClick={handleSearch} /></div>
                    </div>
                </Container>
            </Navbar>

        </>
    )
}
export default Header
