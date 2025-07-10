import { Container, Row, Col } from 'react-bootstrap'
import dash from '../../images/welcome.png'
import Chart from 'react-apexcharts'
import { RiShoppingBag2Line, RiCalendarCloseLine } from "react-icons/ri";
import { chartOptions, chartSeries } from '../Data';
import { chartAreaOptions, chartAreaSeries } from '../Data'
import TotalSales from './TotalSales'
import TotalCustomer from './TotalCustomer';
import AdminOrder from './AdminOrder';

const Dashboard = () => {
  return (
    <>
      <Container className='mt-4 '>
        <Row className='mx-0 p-2 gap-3 gap-lg-0'>
          <Col xs={12} lg={7} style={{ backgroundColor: 'var(--admin-text-hover)' }} className='rounded-3 py-3'>
            <Row className='ps-3'>
              <Col>
                <h4 className=' text-white fs-4 fw-medium'>Good Morning, <span style={{ color: '#ffcea9', fontFamily:'var(--secondary-font)'}}>Olivia!</span></h4>
                <span className=' text-white-50 fs-14'>Here's what's happening with your store today.</span>
              </Col>
              <Col className=' d-flex justify-content-end px-3'>
                <img src={dash} alt="" width={180} />
              </Col>
            </Row>
            <div className=' d-flex gap-5'>
              <div className=' d-flex gap-3'>
                <div className='bg-white d-inline-block px-2 py-3 rounded-2'>
                  <RiShoppingBag2Line style={{ color: 'var(--admin-text-hover)' }} className=' fs-4 fw-bold' />
                </div>
                <div>
                  <span className='text-white fw-semibold fs-6 mb-0'>86 New Orders</span>
                  <p className=' mb-0 text-white-50 fs-14 fw-semibold'>Awaiting processing</p>
                </div>
              </div>
              <div className=' d-flex gap-2'>
                <div className='bg-white d-inline-block px-2 py-3 rounded-2'>
                  <RiCalendarCloseLine className=' fs-4 fw-bold text-danger' />
                </div>
                <div>
                  <span className='text-white fw-medium fs-6 mb-0'>35 Products</span>
                  <p className=' mb-0 text-white-50 fw-bold fw-semibold fs-14'>Out of stock</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={5} style={{ backgroundColor: 'var( --admin-hover)' }} className='rounded-3'>
            <AdminOrder />
          </Col>
        </Row>
        <Row>
          <Col lg={7} xs={12} className=' mt-5'>
            <TotalSales />
          </Col>
          <Col lg={5} xs={12} className=' mt-5'>
            <TotalCustomer />
          </Col>
        </Row>
      </Container >
    </>

  )
}
export default Dashboard

