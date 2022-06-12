import React from "react";
import "./FormContact.css";

const FormContact = () => {
  return (
    <div className="center-container">
      <section className="form-design">
        <form action="">
          <div className="title-form">
            <h3>Contacto</h3>
          </div>
          <div className="input-group">
            <div className="input-div">
              <input
                type="text"
                placeholder="Escribí acá tu nombre y apellido"
              />
              <input
                type="text"
                placeholder="Escribí acá tú dirección de mail"
              />
              <input
                type="text"
                placeholder="Escribí acá el asunto de tu consulta"
              />
            </div>
            <div className="align-text-form">
              <div className="textA-div">
                <textarea type="text" placeholder="Escribí acá tú mensaje" />
              </div>

            </div>
          </div>
          <div className="div-btn-form">
            <button className="btn-form" type="submit">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.51 3.48728L10.02 7L2.5 5.9091L2.51 3.48728ZM10.01 13L2.5 16.5127V14.0909L10.01 13ZM0.51 0.181824L0.5 7.81819L15.5 10L0.5 12.1818L0.51 19.8182L21.5 10L0.51 0.181824Z" fill="white" />
              </svg>
              Enviar Consulta
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormContact;
