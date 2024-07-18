import React from "react";

import { NavLink, Outlet } from "react-router-dom";
import "./Home.css";
import ProfilePhotoAnimate from "./ProfilePhotoAnimate";
import { Col, Container, Row } from "react-bootstrap";
import Skills from "./Skills";
import Projects from "./Projects";

const Home = () => {
  return (
    <Container fluid='md' id="about">
      <Row >
        <Col sm={12} md={6} className="d-flex justify-content-center align-items-center order-md-2">
          <div className="pt-5 px-5">
            <ProfilePhotoAnimate/>
          </div>
        </Col>
        <Col sm={12} md={6} className=" p-3 d-flex justify-content-center align-items-center order-md-1 animate-about" style={{ flex: 1 }}>
          <div className="about-animate" >
            <h1 className="font">About Me</h1>
            <p className="pb-3" style={{ lineHeight: '24px', maxWidth: '30rem', fontSize: '18px' }}>
              Hi, My name is <strong>Hemant Kumar</strong>. I am a 21 year old MERN developer
              residing in Haryana Mahendergarh. I am graduated from <strong>BCA in Computer Science</strong>, I am well-versed in the latest web and mobile app development technologies.
              Graduating with honors to my name, I am eager to apply my skills in a
              challenging role where I can continue to learn and grow as a
              developer. Passionate about creating clean, efficient code and
              developing user-friendly interfaces, I am excited to collaborate with
              like-minded professionals to build innovative solutions that drive
              business success.
            </p>
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
      <Skills/>
      <hr />
      <Projects/>
      </Container>
  );
};

export default Home;
