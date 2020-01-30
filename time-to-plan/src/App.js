import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { BrowserHistory } from 'react-router';

import './App.css';
import Layout from './hoc/Layout/Layout';
import SavedList from "./container/SavedList/SavedList";
import CreateStory from "./container/CreateStory/CreateStory";
import PlaningController from "./container/PlaningController/PlaningController";
import CreateGoals from "./container/CreateGoals/CreateGoals";
import Login from "./component/Form/Login/login";
import SignUp from "./component/Form/SignUp/signUp";
//history={browserHistory}

class App extends Component {

  state ={
    signedIn : localStorage.getItem('signedin'),
}

updateSignedInState =(val) =>{

    this.setState({
        signedIn: val,
        
    })
    localStorage.setItem('signedin', val);
    this.forceUpdate();
}


  
  render(){
    

    return(
      <Router> 
        <Layout updateSignedInState = {this.updateSignedInState}>
          <Switch>
            <Route exact path ="/" component = {PlaningController} />

            <Route exact path ="/login/" component = {(props)=>{return <Login {...props} updateSignedInState={this.updateSignedInState}></Login>}} />
            <Route exact path ="/signUp/" component = {(props)=>{return <SignUp {...props} updateSignedInState={this.updateSignedInState}></SignUp>}} />

            <Route exact path ="/TimeToPlan/" component = {PlaningController} />
            <Route exact path ="/create-story/" component = {CreateStory} />
            <Route exact path ="/create-goals/" component = {CreateGoals} />
            <Route exact path ="/saved-list/" component = {SavedList} />  
          </Switch>     
        </Layout>
      </Router>
    )
  }
  
}
export default App;
