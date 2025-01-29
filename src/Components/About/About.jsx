import React from 'react'
import CarouselEffect from '../CarouselEffect/CarouselEffect'
import classes from "./about.module.css"

export default function About() {
    return (
        <>
            {/* <!-- About--> */}

            <div className={classes.aboutinfo}>
                <a
                    href="/public/Estif_Resume.pdf"
                    className="main-btn btn-download bg-success mt-0 pt-2 mx-auto"
                >
                    Download CV
                </a>
                <a href="#" className="main-btn bg-success mt-0 pt-2 mx-auto" >Hire Me</a>
                <h1>Ready for it!</h1>
            </div>
            {/* <section className={`${classes.About} resume-section ml-5`} id="about">
                <div className="resume-section-content mt-1 text-white">
                    
                </div>
            </section> */}

        </>
    )
}
