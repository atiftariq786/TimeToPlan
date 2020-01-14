import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import Styles from "./Toolbar.module.css";

const toolbar = (props) => {
  
    return (
        
        <Navbar className={Styles.Navbar} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <NavLink to="/"><Navbar.Brand className={Styles.appTitle}>TimeToPlan</Navbar.Brand></NavLink>
            <NavLink to="/create-story/"><Navbar.Brand className = {Styles.appContent}>Your Story</Navbar.Brand></NavLink>
            <NavLink to="/create-goals/"><Navbar.Brand className = {Styles.appContent}>Create Goals</Navbar.Brand></NavLink>
        
            <NavLink to="/saved-list/"><Navbar.Brand className = {Styles.appContent}>Your Plans</Navbar.Brand></NavLink>
        </Navbar>
    );
};
export default toolbar;