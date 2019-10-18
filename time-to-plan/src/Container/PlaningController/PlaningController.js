import React, {Component} from "react";
import Aux from "../../hoc/Aux/Aux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "../../component/Carousel/Carousel";
import Media from "../../component/Media/MediaStory/MediaStory";
import Styles from "./PlaningController.module.css";

class PaningController extends Component {

    render(){

        return (
            <Aux>   
                <Container>
                <Row>
                    <Col sm="12"><div><Carousel/></div></Col>
                </Row>
                <Row>
                    <Col sm="6"><div className={Styles.Temp}><Media /></div></Col>
                    <Col sm="6"> <div className={Styles.Temp}>Sketch of list</div></Col>
                </Row>
                </Container>
            
            </Aux>
        
        )
    }
}
export default PaningController;
