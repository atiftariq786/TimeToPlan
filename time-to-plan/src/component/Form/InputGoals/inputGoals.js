import React from "react";
//import Styles from "./inputGoals.module.css";

//import InputGroup from 'react-bootstrap/InputGroup'
//import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function inputGoals(props){

    return (
        
        <Form>
        
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Goal Title</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Title" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Goal Image Link</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="https://example.png"/>
            </Form.Group>
            
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Goal Description</Form.Label>
                <Form.Control 
                as="textarea" 
                placeholder="Text Area" 
                rows="3" />
            </Form.Group>
            
            <Button 
            variant="success" 
            type="submit">Add Goal</Button>
        </Form>
    );
} 
export default inputGoals;