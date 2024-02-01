import React from "react";
import "./Navcompo.css";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#e3f2fd"}}>
      <div className="container d-flex ">
        
        <button className="navbar-toggler border-0 p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <span className="navbar-toggler-icon" style={{fontSize:'16px'}}></span>
        </button>
          {/* <span className="px-2 font">H K</span> */}
          <h1 className="px-2 font m-0">H K</h1>
        <div
          className="offcanvas offcanvas-start" style={{width:'60%'}}
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h3 className="offcanvas-title font" id="offcanvasExampleLabel">
              Hemant kumar
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex justify-content-end">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link font" aria-current="page" to="/">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item px-lg-3">
                <Link
                  className="nav-link font"
                  aria-current="page"
                  to="/skills"
                >
                  SKILLS
                </Link>
              </li>
              <li className="nav-item px-lg-3">
                <Link
                  className="nav-link font"
                  aria-current="page"
                  to="/projects"
                >
                  PROJECTS
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <a className="navbar-brand  order-lg-1 " href="../assets/resume.pdf" download={true}>
        <button className="btn btn-outline-dark rounded-0 font mx-2">DOWNLOAD RESUME &nbsp;<i className="bi bi-download"></i></button>
        </a>
      </div>
    </nav>
  );
};

export default NavbarComponent;
