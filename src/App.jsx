import React from 'react'
import EndUserroute from './Routes/EndUserroute'
import Adminroutes from './Routes/Adminroutes'
import './App.css'
import ProductData from './components/ProductData'




const App = () => {
  return (
    <div style={{ backgroundColor: '#FFF9F3' }}>
      <EndUserroute />
      <Adminroutes />
      <ProductData />

    </div>
  )
}

export default App
