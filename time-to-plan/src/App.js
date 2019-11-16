import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './hoc/Layout/Layout';
import CreateStory from "./container/CreateStory/CreateStory";
//import PlaningController from "./container/PlaningController/PlaningController";

function App() {
  return (
    <div>
    <Layout>
    {//<PlaningController/>
    }
    <CreateStory/>

    </Layout>
      
    </div>
  );
}

export default App;
