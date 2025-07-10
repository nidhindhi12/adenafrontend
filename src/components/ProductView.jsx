import { Modal, Row, Col, Carousel, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toggleproductview } from '../Store/slice/ModaSlice'
import { CiHeart } from "react-icons/ci";
import { handleaddproduct } from './Addproduct';
import { IoMdClose } from "react-icons/io";
import { addToWishlist } from './wishfun';


const ProductView = () => {
    const productview = useSelector((state) => state.modalMenu.productview)
    const dispatch = useDispatch();
    const quickviewproduct = useSelector((state) => state.modalMenu.quickview)
    
    return (
        <>
            <Modal centered animation={false} size='lg' show={productview} onHide={() => dispatch(toggleproductview())}>
                <Row style={{ backgroundColor: 'var(--header-bg-color)' }} className=' mx-0'>
                    <Col className='px-0 position-relative' lg={5} xs={12} >
                        <Carousel fade>
                            <Carousel.Item>
                                <img src={quickviewproduct.image[0].url} alt="" className='product-modal-img' />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={quickviewproduct.image[1].url} alt="" className='product-modal-img' />
                            </Carousel.Item>
                        </Carousel>
                        <p className='mb-0 text-end mt-2 d-block d-lg-none position-absolute top-0 end-0 z-2 pe-3'><IoMdClose className='text-black fs-4 ' onClick={() => dispatch(toggleproductview())} /> </p>
                    </Col>
                    <Col lg={7} xs={12}>
                        <p className='mb-0 text-end mt-2 d-none d-lg-block'><IoMdClose className='text-black fs-4 ' onClick={() => dispatch(toggleproductview())} /> </p>
                        {
                            quickviewproduct && (
                                <div className=' p-2 icon-color'>
                                    <div className=' d-flex align-items-center gap-3'>
                                        <h5 style={{ fontFamily: 'var(--secondary-font)', color: 'var(--icon-color)' }} className=' fs-3 fw-light  '>{quickviewproduct.title}</h5>
                                        <span className='fs-4 cursor'onClick={() => addToWishlist(quickviewproduct._id, dispatch)}><CiHeart /></span>
                                    </div>
                                    <div className=' d-flex gap-2 align-items-center'>
                                        <p className='fs-5 fw-bold mb-0' style={{ color: 'var(--icon-color)' }}>&#x20B9;{quickviewproduct.price}</p>
                                        <span className='text-danger'>
                                            {quickviewproduct.discount ? `${quickviewproduct.discount} % Off` : ''}
                                        </span>
                                    </div>
                                    <span className=' fs-13'>{quickviewproduct.description}</span>
                                    <div className=' d-flex gap-3'>
                                        <span style={{ color: ' #e4562e' }} className=' fs-14'>Karatage: {quickviewproduct.karatage>'0'?quickviewproduct.karatage:'-'}</span>
                                        <span style={{ color: ' #e4562e' }} className=' fs-14'>Size: {quickviewproduct.size}</span>
                                    </div>
                                    <div className='d-flex justify-content-center mt-3 cursor gap-4 mb-2'>
                                             <div className='border-raidus ms-2'>
                                            <p className='mb-0 text-nowrap' onClick={()=>handleaddproduct(quickviewproduct,dispatch)}>Add to Cart</p>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default ProductView