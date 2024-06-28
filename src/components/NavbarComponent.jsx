import React from "react";
import "./Navcompo.css";
import { Link, NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor:"#e3f2fd"}}>
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
                <NavLink className="nav-link px-lg-3 font" aria-current="page" to="/">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item px-lg-3">
                <NavLink
                  className="nav-link font"
                  aria-current="page"
                  to="/skills"
                >
                  SKILLS
                </NavLink>
              </li>
              <li className="nav-item px-lg-3">
                <NavLink
                  className="nav-link font"
                  aria-current="page"
                  to="/projects"
                >
                  PROJECTS
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

         <NavLink className="navbar-brand  order-lg-1 " to={'/resume'} >   
        <button className="btn btn-outline-dark rounded-0 font mx-2"> RESUME &nbsp;<i className="bi bi-download"></i></button>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarComponent;
