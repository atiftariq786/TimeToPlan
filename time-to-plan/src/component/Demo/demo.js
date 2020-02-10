import  React,{useState} from "react";
import Carousel from "react-bootstrap/Carousel"
import Styles from "./demo.module.css";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button"

const Demo = (props) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);

    };
    
    return (
        <div className={Styles.container}>   
            <div className={Styles.demoCarouselContainer}>
                <img 
                className={Styles.demoBackgroundImage}
                src={require("../../../src/images/demo-tv-4.jpg")}
                alt="Demo Slides"/>

                <div className={Styles.demoCarousel}>
                    <Carousel slide={false} interval={7000} activeIndex={index} direction={direction} onSelect={handleSelect} >
                        <Carousel.Item>
                            <img 
                                className="d-block w-100 "
                                style={{height:"250px"}}
                                src={require("../../../src/images/Time-to-Plan-demo.jpg")}
                                alt="First slide"
                                />
                        </Carousel.Item>    
                        <Carousel.Item>
                            <img 
                            className="d-block w-100 "
                            style={{height:"250px"}}
                            src={require("../../../src/images/Demo-story-form.png")}
                            alt="First slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{height:"250px"}}
                            src= {require("../../../src/images/Demo-story-created.png")}
                            alt="Second slide"/>
                        </Carousel.Item>

                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{height:"250px"}}
                            src={require("../../../src/images/Demo-story-edit.png")}
                            alt="Second slide"/>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{height:"250px"}}
                            src= {require("../../../src/images/demo-story-edit-form.png")}
                            alt="Second slide"/>
                        </Carousel.Item>
            
                    </Carousel>
                </div>
        
            </div>
            
            <div className={Styles.demoSignUpDivOne}>
                <h3 className={Styles.demoTitle} >Welcome to Demo </h3>
                <Link to="/signUp/">
                    <Button
                    className={Styles.signupButton}
                    variant="success" 
                    type= "button" 
                    size="sm" 
                    >Let's Start Planing...!</Button>
                </Link>
    
                <p 
                    className={Styles.signinText}>
                    Already have an account? {<Link to="/login/" className={Styles.signinButton}>Sign In</Link>}
                </p>
                
                <Link to="/" className={Styles.backButton}>
                    back
                </Link>
    
            </div>
            <div className={Styles.descriptionContainer}>
                
                <div className={Styles.groupOne}>
                    <img 
                    className = {Styles.groupOneImage}
                    src={require("../../images/Demo-story-form.png")}
                    alt="Demo Slides"
                    />    
                    <div className = {Styles.groupOneText}>
                    <h4 style={{textAlign:"center"}}>Create Story Form Description</h4>    
                    <h6 style={{color:"blue"}}>Story Title:</h6><p>User can write 30 characters in story title input field</p>
                    <h6 style={{color:"blue"}}>Story Description:</h6><p> Story Description length as per user choice, easy to scroll your story when your length will be increase(See the left demo image).</p>
                    <h6 style={{color:"blue"}}>Story Profile Image URL:</h6><p> Find your favourite profile picture, just copy image address from google images or anywhere and paste in the required field(Shown in left image). </p>
                    <h6 style={{color:"blue"}}>Story Background Image URL:</h6><p>Find a beautiful 4k background image address(URL) and paste in required field(Shown in left image).</p>
                    <h6 style={{color:"blue"}}>Author:</h6><p>Write your name and click on add story button to create your life story.</p>
                    </div>    
                    
                </div>
                <div className={Styles.groupOne}>
                    <img 
                    className = {Styles.groupFullImage}
                    src={require("../../images/Demo-story-created.png")}
                    alt="Demo Slides"
                    />

                </div>
                <div className={Styles.groupOne}>
                    <div className = {Styles.groupOneText}>
                    <h4 style={{textAlign:"center"}}>Edit Your Story</h4>    
                    <p>Whenever you want you can edit the story title, profile image, background image, story description and author as well.(See the demo image)</p>
                    </div>    
                    <img 
                    className = {Styles.groupOneImage}
                    src={require("../../images/demo-story-edit-form.png")}
                    alt="Demo Slides"
                    />
                </div>
                <div className={Styles.groupOne}>
                    <img 
                    className = {Styles.groupOneImage}
                    src={require("../../images/Demo-story-edit.png")}
                    alt="Demo Slides"
                    />
                    <div className = {Styles.groupOneText}>
                    <h4 style={{textAlign:"center"}}>Story Saved in Your Plans</h4>    
                    <p>You can see the left demo image, it will be look like this in your plans list, when you will create your story. Whenever you want you can delete the story then create story form will be display (Go to "Your Story").</p>
                    <p>Note: User can create only one story.</p>
                    </div>
                    
                </div>
                <div className={Styles.groupOne}>
                    <img 
                    className = {Styles.groupFullImage}
                    src={require("../../images/demo-goal-create.png")}
                    alt="Demo Slides"
                    />

                </div>
                <div className={Styles.groupOne}>
                    <img 
                    className = {Styles.groupOneImage}
                    src={require("../../images/demo-goal-list.png")}
                    alt="Demo Slides"
                    />
                    <div className = {Styles.groupOneText}>
                    <h4 style={{textAlign:"center"}}>Goal Saved in Your Plans</h4>    
                    <p>After your goal created it will be look like this in left demo image.</p>
                    
                    
                    </div>
                    
                </div>
                <div className={Styles.groupOne}>
                    <div className = {Styles.groupOneText}>
                    <h4 style={{textAlign:"center"}}>Achieved Goals</h4>    
                    <p>When you set goal complete you can just click on the complete button. You will see your goal view status will be changed and activate button will be shown(See the demo iamge).</p>
                    
                    </div>
                    <img 
                    className = {Styles.groupOneImage}
                    src={require("../../images/demo-goal-complete.png")}
                    alt="Demo Slides"
                    />
            
                </div>
                
                <div className={Styles.groupOne}>
                    <img 
                        className = {Styles.groupOneImage}
                        src={require("../../images/demo-goal-complete-summary.png")}
                        alt="Demo Slides"
                        />    
                    <div className = {Styles.groupOneText}>
                        <h4 style={{textAlign:"center"}}>Track Your Goals Status</h4>    
                        <p>If you will click on the complete goal button(see the above demo image) you can see the status of goal achieved(See the demo iamge).</p>
                    </div>    
                    
                </div>
                <div className={Styles.demoSignUpDiv}>
                    <Link to="/signUp/">
                        <Button
                        className={Styles.signupButton}
                        variant="success" 
                        type= "button" 
                        size="sm" 
                        >Let's Start Planing...!</Button>
                    </Link>
        
                    <p 
                        className={Styles.signinText}>
                        Already have an account? {<Link to="/login/" className={Styles.signinButton}>Sign In</Link>}
                    </p>
                    
                    <Link to="/" className={Styles.backButton}>
                        back
                    </Link>
        
                </div>
            </div>
        </div>
        
    );
};
export default Demo;