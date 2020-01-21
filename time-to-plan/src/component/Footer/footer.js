import React from "react";
import Styles from "../Footer/footer.module.css";



const footer = (props) => {

    return (
        
        <div className={Styles.footerDiv}>
            <div className={Styles.footerSec1}>
                <div className={Styles.footerAbout}>
                    <a src=""><p>About</p></a>
                    <a src="">Demo</a>
                    
                
                </div>
                <div className={Styles.footerInfo}>
                    <a src=""><p>Future Development</p></a>
                    <a src="">App Version</a>
                
                </div>
                
            </div>
            
            <div className={Styles.footerSec2}>
                <p>@Copyrite 2019 By Atif Tariq</p>
            </div>
        
        </div>
        
       
        
    );
};
export default footer;