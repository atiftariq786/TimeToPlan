import React from "react";
import Styles from "./inputGoals.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function inputGoals(props){

    const inputStylesGoals = [Styles.InputElement];

    if(!props.isValidGoals){
        inputStylesGoals.push(Styles.Invalid);
    }
    else{
        inputStylesGoals.push(Styles.InputElement);
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
                    className={inputStylesGoals.join(" ")} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Goal Image Link</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="https://example.png"
                    value = {props.writeLink} 
                    onChange={props.writeLinkHandler}
                    className={inputStylesGoals.join(" ")}/>
                </Form.Group>
                
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Goal Description</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    placeholder="Text Area" 
                    rows="3"
                    value = {props.writeGoalDescription} 
                    onChange={props.writeGoalHandler}
                    className={inputStylesGoals.join(" ")} />
                </Form.Group>                
                
            </Form>
            <Button 
            variant="success" 
            type= "button" 
            onClick ={props.submitGoal} 
            size="sm" 
            >Add Goal</Button>
        </div>
    );
} 
export default inputGoals;