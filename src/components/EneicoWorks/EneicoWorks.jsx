import React from 'react'
import "./EneicoWorks.css"
import { Col, Container, Row } from 'react-bootstrap'
import arrow1 from "../../assets/images/services/arrow1.png"
import arrow2 from "../../assets/images/services/arrow2.png"
import left from "../../assets/images/services/left.png"
import center from "../../assets/images/services/center.png"
import right from "../../assets/images/services/right.png"


const EneicoWorks = () => {
    return (
        <section className='eneico-work-section'>
            <Container>
                <Row>
                    <h1>How Does ENEICO Works</h1>
                    <Col md={1}></Col>
                    <Col md={4}>
                        <div className='main-div'>
                            <div>
                                <div className='text-center image-div'>
                                    <img src={left} alt="" className='img-fluid border-img' />
                                    <div className='image-top'>
                                        <p>1</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h5 className='short-heading'>General Contract</h5>
                                    <p className='short-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinctio?</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={arrow1} alt="" className='img-fluid arrow' />
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className='main-div'>
                            <div>
                                <div className='text-center image-div'>
                                    <img src={center} alt="" className='img-fluid border-img' />
                                    <div className='image-top'>
                                        <p>2</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h5 className='short-heading'>Project Planning</h5>
                                    <p className='short-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinctio?</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={arrow2} alt="" className='img-fluid arrow' />
                            </div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className='text-center image-div'>
                            <img src={right} alt="" className='img-fluid border-img' />
                            <div className='image-top'>
                                <p>3</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h5 className='short-heading'>Interior Designing</h5>
                            <p className='short-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinctio?</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EneicoWorks