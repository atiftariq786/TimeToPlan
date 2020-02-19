import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

const LogoutWarning = (props) => {

    return (
    
        <Modal
        style={{textAlign:"center"}}
        {...props}
        size="sm"
        backdrop = "false"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Log out
                </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <p>
                    Are you sure you want to log out?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick = {props.logout} variant="danger" >Log out</Button>
                <Button onClick = {props.onHide}>Cancel</Button>
                </Modal.Footer>
        </Modal>
    );
}
export default LogoutWarning;