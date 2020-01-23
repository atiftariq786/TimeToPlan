import React from "react";
import Styles from "../MediaStory/mediaStory.module.css";



const media = (props) => {

    return (
        
        <div className={Styles.mediaDiv}>
        
            <div className={Styles.mediaDivOne}>
                <img
                style={{width: "100%", height:"300px"}} 
                className={Styles.image}
                src={require("../../../images/giphy1.gif")} alt="media"></img>
                <div className={Styles.mediaOneHover}>
                    <p className={Styles.titleText}>
                    What is a goal? 
                    <p className={Styles.textList}>
                    Goal setting is a purposeful and explicit process that starts with identifying a new objective, skill, or project you want to achieve. Then, you make a plan for achieving it, and you work to complete it. 
        
                    </p>
                    </p>
                </div>
            </div>
            <div className={Styles.mediaDivTwo}>
                <img
                style={{width: "100%", height:"300px"}} 
                className={Styles.image}
                src={require("../../../images/giphy2.gif")} alt="media"></img>
                <div className={Styles.mediaTwoHover}>
                    <p className={Styles.titleText}>
                    Important Steps To Create Story 
                        <p className={Styles.textList}>
                        Writing our personal stories is the most vulnerable kind of writing we can do. We fear being laughed at, rejected, or that our words will be met with silence. And in turn, we ourselves remain silent.
                            <ul >
                                <li>Tap into your emotions.</li>
                                <li>List the turning points.</li>
                                <li>Write everything down.</li>
                                <li>Use the senses.</li>
                                <li>Find the theme.</li>
                                <li>Tell a story.</li>
                            </ul>
                        </p>
                    </p>
                </div>
            </div>
        
        </div>
        
       
        
    );
};
export default media;