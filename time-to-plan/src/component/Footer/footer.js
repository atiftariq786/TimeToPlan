//import React from "react";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import AppVersion from "../AppVersion/appVersion";
import Styles from "../Footer/footer.module.css";

const Footer = (props) => {

    const [modalShow, setModalShow] = useState(false);
    
    return (
        <div className={Styles.footerDiv}>
            <div className={Styles.footerSec1}>
                <div className={Styles.footerAbout}>
                    <Link to="about"><button className={Styles.footerButton}>About</button></Link>
                    <Link to="/appDemo/"><button className={Styles.footerButton}>Demo</button></Link>
                </div>

                <div className={Styles.footerInfo}>
                    <Link to="/future-development/"><button className={Styles.footerButton}>Future Development</button></Link>
                    <button className={Styles.footerButton}  onClick = {() =>setModalShow(true)}>App Version</button>
                    
                    <ButtonToolbar>
                        <AppVersion
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        />
                    </ButtonToolbar>
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
export default Footer;