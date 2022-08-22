import React from 'react'
import "./about.css" 
import ME2 from "../../assets/ME2.jpeg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { GiUsaFlag} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Conoce</h5>
      <h2>Sobre mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="me2" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>1+ Año desarrollando</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Co-Work</h5>
              <small>Experiencia trabajando en equipo</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyectos</h5>
              <small>+10 Proyectos completos</small>
            </article>
            <article className='about__card'>
              <GiUsaFlag className='about__icon'/>
              <h5>Ingles</h5>
              <small>Nivel A2+</small>
            </article>
          </div>
          <p>
            Soy Alejandro Pedrosa, full-stack developer (Mern Stack). Soy autodidacta hace 1 año y medio, y tengo experiencia en desarrollo web y móvil. Actualmente continuo mis estudios orientados al desarrollo de software y a la ciberseguridad, ya que tengo mucha pasion por la tecnologia. 
          </p>
          <a href="#contact" className='btn btn-primary'>Contactame !</a>
        </div>
      </div>
    </section>
  )
}

export default About