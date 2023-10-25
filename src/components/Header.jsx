import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });
  }, []);
  return (
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="../src/assets/logos/logo-base-removebg1.png" alt="logo del instituto TELC" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" end to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contacto
              </NavLink>
            </li>
          </ul>
          <div className="navbar-nav ml-auto">
          <div className="d-lg-block">
            <NavLink
              className="nav-link btn btn-courses"
              to="/cursos"
            >
              <span>Ver Cursos</span>
            </NavLink>
          </div>
        </div>
        </div>
        
      </div>
    </nav>
    <div className="back-nav"></div>
  </>
    
  );
};
export default Header;
