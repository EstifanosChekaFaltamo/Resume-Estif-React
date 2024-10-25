import React from 'react'
import classes from "./projectcard.module.css"
export default function ProjectCard({ project }) {
    console.log(project);
    return (
        <>
            <div className={classes.project}>
                <a href=""><img src={project.img} alt="" /></a>
                <h2><a href="">{project.title}</a> </h2>
                <span>{project.desc}</span>
            </div>

        </>
    )
}
