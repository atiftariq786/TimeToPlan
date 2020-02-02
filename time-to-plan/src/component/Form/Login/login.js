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

                    //localStorage.setItem('username', username);
                    //localStorage.setItem('signedin', true);
            
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
            <h2>Login Form</h2>
                <form className={Styles.formDiv}>
                    <input 
                    className={Styles.inputDiv} 
                    type="text" 
                    //name="username"
                    placeholder="username"
                    value = {this.state.username} 
                    onChange={this.usernameHandler}>
                    </input>

                    <input 
                    className={Styles.inputDiv} 
                    //name="password"
                    type="text" 
                    placeholder="password"
                    value = {this.state.password} 
                    onChange={this.passwordHandler}>
                    </input>
                    
                    <Button
                    variant="success" 
                    type= "button" 
                    onClick ={this.loginHandler} 
                    size="sm" 
                
                    >Login</Button>
                    <Link to="/signUp/">
                        <Button
                            //className = {Styles.signUpButton}
                            variant="primary" 
                            type= "button" 
                            size="sm" 
                            //onClick={this.signUpHandler }
                            >Sign Up
                        </Button>
                    </Link>
                
                </form>
                
                

        
        </div>
        )
    }
}
export default Login;
