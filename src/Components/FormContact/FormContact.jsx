import React from "react";
import "./FormContact.css";
import arrowBtn from "../../svg/arrow.svg";
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

              <div className="div-btn-form">
                <button className="btn-form" type="submit">
                  <img src={arrowBtn} /> Enviar Consulta
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormContact;
