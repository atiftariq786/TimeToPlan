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
        story : "",
        author : ""
    }
    titleEventHandler = (event) => {
       
        this.setState({
            title: event.target.value
        })
        console.log(this.state.title);
    }
    storyEventHandler = (event) => {
       
        this.setState({
            story: event.target.value
        })
        console.log(this.state.story);
    }
    authorEventHandler = (event) => {
       
        this.setState({
            author: event.target.value
        })
        console.log(this.state.author);
    }
    postStoryDataHandler= () =>{
        console.log("post data activate");

        const data ={
            title: this.state.title,
            story: this.state.story,
            author: this.state.author,
        }
        console.log(data.title)
        console.log(data.story)
        console.log(data.author)
        API.savedStory(data).then(response =>{
            console.log("Data Saved");
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
                        writeTitle = {this.state.title}
                        writeTitleHandler = {this.titleEventHandler}
                        writeStory = {this.state.story}
                        writeStoryHandler={this.storyEventHandler}
                        writeAuthor = {this.state.author}
                        writeAuthorHandler = {this.authorEventHandler}
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


   
