import React, {Component} from "react";
import API from "../../../utils/API";
import Styles from "./signUp.module.css";
import Button from "react-bootstrap/Button";
//import {Link} from "react-router-dom";
//import Toolbar from "../../Navigation/Toolbar/Toolbar";

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
        console.log("post data activate");

        const data = {
            username: this.state.username,
            password: this.state.password,
            
        }
        
        if(this.state.username && this.state.password){

            API.savedUserSignUp(data).then(response =>{
                console.log("User SignUp Data Saved");
                console.log(response);
                console.log(response.data.success)
                console.log(response.data.message)
                if(response.data.success){
                    
                    this.props.updateSignedInState(true);
                    // localStorage.setItem('signedin', true);
                
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
        
        console.log("signup testing")
       // console.log(this.state.signUpRes);
        //console.log(this.state.currentUsername);

        return(
            <div className={Styles.mainDiv}>
            <h2>Registeration Form</h2>
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
                    onClick ={this.postSignUpHandler} 
                    size="sm" 
                
                    >SignUp</Button>
                </form>
                
                
                

        
        </div>
        )
    }
}
export default SignUp;
