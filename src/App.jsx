import React from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Experience from './Components/Experince/Experience'
import CarouselEffect from './Components/CarouselEffect/CarouselEffect'
import Education from './Components/EDUCATION/Education'
import Interest from './Components/INTERESTS/Interest'
import Skills from './Components/SKILLS/Skills'
import Awards from './Components/AWARDS/Awards'
import Projects from './Components/PROJECTS/Projects'
import ProjectCard from './Components/projectCard/ProjectCard'

function App() {

  return (
    <>
      <Nav />
      <div className="container-fluid bg-img p-0">
        <CarouselEffect />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Interest />
        <Awards />
      </div>
    </>
  )
}

export default App
