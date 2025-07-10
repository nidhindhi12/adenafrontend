import React from 'react'
import collection from '../../images/collection.jpg'
import chain from '../../images/chain.webp'
import bangle from '../../images/bangle.webp'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Collection = () => {
    return (
        <div className=' spacer'>
            <Container className=' px-0'>
                <h1 style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)" }} className=' text-center heading-size mb-0'>Adena Collection
                </h1>
                <p className=' sub-heading-size text-center' style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)", opacity: "0.6" }}>Explore our newly launched collection</p>
                <Row className=' g-2 mx-0 flex-wrap px-4 mt-3' >
                    <Col md={6}>
                        <Link to='/filterproduct/18K'>
                            <p> <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517608/collection_ctvmpb.jpg" alt="" className='rounded-4 img-fluid' /></p>
                        </Link>
                    </Col>
                    <Col md={6}>
                        <Link to='/filterproduct/chains'>
                            <p><img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517639/chain_ev15l2.webp" alt="" className='rounded-4 mb-1 img-fluid' /></p>
                        </Link>
                        <Link to='/filterproduct/earrings'>
                            <p > <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517658/bangle_wbtsh0.webp" alt="" className='rounded-4 img-fluid' /></p>
                        </Link>

                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Collection
