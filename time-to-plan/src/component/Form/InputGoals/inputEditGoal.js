import React, { useState } from 'react';
import Styles from "./inputGoals.module.css";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from "react-bootstrap/Form";
//import SaveList from "../../../container/SavedList/SavedList";

const InputEditGoalModal = props => {

    const [lgShow, setLgShow] = useState(props.showEditModal ? true:false);

    let title ="";
    /*
    const titleVal = () => (
        <SaveList
        editGoalTitleValue = {title}>
        </SaveList>
    )
    console.log(titleVal);

    */

    let link = "";
    let description = "";

    const titleHandler = e => {
        e.preventDefault();
        console.log(e.target.value)
        title = e.target.value
    }
    //console.log(title)

    const linkHandler = e => {
        e.preventDefault();
        console.log(e.target.value)
        link = e.target.value
    }
    //console.log(link)

    const descriptionHandler = e => {
        e.preventDefault();
        console.log(e.target.value)
        description = e.target.value
    }
   // console.log(description)

    return (
        <ButtonToolbar>
            <Modal
                
                size="lg"
                show={lgShow}
                onHide={() => {
                    setLgShow(false)
                    props.cancelEditGoal()
                    }}
                aria-labelledby="example-modal-sizes-title-lg">
                
                <Modal.Header>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    Edit Goals
                    </Modal.Title>
                
                </Modal.Header>
                
                <Form className = {Styles.InputElement}>
                    
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Goal Title</Form.Label>
                            <Form.Control 
                            type="text"
                            defaultValue={
                                props.EditWriteGoalTitle}
                            onChange={titleHandler}
                               
                            
                        />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput2">
                            <Form.Label>Goal Image Link</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="https://example.png"
                            defaultValue={props.EditGoaLink}
                            //value = {props.writeLink} 
                            onChange={linkHandler}
                            />
                        </Form.Group>
                        
                        
                        <Form.Group controlId="exampleForm.ControlTextarea3">
                            <Form.Label>Goal Description</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            placeholder="Text Area" 
                            rows="4"
                            defaultValue={props.EditGoalDescription}
                            //value = {props.writeGoalDescription} 
                            onChange={descriptionHandler}
                        />
                        </Form.Group>                
                        
                    </Form>
                    <Button 
                    variant="success" 
                    type= "button" 
                    onClick ={()=>{return props.saveUpdateGoal({title, link, description})}} 
                    size="sm" 
                    >Save</Button>
                    <Button 
                    variant="danger" 
                    type= "button" 
                    onClick ={props.cancelEditGoal} 
                    size="sm" 
                    >Cancel</Button>
                
            </Modal>
        </ButtonToolbar>
    );
}
export default InputEditGoalModal;
