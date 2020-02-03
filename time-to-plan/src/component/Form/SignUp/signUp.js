import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../../../utils/API";
import Styles from "./signUp.module.css";
import Button from "react-bootstrap/Button";

class SignUp extends Component {
    
    state = {
        username : "",
        password : "",
        signUpRes: [],
        currentUsername:"no user",
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

    postSignUpHandler= () =>{

        const data = {
            username: this.state.username,
            password: this.state.password,
        }
        
        if(this.state.username && this.state.password){

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
                        type="name" 
                        placeholder="Username"
                        value = {this.state.username} 
                        onChange={this.usernameHandler}>
                        </input>

                        <input 
                        className={Styles.inputDiv} 
                        type="email" 
                        placeholder="Email"
                        value = {""} 
                        onChange={""}>
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
                        value = {""} 
                        onChange={""}>
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
