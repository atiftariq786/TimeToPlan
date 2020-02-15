import React from "react";
import Styles from "./inputStory.module.css";
import InputGroup from 'react-bootstrap/InputGroup'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';

function inputStory(props){

    let title = props.writeTitle;
    let story = props.writeStory;
    let profileImage = props.writeProfileImage;
    let backgroundImage = props.writeBackgroundImage;
    let author = props.writeAuthor;
    let isValidCheck = props.isValidCheck;

    let isValidTitle = [[Styles.inputElement]];
    let isValidStory =[[Styles.inputDescription]];
    let isValidProfile = [[Styles.inputElement]];
    let isValidBackground = [[Styles.inputElement]];
    let isValidAuthor = [[Styles.inputElement]];

    let addStory = (
        <Button 
            variant="success" 
            type= "button" 
            onClick ={props.submitStory} 
            size="md" 
            className={Styles.StoryButton}>Add Story</Button>
    );
    console.log("loading.....")
    console.log(props.loading);
    if(!props.loading){
        addStory = (
            <div className = {Styles.spinnerDiv}>
                <Button variant="secondary" disabled>
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    Loading...
                </Button>
            </div>
            
        )
    }

    
    const storyFormValidation=()=>{

        if(title === ""){
            isValidTitle.push(Styles.invalidInput);
        }
        else{
            isValidTitle.push(Styles.validInput);
        }
        if(story === ""){
            isValidStory.push(Styles.invalidInput);
        }
        else{
            isValidStory.push(Styles.validInput);
        }
        if(profileImage === ""){
            isValidProfile.push(Styles.invalidInput);
        }
        else{
            isValidProfile.push(Styles.validInput);
        }
        if(backgroundImage === ""){
            isValidBackground.push(Styles.invalidInput);
        }
        else{
            isValidBackground.push(Styles.validInput);
        }
        if(author === ""){
            isValidAuthor.push(Styles.invalidInput);
        }
        else{
            isValidAuthor.push(Styles.validInput);
        }
    }

    if(!isValidCheck){
        storyFormValidation();
    }

    //let titlePattern = /^[A-Za-z0-9_-]{3,30}$/.test(title);
    if(title){
        isValidTitle.push(Styles.validInput);  
    }
    if(title !== ""){
        isValidTitle.push(Styles.invalidInput);
    }
    if(story){
        isValidStory.push(Styles.validInput);  
    }
    if(story !== ""){
        isValidStory.push(Styles.invalidInput);
    }
    if(profileImage){
        isValidProfile.push(Styles.validInput);  
    }
    if(profileImage !== ""){
        isValidProfile.push(Styles.invalidInput);
    }
    if(backgroundImage){
        isValidBackground.push(Styles.validInput);  
    }
    if(backgroundImage !== ""){
        isValidBackground.push(Styles.invalidInput);
    }
    if(author){
        isValidAuthor.push(Styles.validInput);  
    }
    if(author !== ""){
        isValidAuthor.push(Styles.invalidInput);
    }



    return (
        <div className={Styles.inputStoryForm}>
            <h1 >Create Your Life Story</h1> 
            <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className={Styles.inputTitle}>Story Title</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Example: My Memories" 
                    value = {props.writeTitle} 
                    onChange={props.writeTitleHandler}
                    className={isValidTitle.join(" ")} />
            </Form.Group>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text className={Styles.inputTitle}>
                        Story Description 
                        <img
                        style={{width: "40vh", height:"20vh", margin:"0px 0px 0px 10px"}} 
                        src="http://daystarbooks.org/wp-content/uploads/2016/05/life_story.png" alt="media">
                        </img>
                    </InputGroup.Text>
                </InputGroup.Prepend>            
                <Form.Control
                as="textarea" 
                aria-label="With textarea" 
                rows="5" 
                placeholder="Write your story here...!" 
                value = {props.writeStory} 
                onChange={props.writeStoryHandler}
                className={isValidStory.join(" ")} >
                </Form.Control>
                
            </InputGroup>
            <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className={Styles.inputTitle}>Story Profle Image URL</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="https://example.png"
                        value = {props.writeProfileImage} 
                        onChange={props.writeProfileImageHandler}
                        className={isValidProfile.join(" ")}
                        />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className={Styles.inputTitle}>Story Background Image URL</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="https://example.png"
                        value = {props.writeBackgroundImage} 
                        onChange={props.backgroundImageHandler}
                        className={isValidBackground.join(" ")}
                        />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className={Styles.inputTitle}>Author</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Author Name"
                    value = {props.writeAuthor} 
                    onChange={props.writeAuthorHandler}
                    className={isValidAuthor.join(" ")}  />
            </Form.Group>
            {addStory}
        </div>
    );
} 
export default inputStory;