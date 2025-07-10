import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { changeAdminmodal } from '../../Store/slice/ModaSlice'
import { showToast } from '../../Store/slice/ToastSlice'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import ProductData from '../ProductData'
import { categorydata, metaldata, ocassiondata } from '../../Store/slice/ProductdataSlice'


const COM = (props) => {
    const adminmodal = useSelector((state) => state.modalMenu.adminmodal);
    const mode = useSelector((state) => state.modalMenu.mode);
    const selCatId = useSelector((state) => state.modalMenu.selectedCat);
    const dispatch = useDispatch();
    const [newChange, setNewChange] = useState('');
    const handleUpdate = (e) => {
        setNewChange(e.target.value);

    }
    useEffect(() => {
        if (mode === 'edit' && props.category) {
            if (props.type === 'category') {
                setNewChange(props.category.categoryname || '');
            } else if (props.type === 'metal') {
                setNewChange(props.category.metalname || '');
            } else {
                setNewChange(props.category.ocassionname || '');
            }
        } else {
            setNewChange('');
        }
    }, [props.category, mode, props.type]);



    const handleAdd = async () => {
        let payload = {}
        if (props.type == 'category') {
            payload = { categoryname: newChange };
        }
        else if (props.type === 'metal') {
            payload = { metalname: newChange };

        }
        else {
            payload = { ocassionname: newChange };
        }
        try {
            const res = await axios.post(`http://localhost:5000/${props.type}/add${props.type}`, payload);
            if (res.data.status) {
                if (props.type == 'category') {
                    const updateList = await axios.get('http://localhost:5000/category/categorieswithcount');
                    dispatch(categorydata(updateList.data.data.data));
                    setNewChange('');
                }
                else if (props.type === 'metal') {
                    const updateList = await axios.get('http://localhost:5000/metal/getmetalwithproductcount');
                    dispatch(metaldata(updateList.data.data.data));
                    setNewChange('');
                }
                else {
                    const updateList = await axios.get('http://localhost:5000/ocassion/getocassionwithproductcount');
                    dispatch(ocassiondata(updateList.data.data.data));
                    setNewChange('')
                }
                dispatch(showToast({ message: res.data.data.message, type: "success" }));
            }
        } catch (error) {
            dispatch(showToast({ message: error.response?.data?.data?.message, type: "error" }))
        }
        dispatch(changeAdminmodal());
    }

    const handleEdit = async () => {
        let payload = {};
        const id = props.category?.categoryId;
        

        if (props.type === 'category') {
            payload = { categoryname: newChange };
        } else if (props.type === 'metal') {
            payload = { metalname: newChange };
        } else {
            payload = { ocassionname: newChange };
        }

        try {
            const res = await axios.put(`http://localhost:5000/${props.type}/update${props.type}/${selCatId._id}`, payload);
            if (res.data.status) {
                if (props.type === 'category') {
                    const updateList = await axios.get('http://localhost:5000/category/categorieswithcount');
                    dispatch(categorydata(updateList.data.data.data));
                } else if (props.type === 'metal') {
                    const updateList = await axios.get('http://localhost:5000/metal/getmetalwithproductcount');
                    dispatch(metaldata(updateList.data.data.data));

                } else {
                    const updateList = await axios.get('http://localhost:5000/ocassion/getocassionwithproductcount');
                    dispatch(ocassiondata(updateList.data.data.data));
                }
                dispatch(showToast({ message: res.data.data.message, type: "success" }));
            }
        } catch (error) {
            dispatch(showToast({ message: error.response?.data?.data?.message, type: "error" }));
        }
        dispatch(changeAdminmodal());
    };
    return (
        <div>
            <Modal show={adminmodal} onHide={() => dispatch(changeAdminmodal())}>
                <Modal.Header closeButton style={{ backgroundColor: 'var(--hover-color)' }}>
                    <Modal.Title className=' text-white fs-5'>
                        {mode == 'add' ? `Add New ${props.label}` : `Edit ${props.label}`}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'var(--admin-hover)' }} className=' text-white'>
                    <Form>
                        <Form.Label>{props.label} Name</Form.Label>
                        <Form.Control placeholder={props.placeholder} value={newChange} onChange={handleUpdate}></Form.Control>
                    </Form>
                    <div className=' mt-4 text-center'>

                        <Button className='btn-color bg-transparent' onClick={mode === 'add' ? handleAdd : handleEdit}>
                            {mode === 'add' ? 'Add' : 'Edit'}
                        </Button>


                    </div>
                </Modal.Body>
            </Modal>
            <ProductData />
        </div >
    )
}
export default COM
