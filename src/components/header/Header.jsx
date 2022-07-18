import React from 'react'
import CTA from './CTA'
import ME from "../../assets/ME.jpeg"
import "./header.css"
import HeaderSocials from './HeaderSocials'
import { Typewriter } from 'react-simple-typewriter'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Bienvenid@, soy</h5>
        <h1><span><Typewriter
          words={['Alejandro Pedrosa', 'React Developer', 'React Native Developer', 'Full-Stack(MERN)']}
          loop={10}
          cursor
          cursorStyle='|'
          typeSpeed={80}
          deleteSpeed={300}
          delaySpeed={1000}
        /></span></h1>
        {/* <h5 className="text-light">Fullstack Developer(MERN)</h5> */}
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="ME" />
        </div>
        <a href='#contact' className='scroll__down'>Ir al final</a>

      </div>
    </header>
  )
}

export default Header