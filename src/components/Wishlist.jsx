
import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import axios from 'axios'
import { Row, Card, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../Store/slice/ToastSlice';
import { countofwislist } from '../Store/slice/FilterSlice';
import { handleaddproduct } from './Addproduct';

const Wishlist = () => {
  const [wishlistproducts, setWishlistProducts] = useState([]);

  const isLoading = !wishlistproducts || wishlistproducts.length === 0;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchWishlist = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/wishlist/getwishlist', {
          headers: {
            authorization: `Bearer ${token}`
          },
        })
        if (res.data.status) {
          setWishlistProducts(res.data.data.data);
          dispatch(countofwislist(res.data.data.data));


        }
      } catch (error) {
        console.log(error?.res?.data?.data?.message);

      }
    }
    fetchWishlist();
  }, [])

  const handleDelete = async (productId) => {

    const token = localStorage.getItem('token');


    try {
      const res = await axios.delete(`http://localhost:5000/wishlist/removewishlist/${productId}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      console.log(res);
      if (res.data.status) {
        // dispatch(showToast({ message: res.data.data.message, type: 'success' }));
        const updatedWishlist = wishlistproducts.filter(item => item.product._id !== productId);
        setWishlistProducts(updatedWishlist);
        dispatch(countofwislist(updatedWishlist));

      }
    } catch (error) {
      console.log(error);
      // dispatch(showToast({message:res?.data.data.message,type:'error'}));
    }
  }
  const handleCart = async (item) => {
     await handleaddproduct(item.product, dispatch);
    handleDelete(item.product._id,)
  }


  return (
    <div>
      <div className="hero-section position-relative w-100">
        <div className="wishlist-img w-100 h-100">
          <img
            src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750406306/Wishlist2-1_tpeiv5.jpg"
            alt=""
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>
        <div className="text-pos  text-center">
          <h2>Your Wishlists</h2>
          <p className="fs-6 text-black">Each jewel weaves a unique story, which one will capture your heart?</p>
        </div>
      </div>
      <Container>
        {
          isLoading ? (
            <div className='  pt-5 mt-5 text-center'>
              <h4 style={{ 'fontFamily': "var()" }} className='fs-3'>Your Wishlist is empty</h4>
              <p className=' mb-0' style={{ color: '#555555', letterSpacing: '1px' }}> Add items that you like to your wishlist. Review </p>
              <p style={{ color: '#555555', letterSpacing: '2px' }}>them anytime and easily move them to the bag.</p>
              <Button className=' btn-size' onClick={() => navigate('/filterproduct/"All Jewellery"')}>Browse Products</Button>
            </div>
          ) : (

            <Row className=' flex-wrap justify-content-center col-gap-2 gap-4 mx-0'>
              <div className=' text-center mt-3 fs-5 fw-medium'>Total Products:{wishlistproducts.length}</div>
              {
                wishlistproducts.map((item, index) => (
                  <Card style={{ width: '16rem' }} className='mt-4 px-0 border-0 bg-transparent' key={index}>
                    <div className='product-image-wrapper'>
                      <img src={item.product.image[0].url} className='img-fluid first-img '
                        style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
                      <img
                        src={item.product.image[1]?.url || item.image[0].url}
                        className='img-fluid hover-img position-absolute top-0 start-0'
                        style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                        alt='hover' />

                    </div>
                    <div className=' bg-transparent'>
                      <h5 className='fs-6 fw-medium text-truncate'>{item.product.title}</h5>
                      <Card.Text className=' fw-bold d-flex justify-content-between align-items-center cursor'>
                        <span>&#x20B9; {item.product.price}</span>
                        <div className=' position-absolute end-0  rounded-5 ' onClick={() => handleDelete( item.product._id)}>
                          <FaTrashAlt className='text-danger' />
                        </div>
                      </Card.Text>
                      <div className=' text-center wishlist'>
                        <Button className='text-uppercase mt-2 btn-size' onClick={() => handleCart(item)}>Move to Cart</Button>
                      </div>
                    </div>
                  </Card>
                ))
              }
            </Row>
          )
        }
      </Container>
    </div>
  )
}
export default Wishlist

