import React, { useState } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
    city: "Cochabamba", // ciudad predeterminada
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Nombre: ${formData.fullName}%0A Teléfono: ${formData.phone}%0A Correo: ${formData.email}%0A Mensaje: ${formData.message}%0A Ciudad: ${formData.city}`;
    const whatsappURL = `https://wa.me/+59176149192?text=${message}`;
    window.location.href = whatsappURL; // Redirige a WhatsApp
  };

  return (
    <div className="contact container my-3">
      <div className="card w-100">
        <form onSubmit={handleSubmit} className="container mt-4">
          <h1 className="principal-title">Formulario de Contacto</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nombre Completo:</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Teléfono:</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Correo:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Ciudad:</label>
                <select
                  className="form-control"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                >
                  <option value="Cochabamba">Cochabamba</option>
                  <option value="La Paz">La Paz</option>
                  <option value="Santa Cruz">Santa Cruz</option>
                  <option value="Sucre">Sucre</option>
                  <option value="Oruro">Oruro</option>
                  <option value="Tarija">Tarija</option>
                  <option value="Potosí">Potosí</option>
                  <option value="Beni">Beni</option>
                  <option value="Pando">Pando</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Mensaje:</label>
                <textarea
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-12">
              <button type="submit" className="btn btn-whatsapp">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
