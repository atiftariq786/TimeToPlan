import React from "react";
//import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';

import Styles from "./Toolbar.module.css";

const toolbar = (props) => {

    return (
        
        <Navbar className={Styles.Navbar} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">TimeToPlan</Navbar.Brand>
        
        <a href="#pricing">Create Story</a>
        <a href="#pricing">Saved List</a>
        <Navbar.Brand href="#home">Login</Navbar.Brand>
        <Navbar.Brand href="#home">Logout</Navbar.Brand>
        
        
      </Navbar>
        
       
        
    );
};
export default toolbar;