import React, {Component} from "react";
import API from "../../utils/API";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import {TextArea} from "../../component/Form/Form";
import InputStory from "../../component/Form/InputStory/inputStory";
import Styles from "./CreateStory.module.css";

class CreateStory extends Component {

    state = {
        title: "",
        story : "",
        author : "",
        showCreateStory : true,
        showPostStory: "nodata",
        //isValidTitle: true,
        //isValidStory: true,
        //isValidAuthor: true,
        isValid: true,
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
            title: event.target.value,
            //isValidTitle: true
        })
        //console.log(this.state.title);
    }
    storyEventHandler = (event) => {
    
        this.setState({
            story: event.target.value,
           // isValidStory: true
        })
        //console.log(this.state.story);
    }
    authorEventHandler = (event) => {
    
        this.setState({
            author: event.target.value,
            //isValidAuthor: true
        })
       // console.log(this.state.author);
    }
    postStoryDataHandler= () =>{
        console.log("post data activate");

        if(this.state.story && this.state.title && this.state.author){
 
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
                    
                })
            })
        }
    }
    else{
        this.setState ({
            isValid: false
        })
    }

    }
    render(){
        let showSavedData = "No Story Available";
        
        if(this.state.savedData.length){
            showSavedData = this.state.savedData.map(arrData => {
                return (
                    <div className = {Styles.createStoryMainDiv}>
                        <div className={Styles.ImageDiv}>
                            <img  
                                style={{width: "100%", height:"100%"}} 
                                key={arrData.id} 
                                src={"https://wallpaperplay.com/walls/full/5/7/1/323706.jpg"}
                                alt="Profile">
                            </img> 
                        </div>    
                   {  /*
                        <div >
                            <img  
                                    style={{width: "150px", height:"150px"}} 
                                    key={arrData.id} 
                                    src={"https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=450"}
                                    alt="Profile">
                            </img>  
                                
                        </div>
                */}
                        <div style={{margin:"auto",  position:"relative", top: "-100vh"   }}>
                            <div className = {Styles.createStoryTitleDiv}>
                                <h4 key={arrData.id}>{arrData.title}</h4>
                            
                            </div>                     
                                
                            <div className = {Styles.createStoryDescriptionDiv}>
                                <p key={arrData.id}> {arrData.story}</p>
                                <p key={arrData.id}>Author: {arrData.author}</p>
                            </div>
                        </div>
                        
                    </div>
                )
            })
        }

        let showCreateStoryTemp = null;
        console.log("Welcome Create Story")
        

        if(this.state.showCreateStory && !this.state.savedData.length){
            showCreateStoryTemp = ( <Row>
                
                <Col>     
                <h1 className={Styles}>Create Your Life Story</h1>                   
                <InputStory 
                writeTitle = {this.state.title}
                writeTitleHandler = {this.titleEventHandler}
                writeStory = {this.state.story}
                writeStoryHandler={this.storyEventHandler}
                writeAuthor = {this.state.author}
                writeAuthorHandler = {this.authorEventHandler}
                isValidCheck = {this.state.isValid}
                submitStory = {this.postStoryDataHandler}
                >
                </InputStory> 
                </Col>            
            </Row>       )
           
        }
        else {
            showCreateStoryTemp = (
                <div>
                {showSavedData}
                </div>
                       
                  
              
            )
                

        }       
        return(
            <Container className = {Styles.createStoryContainerDiv}>
           {showCreateStoryTemp}
                   
            </Container>
             
            
        
        )
    }
}
export default CreateStory;


   
