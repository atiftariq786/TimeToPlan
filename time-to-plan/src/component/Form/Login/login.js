import React, {Component} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import Button from "react-bootstrap/Button";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import API from "../../../utils/API";
import LoginError from "../../Modals/LoginError/loginError";
import Styles from "./login.module.css";



class Login extends Component {
    
    state = {
        username : "",
        password : "",

        isValidLoginForm: true,
        loginError: false,
        modalShow: false,
    }
    
    usernameHandler =(event) =>{
        this.setState({
            username: event.target.value
        })
    }
    passwordHandler =(event) =>{
        this.setState({
            password: event.target.value
        })
    }
    HideloginErrorHandler = ()=>{
        this.setState({
            modalShow: false
        })
    }
    loginHandler= () =>{

        if(this.state.username === ""){

            this.setState({
                isValidLoginForm : false
            }) 
        }
        if(this.state.password === ""){

            this.setState({
                isValidLoginForm : false
            }) 
        }
        
        const data = {
            username: this.state.username,
            password: this.state.password,
        }
        
        if(this.state.username && this.state.password){

            API.savedUserLogin(data).then(response =>{

            let username = response.data.message;
                if(response.data.success){

                    localStorage.removeItem('username');
                    
                    this.props.updateSignedInState("true", username );
            
                    this.props.history.push("/create-story/");
                }
            
            }).catch(err => {
                //console.log({err})

                if(err.response.data === "User not found"){
                    this.setState({
                        loginError: true,
                        modalShow:true,
                    })
                }    
            });

            this.setState({
                username:"",
                password: "",
                
            });

        }
        else{
            console.log("Please fill this form....!")
        }
    }
    render(){
        let userErr = "";
        let passwordErr = "";

        let userErrorIcon = "";
        let passwordErrorIcon = "";

        let loginErrorMessage = "";
        if(this.state.loginError){
            loginErrorMessage = (<ButtonToolbar>
                <LoginError
                show={this.state.modalShow}
                onHide={this.HideloginErrorHandler}
                />
            </ButtonToolbar>
            )
        }

        //Check username validation
        //Match characters and symbols in the list, a-z, 0-9
        //Length at least 3 characters and maximum length of 15
        let usernamePattern = /^[a-z0-9_-]{3,15}$/.test(this.state.username);
        let isValidUsername = [Styles.inputField];

        if(usernamePattern){
            isValidUsername.push(Styles.validLogin);
            userErrorIcon = (
                <FontAwesomeIcon className={Styles.checkCircle} icon={faCheckCircle} size="1x"/>
            )
        }
        if(!usernamePattern && this.state.username !== ""){
            userErr = (
                <p className ={Styles.usernameEror}>Please write username at least 3 characters</p>
            );
            userErrorIcon = (
                <FontAwesomeIcon className={Styles.exTrianle} icon={faExclamationTriangle} size="1x"/>
            )
            isValidUsername.push(Styles.invalidLogin); 
        }
        //Check password validation
        //Minimum eight characters, at least one letter and one number
        let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.state.password);
        let isValidPassword = [Styles.inputField];

        if(passwordPattern){
            isValidPassword.push(Styles.validLogin);
            passwordErrorIcon = (
                <FontAwesomeIcon className={Styles.checkCircle} icon={faCheckCircle} size="1x"/>
            )
        }
        if(!passwordPattern && this.state.password !== ""){
            passwordErr = (
                <p className ={Styles.usernameEror}>Please write password minimum eight characters, at least one letter and one number</p>
            );
            passwordErrorIcon = (
                <FontAwesomeIcon className={Styles.exTrianle} icon={faExclamationTriangle} size="1x"/>
            )
            isValidPassword.push(Styles.invalidLogin);
        }

        const formValidation = () =>{
            if(this.state.username === ""){
                userErr = (
                    <p className ={Styles.usernameEror}>Please write username at least 3 characters</p>
                );
                userErrorIcon = (
                    <FontAwesomeIcon className={Styles.exTrianle} icon={faExclamationTriangle} size="1x"/>
                )
                isValidUsername.push(Styles.invalidLogin);  
            }
            if(this.state.password === ""){
                passwordErr = (
                    <p className ={Styles.usernameEror}>Please write password minimum eight characters, at least one letter and one number</p>
                );
                passwordErrorIcon = (
                    <FontAwesomeIcon className={Styles.exTrianle} icon={faExclamationTriangle} size="1x"/>
                )
                isValidPassword.push(Styles.invalidLogin);
                
            }
        }
        //check form validation and password match
        if(!this.state.isValidLoginForm){
            formValidation();
        }

        return(
            <div className={Styles.mainDiv}>
                <div className={Styles.loginImage}>
                    <img
                    style={{width: "100%", height:"100vh" }} 
                    src={require("../../../images/loginPage.jpg")} alt="Login Page"></img>

                </div>

                <div className={Styles.loginFormMainDiv}>
                    {loginErrorMessage}
                    <h2 className={Styles.loginTitle}>Login</h2>
                    <form className={Styles.formDiv}>
                        <input 
                        className={isValidUsername.join(" ")} 
                        type="text" 
                        placeholder="Username"
                        value = {this.state.username} 
                        onChange={this.usernameHandler}>
                        </input>
                        {userErrorIcon}
                        {userErr}

                        <input 
                        className={isValidPassword.join(" ")} 
                        type="password" 
                        placeholder="Password"
                        value = {this.state.password} 
                        onChange={this.passwordHandler}>
                        </input>
                        {passwordErrorIcon}
                        {passwordErr}
                        
                        <Button
                        className={Styles.loginButton}
                        variant="success" 
                        type= "button" 
                        onClick ={this.loginHandler} 
                        size="sm" 
                        >Login</Button>
                        <p 
                            className={Styles.signupText}>
                            Don't have an account? {<Link to="/signUp/" className={Styles.signupButton}>Sign Up</Link>}
                        </p>
                        <Link to="/" className={Styles.backButton}>
                            back
                        </Link>
                    </form>
                </div>
        </div>
        )
    }
}
export default Login;
