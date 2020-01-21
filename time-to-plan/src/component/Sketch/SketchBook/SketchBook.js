import React from "react";
import Styles from "../../Sketch/SketchBook/SketchBook.module.css";

const sketch = (props) => {

    return (
        <div className={Styles.sketchDiv}>
        <div className={Styles.sketchDivOne}>
        <img
        style={{width: "50%", height:"200px"}} 
        src="../../../../images/goalSteps.png" alt="media"></img>
        </div>
        <div className={Styles.sketchDivTwo}>
        <img
        style={{width: "100%", height:"300px"}} 
        src="https://www.experience-on-demand.com/wp-content/uploads/2018/05/eod-strategic-planning-1-02.png"></img>
        </div>
        
        </div>
        
        
       
        
    );
};
export default sketch;