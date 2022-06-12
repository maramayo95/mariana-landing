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
          <div className="input-div">
            <input type="text" placeholder="Escribí acá tu nombre y apellido" />
            <input type="text" placeholder="Escribí acá tú dirección de mail" />
            <input type="text" placeholder="Escribí acá el asunto de tu consulta" />
          </div>

          <div className="textA-div">
            <textarea type="text" placeholder="Escribí acá tú mensaje" />
          </div>  

          <div className="div-btn-form">
            <button className="btn-form" type="submit">Enviar Consulta</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormContact;
