import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Chart from 'react-apexcharts'
import { chartLineOptions, chartLineSeries } from '../Data';

const TotalCustomer = () => {
    return (


        <div style={{ backgroundColor: 'var( --admin-hover)' }} className='rounded-3 p-2'>
            <div className=' d-flex justify-content-around py-2 '>
                <p className=' text-white-50'>Total Customer</p>
                <p className=' text-success fs-14 px-3 py-1 rounded-pill' style={{ backgroundColor: '#15203c' }}>+6.8%</p>
                <p className=' text-white-50'>Last 7 days</p>
            </div>
                <p className=' text-white fw-semibold fs-4'>15,280</p>
            <div className='d-flex justify-content-center mt-2'>
                <Chart
                    options={chartLineOptions} series={chartLineSeries} type="line" width="80%" height="60" className='pb-2' />
            </div>
            <div className=' d-flex justify-content-between px-3'>
                <div className=' d-flex gap-2 align-items-center'>
                <span className='rounded-5' style={{ backgroundColor: 'var(--btn-hover-color)', color: 'var(--admin-text-hover)', width: '10px', height: '10px' }}></span>
                <p className='text-white-50 m-0'>Previous Month</p>
              </div>
              <div className=' d-flex gap-2 align-items-center'>
                <span className='rounded-5' style={{ backgroundColor: 'var(--hover-color)', width: '10px', height: '10px' }}></span>
                <p className='text-white-50 m-0'>Current Month</p>
              </div>
            </div>
            
        </div>


    )
}

export default TotalCustomer
