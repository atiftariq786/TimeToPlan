import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import {TextArea, Input} from "../../component/Form/Form";
import Styles from "./SavedList.module.css";
import Button from "react-bootstrap/Button";


class SavedList extends Component {

    render(){
        return(
            <Container>
            <h1 className={Styles}>Your Life Goals Saved List</h1>
                <Row>                
                    <Col> 
                    <h3>Goals Achievments Summary</h3>                       
                        <div className={Styles.Temp}>
                        
                            <div className={Styles.Summary}>
                                <p> Goals Status</p>
                                <ul>
                                <li>Total Goals: <span> 5</span></li>
                                <li>Achieved Goals:<span>  1</span></li>
                                <li>Remaining Goals:<span>  4</span></li>
                                
                                </ul>
                            </div>
                            <div className={Styles.Graph}>
                                <p> Graph</p>
                                <img
                                style={{width: "100%", height:"195px", margin: "1px" }} 
                                src="https://cdn4.iconfinder.com/data/icons/business-and-office-7-1/64/400-512.png" alt="sketch"></img>
                            </div>
                        </div>
                    </Col>           
                </Row>
                <Row>
                    <Col>
                    <h3>Your Story</h3>  
                    <div className={Styles.Story}>
                        <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        
                        &nbsp;<Button variant="primary">Edit</Button>
                        &nbsp;<Button variant="danger"> Delete</Button>
                    </div>
                    
                    </Col>
                       
                </Row>
                <Row>                    
                    <Col>
                    <h3>Car Racing</h3>  
                    <div className={Styles.PlansDetail}>
                    <img
                    style={{width: "25%", height:"195px", margin: "1px" }} 
                    src="https://www.mercurynews.com/wp-content/uploads/2019/08/Grid-5.jpg?w=620" alt="sketch"></img>
               
                        <div className={Styles.Plans}>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                   
                            </p>       
                        </div>
                        
                        
                    </div>
                        &nbsp;<Button variant="primary">Edit</Button>
                        &nbsp;<Button variant="danger"> Delete</Button>
                        &nbsp;<Button variant="success"> Complete</Button>
                    
                    </Col>                    
                    
                </Row>
                
            </Container>
            
        
        )
    }
}
export default SavedList;