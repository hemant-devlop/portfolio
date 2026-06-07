import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
    const [active,setActive]=useState(false)
    return (
        <Container fluid='md' id="about">
            <Row>
                <Col>
                    <h2 className="font">About Me</h2>
                    <div onClick={()=>setActive(false)} className={`${active?"fixed inset-0 z-99 bg-[#f5f5f5eb] ":""}`}>
                        <div onClick={(e)=>e.stopPropagation()} className={`${active?"relative h-full m-auto sm:p-30  sm:max-w-3xl bg-[#e3f2fd]":"line-clamp-5"}`}>
                        <div onClick={()=>setActive(false)} className={`${active?"absolute cursor-pointer top-20 right-10 z-100":"hidden"}`}>X</div>
                             I am a Full-Stack <strong>Software Engineer </strong> specializing in the <strong>MERN</strong> ecosystem (MongoDB, Express.js, React.js,Next.js, Node.js) with a strong passion for building seamless, user-centric web applications. Over the past several months, I’ve accelerated my growth by diving deep into modern web development, taking products from architectural concepts to fully deployed realities. <br />

                            Currently, I work as a Frontend Developer where I play a key role in developing and scaling an educational technology platform. While my title says frontend, my day-to-day involves navigating the entire stack. I leverage React and Next.js to build responsive, high-performance user interfaces, manage complex application state with Redux Toolkit, and actively maintain and optimize our Node.js backend APIs.

                            I thrive in environments where I can build end-to-end features. Whether I'm designing a scalable state management architecture or ensuring smooth data flow between the server and the client, I care deeply about writing clean, maintainable code. In my personal time, I continuously refine my skills by building robust applications using Next.js and Redux Toolkit.

                            I am currently seeking Full-Stack Engineering roles where I can leverage my MERN stack expertise to contribute to impactful products and continue growing alongside a collaborative engineering team. Let's connect!
                        </div>
                    </div>
                        <div onClick={()=>setActive(true)} className="text-end text-sm cursor-pointer hidden sm:block">More</div>
                </Col>
            </Row>
        </Container>

    )
}

export default About
