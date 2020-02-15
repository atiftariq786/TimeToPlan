import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import Styles from "./Spinner.module.css";

const spinner = ()=>(
    <div className = {Styles.spinner}>
        <Spinner animation="border" variant="info" /> 
    </div>
    
)
export default spinner;