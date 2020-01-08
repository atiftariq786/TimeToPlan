import React from "react";
import Styles from "./inputStory.module.css";

import InputGroup from 'react-bootstrap/InputGroup'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function inputStory(props){

    const inputStyles = [Styles.InputElement];

   if(!props.isValidCheck){
    inputStyles.push(Styles.Invalid);
    }
    else{
        inputStyles.push(Styles.InputElement);
    }

    return (
        <div>
        <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Example: My Memories" 
                value = {props.writeTitle} 
                onChange={props.writeTitleHandler}
                className={inputStyles.join(" ")} />
        </Form.Group>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>
                    User Life Story :
                    <img
                    style={{width: "428px", height:"200px"}} 
                    src="http://daystarbooks.org/wp-content/uploads/2016/05/life_story.png" alt="media">
                    </img>
                </InputGroup.Text>
            </InputGroup.Prepend>            
            <Form.Control
            as="textarea" 
            aria-label="With textarea" 
            rows="5" 
            placeholder="Example: Marriage and Family Harmony. ...
            Proper Mindset and Balance. ...
            Commitment to Improved Physical Health. ...
            Career Passion and Personal Satisfaction. ...
            Develop Empathy and Gentleness. ...
            Financial Stability. ...
            Service and Social Responsibility." 
            value = {props.writeStory} 
            onChange={props.writeStoryHandler}
            className={inputStyles.join(" ")} >
            </Form.Control>
            
        </InputGroup>
        <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Profle Image URL</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="https://example.png"
                    value = {props.writeProfileImage} 
                    onChange={props.writeProfileImageHandler}
                    className={inputStyles.join(" ")}
                    />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Background Image URL</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="https://example.png"
                    value = {props.writeBackgroundImage} 
                    onChange={props.backgroundImageHandler}
                    className={inputStyles.join(" ")}
                    />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Author</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Author Name"
                value = {props.writeAuthor} 
                onChange={props.writeAuthorHandler}
                className={inputStyles.join(" ")}  />
        </Form.Group>
        <Button 
        variant="success" 
        type= "button" 
        onClick ={props.submitStory} 
        size="sm" 
        className={Styles.StoryButton}>Add Story</Button>
        </div>
        
    );
} 
export default inputStory;