import React from 'react'
import classes from "./awards.module.css"

export default function Awards() {
  return (
    <>
      <hr className="m-0" />
      {/* <!-- Awards--> */}
      <section className=" my-2 py-2" id="awards pt-2">
        <div className="resume-section-content my-2">
          <h2 className="my-2 mb-5 text-center fs-1" >Awards & Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li"
              ><i className="fas fa-trophy text-warning"></i
              ></span>
              Business and Enterpreneur training
            </li>
            <li>
              <span className="fa-li"
              ><i className="fas fa-trophy text-warning"></i
              ></span>
              2
              <sup>nd</sup>
              rank with CGPA of 3.63 - at Haramaya University Department of
              Electrical and Computer Engineering 2021
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
