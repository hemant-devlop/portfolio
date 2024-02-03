import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Home.css";
const Home = () => {
  return (
    <div className="container-md d-md-flex hight">
      <div className="order-md-2 d-flex justify-content-center align-items-center" style={{ flex: 1 }}>
        <div className="px-5 pt-5">
        <LazyLoadImage
        src="../assets/profff.png"
        className="img-fluid rounded-circle shadow"
        alt=""
        placeholderSrc="../assets/profff_zitjjz.png"
        // effectg="blur"
        style={{ maxHeight: "500px" }}
         />
        </div>
      </div>
      <div className="order-md-1 p-3 d-flex justify-content-center align-items-center " style={{ flex: 1 }}>
        <div>
          <h1 className="font">About Me</h1>
        <p className="pb-3" style={{lineHeight:'24px',maxWidth:'30rem',fontSize:'18px'}}>
          Hi, My name is <strong>Hemant Kumar</strong>. I am a 21 year old web developer
          residing in Haryana Mohendergarh. I am recently graduate from 
          BCA in Computer Science, I am well-versed in the latest web and mobile app development technologies.
          Graduating with honors to my name, I am eager to apply my skills in a
          challenging role where I can continue to learn and grow as a
          developer. Passionate about creating clean, efficient code and
          developing user-friendly interfaces, I am excited to collaborate with
          like-minded professionals to build innovative solutions that drive
          business success.
        </p>
        <hr/>
        <div>
          <a href="https://github.com/hemant-devlop" target="_blank" className="btn  rounded-0"><i className="bi bi-github fs-1 me-2"></i></a>
          <a href="https://www.linkedin.com/in/hemantdevloper/" target="_blank" className="btn  rounded-0"><i className="bi bi-linkedin fs-1"></i></a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
