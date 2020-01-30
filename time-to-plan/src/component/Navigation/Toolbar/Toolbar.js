import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import Styles from "./Toolbar.module.css";
import API from "../../../utils/API";




class Toolbar extends Component {

    state={
        logout: [],
        userLogout:true,
        navigateLogout:false,
    }

    
        
    logoutHandler = () => {

        API.getLogout().then(response => {
            
            console.log("Get logout Method")
            console.log(response);

            this.props.signedIn(false)
            //this.forceUpdate()
        
        })
        
    }

render(){

    let signedIn = localStorage.getItem('signedin');
    console.log({signedIn})
    let temp ="";
    if(signedIn === "true"){
        temp =(
            <NavLink to="/"><Navbar.Brand className = {Styles.logout} onClick={this.logoutHandler}>Logout</Navbar.Brand></NavLink>
        
        );
       
        
    }

    
    return(

        <Navbar className={Styles.Navbar} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <NavLink to="/"><Navbar.Brand className={Styles.appTitle}>TimeToPlan</Navbar.Brand></NavLink>
            <NavLink to="/create-story/"><Navbar.Brand className = {Styles.appContent}>Your Story</Navbar.Brand></NavLink>
            <NavLink to="/create-goals/"><Navbar.Brand className = {Styles.appContent}>Create Goals</Navbar.Brand></NavLink>
            <NavLink to="/saved-list/"><Navbar.Brand className = {Styles.appContent}>Your Plans</Navbar.Brand></NavLink>
            {temp}
        </Navbar>
        
        )
    }

}
export default Toolbar;