import React, {Component} from "react";
import Styles from "./CreateGoals.module.css";

import API from "../../utils/API";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGoals from "../../component/Form/InputGoals/inputGoals";

class CreateGoals extends Component {

    state = {
        title: "",
        link : "",
        description : "",
        tempdata: [],
        isValidGoal: true
    }

    titleEventHandler = (event) => {
    
        this.setState({
            title: event.target.value,
            isValidGoal: true
        })
    }
    linkEventHandler = (event) => {
    
        this.setState({
            link: event.target.value,
            isValidGoal: true
        })
    }
    descriptionEventHandler = (event) => {
    
        this.setState({
            description: event.target.value,
            isValidGoal: true
        })
    }
    
    postGoalDataHandler= () =>{
 
        const data = {
            title: this.state.title,
            link: this.state.link,
            description: this.state.description,
        }
        
        if(this.state.link && this.state.title && this.state.description){

            API.savedGoal(data).then(response =>{
                console.log("Post Goal Data Saved");
                console.log(response);

                this.setState({
                    title:"",
                    link: "",
                    description: "",
                    isValidGoal: true
                });
            }); 
        }
        else{
            this.setState({  
                isValidGoal: false
            });
        }  
    }
    render(){

        
        return(
            <Container className = {Styles.Back}>
                
                <Row>
                
                    <Col>
                    <h2 className={Styles.title}>Create Your Life Goals</h2>
                        <InputGoals
                        writeGoalTitle = {this.state.title}
                        writeGoalTitleHandler = {this.titleEventHandler}
                        writeLink = {this.state.link}
                        writeLinkHandler={this.linkEventHandler}
                        writeGoalDescription = {this.state.description}
                        writeGoalHandler = {this.descriptionEventHandler}
                        submitGoal = {this.postGoalDataHandler}
                        isValidGoals = {this.state.isValidGoal}>
                        </InputGoals>
                    </Col>
                    <Col>
                        <div className={Styles.titleImage}>
                        <img
                                style={{width: "100%", height:"270px", margin: "1px" }} 
                                src="https://www.setaswall.com/wp-content/uploads/2017/03/Artistic-Landscape-4K-Wallpaper-3840x2160.jpg" alt="sketch"></img>
                            
                            <div className={Styles.quotes}>
                            <p >Without plan nothing to achieve.......!</p>
                            </div>
                            
                        </div>
                        
                    </Col>     
                </Row>
                
                <Row>
                    <Col>
                    <div className={Styles.Temp}>
                        <img
                        style={{width: "100%", height:"250px", marginTop: "5px" }} 
                        src="https://quotefancy.com/media/wallpaper/3840x2160/1142003-Lee-Kuan-Yew-Quote-If-you-want-to-reach-your-goals-and-dreams-you.jpg" alt="text"></img>
                    </div>
                    </Col> 
                </Row>
                
            </Container>
        )
    }
}
export default CreateGoals;