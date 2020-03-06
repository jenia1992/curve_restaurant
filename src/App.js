import React, { Component } from 'react';
import Layout from "./Containers/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import DndTest from './Containers/Dnd/DndTest'
import MainPage from './Components/MainPage/MainPage';
import DetailsPage from './Components/DetailsPage/DetailsPage';
import Loader from './Components/Loader/Loader'
import { connect } from 'react-redux'
import * as actionTypes from './Store/action/Index';
import {getDataFromServer} from './ManagerAxios/ManagerAxios';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.initDataFromApi()

    


  }
  render() {
    
    const route = (
      <Switch>
        {this.props.isLoaded ? <Route exact path="/" component={MainPage} /> : <Route exact path="/" component={()=><Loader/>}/>}
        <Route path="/details/:restaurant_id" component={DetailsPage} />
        <Route path="/dnd" component={DndTest} />

      </Switch>
    )
    return (

      <Layout>
        {route}
      </Layout>
    );
  }
}
const mapStateToProps =state=>{
  return {
    isLoaded:state.restaurants.isLoaded
  }
}
const mapDispatchToProps = dispatch => {
  return {
    initDataFromApi: () => { dispatch(actionTypes.dataCall()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);