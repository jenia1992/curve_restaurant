import React, { Component } from 'react';
import Layout from "./Containers/Layout/Layout";
import { Switch,Route } from "react-router-dom";
import DndTest from './Containers/Dnd/DndTest'
import MainPage from './Components/MainPage/MainPage';
import DetailsPage from './Components/DetailsPage/DetailsPage';
import './App.css';

class App extends Component {
 
  render() {
    
    const route=(
      <Switch>
        {/* <Route exact path="/" component={Main} />
        <Route  path="/details" component={Details} /> */}
        <Route exact path="/" component={MainPage} />
        <Route  path="/details" component={DetailsPage} />
        <Route  path="/dnd" component={DndTest} />
      
      </Switch>
    )
    return (
     
    <Layout>
    {route}
  </Layout>
    );
  }
}

export default App;