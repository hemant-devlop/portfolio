import React from "react";
import "./Navcompo.css";
import { Link, NavLink } from "react-router-dom";
import ResumeBtn from "./ResumeBtn";

const NavbarComponent = () => {
  // const [click, setClick] = React.useState(false);

  // const handleClick = () => setClick(!click);

  const closeMobileMenu = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    // setClick(false);
  };
  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container flex ">

        <button aria-label="open" className="navbar-toggler border-0 p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <span className="navbar-toggler-icon" style={{ fontSize: '16px' }}></span>
        </button>
        {/* <span className="px-2 font">H K</span> */}
        <NavLink to='/' style={{ color: 'black', textDecoration: 'none' }}>
          <span className="px-2 font m-0 text-[2.5rem]">H K</span>
        </NavLink>
        <div
          className="offcanvas offcanvas-start" style={{ width: '60%' }}
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <span className="offcanvas-title font" id="offcanvasExampleLabel">
              Hemant kumar
            </span>
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
                <NavLink className="nav-link px-lg-3 font"
                  aria-current="page"
                  to="/"
                  onClick={() => closeMobileMenu('#about')}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item px-lg-3">
                <NavLink
                  className="nav-link font"
                  aria-current="page"
                  to="skills"
                  onClick={() => closeMobileMenu('#skills')}
                >
                  SKILLS
                </NavLink>
              </li>
              <li className="nav-item px-lg-3">
                <NavLink
                  className="nav-link font"
                  aria-current="page"
                  to="projects"
                  onClick={() => closeMobileMenu('#projects')}
                >
                  PROJECTS
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ResumeBtn />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
