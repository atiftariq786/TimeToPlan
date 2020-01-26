import React from "react";
import Styles from "./login.module.css";

const login = (props) => {

    return (
        
        <div>
        
            <form>
                <input type="text" placeholder="username"></input>
                <input type="text" placeholder="password"></input>
            </form>

        
        </div>
    );
};
export default login;