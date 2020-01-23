import React from "react";
import Styles from "../../Sketch/SketchBook/SketchBook.module.css";

const sketch = (props) => {

    return (
        <div className={Styles.sketchDiv}>
            <div className={Styles.sketchDivOne}>
                <img
                style={{width: "100%", height:"300px"}} 
                className={Styles.image}
                src={require("../../../images/goalSteps.jpg")} alt="media"></img>
                
                <div className={Styles.sketchOneHover}>
                    <p className={Styles.titleText}>
                    Important Steps To Create Goals 
                    <ul className={Styles.textList}>
                        <li>Think about the results you want to see</li>
                        <li>Create smart goals</li>
                        <li>Write your goals</li>
                        <li>Create an action plan</li>
                        <li>Create a timeline</li>
                        <li>Take action</li>
                        <li>Re-evaluate and assess your progress</li>
                    </ul>
                    </p>
                </div>
            </div>
            <div className={Styles.sketchDivTwo}>
                <img
                style={{width: "100%", height:"300px"}} 
                src={require("../../../images/MI-Theory.jpg")} alt="media"></img>
            </div>
        
        </div>
        
    );
};
export default sketch;