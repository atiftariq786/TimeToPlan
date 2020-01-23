import React, {Component} from "react";
import Aux from "../../hoc/Aux/Aux";
import Carousel from "../../component/Carousel/Carousel";
import Media from "../../component/Media/MediaStory/MediaStory";
import Footer from "../../component/Footer/footer";
import SketchBook from "../../component/Sketch/SketchBook/SketchBook";
import Styles from "./PlaningController.module.css";
import Button from "react-bootstrap/Button";

class PlaningController extends Component {

    loginHandler = () => {
        
        alert("Login work in progress.....!")
    }
    signUpHandler = () => {
        
        alert("Sign up work in progress.....!")
    }

    render(){

    
        return (
            <Aux>   
                <div className={Styles.container}>
                    
                    <div className = {Styles.carousal} ><Carousel/></div>
                    
                    <div className={Styles.sectionTwo}>
                        <h3>Now, its Time TO Plan</h3>
                        <p>Future plans are something everyone should have.</p>   
                        <Button
                            className = {Styles.loginButton}
                            variant="success" 
                            type= "button" 
                            onClick={this.loginHandler }
                            >Login
                        </Button>
                        <Button
                            className = {Styles.signUpButton}
                            variant="primary" 
                            type= "button" 
                            onClick={this.signUpHandler }
                            >Sign Up
                        </Button>
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
