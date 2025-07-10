import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleproductmodel } from '../../Store/slice/ModaSlice';
import { productdata } from '../../Store/slice/ProductdataSlice';

import { Table } from 'react-bootstrap'
import axios from 'axios';
import { useEffect, } from 'react';
import { showToast } from '../../Store/slice/ToastSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const fetchdata = useSelector((state) => state.productdata.product);
 

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/product/readproducts');
        if (res.data.status) {
          dispatch(productdata(res.data.data.data));

        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [dispatch]);

  return (
    <>
      <div className=' d-flex justify-content-between align-items-center'>
        <h4 className=' text-white fw-bold fs-5 py-3'>Products</h4>
        <div className=' d-flex text-white'>
          <Link to='/admin/dashboard' className=' text-white'>Dashboard / </Link>
          <Link className=' text-white-50'>Products</Link>
        </div>
      </div>
      <div style={{ backgroundColor: 'var(--admin-hover)' }} className=' py-2'>
        <div className='d-flex justify-content-between px-4 align-item-center'>
          <p className=" text-white mt-2">Total Products:{fetchdata?.length || 0}</p>
          <button className='btn btn-color fs-14 text-end' style={{ backgroundColor: "transparent" }} onClick={() => dispatch(toggleproductmodel())}>+ Add new product </button>
        </div>
      </div>
      <div className=' mt-4'>
        <div style={{ marginBottom: "77px" }}>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th className=" text-white">Icon</th>
                <th className=" text-white"> Product Name</th>
                <th className=" text-white">Price</th>
                <th className=" text-white">Karatage</th>
                <th className=" text-white">Size</th>
                <th className=" text-white">Category</th>
                <th className=" text-white">Gender</th>
                <th className=" text-white">Metal</th>
                <th className=" text-white">Ocassion</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(fetchdata) && fetchdata?.map((item, index) => (
                <tr key={index}>
                  <td style={{width:'7%'}}><img src={item.image[0].url} alt="" className=' rounded-5 w-100' /></td>
                  <td className="text-capitalize text-white text-wrap">{item.title}</td>
                  <td className="text-white text-center" >{item.price}</td>
                  <td className="text-white text-center" >{item.karatage}</td>
                  <td className="text-white " >{item.size}</td>
                  <td className="text-white text-center" >{item.category}</td>
                  <td className="text-white text-center" >{item.gender}</td>
                  <td className="text-white text-center" >{item.metal}</td>
                  <td className="text-white text-center" >{item.ocassion}</td>

                </tr>
              ))}
            </tbody>
          </Table>

        </div>
      </div>

    </>

  )
}

export default ProductList
