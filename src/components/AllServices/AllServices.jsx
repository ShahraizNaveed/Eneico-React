import React from 'react'
import "./AllServices.css"
import { Col, Container, Row } from 'react-bootstrap'
import image1 from "../../assets/images/servicePage/1.png"
import image2 from "../../assets/images/servicePage/5.png"
import image3 from "../../assets/images/servicePage/2.png"
import image4 from "../../assets/images/servicePage/6.png"
import image5 from "../../assets/images/servicePage/3.png"
import image6 from "../../assets/images/servicePage/4.png"
import icon1 from "../../assets/images/servicePage/icon/1.png"
import icon2 from "../../assets/images/servicePage/icon/2.png"
import icon3 from "../../assets/images/servicePage/icon/3.png"
import icon4 from "../../assets/images/servicePage/icon/4.png"
import icon5 from "../../assets/images/servicePage/icon/5.png"
import icon6 from "../../assets/images/servicePage/icon/5.png"
import { Link } from 'react-router-dom'


const services = [
    {
        id: 1,
        image: image1,
        name: "Residential Shingle Roof",
        icon: icon1
    },
    {
        id: 2,
        image: image2,
        name: "Standing Seam Metal",
        icon: icon2
    },
    {
        id: 3,
        image: image3,
        name: "Build-up & Modified Bitumen",
        icon: icon3
    },
    {
        id: 4,
        image: image4,
        name: "Building Information",
        icon: icon4
    },
    {
        id: 5,
        image: image5,
        name: "Innovative Engineering",
        icon: icon5
    },
    {
        id: 6,
        image: image6,
        name: "Architectural Composite Metal",
        icon: icon6
    },
]

const AllServices = () => {
    return (
        <>
            <h1 className='text-center allServices-h1'>WHAT WE <span className='allServices-span'>DO</span></h1>
            <p className='text-center allServices-heading'>South-Central construction region since 2005 </p>
            <section className='allServices-section'>
                <Container>
                    <Row>
                        {services.map((item) => {
                            return (
                                <Col key={item.id} md={4} className='text-center fade-in'>
                                    <div className='image-position allService-negative'>
                                        <Link to={`/services/${item.id}`} className='services-link'>
                                            <img src={item.image} alt={item.name} className='img-fluid' />
                                            <div className='text-position'>
                                                <div className='text-div'>
                                                    <div>
                                                        <img src={item.icon} alt={item.name} />
                                                    </div>
                                                    <p className='allService-para'>{item.name}</p>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>


                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section >
        </>
    )
}

export default AllServices