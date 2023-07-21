import React from 'react'
import "./CommonSection.css"
import { Col, Container, Row } from 'react-bootstrap'

const CommonSection = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <section className='left-section'>
                            <div className="left-opacity">
                                <div className='left-padding'>
                                    <p>WHY CHOOSE US?</p>
                                    <h1>
                                        MAKE THE WORLD BETTER PLACE
                                        <br />
                                        WITH CONSTRUCTION QUALITY
                                    </h1>
                                    <p>
                                        South-central construction region since 2005
                                    </p>
                                </div>
                            </div>
                        </section>
                    </Col>

                    <Col md={6}>
                        <section className="right-section">
                            <div className="right-opacity">

                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CommonSection