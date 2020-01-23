import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Layout from './hoc/Layout/Layout';
import SavedList from "./container/SavedList/SavedList";
import CreateStory from "./container/CreateStory/CreateStory";
import PlaningController from "./container/PlaningController/PlaningController";
import CreateGoals from "./container/CreateGoals/CreateGoals";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path ="/" component = {PlaningController} />
          <Route path ="/create-story/" component = {CreateStory} />
          <Route path ="/create-goals/" component = {CreateGoals} />
          <Route path ="/saved-list/" component = {SavedList} />  
        </Switch>     
      </Layout>
    </Router>
  );
}
export default App;
