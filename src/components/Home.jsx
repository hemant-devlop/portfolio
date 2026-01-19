import React, { useEffect } from "react";

import { NavLink, Outlet } from "react-router-dom";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import { useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const animRef = useRef()
  useEffect(() => {
    let tl = gsap.timeline()
    tl.fromTo('.uppr',{
      y:0,
    },{
      y:-900,
      opacity:0.9,
      delay:1,
      duration:1.6,
    })
    tl.fromTo(".imgy", {
      scale: 0,
    }, {
      scale: 1,
      duration: 0.6,
    })
    tl.fromTo('.texty', {
      x: -454,
      opacity: 0,

    }, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.3,

    })
  }, [])
  return (
    <Container fluid='md' id="about">
      <div className="uppr inset-0 bg-black/98 fixed z-99 text-white flex flex-col md:flex-row justify-center items-center *:px-2 font" style={{fontSize:'5rem'}}>
        <div>HEMANT</div>
        <div>MERN</div>
        <div>STACK</div>
      </div>

      <Row ref={animRef} >
        <Col sm={12} md={6} className="d-flex justify-content-center align-items-center ">
          <div className="pt-5 px-5 z-10 ">
            <img

              src="../assets/profff.jpg"
              className="img-fluid imgy max-h-87 rounded-full shadow border-gray border-3"
              alt="image"
              data-placeholder="../assets/profff_zitjjz.jpg"
            />
          </div>
        </Col>
        <Col sm={12} md={6} className=" p-3 d-flex justify-content-sm-start justify-content-center  align-items-end order-md-1 animate-about" style={{ flex: 1 }}>
          <div className="texty" >
            <h1 className="font" style={{ fontSize: '3rem' }}>I am <br /> Hemant kumar</h1>
            <h2 className="font" style={{ fontSize: '3rem' }}>MERN Stack developer</h2>
            <hr />
            <div>
              <a href="https://github.com/hemant-devlop" target="_blank" className="btn  rounded-0"><i className="bi bi-github fs-1 me-2 "></i></a>
              <a href="https://www.linkedin.com/in/hemantdevloper/" target="_blank" className="btn  rounded-0"><i className="bi bi-linkedin fs-1"></i></a>
              <NavLink className="navbar-brand  order-lg-1 " to={'/resume'} >
                <button aria-label="resume_button" className="btn btn-outline-dark rounded-0 font mx-2"> RESUME &nbsp;<i className="bi bi-download"></i></button>
              </NavLink>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <Projects />
    </Container>
  );
};

export default Home;
