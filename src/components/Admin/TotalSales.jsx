import React from 'react'
import { chartAreaOptions, chartAreaSeries } from '../Data'
import Chart from 'react-apexcharts'

const TotalSales = () => {
    return (

            <div style={{ backgroundColor: 'var( --admin-hover)' }} className='p-3 mb-3 rounded-3'>
                <h4 className="text-white mb-3" style={{fontFamily:'var(--secondary-font)'}}>Sales Comparison</h4>
                <Chart options={chartAreaOptions} series={chartAreaSeries} type="area" height={300} />
            </div>

    )
}

export default TotalSales
