import React from 'react'
import classes from "./education.module.css"
export default function Education() {
  return (
    <>
      <hr className="m-0" />
      {/* <!-- Education--> */}
      <section className="" id="education">
        <h2 className="mb-5 text-center fs-1">Education</h2>
        <div className={classes.Gibs}>
          <div
            className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Haramaya University</h3>
              <div className="subheading mb-1">Bachelor of Science</div>
              <div className="pl-2">Electrical and Computer Engineering</div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">Addis Ababa Science and Technology</h3>
              <div className="subheading mb-1">Pursuing Masters of Sciece</div>
              <div className="pl-2">Computer Engineering</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
