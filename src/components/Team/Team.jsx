import React from 'react'
import "./Team.css"
import { Col, Container, Row } from 'react-bootstrap'
import image1 from "../../assets/images/team/team1.png"
import image2 from "../../assets/images/team/team2.png"
import image3 from "../../assets/images/team/team3.png"
import image4 from "../../assets/images/team/team4.png"

const teamData = [
    {
        id: 1,
        name: "GABRIEL PETERS",
        role: "CHEIF ENGINEER",
        image: image2
    },
    {
        id: 2,
        name: "GWEN AUSTIN",
        role: "DRAUGTSMAN",
        image: image1
    },
    {
        id: 3,
        name: "RAYMOND STANLEY",
        role: "ARCHITECT",
        image: image4
    },
    {
        id: 4,
        name: "TROY ANDERSON",
        role: "CIVIL ENGINEER",
        image: image3
    },
]


const Team = () => {
    return (
        <section className='team-section'>
            <Container>
                <Row>
                    <h1 className='text-center'>Our Great <span className='team-span'>Team</span></h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, iste.</p>
                    {
                        teamData.map((team) => {
                            return (
                                <Col key={team.id} md={3}>
                                    <div className='d-flex justify-content-center'>
                                        <div className='my-5 team-container'>
                                            <img src={team.image} alt={team.name} className='img-fluid' />
                                            <div className='team-content text-center'>
                                                <p className='name'>{team.name}</p>
                                                <p className='role'>{team.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Team