import React from 'react'
import styles from '../css/home.module.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <img
          src="../../images/Varun Vatsal.jpg"
          alt="Profile Picture"
          className={styles.profilePicture}
        />
        <div className={styles.basicInfo}>
          <h1 className={styles.name}>Varun Vatsal</h1>
          <p className={styles.description}>
          Hi, I am Varun Vatsal, a graduate of Punjab Engineering College, Chandigarh, with a degree in Electronics and Communication Engineering. I am passionate about software development and enjoy creating innovative solutions while constantly learning and improving my skills. I have expertise in Java, Spring Boot, Spring, JavaScript, React, Node.js, SQL, HTML, and CSS, and I am dedicated to building impactful software and advancing my knowledge in this ever-evolving field, Please <b><Link to='/projects'>Click Me</Link></b> to go to projects tab.
          </p>
        </div>
      </div>

      <div className={styles.details}>
        <h2 className={styles.sectionTitle}>Education History</h2>
        <ul className={styles.educationList}>
          <li>B.Tech: Punjab Engineering College (Deemed to be university), Chandigarh</li>
          <li>12th: Mother Teresa Vidyapeeth</li>
          <li>10th: DAV Public School, Malighat, Muzaffarpur</li>
        </ul>

        <h2 className={styles.sectionTitle}>Contact Details</h2>
        <p>Email: varunvatsal963@gmail.com</p>
        <p>Mobile No: +91-6202347066</p>

        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul className={styles.list}>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Javascript</li>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>Spring</li>
          <li>Data Structures & Algorithms</li>
        </ul>

        <h2 className={styles.sectionTitle}>Hobbies</h2>
        <ul className={styles.list}>
          <li>Reading</li>
          <li>Cooking</li>
          <li>Web Development</li>
        </ul>

      </div>
    </div>
  )
}

export default Home