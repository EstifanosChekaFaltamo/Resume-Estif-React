import React from 'react'
import classes from "./interest.module.css"

export default function Interest() {
  return (
    <>
      <hr className="m-0" />
      {/* <!-- Interests--> */}
      <section className="" id="interests">
        <div className={classes.interest}>
          <h2 className="mb-2 text-center fs-1">Interests</h2>
          <p className="">
            Apart from being a web developer, I enjoy most of my time <br />
            by sport, playing in team, staying with Fam! <br />Football is my favorite
            sport!
          </p>
        </div>
      </section>
    </>
  )
}
