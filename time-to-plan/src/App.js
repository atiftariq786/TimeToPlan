import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './hoc/Layout/Layout';
import SavedList from "./container/SavedList/SavedList";
//import CreateStory from "./container/CreateStory/CreateStory";
//import PlaningController from "./container/PlaningController/PlaningController";

function App() {
  return (
    <div>
    <Layout>
    {//<PlaningController/>
      //<CreateStory/>
    }
    <SavedList />
    

    </Layout>
      
    </div>
  );
}

export default App;
