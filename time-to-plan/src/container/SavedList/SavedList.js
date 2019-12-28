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
        })  
    }

    deleteGoal = id => {
        
        API.deleteGoal(id).then( response => {
            const newArr = this.state.goals.filter( el => el._id !== id);
            this.setState({goals : newArr});
            console.log(response)
          }
          );
      }
      deleteStory = id => {
        
        API.deleteStory(id).then( response => {
            const newArr = this.state.posts.filter( el => el._id !== id);
            this.setState({posts : newArr});
            console.log(response)
          }
          );
      }
    render(){
    
        let showPosts = "No Story Available";
        if(this.state.posts.length){
            showPosts = this.state.posts.map(post => {
                return (
                    <Row>
                        <Row>
                            <Col>
                                <img  
                                style={{width: "340px", height:"220px"}} 
                                key={post.id} 
                                src={""}
                                alt="Profile">
                                </img>  
                                <h2 key={post.id}>{post.title}</h2>
                            </Col>
                            <Col>
                                
                                <p key={post.id}> {post.story}</p>
                                
                            </Col>
                            <Col>
                                <p key={post.id}>{post.author}</p>
                                &nbsp;<Button variant="primary">Edit</Button>
                                &nbsp;<Button variant="danger" onClick = {()=> this.deleteStory(post._id)}> Delete</Button>
                            </Col>
                        </Row>
                        

                        <Row>
                            
                        
                        </Row>    
                   </Row>
                )
            })
        }

        let showGoals = "No Goals Available";
        if(this.state.goals.length){
            showGoals = this.state.goals.map(goal => {
                
                return (
                    <Row className = {Styles.GoalParentRow}>
                        <Row className = {Styles.GoalChildRow}>
                            <Col className = {Styles.GoalImage}>
                                <img  
                                style={{width: "340px", height:"220px"}} 
                                key={goal.id} 
                                src={goal.link}
                                alt="Life Goals">
                                </img>   
                            </Col>
                            
                            <Col className = {Styles.GoalDescription}> 
                            <p key={goal.id}  >{goal.description}</p>
                            </Col> 
                            
                        </Row>
                        <Row className = {Styles.GoalChildRow}>
                            <Col className = {Styles.GoalTittle} >            
                                <h4 key={goal.id} >{goal.title}</h4>
                            </Col>
                        
                            <Col className = {Styles.GoalButtons}>
                                &nbsp;<Button variant="primary" size="sm">Edit</Button>
                                &nbsp;<Button variant="danger" size="sm" onClick ={() => this.deleteGoal(goal._id)}> Delete</Button>
                                &nbsp;<Button variant="success" size="sm"> Complete</Button>

                            </Col>
                                
                        </Row>
                    </Row>

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
                        
                       
                    </div>
                    
                    </Col>
                    
                </Row>
                <Row>                    
                    <Col>
                    <h3>Your Goals List</h3>  
                                    
                        {showGoals} 
                    
                    </Col>
                    
                        
                    
                                
                    
                </Row>
                
            </Container>
            
        
        )
    }
}
export default SavedList;