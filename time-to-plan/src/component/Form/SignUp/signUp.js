import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../../../utils/API";
import Styles from "./signUp.module.css";
import Button from "react-bootstrap/Button";

class SignUp extends Component {
    
    state = {
        username : "",
        email : "",
        password : "",
        confirmPassword : "",
        signUpRes: [],
        currentUsername:"no user",
    }

    usernameHandler =(event) =>{
        this.setState({
            username: event.target.value
        })
    }
    
    emailHandler =(event) =>{
        this.setState({
            email: event.target.value
        })
    }
    passwordHandler =(event) =>{
        this.setState({
            password: event.target.value
        })
    }
    confirmPasswordHandler =(event) =>{
        this.setState({
            confirmPassword: event.target.value
        })
    }

    postSignUpHandler= () =>{

        
        if(this.state.username && this.state.password && this.state.email){

            if(this.state.password === this.state.confirmPassword){
                const data = {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                
                }
    
                API.savedUserSignUp(data).then(response =>{
                    console.log("User SignUp Data Saved");
                    console.log(response);
    
                    let username = response.data.message;
                    if(response.data.success){
                        localStorage.removeItem('username');
                        
                        this.props.updateSignedInState("true", username);
    
                        this.props.history.push("/create-story/");
                        
                        this.setState({
                            signUpRes: response.data,
                            currentUsername:response.data.message,
                        });
                    }
                }); 
                
                this.setState({
                    username:"",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                
            } else {
                console.log("Make sure your password match");
            }

            
        }
        else{
            console.log("Please fill all the field");
            alert("Please fill this form....!")
        }    
    }
    
    render(){

        
        return(
                <div className={Styles.mainDiv}>
                    <div className={Styles.signUpImage}>
                    <img
                        style={{width: "100%", height:"100vh" }} 
                        src={require("../../../images/signUp-Page.jpg")} alt="SignUp Page"></img>
                    </div>

                    <div className={Styles.signUpForm}>
                    <h2 className = {Styles.signupTitle}> Create a New Account</h2>
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
                        type="email" 
                        placeholder="Email"
                        value = {this.state.email} 
                        onChange={this.emailHandler}>
                        </input>

                        <input 
                        className={Styles.inputDiv} 
                        type="password" 
                        placeholder="Password"
                        value = {this.state.password} 
                        onChange={this.passwordHandler}>
                        </input>

                        <input 
                        className={Styles.inputDiv} 
                        type="password" 
                        placeholder="Confirm Password"
                        value = {this.state.confirmPassword} 
                        onChange={this.confirmPasswordHandler}>
                        </input>
                        
                        <Button
                        className = {Styles.signupButton}
                        variant="success" 
                        type= "button" 
                        onClick ={this.postSignUpHandler} 
                        size="sm" 
                        >Join</Button>
                        <p 
                            className={Styles.signinText}>
                            Already have an account? {<Link to="/login/" className={Styles.signinButton}>Sign In</Link>}
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
export default SignUp;
