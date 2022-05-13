import React from 'react'
import CTA from './CTA'
import ME from "../../assets/ME.jpeg"
import "./header.css"
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Bienvenid@, soy</h5>
        <h1>Alejandro Pedrosa</h1>
        <h5 className="text-light">Fullstack Developer(MERN)</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt="ME"/>
        </div>
        <a href='#contact' className='scroll__down'>Ir al final</a>
        
      </div>
    </header>
  )
}

export default Header