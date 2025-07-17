import { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { togggleaddressmodel } from '../Store/slice/ModaSlice';
import axios from 'axios'
import { showToast } from '../Store/slice/ToastSlice';
import {Base_url} from './BaseUrL'

const Address = () => {
    const address = useSelector((state) => state.modalMenu.addressmodel);
    const dispatch = useDispatch();
    const userredux = useSelector((state) => state.auth.users)
    const [shippingAd, setShippingAd] = useState({ streetaddress:'', town: '', state: "", country: '', pincode: '' });
    const isFormValid = Object.values(shippingAd).every((value) => value.trim() !== '');
    const handleAddress = (e) => {
        setShippingAd({
            ...shippingAd, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${Base_url}${userredux._id}`, shippingAd);
           
            if (response.data.status) {
                dispatch(showToast({ message: 'Address added successfully', type: 'success' }))
                dispatch(togggleaddressmodel());
                const updatedUser = { ...userredux, ...shippingAd };
                localStorage.setItem('user', JSON.stringify(updatedUser));

                setShippingAd({
                    streetaddress: '', town: '', state: "", country: '', pincode: ''
                })
            }
            else {
                dispatch(showToast({ message: 'Address failed to add', type: 'error' }));

            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Modal show={address} onHide={() => dispatch(togggleaddressmodel())} animation={false}>
                <Modal.Header closeButton style={{ backgroundColor: '#FFF9F3' }}>
                    <Modal.Title style={{ 'fontFamily': 'var(--secondary-font)' }}>Add Shipping Address</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#FFF9F3' }}>
                    <Form className='mt-3'>
                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Control type="text" placeholder="Street Address" style={{
                                border: 'none', borderBottom: '1px solid red', borderRadius: '0', boxShadow: 'none', backgroundColor: '#FFF9F3'
                            }} value={shippingAd.streetaddress} onChange={handleAddress} name='streetaddress' />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridTown">

                                <Form.Control type="text" placeholder="Town" style={{
                                    border: 'none', borderBottom: '1px solid red', borderRadius: '0', boxShadow: 'none', backgroundColor: '#FFF9F3'
                                }} value={shippingAd.town} onChange={handleAddress} name='town' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control type="text" placeholder="State" style={{
                                    border: 'none', borderBottom: '1px solid red', borderRadius: '0', boxShadow: 'none', backgroundColor: '#FFF9F3'
                                }} value={shippingAd.state} onChange={handleAddress} name='state' />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCountry">
                                <Form.Control type="text" placeholder="Country" style={{
                                    border: 'none', borderBottom: '1px solid red', borderRadius: '0', boxShadow: 'none', backgroundColor: '#FFF9F3'
                                }} value={shippingAd.country} onChange={handleAddress} name='country' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPincode">
                                <Form.Control type="text" placeholder="Pincode" style={{
                                    border: 'none', borderBottom: '1px solid red', borderRadius: '0', boxShadow: 'none', backgroundColor: '#FFF9F3'
                                }} value={shippingAd.pincode} onChange={handleAddress} name='pincode' />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#FFF9F3' }} className="d-flex justify-content-center">
                    <Button className='mb-0 text-nowrap fw-medium' style={{ backgroundColor: 'var(--icon-color)', width: '100px', height: '50px' }}  disabled={!isFormValid} onClick={handleSubmit}>Checkout</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Address