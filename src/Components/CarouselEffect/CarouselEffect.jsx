import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { img } from './imgs-Carousel'
import classes from "../CarouselEffect/carouse.module.css"
import About from '../About/About'

function CarouselEffect() {
    return (
        <div className={classes.Carousel}>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={false}
                showThumbs={false}
            >
                {
                    img.map((imageItemLink) => {
                        return <img key={0} src={imageItemLink} />
                    })
                }
            </Carousel>
            <div className={classes.hero_img}></div>
            <section id={classes.hero}>
                <div className={classes.hero_content}>
                    <div className="resume-section-content mt-1 text-warning">
                        <h2>
                            <em className="Animation text-info-emphasis fs-1">
                                "Strive More, it will pays-off!"</em>
                        </h2>
                        <h1 className="mb-0 text-muted">

                            <span className="">Estifanos Cheka</span>
                        </h1>
                        <div className="subheading ">
                            <span>Addis Ababa. Phone:+251936657473 </span>
                            <br />
                            <a href="mailto:name@email.com"
                            ><span className="text-success">chekaestifanos@gmail.com</span></a
                            >
                        </div>
                        <p className={classes.lead}>
                            "I am a passionate MERN stack developer with a strong foundation in full-stack web development. As a dedicated freelance worker, I consistently deliver high-quality projects with a focus on efficiency and user experience. My strengths lie in problem-solving, adaptability, and maintaining a high standard of work. I am fully committed to meeting client expectations and pushing the boundaries of what's possible in web development. Let's create something amazing together!"
                        </p>
                        <div className="social-icons pt-0 mt-0">
                            <a
                                className="social-icon"
                                href="https://www.linkedin.com/in/estifanos-cheka-400456296/"
                            ><i className="fab fa-linkedin-in"></i
                            ></a>
                            <a className="social-icon" href="https://github.com/EstifanosChekaFaltamo"><i className="fab fa-github"></i></a>
                            <a className="social-icon" href="https://twitter.com/Cheka_Etifanos"
                            ><i className="fab fa-twitter"></i
                            ></a>
                            <a className="social-icon" href="#!"
                            ><i className="fab fa-facebook-f"></i
                            ></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CarouselEffect