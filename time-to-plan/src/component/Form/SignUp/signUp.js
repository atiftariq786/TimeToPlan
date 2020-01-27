import React, {Component} from "react";
import API from "../../utils/API";
import Styles from "./signUp.module.css";
import Button from "react-bootstrap/Button";

class SignUp extends Component {
    
    state = {
        username : "",
        password : ""
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

        //if(this.state.link && this.state.title && this.state.description){
 
        const data = {
            username: this.state.username,
            password: this.state.password,
            
        }
        console.log({data});
        
        if(this.state.username && this.state.password){

            API.savedUserSignUp(data).then(response =>{
                console.log("User SignUp Data Saved");
                console.log(response);

                this.setState({
                    username:"",
                    password: "",
                    isValidGoal: true
                });

            
            }); 

        }
        else{
            alert("Please fill this form....!")
        }
        

            
    }
    
    render(){
        console.log(this.state.username);
        console.log(this.state.password);

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
