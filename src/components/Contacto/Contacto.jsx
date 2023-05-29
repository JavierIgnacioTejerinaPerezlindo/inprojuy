import React from "react";
import './contacto.css'

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar el correo electrónico a comunicaciones@connect-way.online
        // Puedes utilizar librerías como nodemailer para enviar el correo desde el backend
    };

    return (
        <div className="contact-form w-100"><div className="w-100 p-2 " ><center> <p className="contact-form__title display-5">CONTACTO</p></center></div>

            <div className="contact-form__details w-100">

                <form onSubmit={handleSubmit}>
                <div className="contact-form__group">
  <div className="contact-form__row">
    <label htmlFor="name">Nombre:</label>
    <input type="text" id="name" name="name" required />
    <label htmlFor="surname">Apellido:</label>
    <input type="text" id="surname" name="surname" required />
  </div>
</div>

<div className="contact-form__group">
                    <div className="contact-form__row">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" required />
                    
                 
                        <label htmlFor="phone">Teléfono:</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    </div>
                    <div className="contact-form__group">
                        <label htmlFor="city">Localidad:</label>
                        <input type="text" id="city" name="city" required />
                    </div>
                    <div className="contact-form__group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <div className="contact-form__group">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
            <div className="contact-form__group">
            <div className="contact-form__map w-50">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d722.1840882791661!2d-65.29321710850304!3d-24.186469156274907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1684930746863!5m2!1ses!2sar"
                    width="50%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Goo gle Maps"
                ></iframe>
            </div>
            </div>
        </div>
    );
};

export default ContactForm;
