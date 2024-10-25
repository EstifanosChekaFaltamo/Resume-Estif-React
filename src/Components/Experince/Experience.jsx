import React from 'react'
import '../../css/bootstrap/css/bootstrap.min.css';
import classes from "./experience.module.css"



export default function Experience() {
    return (
        <>
            {/* <!-- Experience--> */}
            <section className={`${classes.resume_section} text-white align-items mt-0`} >
                <div
                    className={`${classes.Experience} text-dark`}>
                    <h2 className={classes.exp}><em>Experience</em></h2>
                    <div className="row">
                        <div className="col-md-4 d-flex flex-column text-center mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Electricity and Sanitary</h3>
                                <p>
                                    I have experience in electrical and sanitary installation
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex flex-column mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Junior Web Developer</h3>
                                <p>
                                    I am developer for front-end and backend based on the customer need!
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-4 d-flex flex-column flex-md-row justify-content-between">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Interneship</h3>
                                <p>Network intern at Ethiopian Defence Force in 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

