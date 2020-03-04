import React, { Component } from 'react';
import NavBar from "../../Components/NavBar/NavBar";
class Layout extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div>
        <NavBar/>
        {this.props.children}
           
      </div>
      
    );
  }
}

export default Layout;