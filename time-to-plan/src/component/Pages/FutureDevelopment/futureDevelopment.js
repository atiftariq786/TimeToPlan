import React from "react";
import {Link} from "react-router-dom";
import Styles from "./futureDevelopment.module.css";

const futureDevelopment = (props) => {

    return(
        <div className = {Styles.container}>
            
            <div className={Styles.futureDevImage}>
                    <img
                    style={{width: "100%", height:"100vh" }} 
                    src={require("../../../images/Programming-Wallpapers-33-2880-x-1800.jpg")} alt="SignUp Page">
                    </img>
            </div> 
            <div className={Styles.descriptionDiv}>
                <h2 style={{textAlign: "center"}}>Future Development</h2>
                    <p>TimeToPlan is fullstack app version 1.0 based on React, Node, Express, MongoDB, Axios and React Bootstrap technologies. This is first app version in which user can write your story and set future goal list and check the status of success.</p>
                <h5>Next Features and Technologies</h5>
                    <li>Goal sharing with other users </li>
                    <li>Default goals list for users to add easily more goals as per choice</li>
                    <li>Goals status in graph to understand the progress of acheivment</li>
                    <li>App will be design for mobile users and desktop users</li>
                    <li>Redux for state management tool </li>
                    <li>GraphQL for quering APIs instead of rest APIs. </li>
                
                    <Link to="/" className={Styles.backButton}>back</Link>
            </div>
            
        </div>
    )
}
export default futureDevelopment;