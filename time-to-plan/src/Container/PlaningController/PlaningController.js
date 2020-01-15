import React, {Component} from "react";
import Aux from "../../hoc/Aux/Aux";
import Carousel from "../../component/Carousel/Carousel";
import Media from "../../component/Media/MediaStory/MediaStory";
import SketchBook from "../../component/Sketch/SketchBook/SketchBook";
import Styles from "./PlaningController.module.css";

class PaningController extends Component {

    render(){

        return (
            <Aux>   
                <div className={Styles.container}>
                    <div>
                        <div className = {Styles.carousal} ><Carousel/></div>
                    </div>
                    <div>
                        <div className = {Styles.media}> <Media /></div>
                        <div  className={Styles.sketch}> <SketchBook/></div>
                    </div>
                </div>
                
            </Aux>
        
        )
    }
}
export default PaningController;
