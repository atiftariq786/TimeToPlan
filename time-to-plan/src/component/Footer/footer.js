import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Styles from "../Footer/footer.module.css";

const footer = (props) => {

    const appVersionHandler = () => {
        
        alert("App version v1.0 .\nNew Version coming soon....!  ")
    }
    const footerHandler = () => {
        
        alert("Sorry workng in progress....!  ")
    }
    return (
        <div className={Styles.footerDiv}>
            <div className={Styles.footerSec1}>
                <div className={Styles.footerAbout}>
                    <button className={Styles.footerButton} onClick = {footerHandler}  >About</button>
                    <Link to="/appDemo/"><button className={Styles.footerButton}>Demo</button></Link>
                </div>
                <div className={Styles.footerInfo}>

                    <button className={Styles.footerButton} onClick = {footerHandler} >Future Development</button>
                    <button className={Styles.footerButton}  onClick = {appVersionHandler}>App Version</button>
                </div>
            </div>
            
            <div className={Styles.footerSec2}>
            <a href = "https://github.com/atiftariq786">
                <FontAwesomeIcon className={Styles.github} icon={faGithub} size="2x" />
            </a>
            <a href = "https://www.linkedin.com/in/atif-tariq-5b00b089/">
                <FontAwesomeIcon className={Styles.linkedin} icon={faLinkedin} size="2x" /> 
            </a>

                <p>@Copyright 2020 By Atif Tariq</p>
            </div>
        </div> 
    );
};
export default footer;