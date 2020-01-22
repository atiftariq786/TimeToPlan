import React from "react";
import Styles from "../Footer/footer.module.css";



const footer = (props) => {

    return (
        
        <div className={Styles.footerDiv}>
            <div className={Styles.footerSec1}>
                <div className={Styles.footerAbout}>
                    <a href="test"><p>About</p></a>
                    <a href="test">Demo</a>
                    
                
                </div>
                <div className={Styles.footerInfo}>
                    <a href="test"><p>Future Development</p></a>
                    <a href="test">App Version</a>
                
                </div>
                
            </div>
            
            <div className={Styles.footerSec2}>
                <p>@Copyrite 2019 By Atif Tariq</p>
            </div>
        
        </div>
        
       
        
    );
};
export default footer;