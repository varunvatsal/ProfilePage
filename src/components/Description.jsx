import React from 'react'
import { useParams } from 'react-router-dom'
import style from '../css/description.module.css'
import data from '../Projects.json'
const Description = () => {

    let {id} = useParams()
    let project = data.projects[id-1]
    console.log(project)

  return (
    <>
        <div className={style.container}>
            <h1 className={style.title}>{project.name}</h1>
            <div className={style.links}>

            {project.github.frontend==="" ? <></> : 
                <div className={style.linkItem}>
                    <strong>Frontend GitHub:</strong>{" "}
                    <a href={project.github.frontend} target="_blank" rel="noopener noreferrer">GitHub Frontend Repo</a>
                </div>
            } 

            {project.github.backend==="" ? <></> :    
                <div className={style.linkItem}>
                    <strong>Backend GitHub:</strong>{" "}
                    <a href={project.github.backend} target="_blank" rel="noopener noreferrer">GitHub Backend Repo</a>
                </div>
            } 
                
                
                
                <div className={style.linkItem}>
                    <strong>Website:</strong>{" "}
                    <a href={project.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                </div>

                <div className={style.linkItem}>
                    <strong>Hosted on:</strong> <span>{project.deployedAt}</span>
                </div>

                <p className={style.description}><strong>{project.description}</strong></p>
            </div>
        </div>
    </>
  )
}

export default Description