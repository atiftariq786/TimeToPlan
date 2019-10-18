import React, {Component} from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../component/Navigation/Toolbar/Toolbar";
import Styles from "./Layout.module.css";

class Layout extends Component {

    render(){

        return (
            <Aux>
                <Toolbar/>
                <main className={Styles.Contents}>
                    {this.props.children}
                </main>
            
            </Aux>
        
        )
    }
}
export default Layout;
