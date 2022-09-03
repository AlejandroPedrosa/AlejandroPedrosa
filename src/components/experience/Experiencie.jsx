import React from 'react'
import "./experiencie.css"
import { AiFillHtml5 } from 'react-icons/ai'
import { SiCss3, SiTailwindcss, SiReact, SiRedux, SiBootstrap, SiExpress, SiFirebase, SiMysql, SiMongodb, SiGithub, SiJavascript, SiLinux, SiPython } from 'react-icons/si'
import { IoLogoSass, IoLogoNodejs } from 'react-icons/io'

const Experiencie = () => {
  return (
    <section id='experience'>
      <h5>Se utilizar diferentes</h5>
      <h2>Tecnologias</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermedio +</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoSass className="experience__details-icon" />
              <div>
                <h4>SASS</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermedio +</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiReact className="experience__details-icon" />
              <div>
                <h4>React Native</h4>
                <small className='text-light'>Intermedio </small>
              </div>
            </article>
            <article className='experience__details'>
              <SiRedux className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermedio +</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <IoLogoNodejs className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Basico +</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiExpress className="experience__details-icon" />
              <div>
                <h4>ExpressJS</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiFirebase className="experience__details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className="experience__details-icon experience__details-mongo" />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiGithub className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermedio +</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiLinux className="experience__details-icon" />
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiencie