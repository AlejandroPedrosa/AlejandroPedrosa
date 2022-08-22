import React from 'react'
import "./portfolio.css"
import IG from "../../assets/homeNC.PNG"
import HA from "../../assets/heroesapp.png"
import GE from "../../assets/gifexpert.png"
import JR from "../../assets/journal.png"
import CL from "../../assets/calendar.png"
import MP from "../../assets/mejorpostor.png"

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: MP,
      title: "Mejor Postor",
      github: "https://github.com/No-Country/S1-07-T-FrontEnd",
      demo: "https://www.linkedin.com/posts/a-pedrosa_demoday-ugcPost-6923388269736914944-cfe2?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 2,
      image: IG,
      title: "InGamers",
      github: "https://github.com/No-Country/C3-G70-T-Front",
      demo: "https://ingamers.vercel.app"
    },
    {
      id: 3,
      image: CL,
      title: "CalendarApp",
      github: "https://github.com/AlejandroPedrosa/calendar-app",
      demo: "https://merncalendarale.herokuapp.com/"
    },
    {
      id: 4,
      image: JR,
      title: "JournalApp",
      github: "https://github.com/AlejandroPedrosa/Journal-App",
      demo: "https://alejandropedrosa.github.io/Journal-App/"
    },
    {
      id: 5,
      image: HA,
      title: "HeroesApp",
      github: "https://github.com/AlejandroPedrosa/HeroesApp",
      demo: "https://heroes-app-iota-ten.vercel.app"
    },
    {
      id: 6,
      image: GE,
      title: "GifExpertApp",
      github: "https://github.com/AlejandroPedrosa/GifExpertApp",
      demo: "https://giff-expert-app-rosy.vercel.app"
    }
  ]


  return (
    <section id="portfolio">
      <h5>Mis proyectos</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        { data.map(({id,image,title,github,demo}) => {
          return (
            <article key={id}className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Codigo</a>
                <a href={demo} className='btn btn-primary'>Deploy</a>
              </div>
            </article>
            )
          }) 
        }
      </div>
    </section>
  )
}

export default Portfolio