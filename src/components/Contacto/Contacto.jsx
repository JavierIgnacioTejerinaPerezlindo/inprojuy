import React from "react";
import emailjs from "emailjs-com";
/* import './contacto.css' */

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_o98nabr', 'template_l3zfrpc', e.target,'lSsyIX281CxUcE1YE').then(res=>{alert("mail enviado")
    console.log(res)})
        // Lógica para enviar el correo electrónico a comunicaciones@connect-way.online
        // Puedes utilizar librerías como nodemailer para enviar el correo desde el backend
    };

    return (
        <div className="contact">
            <div className="w-100  " >
                <center> <p className="contact-form__title display-5">CONTACTO</p></center>
            </div>

            <div className="contactgrid">

                <form className="contactform row g-3" onSubmit={handleSubmit}>
                    <div className=" col-md-6 m-0">
                        <label className=" h5 form-label" htmlFor="name">Nombre:</label>
                        <input className=" form-control border px-3 py-2 rounded placeholder-gray-500" type="text" id="name" name="name" required />
                    </div>
                    <div className=" col-md-6 m-0">
                        <label className=" h5 form-label" htmlFor="surname">Apellido:</label>
                        <input className=" form-control border px-3 py-2 rounded placeholder-gray-500" type="text" id="surname" name="surname" required />

                    </div>

                    <div className=" col-md-6 m-0">

                        <label className=" h5 form-label" htmlFor="email">Correo electrónico:</label>
                        <input className=" form-control border px-3 py-2 rounded placeholder-gray-500" type="email" id="email" name="email" required />
                    </div>
                    <div className=" col-md-6 m-0">
                        <label className=" h5 form-label" htmlFor="phone">Teléfono:</label>
                        <input className=" form-control border px-3 py-2 rounded placeholder-gray-500" type="tel" id="phone" name="phone" required />

                    </div>
                    <div className=" col-12 m-0">
                        <label className=" h5 form-label" htmlFor="city">Localidad:</label>
                        <input className=" form-control border px-3 py-2 rounded placeholder-gray-500" type="text" id="city" name="city" required />
                    </div>
                    <div className="col-12 m-0">
                        <label className=" h5 form-label" htmlFor="message">Mensaje:</label>
                        <textarea className=" form-control border px-3 py-2 mb-1 rounded placeholder-gray-500" id="message" name="message" required></textarea>
                    </div>
                    <br/>
                    <div className=" position-relative">
                        <button className=" btn btn-outline-danger bg-white px-5 py-0 position-absolute bottom-0 end-0" type="submit"><h3>Enviar</h3></button>
                    </div>
                </form>

                <div className="contactmap">
                    <iframe className="iframemap"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d722.1840882791661!2d-65.29321710850304!3d-24.186469156274907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1684930746863!5m2!1ses!2sar"
                        /*                         width="50%"
                                                height="450"
                                                style={{ border: 0 }}
                                                allowFullScreen */
                        loading="lazy"
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>

        </div>
    );
};

export default ContactForm;
