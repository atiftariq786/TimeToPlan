import React from "react";
import Styles from "../MediaStory/mediaStory.module.css";



const media = (props) => {

    return (
        
        <div className={Styles.mediaDiv}>
        
            <div className={Styles.mediaDivOne}>
            <img
            style={{width: "100%", height:"300px"}} 
            src="https://media.coschedule.com/uploads/header-layers.gif" alt="media"></img>
            </div>
            <div className={Styles.mediaDivTwo}>
            <img
            style={{width: "100%", height:"300px"}} 
            src="https://media3.giphy.com/media/114QbccJsc5cis/source.gif"></img>
            </div>
        
        </div>
        
       
        
    );
};
export default media;