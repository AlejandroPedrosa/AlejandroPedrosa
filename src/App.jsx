import React from 'react'
import About from './components/about/About'
import Experiencie from './components/experience/Experiencie'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experiencie/>
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
    </>
  )
}

export default App