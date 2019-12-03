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
        author : "",
        showCreateStory : true,
        showPostStory: false
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
        //props comming from savedList.js, story length zero then its true
        if(this.props.CreateStoryLength === true){
            API.savedStory(data).then(response =>{
                console.log("Data Saved");
                console.log(response);
            })
        }
       
    }
    render(){
        let showCreateStory = null;

        if(this.state.showCreateStory){
            showCreateStory = ( <Row>
                <h1 className={Styles}>Create Your Life Story</h1>
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
            </Row>       )
           
        }
        showCreateStory = (<div>{this.props.postStory}</div>);

       
        return(
            <Container className = {Styles.Back}>
            {showCreateStory}
                                       
            </Container>
             
            
        
        )
    }
}
export default CreateStory;


   
