import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { FaHouseChimney } from "react-icons/fa6";
import { togggleaddressmodel } from '../Store/slice/ModaSlice';
import Address from './Address';
import { paymentdata } from './Data';
import axios from 'axios'
import { showToast } from '../Store/slice/ToastSlice';
const Checkout = () => {
  const userredux = useSelector((state) => state.auth.users);
  const navigate = useNavigate();
  const products = JSON.parse(localStorage.getItem("items")) || []
  const [selectedPayment, setSelectedPayment] = React.useState('');
  const dispatch = useDispatch();
  const pricesbeforediscount = products.map(item => item.price * item.qty).reduce((sum, x) => sum + x, 0);
  const totaldiscount = Math.round(products.map(item => ((item.price * item.discount) / 100) * item.qty).reduce((sum, x) => sum + x, 0));
  const handlePlaceOrder = async () => {
    if (!selectedPayment) {
      alert("Please select a payment option.");
      return;
    }
    const userid = userredux._id;
    const orderPayload = {
      paymentmode: selectedPayment,
      products: products.map((item) => ({
        productId: item._id,
        qty: item.qty,
        price: Math.round(item.price - (item.price * item.discount / 100))
      }))
    };
    try {
      const response = await axios.post(`http://localhost:5000/order/addorder/${userid}`, orderPayload)
      if (response.data.status) {
        dispatch(showToast({ message: response.data.data.message, type: "success" }));
        navigate('/orderplaced');
       
      }
    } catch (error) {
      console.log(error);
      dispatch(showToast({ message: response.data.data.message, type: "error" }));

    }
  }
  return (
    <>
      <Container>
        <div className='d-flex mx-0  justify-content-between align-items-center'>
          <span className='fw-semibold text-nowrap' style={{ color: 'var(--icon-color)', fontSize: 'var( --section-heading)' }}>Order Summary:</span>
          <p className=' text-capitalize mb-0 text-end '>Home / <span style={{ color: 'var(--icon-color)' }} className=' fw-medium'> Checkout</span></p>
        </div>
        <Row>
          <Col lg={8}>
            {
              products.map((item, index) => (
                <div className=' mt-3'>
                  <div className="product-img d-flex flex-column flex-sm-row gap-4 p-3" style={{ border: '1px solid var(--orange-color)' }}>
                    <div className='text-center d-none d-sm-block'>
                      <img src={item.image?.[0].url} alt="" style={{ width: '120px' }} />
                    </div>
                    <div className='text-center d-block d-sm-none'>
                      <img src={item.image?.[0].url} alt="" style={{ width: '50%' }} />
                    </div>
                    <div>
                      <p className=' fw-medium mb-0' style={{ fontFamily: 'var(--secondary-font)', color: 'var(--icon-color)' }}>{item.title}</p>
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
                      <div className=' d-flex align-items-center gap-5'>
                        <p className=' mb-0'> Karatge: <span className=' fw-medium'>{item.karatage > '0' ? item.karatage : '-'}</span></p>
                        <p className=' mb-0'>Quantity: <span className='fw-medium'>{item.qty}</span></p>

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
            </div>
            <div style={{ border: '1px solid var(--orange-color)', }} className=' mt-3 mx-auto rounded-2 p-2 '>
              <span className=' fw-medium'>Shipping Address:</span>

              {
                <div>
                  <div className=' d-flex justify-content-between text-nowrap' style={{ color: 'var(--icon-color)' }}>
                    <p className='text-capitalize d-flex align-items-center gap-2 fw-bolder'>{userredux.firstname}{userredux.lastname} <FaHouseChimney className='text-danger' /></p>
                    <p className=' fw-bolder cursor' onClick={() => dispatch(togggleaddressmodel())} >Update</p>
                  </div>
                  <div>
                    <span className=' text-capitalize fs-6 fw-semibold'>{userredux.streetaddress},    {userredux.town}, {userredux.state}, {userredux.country}, {userredux.pincode}</span>
                  </div>
                </div>
              }
            </div>
            <div style={{ border: '1px solid var(--orange-color)', }} className=' mt-3 mx-auto rounded-2 p-2 px-4 '>
              <span className=' fw-medium'>Payment Option:</span>
              <div>
                <Form style={{ color: 'var(--icon-color)' }}>
                  <Form.Group as={Row} className="mb-3">
                    <Col sm={10}>
                      {
                        paymentdata.map((item, index) => (
                          <Form.Check
                            key={index}
                            type="radio"
                            label={item}
                            name="payment"
                            id={`payment-option-${index}`}
                            value={item}
                            checked={selectedPayment === item}
                            onChange={(e) => setSelectedPayment(e.target.value)}
                          />
                        ))
                      }
                    </Col>
                  </Form.Group>
                </Form>
              </div>
              <div className='border-raidus mx-2 mt-2 cursor'>
                <p className='mb-0  text-nowrap' onClick={handlePlaceOrder}>Place Order</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Address />

    </>
  )
}

export default Checkout