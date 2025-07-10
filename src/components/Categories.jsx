import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Teaser from './Teaser';
import { Link } from 'react-router-dom';

const Categories = () => {
  const data = [
    { name: "Earrings", url: "https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749660916/b03fd0cfb31f62f1a76c195e375577db_ledbnn.jpg" },
    { name: "Rings", url: "https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749661056/9d81a57d5d2a8feccf0e901dc8192a6c_k9nf15.jpg" },
    { name: "Chains", url: "https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749661349/808afe0892ea0a972eca54069d8ccef7_tzbfan.jpg" },
    { name: "Bracelets", url: "https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749661631/bracelets-cat_jayyok.webp" },
    { name: "Bangles", url: "https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749661742/168f6e9fc55292c948709929038a9dc0_ju8c3e.jpg" },
    { name: "Ankelets", url: "https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749662035/a9069844ae836f2f89df41a9ac68a3e8_thpp9t.jpg" },
    { name: "Mangalsutra", url: "https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749661807/848c5577f6e420edc0a9e8b33088dede_byrhcj.jpg" },
    { name: "Necklaces", url: "https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749663800/14af4d856e3ee0b79e3b15f9e4004788_wibtay.jpg" }
  ]
  return (
    <div>
      <Container>
        <h1 style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)" }} className=' text-center heading-size mb-0'>Find Your Perfect Match</h1>
        <p className=' sub-heading-size text-center' style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)", opacity: "0.6" }}>Shop by Categories</p>
        <Row className=' justify-content-center text-lg-center'>
          {

            data.map((item, index) => (

              <Col key={index} className=' d-flex justify-content-center'>
                <Link
                to={`/filterproduct/${item.name.toLowerCase() === 'ankelets' ? 'anklets' : item.name.toLowerCase()}`}
                  className='text-decoration-none'
                >
                  <div className='img-box'>
                    <img src={item.url} alt="" style={{ width: '250px', height: '300px' }} className='rounded-3 zoom-img ' />
                  </div>
                  <p className=' fs-5 fw-medium text-center' style={{ fontFamily: 'var(--secondary-font)',color:'var(--icon-color)' }}>{item.name}</p>
                </Link>
              </Col>
            ))
          }


        </Row>
      </Container>
      <Teaser />
    </div>
  )
}

export default Categories
