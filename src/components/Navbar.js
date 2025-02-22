import React from "react";
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container mt-3">
          <a class="navbar-brand fs-3" href="#">
            <b>Disha Rathore</b>
          </a>
          <div class="" id="navbarSupportedContent">
            <ul class="navbar-nav mb-5 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" >
                  Education
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  Certifications
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  Achievements
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><i class="fa-solid fa-moon"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
