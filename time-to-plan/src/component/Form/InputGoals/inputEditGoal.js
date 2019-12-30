import React from "react";
//import Styles from "./inputGoals.module.css";

//import InputGroup from 'react-bootstrap/InputGroup'
//import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function inputEditGoals(props){
/*
    const inputStylesGoals = [Styles.InputElement];

   if(!props.isValidGoals){
    inputStylesGoals.push(Styles.Invalid);
    }
    else{
        inputStylesGoals.push(Styles.InputElement);
    }
*/

let title = "";




const titleHandler = e => {
    e.preventDefault();
    console.log(e.target.value)
    title = e.target.value
}

    console.log(title)

    return (
        <div>
            <Form>
            
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Goal Title</Form.Label>
                    <Form.Control 
                    type="text"
                    defaultValue={props.writeGoalTitle}
                    onChange={titleHandler}
                />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Goal Image Link</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="https://example.png"
                    value = {props.writeLink} 
                    onChange={props.writeLinkHandler}
                    />
                </Form.Group>
                
                
                <Form.Group controlId="exampleForm.ControlTextarea3">
                    <Form.Label>Goal Description</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    placeholder="Text Area" 
                    rows="3"
                    value = {props.writeGoalDescription} 
                    onChange={props.writeGoalHandler}
                  />
                </Form.Group>                
                
            </Form>
            <Button 
            variant="success" 
            type= "button" 
            onClick ={props.saveUpdateGoal} 
            size="sm" 
             >Save</Button>
             <Button 
            variant="danger" 
            type= "button" 
            onClick ={props.cancelEditGoal} 
            size="sm" 
             >Cancel</Button>
        </div>
        
    );
} 
export default inputEditGoals;