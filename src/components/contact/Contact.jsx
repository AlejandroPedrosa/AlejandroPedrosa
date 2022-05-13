import React, {useRef} from 'react'
import "./contact.css"
import { MdOutlineEmail} from 'react-icons/md'
import {SiLinkedin, SiWhatsapp} from 'react-icons/si'
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_slmt1ue', 'template_5th0a9e', form.current, 'SzpxuhCDYYUu3Zpqc')
    
      .then((result) => {
          console.log(result.text);
          toast.success("Email enviado correctamente")
          e.target.reset()
      }, (error) => {
          console.log(error.text);
          toast.error("Error al enviar el email!")
      });
    
  };
  return (
    <section id='contact'>
      <h5>Necesitas comunicarte conmigo ?</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>alejandro.pedrosa00@gmail.com</h5>
            <a href="mailto:alejandro.pedrosa00@gmail.com">Enviar un mensaje</a>
          </article>
          <article className='contact__option'>
            <SiLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>linkedin.com/in/a-pedrosa/</h5>
            <a href="https://www.linkedin.com/in/a-pedrosa/">Enviar un mensaje</a>
          </article>
          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+54 351-7512778</h5>
            <a href="https://api.whatsapp.com/send?phone=543517512778">Enviar un mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Tu nombre' required/>
          <input type="email" name='email' placeholder='Tu correo' required/>
          <textarea name="message"rows="7" placeholder='El mensaje que quieras enviarme' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
      <Toaster/>
    </section>
  )
}

export default Contact