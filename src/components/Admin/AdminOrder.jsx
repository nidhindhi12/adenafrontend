import Chart from 'react-apexcharts'
import { chartOptions, chartSeries } from '../Data';


const AdminOrder = () => {
    return (
        <>
            <div className=' d-flex justify-content-around py-2 px-1'>
                <p className=' text-white-50'>Total Orders</p>
                <p className=' text-danger fs-14 px-3 py-1 rounded-pill' style={{ backgroundColor: '#15203c' }}>-7.6%</p>
                <p className=' text-white-50'>Last 7 days</p>
            </div>
            <p className=' text-white fs-4 fw-semibold'>₹2,00,000</p>
            <div className='d-flex justify-content-center mt-2'>
                <Chart
                    options={chartOptions} series={chartSeries} type="bar" width="80%" height="60" className='pb-2' />
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <div className=' d-flex gap-2 align-items-center'>
                    <span className='rounded-5' style={{ backgroundColor: 'var(--btn-hover-color)', color: 'var(--admin-text-hover)', width: '10px', height: '10px' }}></span>
                    <p className='text-white-50 m-0'>Completed</p>
                </div>
                <div>
                    <p className=' text-white-50'>60%</p>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <div className=' d-flex gap-2 align-items-center'>
                    <span className='rounded-5' style={{ backgroundColor: 'var(--hover-color)', width: '10px', height: '10px' }}></span>
                    <p className='text-white-50 m-0'>Pending</p>
                </div>
                <div>
                    <p className=' text-white-50'>30%</p>
                </div>
            </div>
        </>
    )
}

export default AdminOrder
