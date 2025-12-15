import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
    return (
        <Container fluid='md' id="about">
            <Row>
                <Col>
                    <h2 className="font">About Me</h2>
                    <p>
                       Hi, I'm <strong>Hemant Kumar</strong>, a passionate 23-year-old  based in Haryana, <strong>MERN Stack Developer</strong> Haryana. I hold a <strong>BCA</strong> degree from Indira Gandhi University, Meerpur, and have completed a MERN Stack development course from Ducat, Gurgaon. I am eager to apply my skills in a challenging role where I can continue to learn and grow as a
                        developer. Passionate about creating clean, efficient code and
                        developing user-friendly interfaces, I am excited to collaborate with
                        like-minded professionals to build innovative solutions that drive
                        business success.
                    </p>
                </Col>
            </Row>
        </Container>

    )
}

export default About
