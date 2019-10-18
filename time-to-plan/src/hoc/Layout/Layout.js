import React, {Component} from "react";
import Aux from "../Aux/Aux";
import Styles from "./Layout.module.css";

class Layout extends Component {

    render(){

        return (
            <Aux>
                <div>Tool bar</div>
                <main className={Styles.Contents}>
                    {this.props.children}
                </main>
            
            </Aux>
        
        )
    }
}
export default Layout;
