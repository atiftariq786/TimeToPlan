import React, {Component} from "react";
import API from "../../../utils/API";
import Styles from "./login.module.css";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

class Login extends Component {
    
    state = {
        username : "",
        password : "",
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

    loginHandler= () =>{
        
        const data = {
            username: this.state.username,
            password: this.state.password,
        }
        
        if(this.state.username && this.state.password){

            API.savedUserLogin(data).then(response =>{
                console.log("User login Data Saved");
                console.log(response);
                
            let username = response.data.message;
                if(response.data.success){

                    localStorage.removeItem('username');
                    
                    this.props.updateSignedInState("true", username );
            
                    this.props.history.push("/create-story/");
                }
            
            }); 
            this.setState({
                username:"",
                password: "",
                
            });

        }
        else{
            alert("Please fill this form....!")
        }
    }
    render(){

        return(
            <div className={Styles.mainDiv}>
                <div className={Styles.loginImage}>
                    <img
                    style={{width: "100%", height:"100vh" }} 
                    src={require("../../../images/loginPage.jpg")} alt="Login Page"></img>

                </div>

                <div className={Styles.loginForm}>
                    <h2 className={Styles.loginTitle}>Login</h2>
                    <form className={Styles.formDiv}>
                        <input 
                        className={Styles.inputDiv} 
                        type="text" 
                        placeholder="Username"
                        value = {this.state.username} 
                        onChange={this.usernameHandler}>
                        </input>

                        <input 
                        className={Styles.inputDiv} 
                        type="text" 
                        placeholder="Password"
                        value = {this.state.password} 
                        onChange={this.passwordHandler}>
                        </input>
                        
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
