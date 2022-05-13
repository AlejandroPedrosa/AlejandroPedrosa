import React from 'react'
import CV from '../../assets/CV ALEJANDRO PEDROSA 2022.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download="CV Alejandro Pedrosa 2022" className='btn'>Descargar CV</a>
      <a href='#contact' className='btn btn-primary'>Contactar</a>
    </div>
  )
}

export default CTA