import React, { useState } from 'react';
import Styles from "./inputStory.module.css";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from "react-bootstrap/Form";

const InputEditStoryModal = props => {

    const [lgShow, setLgShow] = useState(props.showEditStoryModal ? true:false);

    let storyTitle ="";
    let storyDescription = "";
    let storyBackground = "";
    let storyProfile = "";
    let storyAuthor = "";

    const storyTitleHandler = e => {
        e.preventDefault();
        storyTitle= e.target.value
    }

    const storyDescriptionHandler = e => {
        e.preventDefault();
        storyDescription = e.target.value
    }
    
    const storyBackgroundHandler = e => {
        e.preventDefault();
        storyBackground = e.target.value
    }
    const storyProfileHandler = e => {
        e.preventDefault();
        storyProfile = e.target.value
    }
    const storyAuthorHandler = e => {
        e.preventDefault();
        storyAuthor = e.target.value
    }

    return (
        <ButtonToolbar>
            <Modal
                size="lg"
                show={lgShow}
                backdrop = "false"
                onHide={() => {
                    setLgShow(false)
                }}
                aria-labelledby="example-modal-sizes-title-lg">

                <Modal.Header>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    Edit Story
                    </Modal.Title>
                </Modal.Header>
                
                <Form className = {Styles.editStoryForm}>
                    
                        <Form.Group controlId="exampleForm.ControlInput1" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                            type="text"
                            defaultValue={
                            props.editWriteStoryTitle}
                            onChange={storyTitleHandler}
                            />
                        
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Background Image URL</Form.Label>
                            <Form.Control 
                            type="text"
                            defaultValue={
                            props.editStoryBackground}
                            onChange={storyBackgroundHandler}/>
                        
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Profile Image URL</Form.Label>
                            <Form.Control 
                            type="text"
                            defaultValue={
                            props.editStoryProfile}
                            onChange={storyProfileHandler}/>
                        
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Author</Form.Label>
                            <Form.Control 
                            type="text"
                            defaultValue={
                            props.editStoryAuthor}
                            onChange={storyAuthorHandler}/>
                        
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            placeholder="Text Area" 
                            rows="4"
                            defaultValue={
                                props.editStoryDescription}
                                onChange={storyDescriptionHandler}/>                       
                        </Form.Group>                
                        
                    </Form>
                    <Button 
                    className = {Styles.modalButton}
                    variant="success" 
                    type= "button" 
                    onClick ={()=>{return props.saveUpdateStory({storyTitle, storyBackground,storyProfile, storyDescription, storyAuthor})}} 
                    size="sm" 
                    >Save</Button>
                    <Button 
                    className = {Styles.modalButton}
                    variant="danger" 
                    type= "button" 
                    onClick ={props.cancelEditStory} 
                    size="sm" 
                    >Cancel</Button>
                
            </Modal>
        </ButtonToolbar>
    );
}
export default InputEditStoryModal;
