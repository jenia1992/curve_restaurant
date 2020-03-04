import React, { Component } from 'react';
import {getDataFromServer} from '../../ManagerAxios/ManagerAxios'
class MainPage extends Component {
    componentDidMount(){
        console.log("ComponentDidMount");
        
       
    }
    render() {
        return (
            <div>
                <h1>Main Page</h1>
            </div>
        );
    }
}

export default MainPage;