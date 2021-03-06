import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Layout from './hoc/Layout/Layout';
import SavedList from "./container/SavedList/SavedList";
import CreateStory from "./container/CreateStory/CreateStory";
import PlaningController from "./container/PlaningController/PlaningController";
import CreateGoals from "./container/CreateGoals/CreateGoals";
import Login from "./component/Form/Login/login";
import SignUp from "./component/Form/SignUp/signUp";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import About from "./component/Pages/About/about";
import AppDemo from "./component/Pages/Demo/demo";
import FutureDevelopment from "./component/Pages/FutureDevelopment/futureDevelopment";;

class App extends Component {

  state ={
    signedIn : localStorage.getItem('signedin'),
    userName : localStorage.getItem('username'),
}

updateSignedInState =(val, user) =>{

    this.setState({
        signedIn: val,
        userName: user,
        
    })
    localStorage.setItem('signedin', val);
    localStorage.setItem('username', user);
    this.forceUpdate();
}

  render(){
    

    return(
      <HashRouter basename = "/"> 
        <Layout updateSignedInState = {this.updateSignedInState}>
          <Switch>
            <Route exact path ="/" component = {(props)=>{return <PlaningController  {...props} username={this.state.userName} ></PlaningController>}}/>

            <Route path ="/login/" component = {(props)=>{return <Login {...props} updateSignedInState={this.updateSignedInState}></Login>}} />
            <Route path ="/signUp/" component = {(props)=>{return <SignUp {...props} updateSignedInState={this.updateSignedInState}></SignUp>}} />
            <Route path ="/about/" component = {About} />
            <Route path ="/appDemo/" component = {AppDemo} />
            <Route path ="/future-development/" component = {FutureDevelopment}/>
            
            <PrivateRoute exact path = "/create-story/" isLogin={this.state.signedIn} component = {CreateStory}/>
            <PrivateRoute exact path = "/create-goals/" isLogin={this.state.signedIn} component = {CreateGoals}/>
            <PrivateRoute exact path = "/saved-list/" isLogin={this.state.signedIn} component = {SavedList}/>
          </Switch>     
        </Layout>
      </HashRouter>
    )
  }
}
export default App;
