import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Styles from "./SavedList.module.css";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";


class SavedList extends Component {

    state = {
        posts : [],
        goals : []
    }

    componentDidMount(){
    
        API.getStories(function(err, res){
            if(err){
                console.log("Something Wrong");
            }
            
        }).then(response => {
            console.log("Get Method")
           // console.log(response);
        
            this.setState({
                posts : response.data.data
            })
            console.log(this.state.posts);
        })   
        
        //===================
        
    
        API.getGoals(function(err, res){
            if(err){
                console.log("Something Wrong");
            }
            
        
            
        }).then(response => {
            console.log("Get Goals Method")
           // console.log(response);
        
            this.setState({
                goals : response.data.data
            })
            console.log("Goals data")
            console.log(this.state.goals);
        })  
    }
    
    render(){
    
        let showPosts = "No Story Available";
        if(this.state.posts.length){
            showPosts = this.state.posts.map(post => {
                return (
                    <div>
                        <h2 key={post.id}>{post.title}</h2>
                        <p key={post.id}> {post.story}</p>
                        <p key={post.id}>{post.author}</p>
                    </div>
                )
            })
        }

        let showGoals = "No Goals Available";
        if(this.state.goals.length){
            showGoals = this.state.goals.map(goal => {
                return (
                    <div style={{border: '1px black solid', marginBottom: '5px'}}>
                        <h2 key={goal.id}>{goal.title}</h2>
                        <p key={goal.id}> {goal.link}</p>
                        <p key={goal.id}>{goal.description}</p>
                    </div>
                )
            })
        }
        
        return(
            
            <Container>
            
            <h1 className={Styles}>Your Life Goals Saved List</h1>
                <Row>                
                    <Col> 
                    <h3>Goals Achievments Summary</h3>                       
                        <div className = {Styles.Temp}>
                        
                            <div className = {Styles.Summary}>
                                <p> Goals Status</p>
                                <ul>
                                    <li>Total Goals: <span> 5</span></li>
                                    <li>Achieved Goals:<span>  1</span></li>
                                    <li>Remaining Goals:<span>  4</span></li>
                                </ul>
                            </div>
                            <div className={Styles.Graph}>
                                <p> Graph</p>
                                <img
                                style={{width: "100%", height:"195px", margin: "1px" }} 
                                src="https://cdn4.iconfinder.com/data/icons/business-and-office-7-1/64/400-512.png" alt="sketch"></img>
                            </div>
                        </div>
                    </Col>           
                </Row>
                <Row>
                    <Col>
                    <h3>Your Story</h3>  
                    <div className={Styles.Story}>
                        <div>                        
                            {showPosts}
                        </div>
                        
                        &nbsp;<Button variant="primary">Edit</Button>
                        &nbsp;<Button variant="danger"> Delete</Button>
                    </div>
                    
                    </Col>
                    
                </Row>
                <Row>                    
                    <Col>
                    <h3>Your Goals</h3>  
                    <div>
                    
                        
                            {showGoals}  
                                              
                    </div>
                        &nbsp;<Button variant="primary">Edit</Button>
                        &nbsp;<Button variant="danger"> Delete</Button>
                        &nbsp;<Button variant="success"> Complete</Button>
                    
                    </Col>             
                    
                </Row>
                <Row>                    
                    <Col>
                    <h3>Travel to Italy</h3>  
                    <div className={Styles.PlansDetail}>
                    <img
                    style={{width: "25%", height:"195px", margin: "1px" }} 
                    src="https://i.ytimg.com/vi/4W2c7JJdZQY/maxresdefault.jpg" alt="sketch"></img>
            
                        <div className={Styles.Plans}>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                
                            </p>       
                        </div>                       
                    </div>
                        &nbsp;<Button variant="primary">Edit</Button>
                        &nbsp;<Button variant="danger"> Delete</Button>
                        &nbsp;<Button variant="success"> Complete</Button>
                    
                    </Col>             
                    
                </Row>
                
            </Container>
            
        
        )
    }
}
export default SavedList;