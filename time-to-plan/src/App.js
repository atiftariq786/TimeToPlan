import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './hoc/Layout/Layout';
import PlaningController from "./container/PlaningController/PlaningController";

function App() {
  return (
    <div>
    <Layout>
    <PlaningController/>

    </Layout>
      
    </div>
  );
}

export default App;
