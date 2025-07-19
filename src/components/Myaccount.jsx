import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Form, Breadcrumb, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Base_url } from './BaseUrL';


const UserInfo = () => {
  const userInfo = useSelector((state) => state.users.user)
  console.log(userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState({
    id: userInfo?._id || '',
    firstname: userInfo?.firstname || '',
    lastname: userInfo?.lastname || '',
    email: userInfo?.email || '',
    phonenumber: userInfo?.phonenumber || '',
    address: userInfo?.address || ''
  });

  useEffect(() => {

   setUpdateData({
      id: userInfo?._id || '',
      firstname: userInfo?.firstname || '',
      lastname: userInfo?.lastname || '',
      email: userInfo?.email || '',
      phonenumber: userInfo?.phonenumber || '',
      address: userInfo?.address || ''
    })
  }, [userInfo]);
  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  }

  const handleChanges = async (e) => {

    e.preventDefault();
    try {

      const response = await axios.put(`${Base_url}/user/updatedata/${updateData.id}`, updateData)
      dispatch(showtoast({ message: response.data.data.message, type: "success" }))

      navigate('/');
    } catch (error) {
      console.log(error);


    }
  }


  return (
    <section className='userInfoSection'>
      <div className='bgpic'>
        <div className="overlay"></div>
      </div>
      <Container>
        <div className="d-flex justify-content-end mt-2 ">
          <Breadcrumb className=' fs-6 '>
            <Breadcrumb.Item href="/" style={{ color: "var(--icon-color)!important" }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>My Account</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Row className='spc'>

          <div>
            <h5 className=' text-center fw-bold pb-2' style={{ 'fontFamily': 'var(--primary-family)', 'color': 'var(--highlight-color)' }}>Update Information</h5>
            <div className="updateInfo mb-5">
              <div className="updateForm border border-1 p-3 ">
                <Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" value={updateData.firstname} className='text-black' name='firstname' onChange={handleUpdate} />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="lastname" value={updateData.lastname} className='text-black' name='lastname' onChange={handleUpdate} />
                  </Form.Group>

                </Row>
                {/* 1st col */}

                <Row className=' my-2'>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control type="email" placeholder="Your E-mail" name='email' value={updateData.email} onChange={handleUpdate} />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" value={updateData.phonenumber} name='phonenumber' onChange={handleUpdate} />
                  </Form.Group>

                </Row>
                {/* 3rd col */}

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St..." name='address' onChange={handleUpdate} value={updateData.address} />
                </Form.Group>

                <div className=' text-center'>
                  <Button className=' text-uppercase mt-3 btn-size'>
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default UserInfo



