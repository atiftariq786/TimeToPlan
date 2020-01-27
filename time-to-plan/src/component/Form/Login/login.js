import React from "react";
import Styles from "./login.module.css";
import {Link} from "react-router-dom";

const login = (props) => {

    const loginHandler = () => {
        
        alert("Login work in progress.....!")
    }

    return (
        
        <div className={Styles.mainDiv}>
            <h2>Login Form</h2>
                <form className={Styles.formDiv}>
                    <input className={Styles.inputDiv} type="text" placeholder="username"></input>
                    <input className={Styles.inputDiv} type="text" placeholder="password"></input>
                    <button onClick={loginHandler}>Login</button>
                    <Link to="/signUp/"><button>SignUp</button></Link>
                </form>
                
                

        
        </div>
    );
};
export default login;