import React, { Component } from 'react';
import Layout from "./Containers/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import DndTest from './Containers/Dnd/DndTest'
import MainPage from './Components/MainPage/MainPage';
import DetailsPage from './Components/DetailsPage/DetailsPage';
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
        <Route exact path="/" component={MainPage} />
        <Route path="/details" component={DetailsPage} />
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
// const mapStateToProps =state=>{
//   return {

//   }
// }
const mapDispatchToProps = dispatch => {
  return {
    initDataFromApi: () => { dispatch(actionTypes.dataCall()) }
  }
}

export default connect(null, mapDispatchToProps)(App);