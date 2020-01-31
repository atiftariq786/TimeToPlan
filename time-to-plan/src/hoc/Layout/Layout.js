import React, {Component} from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../component/Navigation/Toolbar/Toolbar";
//import Styles from "./Layout.module.css";

class Layout extends Component {


    render(){

        let signedIn = localStorage.getItem('signedin');
        let toolbar = "";

        if(signedIn === "true"){
            toolbar = (
                <Toolbar
                signedIn = {this.props.updateSignedInState}>
                </Toolbar>);
        }
        
        return (
            <Aux>
                {toolbar}
                <main >
                    {this.props.children}
                    
                </main>
            
            </Aux>
        
        )
    }
}
export default Layout;
