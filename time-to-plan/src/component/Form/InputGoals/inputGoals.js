import React from "react";
import Styles from "./inputGoals.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';

function inputGoals(props){

    let goalTitle = props.writeGoalTitle;
    let goalImageUrl = props.writeLink;
    let goalDescription = props.writeGoalDescription;
    let isValidGoal = props.isValidGoals;

    let isValidGoalTitle = [Styles.InputElement];
    let isValidGoalImageUrl = [Styles.InputElement];
    let isValidGoalDescription = [Styles.InputElement];

    let addGoal = (
        <Button 
            variant="success" 
            type= "button" 
            onClick ={props.submitGoal} 
            size="sm" 
            className={Styles.StoryButton}
            >Add Goal
        </Button>
    )

    if(props.loading){
        addGoal = (
            <div className = {Styles.spinnerDiv}>
                <Button variant="secondary" >
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
    const goalFormValidation = () =>{
        if(goalTitle === ""){
            isValidGoalTitle.push(Styles.invalidInput);
        }
        else{
            isValidGoalTitle.push(Styles.validInput);
        }
        if(goalImageUrl === ""){
            isValidGoalImageUrl.push(Styles.invalidInput);
        }
        else{
            isValidGoalImageUrl.push(Styles.validInput);
        }
        if(goalDescription === ""){
            isValidGoalDescription.push(Styles.invalidInput);
        }
        else{
            isValidGoalDescription.push(Styles.validInput);
        }
    }

    if(!isValidGoal){
        goalFormValidation();
    }

    if(goalTitle){
        isValidGoalTitle.push(Styles.validInput);  
    }
    if(goalTitle !== ""){
        isValidGoalTitle.push(Styles.invalidInput);
    }

    if(goalImageUrl){
        isValidGoalImageUrl.push(Styles.validInput);  
    }
    if(goalImageUrl !== ""){
        isValidGoalImageUrl.push(Styles.invalidInput);
    }
    if(goalDescription){
        isValidGoalDescription.push(Styles.validInput);  
    }
    if(goalDescription !== ""){
        isValidGoalDescription.push(Styles.invalidInput);
    }

    return (
        <div>
            <Form>
            
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Goal Title</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Title"
                    value = {props.writeGoalTitle} 
                    onChange={props.writeGoalTitleHandler}
                    className={isValidGoalTitle.join(" ")} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Goal Image URL</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="https://example.png"
                    value = {props.writeLink} 
                    onChange={props.writeLinkHandler}
                    className={isValidGoalImageUrl.join(" ")}/>
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Goal Description</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    placeholder="Text Area" 
                    rows="3"
                    value = {props.writeGoalDescription} 
                    onChange={props.writeGoalHandler}
                    className={isValidGoalDescription.join(" ")} />
                </Form.Group>                
                
            </Form>
            {addGoal}
        </div>
    );
} 
export default inputGoals;