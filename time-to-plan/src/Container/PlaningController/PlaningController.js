import React, {Component} from "react";
import Aux from "../../hoc/Aux/Aux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "../../component/Carousel/Carousel";
import Media from "../../component/Media/MediaStory/MediaStory";
import SketchBook from "../../component/Sketch/SketchBook/SketchBook";
import Styles from "./PlaningController.module.css";

class PaningController extends Component {

    render(){

        return (
            <Aux>   
                <Container>
                <Row>
                    <Col sm="12"><Carousel/></Col>
                </Row>
                <Row>
                    <Col sm="6" className={Styles.Temp}> <Media /></Col>
                    <Col sm="6" className={Styles.Temp}>  <SketchBook/></Col>
                </Row>
                </Container>
            
            </Aux>
        
        )
    }
}
export default PaningController;
