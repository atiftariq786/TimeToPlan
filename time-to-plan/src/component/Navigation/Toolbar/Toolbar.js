import React from "react";
//import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";

import Styles from "./Toolbar.module.css";

const toolbar = (props) => {

  
    return (
        
        <Navbar className={Styles.Navbar} collapseOnSelect expand="lg" bg="dark" variant="dark">
       
        
        <NavLink to="/"><Navbar.Brand>TimeToPlan</Navbar.Brand></NavLink>
        <NavLink to="/create-story/"><Navbar.Brand>Create Story</Navbar.Brand></NavLink>
        <NavLink to="/create-goals/"><Navbar.Brand>Create Goals</Navbar.Brand></NavLink>
        <NavLink to="/saved-list/"><Navbar.Brand>Saved List</Navbar.Brand></NavLink>
        
       
        
        
      </Navbar>
        
       
        
    );
};
export default toolbar;