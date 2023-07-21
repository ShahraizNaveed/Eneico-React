import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./AfterClientSection.css"
import { Link } from 'react-router-dom'

const AfterClientSection = () => {
    return (
        <section className='afterClient-section'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='text-center'>
                            <h1 className='text-center'>YOU DREAM <span className='afterClient-span'>WE MAKE IT REAL!</span></h1>
                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, iste. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, adipisci?</p>
                            <Link to="/contact">
                                <button >CONTACT US</button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AfterClientSection