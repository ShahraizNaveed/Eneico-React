import React from 'react'
import "./Testimonials.css"
import { Card, Col, Container, Row } from 'react-bootstrap'
import clientSay from "../../assets/images/about/client-say.png"
import quote from "../../assets/images/about/quote.png"
import avatar from "../../assets/images/about/avatar.png"
import Slider from 'react-slick'


const testimonials = [
    {
        id: 1,
        name: "John Wick",
        designation: "CEO John Wick",
        image: avatar,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, fuga."
    },
    {
        id: 2,
        name: "Captain America",
        designation: "Soldier",
        image: avatar,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, fuga."
    },
    {
        id: 3,
        name: "Iron Man",
        designation: "Entreprenuer",
        image: avatar,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, fuga."
    },
    {
        id: 4,
        name: "Racer",
        designation: "CEO",
        image: avatar,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, fuga."
    },
    {
        id: 5,
        name: "Eddy Murphy",
        designation: "Lawyer",
        image: avatar,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, fuga."
    }
]

const Testimonials = () => {

    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <section className='testimonial-section'>
            <Container>
                <Row>
                    <p className='text-center'>Testimonials</p>
                    <h4 className='text-center'>Our Client Say</h4>
                    <Col md={5}>
                        <div className='d-flex justify-content-center'>
                            <img src={clientSay} alt="Client Image" className='img-fluid client-say' />
                        </div>
                    </Col>

                    <Col md={6}>
                        <Container>
                            <Slider {...settings}>
                                {
                                    testimonials.map((item) => {
                                        return (
                                            <>
                                                <Card className='shadow'>
                                                    <div className='quote-icon'>
                                                        <img src={quote} alt="Testimonials" className='img-fluid' />
                                                    </div>
                                                    <div>
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                        <div className='d-flex align-items-center justify-content-center'>
                                                            <img src={item.image} alt="Avatar" className='img-fluid avatar' />

                                                            <div className='negative-margin'>
                                                                <p>{item.name}</p>
                                                                <p className="">{item.designation}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </>
                                        )
                                    })
                                }
                            </Slider>
                        </Container>
                    </Col>

                    <Col md={1}></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials