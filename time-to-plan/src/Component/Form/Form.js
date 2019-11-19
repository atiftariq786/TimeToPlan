import React from "react";
import Styles from "./Form.module.css";

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function TextArea(){

    return (
        <div>
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
            <FormControl 
            as="textarea" 
            aria-label="With textarea" 
            rows="5" 
            placeholder="Example: Marriage and Family Harmony. ...
            Proper Mindset and Balance. ...
            Commitment to Improved Physical Health. ...
            Career Passion and Personal Satisfaction. ...
            Develop Empathy and Gentleness. ...
            Financial Stability. ...
            Service and Social Responsibility." />
            
        </InputGroup>
        <Button variant="success" type="submit" size="sm" className={Styles.StoryButton}>Submit</Button>
        </div>
        
    );
} 


export function Input(){

    return (
        
        <Form>
        
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Goal Title</Form.Label>
                <Form.Control type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Goal Image Link</Form.Label>
                <Form.Control type="text" placeholder="https://example.png"/>
            </Form.Group>
            
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Goal Description</Form.Label>
                <Form.Control as="textarea" placeholder="Text Area" rows="3" />
            </Form.Group>
            
            <Button variant="success" type="submit">Submit</Button>
        </Form>
    );
} 