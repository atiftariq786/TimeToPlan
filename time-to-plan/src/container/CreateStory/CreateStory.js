import React, {Component} from "react";
import {Link} from "react-router-dom";

import API from "../../utils/API";
import Container from "react-bootstrap/Container";
import InputStory from "../../component/Form/InputStory/inputStory";
import Styles from "./CreateStory.module.css";
import Button from "react-bootstrap/Button";

class CreateStory extends Component {

    state = {
        title: "",
        story : "",
        profileImage: "https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=450",
        backgroundImage: "https://www.itl.cat/pngfile/big/5-55070_download-wallpaper-staubbach-falls.jpg",
        author : "",
        showCreateStory : true,
        showPostStory: "nodata",
        isValid: true,
        savedData : [],
        loading: true,
    }
    componentDidMount(){

        this.getStory();
    }
    getStory = () =>{
        API.getStories(function(err, res){
            if(err){
                console.log("Something Wrong");
            }
        }).then(response => {
            console.log("Get User Story")
            console.log(response.data.data);
        
            this.setState({
                savedData : response.data.data
            })
        })

    }
    titleEventHandler = (event) => {
    
        this.setState({
            title: event.target.value,
        })
    }
    storyEventHandler = (event) => {
    
        this.setState({
            story: event.target.value,
        })
    }
    profileImageEventHandler = (event) => {
    
        this.setState({
            profileImage: event.target.value,
        })
    }
    backgroundImageEventHandler = (event) => {
    
        this.setState({
            backgroundImage: event.target.value,
        })
    }
    authorEventHandler = (event) => {
    
        this.setState({
            author: event.target.value,
        })
    }
    postStoryDataHandler= () =>{

        if(this.state.story && this.state.title && this.state.profileImage && this.state.backgroundImage && this.state.author){
            
            this.setState({
                loading: true,
                
            });
            const data ={
                title: this.state.title,
                story: this.state.story,
                profileImage: this.state.profileImage,
                backgroundImage: this.state.backgroundImage,
                author: this.state.author,
            }

            if(!this.state.savedData.length){
                API.savedStory(data).then(response =>{
                    console.log("Post Story Data Saved");
                    console.log(response);
                    this.setState({
                        showCreateStory: false,
                        loading: false,
                    })
                    this.getStory();
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
        let showSavedData = "Story not available";
        
        if(this.state.savedData.length){
            showSavedData = this.state.savedData.map(arrData => {
                return (
                    <div className = {Styles.createStoryMainDiv}>
                        <div className={Styles.ImageDiv}>
                            <img  
                                style={{width: "100%", height:"100vh"}} 
                                key={arrData.id} 
                                src={arrData.backgroundImage}
                                alt="Background">
                            </img> 
                        </div>    
                
                        <div style={{margin:"65px auto auto auto",  position:"relative", top: "-94vh"   }}>
                            <div className = {Styles.createStoryPhotoDiv}>
                                <img  
                                        className = {Styles.createStoryPhoto}
                                        key={arrData.id} 
                                        src={arrData.profileImage}
                                        alt="Profile">
                                </img>  
                                    
                            </div>
                            <div className = {Styles.createStoryTitleDiv}>
                                <p key={arrData.id}>{arrData.title}</p>
                            
                            </div>                     
                                
                            <div className = {Styles.createStoryDescriptionDiv}>
                                <p key={arrData.id}> {arrData.story}</p>
                                                            
                            </div>
                            <div className={Styles.createStoryEditButtonDiv}>
                                <Link to="/saved-list/">
                                    <Button 
                                        className={Styles.createStoryEditButton}
                                        type= "button" 
                                        size="sm" 
                                        >Edit Story
                                    </Button>
                                </Link>
                                
                            </div>
                            <div className={Styles.createStoryAuthor} >
                                <p 
                                    key={arrData.id}
                                    >Author: {arrData.author}
                                </p>
                            </div>
                        </div>
                        
                    </div>
                )
            })
        }

        let showCreateStoryTemp = null;
        
        if(this.state.showCreateStory && !this.state.savedData.length){
            showCreateStoryTemp = (
                
                <div className={Styles.createStoryInputForm}>
                    <div className={Styles.createStoryFormTitle}>                  
                        <InputStory 
                        writeTitle = {this.state.title}
                        writeTitleHandler = {this.titleEventHandler}
                        writeStory = {this.state.story}
                        writeStoryHandler={this.storyEventHandler}

                        writeProfileImage = {this.state.profileImage}
                        writeProfileImageHandler={this.profileImageEventHandler}
                        writeBackgroundImage = {this.state.backgroundImage}
                        backgroundImageHandler={this.backgroundImageEventHandler}


                        writeAuthor = {this.state.author}
                        writeAuthorHandler = {this.authorEventHandler}
                        isValidCheck = {this.state.isValid}
                        submitStory = {this.postStoryDataHandler}
                        loading = {this.state.laoding}
                        >
                        </InputStory> 
                    </div>            
                </div>
            )
        
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
