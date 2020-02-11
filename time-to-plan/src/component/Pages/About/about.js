import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Styles from "./about.module.css";

const about = (props) => {

    return(
        <div className = {Styles.container}>
            
            
            <div className={Styles.descriptionDiv}>
                <h2 style={{textAlign: "center"}}>About</h2>
                    <h5>The App</h5>
                    <p>
                    Time to Plan is a bucket list planning app designed to enable users to plan goals
                     according to the story they want to live. 
                     I believe that creating a bucket list should be personal and align with the story you want to live. It’s easy to say you want to go skydiving and add it to your bucket list but does skydiving align with who you want to be in the next 5, 10, 30 years? By determining the story you want to live first, you can prioritize your goals to enjoy your life to the fullest!
                    This app is in its initial phase. 
                    I got the idea when I was browsing planning apps for me and my wife. 
                    While browsing I didn’t find exactly what I wanted out of the apps so I decided to make one. 
                    This also seemed like an excellent opportunity to improve my development skills! Time to Plan gives me a great playground to learn and explore React and Node.js. 
                    Since starting this app I have gained more in depth knowledge and experience on JavaScript, React Components, backend-frontend communication, Express middlewares, and Passport.js authentication. I am hoping that I continue to learn more as I work to improve this project. 
                    </p>
                    <h5>Me</h5>
                    <p>I initially started out as an Industrial Automation engineer, 
                    designing interfaces for users interacting with machinery systems. 
                    Although I love working with hardware and tinkering with my hands, 
                    I found Software Engineering to be my calling because it enables me to develop apps as I like. 
                    I am currently looking for a front-end developer position, if you know of any please ping me!
                    Please click around and provide me feedback at atiftariq786[@]gmail[.]com</p>
                    <Link to="/" className={Styles.backButton}>back</Link>
                    <div className= {Styles.gitLinkedin}>
                        <a href = "https://github.com/atiftariq786">
                            <FontAwesomeIcon className={Styles.github} icon={faGithub} size="2x" />
                        </a>
                        <a href = "https://www.linkedin.com/in/atif-tariq-5b00b089/">
                            <FontAwesomeIcon className={Styles.linkedin} icon={faLinkedin} size="2x" /> 
                        </a>
                    </div>
                    
            </div>
            <div className={Styles.aboutImage}>
                    <img
                    style={{width: "100%", height:"100vh" }} 
                    src={require("../../../images/Programming-Wallpapers-33-2880-x-1800.jpg")} alt="About Page">
                    </img>
            </div> 
            
        </div>
    )
}
export default about;