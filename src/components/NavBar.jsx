import React from 'react'
import { Link } from 'react-router-dom'
import style from '../css/navbar.module.css'
const NavBar = () => {
  return (
    <React.Fragment>
        <nav className={style.navbar}>
            <div className={style["navbar-brand"]}>
               <h3>Profile Page</h3>
            </div>
            <ul className={style["navbar-links"]}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='https://www.linkedin.com/in/varun-vatsal-19286a201/' target='_blank'>LinkedIn</Link></li>
                <li><Link to='https://github.com/varunvatsal' target='_blank'>Github</Link></li>
            </ul>
        </nav>
    </React.Fragment>
  )
}

export default NavBar