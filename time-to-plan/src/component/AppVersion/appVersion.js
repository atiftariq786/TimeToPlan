import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
//import Styles from "./appVersion.module.css";



const AppVersion = (props) => {


    return (
    
        <Modal
        style={{textAlign:"center"}}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    TimeToPlan App Version
                </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    
                    <p>
                    This app is based on version V1.0_2019-2020.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
        </Modal>
    );
}
export default AppVersion;