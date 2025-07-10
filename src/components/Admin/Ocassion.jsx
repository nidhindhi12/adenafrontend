import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import COM from './COM';
import { useDispatch, useSelector } from 'react-redux';
import { changeAdminmodal, fetchSelectedCatId, } from '../../Store/slice/ModaSlice';
import { useEffect, } from 'react';
import axios from 'axios'
import { showToast } from "../../Store/slice/ToastSlice";
import { ocassiondata } from "../../Store/slice/ProductdataSlice";

const Metal = () => {
  const dispatch = useDispatch();
  const fetchdata = useSelector((state) => state.productdata.ocassion);
  console.log(fetchdata);

  const handleAdminModal = () => {
    dispatch(changeAdminmodal('add'));
  }
  const handleDelete = async (id) => {
    try {

      const res = await axios.delete(`http://localhost:5000/ocassion/deleteocassion/${id}`);
      if (res.data.status) {
        dispatch(ocassiondata(fetchdata.filter(ocassion => ocassion.ocassionId !== id)));
        dispatch(showToast({ message: res.data.data.message, type: "success" }));
      }
    } catch (error) {
      
      dispatch(showToast({ message: res?.data?.data.message, type: "error" }));
    }
  }
  useEffect(() => {
    const fetchOcassionCount = async () => {
      try {
        const res = await axios.get('http://localhost:5000/ocassion/getocassionwithproductcount');
        dispatch(ocassiondata(res.data.data.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOcassionCount();
  }, [dispatch]);
  const handleEdit = (item) => {
    dispatch(changeAdminmodal('edit'));
    dispatch(fetchSelectedCatId(item));
  }
  return (
    <Container>
      <div className=' d-flex justify-content-between align-items-center'>
        <h4 className=' text-white fw-bold fs-5 py-3'>Metal</h4>
        <div className=' d-flex text-white'>
          <Link to='/admin/dashboard' className=' text-white'>Dashboard / </Link>
          <Link className=' text-white-50'>Ocassion</Link>
        </div>
      </div>
      <div style={{ backgroundColor: 'var(--admin-hover)' }} className=' py-2'>
        <div className=' d-flex justify-content-between w-100 px-4 align-item-center'>
          <p className=" text-white mt-2">Total Products:{fetchdata?.length || 0}</p>
          <button className='btn btn-color fs-14' style={{ backgroundColor: "transparent" }} onClick={handleAdminModal}>
            + Add new ocassion
          </button>
        </div>
        <COM label="Ocassion" placeholder="Enter the Ocassion Name" type='ocassion' />
      </div>
      <div className=' mt-4'>
        <div style={{ marginBottom: "77px" }}>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th className=" text-white">Icon</th>
                <th className=" text-white">Ocassion Name</th>
                <th className=" text-white">Total Products</th>
                <th className=" text-white text-end pe-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(fetchdata) && fetchdata?.map((item, index) => (
                <tr key={index}>
                  <td><p className="list-icon m-0 text-white ps-3 pt-1">{item.ocassionname?.charAt(0).toUpperCase()}</p></td>
                  <td className="text-capitalize text-white">{item.ocassionname}</td>
                  <td className="text-white text-center" style={{ width: '15%' }}>{item.totalProducts}</td>
                  <td className='text-end pe-4' style={{ width: '20%' }}>
                    <FaEdit className="text-success me-3 cursor-pointer" onClick={() => handleEdit(item)} />
                    <FaTrashAlt className="text-danger cursor-pointer" onClick={() => handleDelete(item._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

        </div>
      </div>

    </Container>
  )
}

export default Metal

