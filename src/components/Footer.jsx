import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="mb-3">
              <h5>TELC</h5>
              <p>Un sitio web increíble</p>
            </div>
          </div>
          <div className="col-md-3">
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-light">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-light">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-light">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-light">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://facebook.com" className="text-light">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-light">
                  <FaTwitter /> Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-light">
                  <FaInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contacto</h5>
            <p>
              <strong>Dirección:</strong> Av. San Martin N° 644 entre Ladislao Cabrera y Uruguay, Edificio Shoping Center 2do piso, oficina 47
            </p>
            <p>
              <strong>Teléfono:</strong> (+591) 65340850 - (+591) 62697217
            </p>
            <p>
              <strong>Correo Electrónico:</strong> info@example.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
