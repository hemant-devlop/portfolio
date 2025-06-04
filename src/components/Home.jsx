import React from "react";

import { NavLink, Outlet } from "react-router-dom";
import "./Home.css";
import ProfilePhotoAnimate from "./ProfilePhotoAnimate";
import { Col, Container, Row } from "react-bootstrap";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";

const Home = () => {
  return (
    <Container fluid='md' id="about">
      <Row >
        <Col sm={12} md={6} className="d-flex justify-content-center align-items-center ">
          <div className="pt-5 px-5">
            <ProfilePhotoAnimate/>
          </div>
        </Col>
        <Col sm={12} md={6} className=" p-3 d-flex justify-content-sm-start justify-content-center  align-items-end order-md-1 animate-about" style={{ flex: 1 }}>
          <div className="about-animate" >
            <h2 className="font" style={{fontSize:'3rem'}}>I am <br /> Hemant kumar</h2>
            <h3 className="font" style={{fontSize:'3rem'}}>Front-end developer</h3>
            <hr />
            <div>
              <a href="https://github.com/hemant-devlop" target="_blank" className="btn  rounded-0"><i className="bi bi-github fs-1 me-2"></i></a>
              <a href="https://www.linkedin.com/in/hemantdevloper/" target="_blank" className="btn  rounded-0"><i className="bi bi-linkedin fs-1"></i></a>
              <NavLink className="navbar-brand  order-lg-1 " to={'/resume'} >
                <button className="btn btn-outline-dark rounded-0 font mx-2"> RESUME &nbsp;<i className="bi bi-download"></i></button>
              </NavLink>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <About/>
      <hr />
      <Skills/>
      <hr />
      <Projects/>
      </Container>
  );
};

export default Home;
