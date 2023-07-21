import React from 'react'
import "./GetQuotation.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BiSolidPhoneCall } from "react-icons/bi"

const GetQuotation = () => {
    return (
        <section className="quote-banner">
            <Container>
                <Row>
                    <Col md={6} className='text-center'>
                        <h2>Get An Easy Quotation</h2>
                        <p>We Are Professional Building Construction</p>
                    </Col>
                    <Col md={6}>
                        <div className='right-service-section'>
                            <div>
                                <div className='mobile-call'>
                                    <p className='phone-icon d-flex justify-content-center align-items-center'>
                                        <BiSolidPhoneCall size={20} />
                                    </p>
                                    <div className='mx-3'>
                                        <p className='call'>Call Us Any Time</p>
                                        <p className='number'>
                                            <a href="tel:+39089098987">+3_(908)-9098-987</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <p className='or'>or</p>
                            </div>
                            <div className='text-center'>
                                <Link to="/contact">
                                    <button className="quote-btn">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default GetQuotation