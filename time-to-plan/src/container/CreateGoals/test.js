import React, {Component} from "react";
import Styles from "./CreateGoals.module.css";
import API from "../../utils/API";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import {Input} from "../../component/Form/Form";
import InputGoals from "../../component/Form/InputGoals/inputGoals";




class CreateGoals extends Component {

    state = {
        title: "",
        link : "",
        description : "",
        showCreateGoal : true,
        showPostStory: "nodata",
        isValid: true,
        savedGoalData : []
    }
    componentDidMount(){
    
        API.getStories(function(err, res){
            if(err){
                console.log("Something Wrong");
            }
            
        this.checkDatabaseHandler();
            
        }).then(response => {
            console.log("Get Method")
            console.log(response.data.data);
        
            this.setState({
                savedGoalData : response.data.data
            })
            console.log(this.state.savedGoalData);
        })

    }
    titleEventHandler = (event) => {
    
        this.setState({
            title: event.target.value,
            //isValidTitle: true
        })
        //console.log(this.state.title);
    }
    linkEventHandler = (event) => {
    
        this.setState({
            link: event.target.value,
           // isValidStory: true
        })
        //console.log(this.state.story);
    }
    descriptionEventHandler = (event) => {
    
        this.setState({
            description: event.target.value,
            //isValidAuthor: true
        })
       // console.log(this.state.author);
    }
    postGoalDataHandler= () =>{
        console.log("post data activate");

        if(this.state.link && this.state.title && this.state.description){
 
        const data ={
            title: this.state.title,
            link: this.state.link,
            description: this.state.description,
        }
        //props comming from savedList.js, story length zero then its true
        if(!this.state.savedGoalData.length){
            API.savedStory(data).then(response =>{
                console.log("Data Saved");
                console.log(response);
                this.setState({
                    showCreateGoal: false,
                    
                })
            })
        }
    }
    else{
        this.setState ({
            isValid: false
        })
    }
}



    render(){

        
        
        return(
            <Container className = {Styles.Back}>
            <h1 className={Styles}>Create Your Life Goals</h1>
                
                <Row>
                    <Col>
                        <InputGoals/>
                    </Col>
                    <Col>
                        <div className={Styles.Temp}>
                            <p>Without plan nothing to achieve (Add jumbotron with quotes)</p>
                            <img
                                style={{width: "100%", height:"244px", margin: "1px" }} 
                                src="https://www.setaswall.com/wp-content/uploads/2017/03/Artistic-Landscape-4K-Wallpaper-3840x2160.jpg" alt="sketch"></img>
                        </div>
                        
                    </Col>     
                </Row>
                

                <Row>
                    <Col>
                    <div className={Styles.Temp}>
                        <img
                        style={{width: "100%", height:"280px", marginTop: "40px" }} 
                        src="https://quotefancy.com/media/wallpaper/3840x2160/1142003-Lee-Kuan-Yew-Quote-If-you-want-to-reach-your-goals-and-dreams-you.jpg" alt="text"></img>
                    </div>
                    </Col>
                    
                </Row>
                
            </Container>
            
        
        )
    }

}
export default CreateGoals;