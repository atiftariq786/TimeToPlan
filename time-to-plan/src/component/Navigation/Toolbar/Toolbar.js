import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import Styles from "./Toolbar.module.css";
import API from "../../../utils/API";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import LogoutWarning from "../../Modals/LogoutWarning/logoutWarning.js";

class Toolbar extends Component {

    state={
        logout: [],
        userLogout:true,
        navigateLogout:false,  
        showLogoutMessage : false,
    }

    logoutHandler = () => {
        API.getLogout().then(response => {
            console.log("User logout")
            console.log(response);
            this.props.signedIn("false")
        })
    }
    showLogoutWarning = () =>{

        this.setState({
            showLogoutMessage : true,
        })
    }
    hidelogoutMessageHandler = ()=>{
        this.setState({
            showLogoutMessage: false
        })
    }

render(){

    let signedIn = localStorage.getItem('signedin');
    let username = localStorage.getItem('username');
    let logOutShow ="";
    if(signedIn === "true"){
        logOutShow =(
            <NavLink to="/">
                <Navbar.Brand className = {Styles.logout} onClick={this.showLogoutWarning}>Logout</Navbar.Brand>
            </NavLink>
        );
    }  
    
    let logOutWarning = "";
    if(this.state.showLogoutMessage){
        logOutWarning = (<ButtonToolbar>
            <LogoutWarning
            show={this.state.showLogoutMessage}
            onHide={this.hidelogoutMessageHandler}
            logout = {this.logoutHandler}
            />
        </ButtonToolbar>
        )
    }
    return(
        
        <Navbar className={Styles.Navbar} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <NavLink to="/"><Navbar.Brand className={Styles.appTitle}>TimeToPlan</Navbar.Brand></NavLink>
            <NavLink to="/create-story/"><Navbar.Brand className = {Styles.appContent}>Your Story</Navbar.Brand></NavLink>
            <NavLink to="/create-goals/"><Navbar.Brand className = {Styles.appContent}>Create Goals</Navbar.Brand></NavLink>
            <NavLink to="/saved-list/"><Navbar.Brand className = {Styles.appContent}>Your Plans</Navbar.Brand></NavLink>
            {logOutShow}{<p className={Styles.username}>Signed in:  {username}</p>}
            {logOutWarning}
        </Navbar>
        )
    }
}
export default Toolbar;