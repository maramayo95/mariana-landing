import React from "react";
import {useForm} from 'react-hook-form'
import "./FormContact.css";

const FormContact = () => {
  const {register, handleSubmit, formState:{errors}} = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      content: ""
    }
  })

  return (
    <div className="center-container">
      <section className="form-design">
        <form onSubmit={handleSubmit((data)=> console.log(data)) }>
          <div className="title-form">
            <h3>Contacto</h3>
          </div>
          <div className="input-group">
            <div className="input-div">
            <p className="error-message">{errors.name?.type === 'required' && "Por favor, completá tu nombre"}</p>
            <input {...register("name", {required:true , pattern: /^[A-Za-z]+$/i})} type="text" placeholder="Escribí acá tu nombre apellido" />
            <p className="error-message">{errors.email?.type === 'required' && "Por favor completá tu email"}</p>
            <input {...register("email", {required:true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} type="email" placeholder="Escribí tu dirección email" />
            <p className="error-message">{errors.subject?.type === 'required' && "Por favor completá el campo asunto"}</p>
            <input {...register("subject", {required:true})} type="text" placeholder="Escribí el asunto de tu consulta" />
            </div>
            <div className="align-text-form">
              <div className="textA-div">
            <p className="error-message">{errors.content?.type === 'required' && "Por favor necesitamos esta información para saber sobre tu consulta"}</p>
            <textarea {...register("content", {required:true})} type="text" placeholder="Escribe un mensaje aquí" />
               
                
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
