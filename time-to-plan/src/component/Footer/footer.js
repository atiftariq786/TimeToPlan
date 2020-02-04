import React from "react";
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
                    <button className={Styles.footerButton} onClick = {footerHandler}   >Demo</button>
                </div>
                <div className={Styles.footerInfo}>
                    <button className={Styles.footerButton} onClick = {footerHandler} >Future Development</button>
                    <button className={Styles.footerButton}  onClick = {appVersionHandler}>App Version</button>
                </div>
            </div>
            
            <div className={Styles.footerSec2}>
                <p>@Copyright 2020 By Atif Tariq</p>
            </div>
        </div> 
    );
};
export default footer;