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
        showPostStory: "nodata",
        savedData : []
    }
    componentDidMount(){
       
        API.getStories(function(err, res){
            if(err){
                console.log("Something Wrong");
            }
            
        this.checkDatabaseHandler();
            
        }).then(response => {
            console.log("Get Method")
            console.log(response.data.data);
           
            this.setState({
                savedData : response.data.data
            })
            console.log(this.state.savedData);
        })

        
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
        if(!this.state.savedData.length){
            API.savedStory(data).then(response =>{
                console.log("Data Saved");
                console.log(response);
                this.setState({
                    showCreateStory: false,
                    //showPostStory: "true"
                })
            })
        }


       // else{
         //   this.setState({
           //     showCreateStory: false,
             //   //showPostStory: "true"
            //})
        //}
       
    }
    render(){
        let showCreateStoryTemp = null;
        console.log("Welcome Create Story")
        //console.log(this.props.CreateStoryLength)

        if(this.state.showCreateStory && !this.state.savedData.length){
            showCreateStoryTemp = ( <Row>
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
        else {
            showCreateStoryTemp = (
                <Row>
                    <Col>
                        {<div>{this.props.saveStories}</div>}
                    </Col>
                </Row>
            )
                

        }
       
        

       
        return(
            <Container className = {Styles.Back}>
           {showCreateStoryTemp}
                   
            </Container>
             
            
        
        )
    }
}
export default CreateStory;


   
