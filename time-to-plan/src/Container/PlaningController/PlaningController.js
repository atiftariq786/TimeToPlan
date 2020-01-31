import React, {Component} from "react";
import Aux from "../../hoc/Aux/Aux";
import Carousel from "../../component/Carousel/Carousel";
import Media from "../../component/Media/MediaStory/MediaStory";
import Footer from "../../component/Footer/footer";
import SketchBook from "../../component/Sketch/SketchBook/SketchBook";
import Styles from "./PlaningController.module.css";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
//import SignUp from "../../component/Form/SignUp/signUp";

class PlaningController extends Component {

    

    render(){
        let signedIn = localStorage.getItem("signedin");

        let login = (
            <Link to="/login/">
                <Button
                    className = {Styles.loginButton}
                    variant="success" 
                    type= "button"
                    >Login
                </Button>
            </Link>
        );
        let signUp = (
            <Link to="/signUp/">
                <Button
                    className = {Styles.signUpButton}
                    variant="primary" 
                    type= "button" 
                    >Sign Up
                </Button>
            </Link>
        );
        let welcome ="";

        if(signedIn === "true"){
            login = "";
            signUp = "";
            welcome = (<p className={Styles.welcome}>Welcome to {this.props.username}</p>);
        }
    
        return (
            <Aux>   
                <div className={Styles.container}>
                    
                    <div className = {Styles.carousal} ><Carousel/></div>
                    
                    <div className={Styles.sectionTwo}>
                        <h3>Now, its Time TO Plan</h3>
                        <p>Future plans are something everyone should have.</p>   
                        {login}
                        {signUp}
                        {welcome}
                    </div>
                    <div>
                        <Media />
                    </div>
                
                    <div  className={Styles.sketch}> <SketchBook/></div>
                    <div>
                        <Footer></Footer>
                    </div>
                    
                </div>
                
            </Aux>
        
        )
    }
}
export default PlaningController;
