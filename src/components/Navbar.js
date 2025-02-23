import React from "react";
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container mt-2">
          <a class="navbar-brand fs-3" href="#">
            <b>Disha Rathore</b>
          </a>
          <div class="space" id="navbarSupportedContent">
            <ul class="navbar-nav mb-5 mb-lg-0" >
              <li class="nav-item mx-4">
                <a class="nav-link" href="#hero">
                  Home
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link" href="#certification">
                  Certifications
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link"><i class="fa-5 fa-solid fa-moon" style={{width:"100%"}}></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
