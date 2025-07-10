import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { togggleaddressmodel } from '../Store/slice/ModaSlice';
import Address from './Address';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../Store/slice/ToastSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const [cartItems, setCartItems] = useState([]);
    const userredux = useSelector((state) => state.auth.users);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user ? user._id : null;
    useEffect(() => {
        if (userredux && userredux._id === user_id) {
            const products = JSON.parse(localStorage.getItem("items")) || [];
            setCartItems(products);
        }
    }, [userredux, user_id]);
    const handleIncreaseQty = (item) => {
        const updatedItems = cartItems.map((product) =>
            product._id === item._id ? { ...product, qty: product.qty + 1 } : product
        );
        setCartItems(updatedItems);
        localStorage.setItem("items", JSON.stringify(updatedItems));
    };
    const handleDecreaseQty = (item) => {
        const updatedItems = cartItems.map((product) =>
            product._id === item._id && product.qty > 1
                ? { ...product, qty: product.qty - 1 }
                : product
        );
        setCartItems(updatedItems);
        localStorage.setItem("items", JSON.stringify(updatedItems));
    };
    const handleRemoveItem = (item) => {
        const updatedItems = cartItems.filter(prod => prod._id !== item._id);
        setCartItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
    }
    const handleCheckout = async () => {
        if (!cartItems.length) {
            return dispatch(showToast({ message: "Cart is empty!", type: 'warning' }));
        }
        if (userredux.streetaddress && userredux.state && userredux.town && userredux.country && userredux.pincode) {
            navigate('/checkout')
        }
        else {
            dispatch(showToast({ message: "Please Add Your Shipping Details ", type: 'warning' }))

        }
    }
    const pricesbeforediscount = cartItems.map(item => item.price * item.qty).reduce((sum, x) => sum + x, 0);
    const totaldiscount = Math.round(cartItems.map(item => ((item.price * item.discount) / 100) * item.qty).reduce((sum, x) => sum + x, 0));

    return (
        <>
            <Container>
                <div className='d-flex mx-0  justify-content-between align-items-center'>
                    <span className='fw-semibold text-nowrap' style={{ color: 'var(--icon-color)', fontSize: 'var( --section-heading)' }}>Cart Details</span>
                    <p className=' text-capitalize mb-0 text-end'>Home /Cart</p>
                </div>
                <div className='image text-center position-relative mt-2'>
                    <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749888603/PLP-Flower-Icon_zthbyq.svg" alt="" className=' position-absolute img-pos' />
                </div>
                {
                    cartItems.length > 0 ? (
                        <Row className='mt-4' >
                            <Col lg={8}>
                                {
                                    cartItems.map((item, index) => (
                                        <div className=' mt-3'>
                                            <div className="product-img d-flex flex-column flex-sm-row gap-4 p-3" style={{ border: '1px solid var(--orange-color)' }}>
                                                <div className='text-center d-none d-sm-block'>
                                                    <img src={item.image?.[0].url} alt="" style={{ width: '120px' }} />
                                                </div>
                                                <div className='text-center d-block d-sm-none'>
                                                    <img src={item.image?.[0].url} alt="" style={{ width: '50%' }} />
                                                </div>
                                                <div>
                                                    <div className=' d-flex gap-3 align-items-center justify-content-start'>
                                                        <p className=' fw-medium mb-0' style={{ fontFamily: 'var(--secondary-font)', color: 'var(--icon-color)' }}>{item.title}</p>
                                                        <div className=' text-start cursor d-md-none' onClick={() => handleRemoveItem(item)}>
                                                            <FaTrashAlt className='text-danger' />
                                                        </div>
                                                    </div>
                                                    <span style={{ textDecoration: item.discount > 0 ? 'line-through' : 'none' }}>
                                                        &#x20B9; {item.price}
                                                    </span>
                                                    <span className='text-danger'>
                                                        {item.discount > 0 && (
                                                            <>
                                                                <span className='text-danger mx-2'>({item.discount}% OFF)</span>

                                                                <span className='icon-color'>
                                                                    &#x20B9; {Math.round(item.price - (item.price * item.discount / 100))}
                                                                </span>
                                                            </>
                                                        )}
                                                    </span>
                                                    <div className='d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2  gap-md-5'>
                                                        <p className=' mb-0 text-nowrap'> Karatge: <span className=' fw-medium'>{item.karatage > '0' ? item.karatage : '-'}</span></p>
                                                        <p className=' mb-0'>Quantity: <span className='fw-medium'>{item.qty}</span></p>
                                                        <div className='d-flex border-raidus'>
                                                            <p className='mb-0 cursor       ' onClick={() => handleIncreaseQty(item)}><MdOutlineAdd /></p>
                                                            <p className='px-4 mb-0'>
                                                                {item.qty}
                                                            </p>
                                                            <p className='mb-0 cursor' onClick={() => handleDecreaseQty(item)}><FiMinus /></p>
                                                        </div>
                                                    </div>
                                                    <div className=' text-start cursor d-none d-md-flex' onClick={() => handleRemoveItem(item)}>
                                                        <FaTrashAlt className='text-danger' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Col>
                            <Col lg={4} className='mt-3'>
                                <div style={{ border: '1px solid var(--orange-color)' }} className=' p-2'>
                                    <h5 style={{ fontFamily: 'var(--secondary-font)', color: 'var(--icon-color)' }} className=' text-center'>Payment Summary</h5>
                                    <p className=' d-flex justify-content-between mx-2 mb-1'>Total Price: <span className=' fw-medium'>{pricesbeforediscount}</span></p>
                                    <p className=' d-flex justify-content-between mx-2 mb-1'>Total Discount: <span className=' fw-medium  text-danger fw-semibold'>{totaldiscount}</span></p>
                                    <p style={{ border: '1px solid rgb(39, 37, 37)' }}></p>
                                    <p className=' d-flex justify-content-between mx-2 mb-1'>Final Price<span className=' fw-medium  text-danger fw-semibold'>{pricesbeforediscount - totaldiscount}</span></p>
                                    <div className='border-raidus mx-2 mt-5 cursor'>
                                        <p className='mb-0  text-nowrap' onClick={() => dispatch(togggleaddressmodel())}>Add Shipping Details</p>
                                    </div>
                                    <div className='border-raidus mx-2 mt-2 cursor'>
                                        <p className='mb-0  text-nowrap' onClick={handleCheckout}>Checkout</p>
                                    </div>
                                    <Address />
                                </div>
                            </Col>
                        </Row>)
                        : (<p className=' text-center mt-5 fw-bolder fs-3'>No Products!!</p>)
                }
            </Container>
        </>
    )
}
export default Cart


