import React from "react";
import styles from "../css/home.module.css";
import { useSpring, animated, useTransition } from "react-spring";
import {ReactTyped} from "react-typed";

const EDUCATION = ["B.Tech: Punjab Engineering College (Deemed to be university), Chandigarh", "12th: Mother Teresa Vidyapeeth", "10th: DAV Public School, Malighat, Muzaffarpur"]
const CONTACT = ["Email: varunvatsal963@gmail.com", "Mobile No: 6202347066"]


const Home = () => {
  const [profileImageSpring, profileImageApi] = useSpring(() => ({
    from: {opacity: 0, height: "100px", width: "100px"},
    to: {opacity: 1, height: "250px", width: "250px"},
    config: {duration: 700}
  }))

  const educationTransitions = useTransition(EDUCATION, {
    from: {opacity: 0, transform: "translateX(-20px)"},
    enter: {opacity: 1, transform: "translateX(0)"},
    leave: {opacity: 0, transform: "translateX(20px"},
    trail: 400,
    config: {
      tension: 280, friction: 8
    }
  })

  const contactTransition = useTransition(CONTACT, {
    from: {opacity: 0, transform: "translateX(-20px)"},
    enter: {opacity: 1, transform: "translateX(0)"},
    leave: {opacity: 0, transform: "translateX(20px"},
    trail: 250,
    config: {
      tension: 280, friction: 7
    },
    delay: 1200
  })

  return (
    <React.Fragment>
        <div className={styles.profileContainer}>
          <div className={styles.profileImageContainer}>
            <animated.img
              src="https://raw.githubusercontent.com/varunvatsal/ProfilePage/refs/heads/main/images/WhatsApp%20Image%202025-01-01%20at%203.18.21%20PM.jpeg"
              alt="Profile"
              className={styles.profileImage}
              style={{...profileImageSpring, transformOrigin: "center"}}
            />
          </div>
          <div className={styles.profileDescription}>
            <h1>VARUN VATSAL</h1>
            <h2>I am a{" "}
              <ReactTyped
                className={styles.profileTyper}
                strings={["Software Developer", "Software Designer", "Problem Solver", "Thinker", "Freelancer", "Explorer", "Cook"]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar=">"
                showCursor={true}
              />
            </h2>
            <p>
            Hi, My name is Varun Vatsal, a graduate of Punjab Engineering College, Chandigarh, with a degree in Electronics and Communication Engineering.
            </p>
            <p>
            I am passionate about software development and enjoy creating innovative solutions while constantly learning and improving my skills. I have expertise in Java, Spring Boot, Spring, JavaScript, React, Node.js, SQL, HTML, and CSS.
            </p>
            <p>
            I am dedicated to building impactful software and advancing my knowledge in this ever-evolving field.
            </p>
          </div>
      </div>
      <hr className={styles["fancy-line"]}/>
      <br />
      <h1 className={styles.heading}>EDUCATION</h1>
      <div className={styles.educationContainer}>
        <ul className={styles.unorderedList}>
          {educationTransitions((styles, item) => {
            return (
              <animated.li style={{...styles}}>{item}</animated.li>
            )
          })}
        </ul>
      </div>
      <hr className={styles["fancy-line"]}/>
      <br />
      <h1 className={styles.heading}>CONTACT</h1>
      <div className={styles.contactContainer}>
          <ul className={styles.unorderedList}>
            {contactTransition((styles, item) => {
              return (
                <animated.li style={{...styles}}>{item}</animated.li>
              )
            })}
          </ul>
      </div>

    </React.Fragment>
  );
};

export default Home;
