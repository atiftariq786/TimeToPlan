import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Input} from "../../component/Form/Form";
import Styles from "./CreateGoals.module.css";


class CreateGoals extends Component {

    render(){
        return(
            <Container className = {Styles.Back}>
            <h1 className={Styles}>Create Your Life Goals</h1>
                
                <Row>
                    <Col>
                        <Input/>
                    </Col>
                    <Col>
                        <div className={Styles.Temp}>
                            <p>Without plan nothing to achieve (Add jumbotron with quotes)</p>
                            <img
                                style={{width: "100%", height:"244px", margin: "1px" }} 
                                src="https://www.setaswall.com/wp-content/uploads/2017/03/Artistic-Landscape-4K-Wallpaper-3840x2160.jpg" alt="sketch"></img>
                        </div>
                        
                    </Col>     
                </Row>
                <Row>
                    <Col>
                    <div className={Styles.Temp}>
                        <img
                        style={{width: "100%", height:"280px", marginTop: "4px" }} 
                        src="https://quotefancy.com/media/wallpaper/3840x2160/1142003-Lee-Kuan-Yew-Quote-If-you-want-to-reach-your-goals-and-dreams-you.jpg" alt="text"></img>
                    </div>
                    </Col>
                    
                </Row>
                
            </Container>
            
        
        )
    }
}
export default CreateGoals;