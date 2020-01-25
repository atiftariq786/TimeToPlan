import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Styles from "./SavedList.module.css";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";
import InputEditGoal from "../../component/Form/InputGoals/inputEditGoal";
import InputEditStory from "../../component/Form/InputStory/inputEditStory";

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

        storyTitle: "no title",
        storyDescription: "no description",
        storyBackground: "no background",
        storyProfile: " no profile",
        storyAuthor: "no author",

        editStory: false,
        editStoryId:"no id",

        //completeGoalStyle: false,
        completedGoalId:"no id",

    }
    componentDidMount(){
        
        this.getStory();
        this.getGoals();
    }
    getStory = () =>{
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
            
        })   
        
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

    
    deleteStory = id => {
        
        API.deleteStory(id).then( response => {
            const newArr = this.state.posts.filter( el => el._id !== id);
            this.setState({posts : newArr});
            //console.log(response)
            }
        );
    }
    showEditStoryHandler =(id, story) => {

        console.log("show story edit handler")  
        //console.log({id});
        console.log({story});

        if(id){
            this.setState({
                editStory: true,
                storyTitle: story.title,
                storyDescription: story.story,
                storyBackground: story.backgroundImage,
                storyProfile: story.profileImage,
                storyAuthor: story.author,
                editStoryId: id,
            })
        }  
        
    }
    saveUpdateStory = (data) => {
        
        console.log("save edit story data will be update");
        console.log({data})
        let id = this.state.editStoryId;

        let newData = {
            title: this.state.storyTitle,
            story: this.state.storyDescription,
            profileImage: this.state.storyProfile,
            backgroundImage: this.state.storyBackground,
            author: this.state.storyAuthor,
        };

        if(data.storyTitle){
            newData.title = data.storyTitle;
        }
        
        if(data.storyDescription){
            newData.story = data.storyDescription;
        }

        if(data.storyProfile){
            newData.profileImage = data.storyProfile;
        }
        if(data.storyBackground){
            newData.backgroundImage = data.storyBackground;
        }
        if(data.storyAuthor){
            newData.author = data.storyAuthor;
        }
        
        API.updateStory(id,newData).then( response => {
            
            console.log({response});
            this.getStory();
            
            this.setState({
                editStory: false,
            });
        
            //window.location.reload(false);
        });
        
    }

    cancelEditStoryHandler = () => {
        console.log("story cancel")
        this.setState({
        editStory: false,
        })
    }
    //===========================================================
    deleteGoal = id => {
        
        API.deleteGoal(id).then( response => {
            const newArr = this.state.goals.filter( el => el._id !== id);
            this.setState({goals : newArr});
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
            description: this.state.description,
        
        };
        
        console.log({data})

        if(data.title){
            newData.title = data.title
        }
        
        if(data.link){
            newData.link = data.link
        }
        if(data.description){
            newData.description = data.description
        }
        

        this.tempUpdate(id,newData);
        

    }
    updateCompleteGoal = (id, data) =>{
        
        let newData = {
            title: data.title,
            link: data.link,
            description: data.description,
            completeGoal: !data.completeGoal,
        };
        console.log({id})
        console.log({data})
        //console.log(this.state.completeGoalStyle)

        
        
        this.tempUpdate(id,newData);

    }
    tempUpdate = (id,data) =>{

        API.updateGoal(id,data).then( response => {
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
    
    render(){

        let achievedGoal = this.state.goals.filter(el => el.completeGoal ).length;

        let remainingGoals = this.state.goals.length - achievedGoal;
       
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
                            
                            style={{width: "116px", height:"116px"}} 
                            key={post.id} 
                            src={post.profileImage}
                            alt="Profile">
                            </img>  
                            
                            
                            </Col>
                            <Col className ={Styles.editStoryTitle} >
                                <p key={post.id}>{post.title}</p>
                                <Col className ={Styles.editStoryAuthor}>
                                    <p key={post.id}>Author: {post.author}</p>
                                </Col>
                                <Col className ={Styles.editStoryButton}>                                
                                &nbsp;<Button variant="primary" onClick = {()=> this.showEditStoryHandler(post._id, post)} >Edit</Button>
                                &nbsp;<Button variant="danger" onClick = {()=> this.deleteStory(post._id)}> Delete</Button>
                                </Col>
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
        //==============================================
        let showGoals = "No Goals Available";
        if(this.state.goals.length){
            showGoals = this.state.goals.map(goal => {
                
                return (
                    <Row className = {Styles.GoalParentRow}>
                        {
                            goal.completeGoal ? 
                                <Row className = {Styles.GoalChildRow}>
                                    <Col className = {Styles.GoalImageDarkDiv}>
                                        <img  
                                        style={{width: "100%", height:"220px"}} 
                                        key={goal.id} 
                                        src={goal.link}
                                        alt="Life Goals">
                                        </img>   
                                    </Col>
                                    
                                </Row>
                            :
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
                        }
                            
                        {
                            goal.completeGoal ? 
                                <Row className = {Styles.GoalChildRow}>
                                    <Col className = {Styles.GoalTittle} >            
                                        <h4 key={goal.id} >{goal.title}</h4>
                                    </Col>
                                    <Col className = {Styles.GoalButtons}>                               
                                        &nbsp;<Button variant="success" size="sm" onClick ={() => this.updateCompleteGoal(goal._id, goal)}> Activate</Button>                                        </Col> 
                                </Row>
                                    
                            : 
                                <Row className = {Styles.GoalChildRow}>
                                    <Col className = {Styles.GoalTittle} >            
                                        <h4 key={goal.id} >{goal.title}</h4>
                                    </Col>
                                    <Col className = {Styles.GoalButtons}>
                                        &nbsp;<Button variant="primary" size="sm" onClick ={() => this.showEditGoalHandler(goal._id, goal)}>Edit</Button>
                                        &nbsp;<Button variant="danger" size="sm" onClick ={() => this.deleteGoal(goal._id)}> Delete</Button>
                                        &nbsp;<Button variant="success" size="sm" onClick ={() => this.updateCompleteGoal(goal._id, goal)}> Complete</Button>
                                    </Col>
                                </Row>
                            }
                    </Row>

                )
            })
        }
        /*
        if(this.state.goals.length && this.state.completeGoalStyle){
            showGoals = this.state.goals.map(goal => {
                
                return (
                    <Row className = {Styles.GoalParentRowDarkDiv}>
                        <Row className = {Styles.GoalChildRow}>
                            <Col className = {Styles.GoalImageDarkDiv}>
                                <img  
                                style={{width: "100%", height:"220px"}} 
                                key={goal.id} 
                                src={goal.link}
                                alt="Life Goals">
                                </img>   
                            </Col>
                            
                            
                            
                        </Row>
                        <Row className = {Styles.GoalChildRow}>
                            <Col className = {Styles.GoalTittle} >            
                                <h4 key={goal.id} >{goal.title}</h4>
                            </Col>
                        
                            <Col className = {Styles.GoalButtons}>
                               
                                &nbsp;<Button variant="success" size="sm" > Activate</Button>

                            </Col>
                                
                        </Row>
                    </Row>

                )
            })
        }
        */


        //=======================================================
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

        let inputEditStory = "";
        if(this.state.editStory){
            console.log("welcome edit story new")
            inputEditStory = (
                
                    <InputEditStory
                        id={this.state.editStoryId}
                        showEditStoryModal = {this.state.editStory}
                        cancelEditStory = {this.cancelEditStoryHandler} 
                        
                        editWriteStoryTitle = {this.state.storyTitle}
                        editStoryDescription = {this.state.storyDescription}
                        editStoryBackground = {this.state.storyBackground}
                        editStoryProfile = {this.state.storyProfile}
                        editStoryAuthor = {this.state.storyAuthor}
                        saveUpdateStory={this.saveUpdateStory}>
                    
                    </InputEditStory>

                )
        
        }

        return(
            
            <Container className={Styles.container}>
            
                <Row> 

                    <Col> 
                    <h1 className={Styles.title}>Your Life Goals Saved List</h1> 
                    <h3>Goals Achievments Summary</h3>                       
                        <div className = {Styles.goalAchievment}>
                        
                            <div className = {Styles.Summary}>
                                <h4> Goals Status</h4>
                                <ul>
                                    <li >Total Goals: <span style={{"color": "blue", "fontSize": "25px"}}> {this.state.goals.length}</span></li>
                                    <li>Achieved Goals:<span style={{"color": "green", "fontSize": "25px"}}>  {achievedGoal}</span></li>
                                    <li>Remaining Goals:<span style={{"color": "red", "fontSize": "25px"}}> {remainingGoals} </span></li>
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
                        {inputEditStory}
                    
                    </Col>     
                </Row>
                
            </Container>
        )
    }
}
export default SavedList;