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
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>

          <div className="textA-div">
            <textarea type="text" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormContact;
