import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {TextArea} from "../../component/Form/Form";
import Styles from "./CreateStory.module.css";


class CreateStory extends Component {

    render(){
        return(
            <Container className = {Styles.Back}>
            <h1 className={Styles}>Create Your Life Story</h1>
                <Row>
                    <Col>                        
                        <TextArea/>  
                    </Col>            
                </Row>                
            </Container>
            
        
        )
    }
}
export default CreateStory;