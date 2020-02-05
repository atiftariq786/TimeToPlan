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

        isValidForm : true,
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

        //let form = [Styles.inputDiv];

       /* if(confirmPasswordPattern){
            isValidConfirmPassword.push(Styles.validInput);
        }
        if(!confirmPasswordPattern && this.state.confirmPassword !== ""){
            isValidConfirmPassword.push(Styles.invalidInput);
        }
        */

        if(this.state.username === ""){

            this.setState({
                isValidForm : false
            }) 
        }
        if(this.state.email === ""){

            this.setState({
                isValidForm : false
            })
        }
        if(this.state.password === ""){

            this.setState({
                isValidForm : false
            })
        }
        if(this.state.confirmPassword === ""){

            this.setState({
                isValidForm : false
            })
        }

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
        }    
    }
    
    render(){
        let userErr = "";
        let emailErr = "";
        let passwordErr = "";
        
        const formValidation = () =>{

            console.log(" welcome inside function")
            

            if(this.state.username === ""){
                userErr = (
                    <p className ={Styles.usernameEror}>Please write username at least 3 characters</p>
                )

                isValidUsername.push(Styles.invalidInput);
                
            }
            if(this.state.email === ""){
                emailErr = (
                    <p className ={Styles.usernameEror}>Please write corrrect email address</p>
                )

                isValidEmail.push(Styles.invalidInput);
                
            }
            if(this.state.password === ""){
                passwordErr = (
                    <p className ={Styles.usernameEror}>Please write password minimum eight characters, at least one letter and one number</p>
                )

                isValidPassword.push(Styles.invalidInput);
                
            }
            if(this.state.confirmPassword === ""){

                isValidConfirmPassword.push(Styles.invalidInput);
                
            }
        }
        




        let usernamePattern = /^[a-z0-9_-]{3,15}$/.test(this.state.username);
        //Match characters and symbols in the list, a-z, 0-9, underscore, hyphen
        //Length at least 3 characters and maximum length of 15
        let isValidUsername = [Styles.inputDiv];

        if(usernamePattern){
            isValidUsername.push(Styles.validInput);
            
        }
        if(!usernamePattern && this.state.username !== ""){
            isValidUsername.push(Styles.invalidInput);
        }

       // ^[a-z0-9_-]{3,15}$

        let emailPattern = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(this.state.email);

        let isValidEmail = [Styles.inputDiv];

        if(emailPattern){
            isValidEmail.push(Styles.validInput);
        }
        if(!emailPattern && this.state.email !== ""){
            isValidEmail.push(Styles.invalidInput);
        }


        let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.state.password);
        //Minimum eight characters, at least one letter and one number:
        let isValidPassword = [Styles.inputDiv];

        if(passwordPattern){
            isValidPassword.push(Styles.validInput);
        }
        if(!passwordPattern && this.state.password !== ""){
            isValidPassword.push(Styles.invalidInput);
        }

        let confirmPasswordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.state.confirmPassword);
        //Minimum eight characters, at least one letter and one number:
        let isValidConfirmPassword = [Styles.inputDiv];

        if(confirmPasswordPattern){
            isValidConfirmPassword.push(Styles.validInput);
        }
        if(!confirmPasswordPattern && this.state.confirmPassword !== ""){
            isValidConfirmPassword.push(Styles.invalidInput);
        }
        
        //==========================
        if(!this.state.isValidForm){

            console.log(" formvalidation function call")
            formValidation();
        }

        
            
        


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
                        className={isValidUsername.join(" ")} 
                        type="text" 
                        placeholder="Username"
                        value = {this.state.username} 
                        onChange={this.usernameHandler}>
                        </input>
                        {userErr}

                        <input 
                        className={isValidEmail.join(" ")} 
                        type="email" 
                        placeholder="Email"
                        value = {this.state.email} 
                        onChange={this.emailHandler}
                        onKeyUp ={this.emailHandler}>
                        </input>
                        {emailErr}

                        <input 
                        className={isValidPassword.join(" ")} 
                        type="password" 
                        placeholder="Password"
                        value = {this.state.password} 
                        onChange={this.passwordHandler}>
                        </input>
                        {passwordErr}

                        <input 
                        className={isValidConfirmPassword.join(" ")} 
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
