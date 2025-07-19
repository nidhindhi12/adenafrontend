import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { userdata } from '../../Store/slice/UserSlice';
import { Base_url } from '../BaseUrL'

const User = () => {
    const dispatch = useDispatch();
    const fetchuser = useSelector((state) => state.users.user);
    console.log(fetchuser);
    useEffect(() => {
        const fetchuser = async () => {
            try {
                const res = await axios.get(`${Base_url}/user/readalluser`);
                dispatch(userdata(res.data.data.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchuser();
    }, [dispatch])
    return (
        <>
            <Container>
                <div>
                    <h5 className=' text-white text-center mt-4 fw-semibold fs-3'>User</h5>
                    <div className=' d-flex text-white justify-content-end mb-2'>
                        <Link to='/admin/dashboard' className=' text-white'>Dashboard / </Link>
                        <Link className=' text-white-50'>User</Link>
                    </div>
                </div>
                <div style={{ backgroundColor: 'var(--admin-hover)' }} className=' mb-2 py-2'>
                    <div className=' d-flex justify-content-between w-100 px-4 align-item-center'>
                        <p className=" text-white mt-2">Total User: {fetchuser.length}</p>
                    </div>
                </div>
                <div className=' mt-4'>
                    <div style={{ marginBottom: "77px" }}>
                        <Table responsive striped bordered hover>
                            <thead>
                                <tr>
                                    <th className=" text-white">Icon</th>
                                    <th className=" text-white">First Name</th>
                                    <th className=" text-white">Last Name</th>
                                    <th className=" text-white">Email Id</th>
                                    <th className=" text-white">Phone Number</th>
                                    <th className=" text-white">Address</th>
                                    <th className=" text-white">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(fetchuser) && fetchuser?.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            {
                                                item.image ? (
                                                    <img src={item.image.url} alt="" className=' image-icon' />
                                                ) :
                                                    (<p className="list-icon m-0 text-white ps-3 pt-1">{item.firstname?.charAt(0).toUpperCase()}</p>)
                                            }
                                        </td>
                                        <td className=' text-white text-capitalize'>{item.firstname}</td>
                                        <td className="text-capitalize text-white">{item.lastname}</td>
                                        <td className="text-white" >{item.email}</td>
                                        <td className="text-white" >{item.phonenumber}</td>
                                        <td className="text-white" >{item.address ? item.address : '-'}</td>
                                        <td className="text-white" >{item.usertype}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                    </div>
                </div>
            </Container>
        </>

    )
}

export default User
