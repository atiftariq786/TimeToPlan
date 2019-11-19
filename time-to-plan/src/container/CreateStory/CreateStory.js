import React, {Component} from "react";
//import axios from "axios";
import API from "../../utils/API";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {TextArea} from "../../component/Form/Form";
import Styles from "./CreateStory.module.css";


class CreateStory extends Component {

    state = {
        title: "",
        story : "Game of throne",
        author : "Atif"
    }

    eventHandler = (event) => {
       
        this.setState({
            story: event.target.value
        })
        console.log(this.state.story);
    }
    postStoryDataHandler= () =>{
        console.log("post data activate");

        const data ={
            body: this.state.story,
        }
        API.savedStory(data).then(response =>{
            console.log(response);
        })
    }
    render(){
       
        return(
            <Container className = {Styles.Back}>
            <h1 className={Styles}>Create Your Life Story</h1>
                <Row>
                    <Col>                        
                        <TextArea 
                        writeStory = {this.state.story}
                        writeStoryHandler={this.eventHandler}
                        submitStory = {this.postStoryDataHandler}
                        
                        >
                        </TextArea>  
                    </Col>            
                </Row>                             
            </Container>
             
            
        
        )
    }
}
export default CreateStory;


   
