import { Container, Row, Col } from 'react-bootstrap';
import ActualProduct from './ActualProduct';
import { useDispatch, useSelector } from 'react-redux';
import { sortoffcanvasshow } from '../Store/slice/Offcanvas_slice';
import FilterCanvas from './FilterCanvas';
import { useParams } from 'react-router-dom';

const ShowProducts = () => {
    const { itemName } = useParams();
    const dispatch = useDispatch();
    const filterItem = useSelector((state) => state.filterproduct.getfilter);
    return (
        <div>
            <Container>
                <Row className=' mx-0 mt-4 justify-content-between align-items-center'>
                    <Col>
                        <div className='d-flex gap-3 align-items-center  cursor' onClick={() => dispatch(sortoffcanvasshow())}>
                            <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749908565/filter-default_auuhsl.svg" alt="" />
                            <span className='fw-semibold text-nowrap' style={{ color: 'var(--icon-color)', fontSize: 'var( --section-heading)' }}>Sort & filter</span>
                            {
                                filterItem.value && (
                                    <span style={{ color: 'var(--icon-color)', backgroundColor: 'var(--header-bg-color)', border: "1px solid var(--orange-color)" }} className=' fw-bold fs-5 px-3 py-2'>{filterItem.value}</span>
                                )
                            }

                        </div>
                    </Col>
                    <Col className='text-nowrap'>
                        <p className=' text-capitalize mb-0 text-end py-2'>Home / <span style={{ color: 'var(--icon-color)' }} className=' fw-bolder fs-14 '>{itemName}</span></p>
                    </Col>
                </Row>
                <div className='image text-center position-relative mt-2'>
                    <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749888603/PLP-Flower-Icon_zthbyq.svg" alt="" className=' position-absolute img-pos' />
                </div>
            </Container>
            <ActualProduct />
            <FilterCanvas />
        </div>
    )
}

export default ShowProducts

