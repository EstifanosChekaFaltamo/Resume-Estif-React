import React from 'react'
// import ProjectsData from "./projectsDone"
import img1 from "../../assets/img/amazon.jpg"
import img2 from "../../assets/img/Netflix.jpg"
import img3 from "../../assets/img/forum.jpg"
// import classes from "./"
// import ProjectCard from '../projectCard/ProjectCard'
function Projects() {

    // console.log(ProjectsData);
    return (
        <>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                justifyItems: 'center',
                padding: '3px',
                margin:'3px'
            }}>
                <div style={{
                    padding: '3px',
                    margin: '3px'
                }}>
                    <a href="https://amazon-estif.netlify.app/"><img src={img1} alt="" /></a>
                    <h2><a href="https://amazon-estif.netlify.app/">Amazon Clone</a> </h2>
                    <span><p>This project is e-commerce website in which customers can order any goods that is available in Amazon and pay easily through the payment system with their card. Here, I used Nodejs, express, MySQL, React, HTML,CSS, Firebase, Render to develop and deploy.</p></span>
                </div>
                <div style={{
                    padding: '3px',
                    margin: '3px'
                }}>
                    <a href="https://estifanoschekafaltamo.github.io/Netflix-clone/"><img src={img2} alt="" /></a>
                    <h2><a href="https://estifanoschekafaltamo.github.io/Netflix-clone/">Netflix Clone</a> </h2>
                    <span><p>
                        A clone of Netflix's homepage. Here I used Nodejs, express, MySQL, React, HTML,CSS,Bootstrap,media query, render for development and deployment.
                    </p></span>
                </div>
                <div style={{
                    padding: '3px',
                    margin: '3px',
                    
                }}>
                    <a href="https://evangadi-community.netlify.app/login"><img src={img3} alt="" /></a>
                    <h2><a href="https://evangadi-community.netlify.app/login">Evangadi Student's Community</a> </h2>
                    <span>
                        <p>This project is developed for students of Evangadi to communicate with each easily by creating account to ask and answer any questions  through the platform. Here I used Nodejs, express, MySQL, React, HTML,CSS,Bootstrap,media query, render for development and deployment."
                        </p>
                    </span>
                </div>
            </div>

            {/* {ProjectsData.map((eachProject) => (
                <ProjectCard key={eachProject.id} project={eachProject} />
            ))} */}
        </>
    )
}
export default Projects;