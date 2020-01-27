import React, {Component} from "react";
import Aux from "../../hoc/Aux/Aux";
import Carousel from "../../component/Carousel/Carousel";
import Media from "../../component/Media/MediaStory/MediaStory";
import Footer from "../../component/Footer/footer";
import SketchBook from "../../component/Sketch/SketchBook/SketchBook";
import Styles from "./PlaningController.module.css";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

class PlaningController extends Component {

    

    render(){

    
        return (
            <Aux>   
                <div className={Styles.container}>
                    
                    <div className = {Styles.carousal} ><Carousel/></div>
                    
                    <div className={Styles.sectionTwo}>
                        <h3>Now, its Time TO Plan</h3>
                        <p>Future plans are something everyone should have.</p>   
                        
                        <Link to="/login/">
                            <Button
                                className = {Styles.loginButton}
                                variant="success" 
                                type= "button" 
                                //onClick={this.loginHandler }
                                >Login
                            </Button>
                        </Link>
                        <Link to="/signUp/">
                            <Button
                                className = {Styles.signUpButton}
                                variant="primary" 
                                type= "button" 
                                //onClick={this.signUpHandler }
                                >Sign Up
                            </Button>
                        </Link>
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
