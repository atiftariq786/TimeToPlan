import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Styles from "./SavedList.module.css";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";
import InputEditGoal from "../../component/Form/InputGoals/inputEditGoal";

class SavedList extends Component {

    state = {
        posts : [],
        goals : [],
        title : "no title",
        link  : "no link",
        description : "no description",
        editGoal : false,
        editGoalId: "no id",
        totalGoal: 0,
        achievedGoal: 0,
        remainingGoal: 0,

        
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
            //console.log(this.state.posts);
        })   
        
        //===================
        
        this.getGoals();
        //this.remainingGoalHandler();
       
    }

    getGoals = () => {
        API.getGoals(function(err, res){
            if(err){
                console.log("Something Wrong");
            }
            
        }).then(response => {
            console.log("Get Goals Method")
         console.log(response.data);
        
            this.setState({
                goals : response.data.data,
                
            })
        }) 
    }

    deleteGoal = id => {
        
        API.deleteGoal(id).then( response => {
            const newArr = this.state.goals.filter( el => el._id !== id);
            this.setState({goals : newArr});
            //console.log(response)
        }
        );
    }
    deleteStory = id => {
        
        API.deleteStory(id).then( response => {
            const newArr = this.state.posts.filter( el => el._id !== id);
            this.setState({posts : newArr});
            //console.log(response)
            }
        );
    }

    saveUpdateGoal = (data) => {
        
        console.log("save edit data will be update")
        let id = this.state.editGoalId;

        let newData = {
            title: this.state.title,
            link: this.state.link,
            description: this.state.description
        };

        if(data.title){
            newData.title = data.title
        }
        
        if(data.link){
            newData.link = data.link
        }
        if(data.description){
            newData.description = data.description
        }
        
        API.updateGoal(id,newData).then( response => {
            //const newArr = this.state.posts.filter( el => el._id !== id);
            console.log({response});
            this.getGoals()
            
            this.setState({

                editGoal: false,
            });
        
            //window.location.reload(false);
        });

    }
    showEditGoalHandler =(id, goal) => {
        console.log("show edit handler")  
        
        if(id){
            this.setState({
                editGoal: true,
                title: goal.title,
                link: goal.link,
                description: goal.description,
                editGoalId: id
            })
        }    
    }
    cancelEditGoalHandler = () => {
        this.setState({
        editGoal: false
        })
    }
    acheivedGoalHandler = (id,goal) => {

        let updateAchievedGoal = this.state.achievedGoal;

        if(updateAchievedGoal < this.state.goals.length){

            this.setState({
    
                achievedGoal: updateAchievedGoal + 1,
    
            })

        }
        
       

    }

    remainingGoalHandler = (id, goal) => {

       

        
    }
    render(){
        //this.goalsAcheivements();
        //this.remainingGoalHandler();
        let remainingGoals = this.state.goals.length - this.state.achievedGoal ;
        console.log({remainingGoals});
        //console.log(this.state.totalGoal)

        console.log("renders")
        console.log(this.state.posts);
        let showPosts = "No Story Available";
        if(this.state.posts.length){
            showPosts = this.state.posts.map(post => {
                return (
                    <Row className ={Styles.editStoryMainDiv}>
                        <Row className ={Styles.editStoryImageDiv}>
                            <img  
                            style={{width: "100%", height:"320px"}} 
                            key={post.id} 
                            src={post.backgroundImage}
                            alt="Background">
                            </img>  
                            
                            <Col className ={Styles.editStoryProfileDiv}>
                            <img 
                            
                            style={{width: "150px", height:"150px"}} 
                            key={post.id} 
                            src={post.profileImage}
                            alt="Profile">
                            </img>  
                            
                            
                            </Col>
                            <Col className ={Styles.editStoryTitle} >
                            <p key={post.id}>{post.title}</p>
                            </Col>
                            <Col className ={Styles.editStoryAuthor}>
                                <p key={post.id}>Author: {post.author}</p>
                            </Col>
                            <Col className ={Styles.editStoryButton}>                                
                                &nbsp;<Button variant="primary" >Edit</Button>
                                &nbsp;<Button variant="danger" onClick = {()=> this.deleteStory(post._id)}> Delete</Button>
                            </Col>

                        </Row>
                        <Row className ={Styles.editStoryDescriptionDiv}>
                            <Col className ={Styles.editStoryDescription}>                                
                                <p key={post.id}> {post.story}</p>                                
                            </Col>                            
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
                                &nbsp;<Button variant="primary" size="sm" onClick ={() => this.showEditGoalHandler(goal._id, goal)}>Edit</Button>
                                &nbsp;<Button variant="danger" size="sm" onClick ={() => this.deleteGoal(goal._id)}> Delete</Button>
                                &nbsp;<Button variant="success" size="sm" onClick ={() => this.acheivedGoalHandler(goal._id)}> Complete</Button>

                            </Col>
                                
                        </Row>
                    </Row>

                )
            })
        }

        let inputEditGoal = "";

        if(this.state.editGoal){
            
            inputEditGoal = (
                
                    <InputEditGoal
                            id={this.state.editGoalId}
                            cancelEditGoal = {this.cancelEditGoalHandler}                         
                            EditWriteGoalTitle = {this.state.title}
                            EditGoaLink = {this.state.link}
                            EditGoalDescription = {this.state.description}
                            showEditModal = {this.state.editGoal}
                            saveUpdateGoal={this.saveUpdateGoal}>
                    
                    </InputEditGoal>

                )
        
        }

        return(
            
            <Container className={Styles.container}>
            
                <Row> 

                    <Col> 
                    <h1 className={Styles.title}>Your Life Goals Saved List</h1> 
                    <h3>Goals Achievments Summary</h3>                       
                        <div className = {Styles.Temp}>
                        
                            <div className = {Styles.Summary}>
                                <p> Goals Status</p>
                                <ul>
                                    <li>Total Goals: <span> {this.state.goals.length}</span></li>
                                    <li>Achieved Goals:<span>  {this.state.achievedGoal}</span></li>
                                    <li>Remaining Goals:<span> {remainingGoals} </span></li>
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
                        {inputEditGoal}
                    
                    </Col>     
                </Row>
                
            </Container>
        )
    }
}
export default SavedList;